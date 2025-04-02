import React, { useState, useEffect, useCallback } from "react";
import { colors } from "../App";

function Experience() {
	// State to track which experience type is active
	const [activeExperience, setActiveExperience] = useState(null);
	// State for the word search game
	const [grid, setGrid] = useState([]);
	const [words, setWords] = useState([
		{ word: "WORK", found: false, color: colors.darkRed },
		{ word: "ORGANIZATIONAL", found: false, color: colors.darkGreen },
		{ word: "VOLUNTEER", found: false, color: colors.pink },
	]);
	const [selectedCells, setSelectedCells] = useState([]);
	const [gameComplete, setGameComplete] = useState(false);

	const initializeGame = useCallback(() => {
		// Create a grid with the words hidden in it
		const gridSize = 15;
		const newGrid = createGrid(gridSize, gridSize);
		setGrid(newGrid);
		setSelectedCells([]);
		setGameComplete(false);

		// Reset the words to unfound state
		setWords([
			{ word: "WORK", found: false, color: colors.darkRed },
			{ word: "ORGANIZATIONAL", found: false, color: colors.darkGreen },
			{ word: "VOLUNTEER", found: false, color: colors.pink },
		]);
	}, []);

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

	const resetSelection = () => {
		const newGrid = grid.map((row) =>
			row.map((cell) => ({
				...cell,
				selected: false,
			}))
		);

		setGrid(newGrid);
		setSelectedCells([]);
	};

	// Handle choosing an experience category
	const handleChooseExperience = (experienceType) => {
		setActiveExperience(experienceType);
	};

	return (
		<section
			id="experience"
			className="pt-24 py-16"
			style={{ backgroundColor: colors.background, minHeight: "100vh" }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2
					className="text-3xl font-bold tracking-tight mb-4"
					style={{ color: colors.darkRed }}
				>
					Experience
				</h2>

				{/* Word search game */}
				{!activeExperience && (
					<div className="mb-12">
						<div
							className="p-6 rounded-lg border-2 relative"
							style={{
								borderColor: colors.lightGreen,
								backgroundColor: colors.white,
							}}
						>
							{/* Decorative badges */}
							<div
								className="absolute -top-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center transform -rotate-12 z-10"
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
								className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center transform rotate-12 z-10"
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

							<div className="flex justify-between items-center mb-4">
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
								Click on the words to find them! Look for WORK, ORGANIZATIONAL,
								and VOLUNTEER.
							</p>

							<div
								className="grid grid-cols-15 gap-0 border-2 border-black overflow-x-auto mb-4"
								style={{ backgroundColor: colors.white }}
							>
								{grid.map((row, rowIndex) => (
									<div key={rowIndex} className="flex">
										{row.map((cell, colIndex) => (
											<div
												key={`${rowIndex}-${colIndex}`}
												className={`
                          w-8 h-8 flex items-center justify-center border border-gray-300 text-lg font-bold cursor-pointer
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

							<div className="flex flex-wrap gap-2 mb-4">
								{words.map((word, index) => (
									<span
										key={index}
										className={`px-3 py-1 rounded-md border ${
											word.found ? "opacity-100" : "opacity-50"
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

							<div className="flex justify-between">
								<button
									onClick={resetSelection}
									disabled={selectedCells.length === 0}
									className="px-4 py-2 text-sm rounded-md transition-colors"
									style={{
										backgroundColor:
											selectedCells.length === 0 ? "#f0f0f0" : colors.white,
										color:
											selectedCells.length === 0 ? "#999" : colors.darkGreen,
										borderColor: colors.darkGreen,
										border: "1px solid",
										opacity: selectedCells.length === 0 ? 0.5 : 1,
									}}
								>
									Clear Selection
								</button>

								<button
									onClick={initializeGame}
									className="px-4 py-2 text-sm rounded-md flex items-center gap-1 transition-colors"
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
							<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
								<div className="bg-white p-6 rounded-lg max-w-md w-full text-center">
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
											onClick={() => handleChooseExperience("work")}
											className="w-full py-2 rounded-md text-white font-medium transition-colors"
											style={{ backgroundColor: colors.darkRed }}
										>
											Work Experience
										</button>
										<button
											onClick={() => handleChooseExperience("organizational")}
											className="w-full py-2 rounded-md text-white font-medium transition-colors"
											style={{ backgroundColor: colors.darkGreen }}
										>
											Organizational Experience
										</button>
										<button
											onClick={() => handleChooseExperience("volunteer")}
											className="w-full py-2 rounded-md text-white font-medium transition-colors"
											style={{ backgroundColor: colors.pink }}
										>
											Volunteer Experience
										</button>
									</div>

									<button
										onClick={initializeGame}
										className="text-sm text-gray-500 hover:text-gray-700"
									>
										Play Again
									</button>
								</div>
							</div>
						)}
					</div>
				)}

				{/* Experience content section - only shown after choosing */}
				{activeExperience && (
					<div>
						{/* Experience navigation tabs */}
						<div className="flex space-x-2 mb-6 border-b">
							<button
								onClick={() => setActiveExperience("work")}
								className={`px-4 py-2 font-medium rounded-t-lg ${
									activeExperience === "work" ? "border-b-2" : ""
								}`}
								style={{
									borderColor: colors.darkRed,
									backgroundColor:
										activeExperience === "work"
											? `${colors.darkRed}10`
											: "transparent",
									color: colors.darkRed,
								}}
							>
								Work Experience
							</button>
							<button
								onClick={() => setActiveExperience("organizational")}
								className={`px-4 py-2 font-medium rounded-t-lg ${
									activeExperience === "organizational" ? "border-b-2" : ""
								}`}
								style={{
									borderColor: colors.darkGreen,
									backgroundColor:
										activeExperience === "organizational"
											? `${colors.darkGreen}10`
											: "transparent",
									color: colors.darkGreen,
								}}
							>
								Organizational Experience
							</button>
							<button
								onClick={() => setActiveExperience("volunteer")}
								className={`px-4 py-2 font-medium rounded-t-lg ${
									activeExperience === "volunteer" ? "border-b-2" : ""
								}`}
								style={{
									borderColor: colors.pink,
									backgroundColor:
										activeExperience === "volunteer"
											? `${colors.pink}10`
											: "transparent",
									color: colors.pink,
								}}
							>
								Volunteer Experience
							</button>
						</div>

						{/* "Back to game" button */}
						<button
							onClick={() => {
								setActiveExperience(null);
								initializeGame();
							}}
							className="mb-6 flex items-center gap-2 text-sm px-4 py-2 rounded-md"
							style={{
								backgroundColor: colors.white,
								color: colors.darkRed,
								border: `1px solid ${colors.darkRed}`,
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
									d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
								/>
							</svg>
							Back to Word Search
						</button>

						{/* Work Experience Content */}
						{activeExperience === "work" && (
							<div className="space-y-12">
								<ExperienceItem
									period="Jun 2024 - Present"
									company="Timedoor Academy Semarang"
									title="Part Time English Coding Teacher"
									description="Delivering engaging coding education using Timedoor Academy's comprehensive curriculum, teaching students both in English and Indonesian. Effectively communicating complex programming concepts including Python, JavaScript, HTML, and CSS through structured lesson plans. Guiding students through hands-on projects in web development, game creation using Scratch, and basic robotics programming."
									skills={["Teaching", "Python", "JavaScript", "HTML", "CSS"]}
									color={colors.darkRed}
								/>

								<ExperienceItem
									period="May 2024 - Present"
									company="Awan Network Indonesia"
									title="Back-end Developer"
									description="Developing and maintaining RESTful APIs for an internal ticketing system, enabling streamlined cross-departmental communication and issue tracking. Designing and implementing secure authentication and authorization systems, ensuring proper access control and data protection. Optimizing database queries and implementing caching strategies, resulting in a 40% reduction in API response times."
									skills={[
										"PHP",
										"Laravel",
										"API Development",
										"Database Optimization",
										"Authentication Systems",
									]}
									color={colors.darkRed}
								/>

								<ExperienceItem
									period="Nov 2023 - Mar 2024"
									company="PT Anugerah Emas Hijau (AEHA)"
									title="Backend Developer"
									description="Developed API for Product Distribution Information System at PT Anugerah Emas Hijau (AEHA). Led a team of 3 software engineers containing backend, frontend, and UI/UX designer, ensuring alignment with project goals and meeting deadlines with attention to detail. Implemented backend functionalities using PHP and Laravel framework, following best practices and coding standards, resulting in a 20% increase in website performance."
									skills={[
										"PHP",
										"Laravel",
										"MySQL",
										"API Development",
										"Team Leadership",
									]}
									color={colors.darkRed}
								/>
							</div>
						)}

						{/* Organizational Experience Content */}
						{activeExperience === "organizational" && (
							<div className="space-y-12">
								<ExperienceItem
									period="Dec 2023 - Mar 2024"
									company="UNDIP Robotic IMTA Team for Dana Padanan 2024"
									title="Team Assistant"
									description="Managed administrative duties efficiently, resulting in a 20% reduction in meeting scheduling time and a 15% increase in overall team productivity. Implemented a streamlined document organization system, reducing document retrieval time by 25%. Maintained meticulous records of team activities, leading to a 30% decrease in missed project deadlines and ensuring seamless coordination among team members."
									skills={[
										"Administration",
										"Documentation",
										"Team Coordination",
										"Time Management",
									]}
									color={colors.darkGreen}
								/>

								<ExperienceItem
									period="Nov 2023 - Jan 2024"
									company="PT Taman Media Indonesia (Crocodic)"
									title="Secretary"
									description="Coordinated administrative tasks of the IoT division, leading to a 15% increase in workflow efficiency and productivity. Maintained detailed records of divisional activities to enhance accountability and transparency within the division, resulting in a 20% increase in project efficiency."
									skills={[
										"Administration",
										"Documentation",
										"Organization",
										"Communication",
									]}
									color={colors.darkGreen}
								/>
							</div>
						)}

						{/* Volunteer Experience Content */}
						{activeExperience === "volunteer" && (
							<div className="space-y-12">
								<ExperienceItem
									period="Oct 2022 - Nov 2022"
									company="Badan Pusat Statistik Semarang"
									title="Field Data Collection Officer (PPL) of REGSOSEK 2022"
									description="Conducted field surveys to collect data with 98% accuracy, improving data quality and efficiency. Traveled to designated locations or households as per survey requirements, meeting survey objectives effectively. Verified and cross-checked collected data for completeness and accuracy, maintaining data with a 98% accuracy rate. Collaborated with team members and field staff to achieve survey goals and objectives, increasing survey completion rate by 15%."
									skills={[
										"Data Collection",
										"Field Research",
										"Data Verification",
										"Team Collaboration",
									]}
									color={colors.pink}
								/>

								<ExperienceItem
									period="Jun 2022 - Jul 2022"
									company="PT PLN (Persero) UPT Semarang"
									title="UI/UX Designer"
									description="Designed user interfaces and user experiences for the Asset Management System (SIMASE) to ensure usability, efficiency, and user satisfaction, resulting in a 30% increase in user engagement. Created wireframes, mockups, and prototypes to visualize design concepts and facilitate feedback and iteration."
									skills={[
										"UI/UX Design",
										"Wireframing",
										"Prototyping",
										"User Research",
									]}
									color={colors.pink}
								/>
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
}

// Component for individual experience items
function ExperienceItem({
	period,
	company,
	title,
	description,
	skills,
	color,
}) {
	return (
		<div className="flex flex-col md:flex-row gap-6">
			<div className="md:w-1/4">
				<div className="text-sm font-medium" style={{ color: colors.pink }}>
					{period}
				</div>
				<div className="mt-1 font-semibold" style={{ color }}>
					{company}
				</div>
			</div>

			<div
				className="md:w-3/4 pl-0 md:pl-6 border-l-0 md:border-l-2"
				style={{ borderColor: `${colors.lightGreen}50` }}
			>
				<h3 className="text-xl font-bold mb-2" style={{ color }}>
					{title}
				</h3>
				<p className="text-gray-600 mb-4">{description}</p>

				<div className="flex flex-wrap gap-2">
					{skills.map((skill, skillIndex) => (
						<span
							key={skillIndex}
							className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
							style={{
								backgroundColor: `${colors.lightGreen}20`,
								color: colors.darkGreen,
								border: `1px solid ${colors.lightGreen}`,
							}}
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default Experience;
