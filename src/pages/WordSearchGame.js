import { useState, useEffect, useCallback } from "react";

function WordSearchGame({ onExperienceSelect, colors }) {
	// State for the word search game
	const [grid, setGrid] = useState([]);
	const [words, setWords] = useState([
		{ word: "WORK", found: false, color: colors.darkRed },
		{ word: "ORGANIZATIONAL", found: false, color: colors.darkGreen },
		{ word: "VOLUNTEER", found: false, color: colors.pink },
	]);
	const [selectedCells, setSelectedCells] = useState([]);
	const [gameComplete, setGameComplete] = useState(false);
	const [hintsUsed, setHintsUsed] = useState(0);

	const initializeGame = useCallback(() => {
		// Create a grid with the words hidden in it
		const gridSize = 15;
		const newGrid = createGrid(gridSize, gridSize);
		setGrid(newGrid);
		setSelectedCells([]);
		setGameComplete(false);
		setHintsUsed(0); // Reset hints used when starting a new game

		// Reset the words to unfound state
		setWords([
			{ word: "WORK", found: false, color: colors.darkRed },
			{ word: "ORGANIZATIONAL", found: false, color: colors.darkGreen },
			{ word: "VOLUNTEER", found: false, color: colors.pink },
		]);
	}, [colors]);

	// Initialize the game on component mount
	useEffect(() => {
		initializeGame();
	}, [initializeGame]);

	const createGrid = (rows, cols) => {
		// Initialize empty grid
		const newGrid = Array(rows)
			.fill(null)
			.map((_, rowIndex) =>
				Array(cols)
					.fill(null)
					.map((_, colIndex) => ({
						letter: "",
						row: rowIndex,
						col: colIndex,
						selected: false,
						highlighted: false,
						highlightColor: null,
						wordIndex: null,
					}))
			);

		// Place words in the grid - with fixed positions for predictability
		const placements = [
			// WORK - horizontal on row 2, starting at col 8
			{ word: "WORK", row: 2, col: 8, direction: "horizontal", wordIndex: 0 },

			// ORGANIZATIONAL - horizontal on row 5, starting at col 1
			{
				word: "ORGANIZATIONAL",
				row: 5,
				col: 0,
				direction: "horizontal",
				wordIndex: 1,
			},

			// VOLUNTEER - horizontal on row 9, starting at col 2
			{
				word: "VOLUNTEER",
				row: 9,
				col: 2,
				direction: "horizontal",
				wordIndex: 2,
			},
		];

		placements.forEach(({ word, row, col, direction, wordIndex }) => {
			for (let i = 0; i < word.length; i++) {
				if (direction === "horizontal") {
					newGrid[row][col + i].letter = word[i];
					newGrid[row][col + i].wordIndex = wordIndex;
				} else if (direction === "vertical") {
					newGrid[row + i][col].letter = word[i];
					newGrid[row + i][col].wordIndex = wordIndex;
				}
			}
		});

		// Fill remaining cells with random letters
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				if (!newGrid[row][col].letter) {
					newGrid[row][col].letter = String.fromCharCode(
						65 + Math.floor(Math.random() * 26)
					);
				}
			}
		}

		return newGrid;
	};

	const handleCellClick = (cell) => {
		if (gameComplete) return;

		// If cell is part of a word, select the entire word
		if (cell.wordIndex !== null) {
			const wordCells = [];

			// Find all cells that belong to this word
			grid.forEach((row) => {
				row.forEach((c) => {
					if (c.wordIndex === cell.wordIndex) {
						wordCells.push(c);
					}
				});
			});

			// Sort cells to ensure they're in order
			wordCells.sort((a, b) => {
				if (a.row === b.row) return a.col - b.col;
				return a.row - b.row;
			});

			// Check if word is already found
			if (!words[cell.wordIndex].found) {
				// Mark word as found
				const newWords = [...words];
				newWords[cell.wordIndex].found = true;
				setWords(newWords);

				// Highlight the found word
				const newGrid = [...grid];
				wordCells.forEach((c) => {
					newGrid[c.row][c.col].highlighted = true;
					newGrid[c.row][c.col].highlightColor = words[cell.wordIndex].color;
				});

				setGrid(newGrid);

				// Check if game is complete
				if (newWords.every((w) => w.found)) {
					setGameComplete(true);
				}
			}

			return;
		}

		// Regular cell selection logic for non-word cells
		const newGrid = [...grid];
		const newCell = { ...newGrid[cell.row][cell.col] };

		if (selectedCells.some((c) => c.row === cell.row && c.col === cell.col)) {
			// Deselect if already selected
			setSelectedCells(
				selectedCells.filter((c) => !(c.row === cell.row && c.col === cell.col))
			);
			newCell.selected = false;
		} else {
			// Select new cell
			setSelectedCells([...selectedCells, cell]);
			newCell.selected = true;
		}

		newGrid[cell.row][cell.col] = newCell;
		setGrid(newGrid);
	};

	// Function to provide a hint (reveal a random unfound word)
	const provideHint = () => {
		// Find unfound words
		const unfoundWords = words.filter((word) => !word.found);

		if (unfoundWords.length === 0) return; // No unfound words left

		// If this is the third hint, reveal all remaining words
		if (hintsUsed === 2 || unfoundWords.length === 1) {
			// Reveal all unfound words
			const newWords = [...words];
			const newGrid = [...grid];

			unfoundWords.forEach((unfoundWord) => {
				const wordIndex = words.findIndex((w) => w.word === unfoundWord.word);
				newWords[wordIndex].found = true;

				// Find and highlight all cells for this word
				const wordCells = [];
				grid.forEach((row) => {
					row.forEach((cell) => {
						if (cell.wordIndex === wordIndex) {
							wordCells.push(cell);
						}
					});
				});

				// Highlight the cells
				wordCells.forEach((cell) => {
					newGrid[cell.row][cell.col].highlighted = true;
					newGrid[cell.row][cell.col].highlightColor = words[wordIndex].color;
				});
			});

			setGrid(newGrid);
			setWords(newWords);
			setHintsUsed(3); // Max hints used

			// Check if game is complete
			if (newWords.every((w) => w.found)) {
				setGameComplete(true);
			}
		} else {
			// Randomly select one unfound word
			const randomIndex = Math.floor(Math.random() * unfoundWords.length);
			const wordToReveal = unfoundWords[randomIndex];
			const wordIndex = words.findIndex((w) => w.word === wordToReveal.word);

			// Mark word as found
			const newWords = [...words];
			newWords[wordIndex].found = true;

			// Find all cells that belong to this word
			const wordCells = [];
			grid.forEach((row) => {
				row.forEach((cell) => {
					if (cell.wordIndex === wordIndex) {
						wordCells.push(cell);
					}
				});
			});

			// Highlight the found word
			const newGrid = [...grid];
			wordCells.forEach((cell) => {
				newGrid[cell.row][cell.col].highlighted = true;
				newGrid[cell.row][cell.col].highlightColor = words[wordIndex].color;
			});

			setGrid(newGrid);
			setWords(newWords);
			setHintsUsed(hintsUsed + 1);

			// Check if game is complete
			if (newWords.every((w) => w.found)) {
				setGameComplete(true);
			}
		}
	};

	// Calculate how many words are left to find
	const wordsLeftToFind = words.filter((word) => !word.found).length;

	return (
		<div className="mb-12">
			<div
				className="p-4 sm:p-6 rounded-lg border-2 relative shadow-md transition-all duration-300 hover:shadow-lg"
				style={{
					borderColor: colors.lightGreen,
					backgroundColor: colors.white,
				}}
			>
				{/* Decorative badges */}
				<div
					className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transform -rotate-12 z-10 shadow-md"
					style={{ backgroundColor: colors.lightGreen }}
				>
					<div
						className="text-xs font-bold text-center"
						style={{ color: colors.darkGreen }}
					>
						<span>it's</span>
						<br />
						<span>fun!</span>
					</div>
				</div>

				<div
					className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transform rotate-12 z-10 shadow-md"
					style={{ backgroundColor: colors.lightGreen }}
				>
					<div
						className="text-xs font-bold text-center"
						style={{ color: colors.darkGreen }}
					>
						<span>!!!</span>
						<br />
						<span>best</span>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 mt-6 sm:mt-0">
					<h3
						className="text-2xl font-black tracking-tighter"
						style={{ color: colors.darkRed }}
					>
						FIND-A-WORD
					</h3>
					<div
						className="inline-flex rounded-full px-3 py-1 text-sm font-bold"
						style={{
							backgroundColor: colors.darkRed,
							color: colors.white,
						}}
					>
						SURPRISE
					</div>
				</div>

				<p className="text-sm mb-6" style={{ color: colors.darkGreen }}>
					Click on the words to find them! Look for WORK, ORGANIZATIONAL, and
					VOLUNTEER.
				</p>

				<div className="flex justify-center mb-4 overflow-hidden">
					<div
						className="border-2 border-black rounded-md overflow-hidden shadow-md"
						style={{ backgroundColor: colors.white }}
					>
						<div className="overflow-x-auto">
							<div className="grid grid-flow-row">
								{grid.map((row, rowIndex) => (
									<div key={rowIndex} className="flex">
										{row.map((cell, colIndex) => (
											<div
												key={`${rowIndex}-${colIndex}`}
												className={`
                          w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border border-gray-300 text-sm sm:text-lg font-bold cursor-pointer transition-all duration-200
                          ${cell.selected ? "bg-gray-200" : ""}
                          ${cell.wordIndex !== null ? "hover:opacity-80" : ""}
                        `}
												style={{
													backgroundColor: cell.highlighted
														? cell.highlightColor || ""
														: cell.selected
														? "#e2e8f0"
														: colors.white,
													color: cell.highlighted
														? colors.white
														: colors.darkRed,
												}}
												onClick={() => handleCellClick(cell)}
											>
												{cell.letter}
											</div>
										))}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap gap-2 mb-4 justify-center">
					{words.map((word, index) => (
						<span
							key={index}
							className={`px-3 py-1 rounded-md border transition-all duration-300 ${
								word.found ? "opacity-100 transform scale-105" : "opacity-70"
							}`}
							style={{
								backgroundColor: word.found ? word.color : "transparent",
								color: word.found ? colors.white : colors.darkRed,
								borderColor: word.color,
							}}
						>
							{word.word}
						</span>
					))}
				</div>

				<div className="flex flex-col sm:flex-row justify-between gap-2">
					{/* Hint button */}
					<button
						onClick={provideHint}
						disabled={wordsLeftToFind === 0}
						className="px-4 py-2 text-sm rounded-md transition-colors flex items-center justify-center gap-1"
						style={{
							backgroundColor: wordsLeftToFind === 0 ? "#f0f0f0" : colors.white,
							color: wordsLeftToFind === 0 ? "#999" : colors.darkGreen,
							borderColor: colors.darkGreen,
							border: "1px solid",
							opacity: wordsLeftToFind === 0 ? 0.5 : 1,
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
						Hint {hintsUsed > 0 ? `(${hintsUsed}/3)` : ""}
					</button>

					<button
						onClick={initializeGame}
						className="px-4 py-2 text-sm rounded-md flex items-center justify-center gap-1 transition-colors hover:bg-gray-50"
						style={{
							backgroundColor: colors.white,
							color: colors.darkGreen,
							borderColor: colors.darkGreen,
							border: "1px solid",
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
							/>
						</svg>
						New Game
					</button>
				</div>
			</div>

			{/* Success modal when all words are found */}
			{gameComplete && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
					<div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl animate-fadeIn">
						<div className="flex items-center justify-center gap-2 mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke={colors.darkGreen}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<h3
								className="text-xl font-bold"
								style={{ color: colors.darkRed }}
							>
								Congratulations!
							</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke={colors.darkGreen}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>

						<p className="mb-6" style={{ color: colors.darkRed }}>
							You found all the words! Which experience interests you?
						</p>

						<div className="grid grid-cols-1 gap-4 mb-4">
							<button
								onClick={() => onExperienceSelect("work")}
								className="w-full py-2 rounded-md text-white font-medium transition-colors hover:opacity-90"
								style={{ backgroundColor: colors.darkRed }}
							>
								Work Experience
							</button>
							<button
								onClick={() => onExperienceSelect("organizational")}
								className="w-full py-2 rounded-md text-white font-medium transition-colors hover:opacity-90"
								style={{ backgroundColor: colors.darkGreen }}
							>
								Organizational Experience
							</button>
							<button
								onClick={() => onExperienceSelect("volunteer")}
								className="w-full py-2 rounded-md text-white font-medium transition-colors hover:opacity-90"
								style={{ backgroundColor: colors.pink }}
							>
								Volunteer Experience
							</button>
						</div>

						<button
							onClick={initializeGame}
							className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
						>
							Play Again
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default WordSearchGame;
