import React, { useState } from 'react';

const Offline = () => {
    const [isChecking, setIsChecking] = useState(false);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    // Game Logic
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(board);
    const isDraw = !winner && board.every(Boolean);
    const status = winner
        ? `Winner: ${winner}`
        : isDraw
            ? "It's a Draw!"
            : `Next Player: ${isXNext ? 'X' : 'O'}`;

    const handleClick = (index) => {
        if (board[index] || winner || isChecking) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    // Connection Check Simulation
    const handleRetry = () => {
        setIsChecking(true);
        setTimeout(() => {
            window.location.reload(); // Actually try to reload to see if online
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            {/* Offline Status Section */}
            <div className="text-center mb-12 animate-fade-in-down">
                <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                        <svg
                            className="w-12 h-12 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
                            />
                        </svg>
                    </div>
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </div>

                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">You are Offline</h1>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    It seems like you lost your internet connection. Check your WiFi or play a game while you wait!
                </p>

                <button
                    onClick={handleRetry}
                    disabled={isChecking}
                    className={`px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto ${isChecking ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                    {isChecking ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Checking...
                        </>
                    ) : (
                        'Retry Connection'
                    )}
                </button>
            </div>

            {/* Interactive Game Section */}
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Pass the time</h2>
                    <button
                        onClick={resetGame}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Reset Game
                    </button>
                </div>

                <div className="mb-4 text-center">
                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${winner ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                        {status}
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-2 bg-gray-200 p-2 rounded-xl">
                    {board.map((square, i) => (
                        <button
                            key={i}
                            className={`h-20 bg-white rounded-lg text-3xl font-bold flex items-center justify-center transition-all ${!square && !winner ? 'hover:bg-gray-50' : ''} ${square === 'X' ? 'text-blue-500' : 'text-red-500'}`}
                            onClick={() => handleClick(i)}
                        >
                            {square}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offline;
