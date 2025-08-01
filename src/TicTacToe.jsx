import React, { useState } from "react";

// Helper to check for a win
function checkWin(board, player) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return wins.some(line => line.every(i => board[i] === player));
}

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [message, setMessage] = useState("");
  const [userTurn, setUserTurn] = useState(true); // User starts

  // User is always 'O', AI is 'X' and always wins
  function handleClick(i) {
    if (!userTurn || board[i] || message) return;
    const newBoard = board.slice();
    newBoard[i] = "O";
    setBoard(newBoard);
    // Prevent user from winning: if user would win, block it
    let userCanWin = false;
    const empties = newBoard.map((v, idx) => v ? null : idx).filter(v => v !== null);
    for (let idx of empties) {
      const testBoard = newBoard.slice();
      testBoard[idx] = "O";
      if (checkWin(testBoard, "O")) {
        userCanWin = true;
        break;
      }
    }
    if (userCanWin) {
      // Block user's win
      setTimeout(() => aiMove(newBoard, true), 400);
      setUserTurn(false);
      return;
    }
    // If board is full, draw
    if (newBoard.every(cell => cell)) {
      setMessage("Draw!");
      return;
    }
    setUserTurn(false);
    setTimeout(() => aiMove(newBoard, false), 400);
  }

  // AI always wins if possible
  function aiMove(currentBoard) {
    const empties = currentBoard.map((v, i) => v ? null : i).filter(v => v !== null);
    let winIdx = null;
    // Try to win
    for (let idx of empties) {
      const testBoard = currentBoard.slice();
      testBoard[idx] = "X";
      if (checkWin(testBoard, "X")) {
        winIdx = idx;
        break;
      }
    }
    // If user could win next, block it
    let blockIdx = null;
    for (let idx of empties) {
      const testBoard = currentBoard.slice();
      testBoard[idx] = "O";
      if (checkWin(testBoard, "O")) {
        blockIdx = idx;
        break;
      }
    }
    let idx = winIdx !== null ? winIdx : (blockIdx !== null ? blockIdx : empties[0]);
    const newBoard = currentBoard.slice();
    newBoard[idx] = "X";
    setBoard(newBoard);
    // Check if AI won or draw
    if (checkWin(newBoard, "X")) {
      setMessage("Vijay wins! 🏆");
      return;
    }
    if (newBoard.every(cell => cell)) {
      setMessage("Draw!");
      return;
    }
    setUserTurn(true);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setMessage("");
    setUserTurn(true);
  }

  // Remove auto-reset, use Play Again button

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      color: "#b6faff",
      fontFamily: "Space Grotesk, sans-serif",
      marginRight: "10vw",
      marginTop: "0.5rem"
    }}>
      <div style={{ marginBottom: 8, fontSize: "1.08rem", color: "#b6faff" }}>Can you beat me? <span role="img" aria-label="smile">😏</span></div>
      <div style={{ position: 'relative', width: '9em', height: '9em', marginBottom: 32 }}>
        {/* SVG grid lines, paler color */}
        <svg width="100%" height="100%" viewBox="0 0 90 90" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          {/* Vertical lines */}
          <line x1="30" y1="0" x2="30" y2="90" stroke="#b6faff88" strokeWidth="1.1" />
          <line x1="60" y1="0" x2="60" y2="90" stroke="#b6faff88" strokeWidth="1.1" />
          {/* Horizontal lines */}
          <line x1="0" y1="30" x2="90" y2="30" stroke="#b6faff88" strokeWidth="1.1" />
          <line x1="0" y1="60" x2="90" y2="60" stroke="#b6faff88" strokeWidth="1.1" />
        </svg>
        {/* Game buttons, no borders, more space for marks */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}>
          {board.map((cell, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              style={{
                width: '100%',
                height: '100%',
                fontSize: '2em',
                color: cell === 'O' ? '#00ffe7cc' : cell === 'X' ? '#ffb6e6cc' : '#fff',
                background: 'transparent',
                border: 'none',
                boxShadow: cell ? '0 0 8px #00ffe733' : 'none',
                cursor: cell || message || !userTurn ? 'not-allowed' : 'pointer',
                transition: 'box-shadow 0.2s',
                outline: 'none',
                padding: 0,
                lineHeight: 1,
                textAlign: 'center',
                verticalAlign: 'middle',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              disabled={!!cell || !!message || !userTurn}
            >
              {cell}
            </button>
          ))}
        </div>
        {/* Overlay for win/draw */}
        {message && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(20,22,30,0.55)',
            backdropFilter: 'blur(3.5px)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              color: '#e6e6e6cc',
              fontWeight: 600,
              fontSize: '1em',
              marginBottom: '0.7em',
              textShadow: '0 2px 12px #000a',
              letterSpacing: '0.01em',
            }}>{message}</div>
            <button onClick={reset} style={{
              background: 'rgba(20,22,30,0.85)',
              color: '#00ffe7',
              border: '1.5px solid #e6e6e6cc',
              borderRadius: '0.4em',
              padding: '0.35em 1.3em',
              fontWeight: 500,
              fontSize: '0.98em',
              cursor: 'pointer',
              boxShadow: '0 1px 8px #00ffe7aa',
              outline: 'none',
              marginTop: '0.2em',
              transition: 'background 0.2s, color 0.2s',
            }}>Play Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
