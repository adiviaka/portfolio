import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { colors } from "../App";

function Projects() {
	// Featured projects that are manually defined
	const featuredProjects = [
		{
			title: "API for 'Fassion' E-Commerce Website",
			description:
				"Developed an API for 'Fassion' E-Commerce website with improved scalability, performance, and security. Achieved a 20% increase in website performance and data retrieval speed through implementing backend functionalities using PHP and Laravel.",
			image: "/api/placeholder/600/400",
			tags: ["PHP", "Laravel", "MySQL", "REST API"],
			github: "https://github.com/adiviaka/fassion-api",
		},
		{
			title: "Product Distribution Information System",
			description:
				"Led a team of 3 software engineers to develop an API for Product Distribution Information System at PT Anugerah Emas Hijau. Implemented backend functionalities using PHP and Laravel framework, resulting in a 20% increase in website performance.",
			image: "/api/placeholder/600/400",
			tags: ["PHP", "Laravel", "MySQL", "API Development", "Team Leadership"],
			github: "https://github.com/adiviaka/aeha-product-distribution",
		},
		{
			title: "Internal Ticketing System",
			description:
				"Developed and maintained RESTful APIs for an internal ticketing system, enabling streamlined cross-departmental communication. Implemented secure authentication systems and optimized database queries, reducing API response times by 40%.",
			image: "/api/placeholder/600/400",
			tags: [
				"PHP",
				"Laravel",
				"API",
				"Authentication",
				"Database Optimization",
			],
			github: "https://github.com/adiviaka/ticketing-system",
		},
	];

	// State for GitHub repositories
	const [githubRepos, setGithubRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentSlide, setCurrentSlide] = useState(0);

	// Fetch repositories from GitHub
	useEffect(() => {
		const fetchGithubRepos = async () => {
			try {
				setLoading(true);
				// In a real implementation, you would call the GitHub API here
				// For demonstration, we'll simulate the API response
				// Replace this with a real API call in production

				// Simulated delay to mimic API call
				await new Promise((resolve) => setTimeout(resolve, 1000));

				// Sample GitHub repository data
				const sampleRepos = [
					{
						name: "fassion-api",
						description:
							"API for Fassion E-Commerce platform built with Laravel",
						html_url: "https://github.com/adiviaka/fassion-api",
						language: "PHP",
						stargazers_count: 5,
						forks_count: 2,
						topics: ["laravel", "api", "ecommerce"],
					},
					{
						name: "aeha-product-distribution",
						description:
							"Product Distribution Information System for PT Anugerah Emas Hijau",
						html_url: "https://github.com/adiviaka/aeha-product-distribution",
						language: "PHP",
						stargazers_count: 3,
						forks_count: 1,
						topics: ["laravel", "api", "product-management"],
					},
					{
						name: "ticketing-system",
						description: "Internal ticketing system with RESTful APIs",
						html_url: "https://github.com/adiviaka/ticketing-system",
						language: "PHP",
						stargazers_count: 4,
						forks_count: 0,
						topics: ["laravel", "ticketing", "internal-tools"],
					},
					{
						name: "laravel-blog",
						description: "Simple blog system built with Laravel",
						html_url: "https://github.com/adiviaka/laravel-blog",
						language: "PHP",
						stargazers_count: 2,
						forks_count: 1,
						topics: ["laravel", "blog", "cms"],
					},
					{
						name: "inventory-management",
						description:
							"Inventory management system with barcode scanning capabilities",
						html_url: "https://github.com/adiviaka/inventory-management",
						language: "JavaScript",
						stargazers_count: 6,
						forks_count: 3,
						topics: ["react", "inventory", "barcode"],
					},
					{
						name: "data-visualization-dashboard",
						description: "Interactive dashboard for data visualization",
						html_url:
							"https://github.com/adiviaka/data-visualization-dashboard",
						language: "JavaScript",
						stargazers_count: 7,
						forks_count: 2,
						topics: ["react", "d3", "dashboard"],
					},
					{
						name: "python-data-analysis",
						description: "Data analysis tools built with Python",
						html_url: "https://github.com/adiviaka/python-data-analysis",
						language: "Python",
						stargazers_count: 3,
						forks_count: 1,
						topics: ["python", "pandas", "data-analysis"],
					},
					{
						name: "machine-learning-experiments",
						description: "Experiments with various machine learning algorithms",
						html_url:
							"https://github.com/adiviaka/machine-learning-experiments",
						language: "Python",
						stargazers_count: 4,
						forks_count: 1,
						topics: ["python", "machine-learning", "tensorflow"],
					},
				];

				setGithubRepos(sampleRepos);
				setLoading(false);
			} catch (err) {
				setError("Failed to fetch GitHub repositories");
				setLoading(false);
				console.error("Error fetching GitHub repos:", err);
			}
		};

		fetchGithubRepos();
	}, []);

	// Function to move to next slide
	const nextSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === Math.floor(githubRepos.length / 3) ? 0 : prevSlide + 1
		);
	};

	// Function to move to previous slide
	const prevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? Math.floor(githubRepos.length / 3) : prevSlide - 1
		);
	};

	// Function to handle dot indicators click
	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	return (
		<section
			id="projects"
			className="pt-24 py-16"
			style={{ backgroundColor: `${colors.lightGreen}15`, minHeight: "100vh" }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2
					className="text-3xl font-bold tracking-tight mb-10"
					style={{ color: colors.darkRed }}
				>
					Featured Projects
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{featuredProjects.map((project, index) => (
						<div
							key={index}
							className="flex flex-col rounded-lg overflow-hidden h-full"
							style={{
								backgroundColor: colors.white,
								boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
								border: `1px solid ${colors.pink}30`,
							}}
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
								/>
							</div>

							<div className="flex-1 p-6">
								<h3
									className="text-xl font-bold mb-2"
									style={{ color: colors.darkRed }}
								>
									{project.title}
								</h3>
								<p className="text-gray-600 text-sm mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium"
											style={{
												backgroundColor: `${colors.darkGreen}10`,
												color: colors.darkGreen,
												border: `1px solid ${colors.darkGreen}30`,
											}}
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							<div className="p-6 pt-0 mt-auto">
								<div className="flex gap-4">
									{project.demo && (
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow transition-colors"
											style={{ backgroundColor: colors.darkRed }}
											onMouseOver={(e) =>
												(e.currentTarget.style.backgroundColor = colors.pink)
											}
											onMouseOut={(e) =>
												(e.currentTarget.style.backgroundColor = colors.darkRed)
											}
										>
											Live Demo
										</a>
									)}
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-sm font-medium shadow-sm transition-colors"
										style={{
											backgroundColor: "white",
											color: colors.darkRed,
											borderColor: colors.darkRed,
										}}
										onMouseOver={(e) => {
											e.currentTarget.style.backgroundColor = `${colors.lightGreen}30`;
											e.currentTarget.style.borderColor = colors.darkGreen;
										}}
										onMouseOut={(e) => {
											e.currentTarget.style.backgroundColor = "white";
											e.currentTarget.style.borderColor = colors.darkRed;
										}}
									>
										View on GitHub
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* GitHub Repositories Carousel */}
				<div className="mt-16">
					<div className="flex justify-between items-center mb-6">
						<h2
							className="text-3xl font-bold tracking-tight"
							style={{ color: colors.darkRed }}
						>
							GitHub Repositories
						</h2>
						<a
							href="https://github.com/adiviaka"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow transition-colors"
							style={{ backgroundColor: colors.darkRed }}
							onMouseOver={(e) =>
								(e.currentTarget.style.backgroundColor = colors.pink)
							}
							onMouseOut={(e) =>
								(e.currentTarget.style.backgroundColor = colors.darkRed)
							}
						>
							View All on GitHub
						</a>
					</div>

					{loading ? (
						<div className="flex justify-center items-center h-64">
							<div
								className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-opacity-25"
								style={{ borderTopColor: colors.darkRed }}
							></div>
						</div>
					) : error ? (
						<div
							className="p-6 rounded-lg text-center"
							style={{
								backgroundColor: `${colors.pink}10`,
								color: colors.darkRed,
								border: `1px solid ${colors.pink}`,
							}}
						>
							<p>{error}</p>
							<a
								href="https://github.com/adiviaka"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-10 items-center justify-center rounded-md px-4 mt-4 text-sm font-medium text-white shadow transition-colors"
								style={{ backgroundColor: colors.darkRed }}
							>
								Visit GitHub Profile Instead
							</a>
						</div>
					) : (
						<div className="relative">
							{/* Carousel Controls */}
							<button
								onClick={prevSlide}
								className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all -ml-4"
								style={{ border: `1px solid ${colors.lightGreen}` }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke={colors.darkRed}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</button>

							<div className="overflow-hidden">
								<div
									className="flex transition-transform duration-500 ease-in-out"
									style={{
										transform: `translateX(-${currentSlide * 100}%)`,
									}}
								>
									{/* Divide repositories into groups of 3 for each slide */}
									{Array.from(
										{ length: Math.ceil(githubRepos.length / 3) },
										(_, slideIndex) => (
											<div
												key={slideIndex}
												className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-full"
											>
												{githubRepos
													.slice(slideIndex * 3, slideIndex * 3 + 3)
													.map((repo, repoIndex) => (
														<div
															key={repoIndex}
															className="flex flex-col rounded-lg overflow-hidden h-full"
															style={{
																backgroundColor: colors.white,
																boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
																border: `1px solid ${colors.lightGreen}30`,
															}}
														>
															<div className="p-6">
																<h3
																	className="text-xl font-bold mb-2 truncate"
																	style={{ color: colors.darkRed }}
																>
																	{repo.name}
																</h3>
																<p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">
																	{repo.description ||
																		"No description available"}
																</p>

																<div className="flex items-center gap-4 mb-4">
																	<div className="flex items-center">
																		<span
																			className="inline-block w-3 h-3 rounded-full mr-1"
																			style={{
																				backgroundColor:
																					repo.language === "PHP"
																						? "#8892BF"
																						: repo.language === "JavaScript"
																						? "#F7DF1E"
																						: repo.language === "Python"
																						? "#3776AB"
																						: "#ccc",
																			}}
																		></span>
																		<span className="text-xs text-gray-600">
																			{repo.language || "Not specified"}
																		</span>
																	</div>
																	<div className="flex items-center text-xs text-gray-600">
																		<svg
																			className="w-4 h-4 mr-1"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																		>
																			<path
																				fillRule="evenodd"
																				d="M10 2a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5A.75.75 0 0110 2zM10 5a.75.75 0 100 1.5.75.75 0 000-1.5zM10 10a1 1 0 100-2 1 1 0 000 2z"
																				clipRule="evenodd"
																			/>
																			<path d="M3.858 8.447a5.996 5.996 0 117.874.066l-.323 1.13a1 1 0 01-.63.672l-2.494.85c-.347.119-.58.446-.58.814v2.024a1 1 0 01-.553.894l-1.817.813a1 1 0 01-1.318-.418l-1.065-1.88a1 1 0 01.005-1.007l1.307-2.236.013-.022a1 1 0 01.35-.358l2.291-1.365a1 1 0 00.474-.814l.025-.222a1 1 0 00-.193-.76 4.003 4.003 0 10-5.61-.041 1 1 0 00-.192.762l.056.466c.036.282.174.532.393.7l1.516 1.16a1 1 0 01.122 1.483l-.4.45a1 1 0 01-1.409.105 7.996 7.996 0 01-2.967-4.112 1 1 0 01.793-1.259l.352-.07c.38-.076.666-.38.731-.746z" />
																		</svg>
																		{repo.stargazers_count}
																	</div>
																	<div className="flex items-center text-xs text-gray-600">
																		<svg
																			className="w-4 h-4 mr-1"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																		>
																			<path
																				fillRule="evenodd"
																				d="M10 2a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5A.75.75 0 0110 2zM6.257 4.699l-1.2-1.2a.75.75 0 00-1.06 1.06l1.2 1.2a.75.75 0 001.06-1.06zM10 6a4 4 0 100 8 4 4 0 000-8zm-7.5 4a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
																				clipRule="evenodd"
																			/>
																		</svg>
																		{repo.forks_count}
																	</div>
																</div>

																{repo.topics && repo.topics.length > 0 && (
																	<div className="flex flex-wrap gap-2 mb-4">
																		{repo.topics
																			.slice(0, 3)
																			.map((topic, topicIndex) => (
																				<span
																					key={topicIndex}
																					className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium"
																					style={{
																						backgroundColor: `${colors.pink}15`,
																						color: colors.darkRed,
																						border: `1px solid ${colors.pink}30`,
																					}}
																				>
																					{topic}
																				</span>
																			))}
																	</div>
																)}
															</div>

															<div className="p-6 pt-0 mt-auto">
																<a
																	href={repo.html_url}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="inline-flex h-9 w-full items-center justify-center rounded-md border px-4 text-sm font-medium shadow-sm transition-colors"
																	style={{
																		backgroundColor: "white",
																		color: colors.darkRed,
																		borderColor: colors.darkRed,
																	}}
																	onMouseOver={(e) => {
																		e.currentTarget.style.backgroundColor = `${colors.lightGreen}30`;
																		e.currentTarget.style.borderColor =
																			colors.darkGreen;
																	}}
																	onMouseOut={(e) => {
																		e.currentTarget.style.backgroundColor =
																			"white";
																		e.currentTarget.style.borderColor =
																			colors.darkRed;
																	}}
																>
																	View Repository
																</a>
															</div>
														</div>
													))}
											</div>
										)
									)}
								</div>
							</div>

							<button
								onClick={nextSlide}
								className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all -mr-4"
								style={{ border: `1px solid ${colors.lightGreen}` }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke={colors.darkRed}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</button>

							{/* Carousel Indicators */}
							<div className="flex justify-center mt-6 space-x-2">
								{Array.from(
									{ length: Math.ceil(githubRepos.length / 3) },
									(_, index) => (
										<button
											key={index}
											onClick={() => goToSlide(index)}
											className={`w-3 h-3 rounded-full transition-all ${
												currentSlide === index ? "w-6" : ""
											}`}
											style={{
												backgroundColor:
													currentSlide === index
														? colors.darkRed
														: colors.lightGreen,
											}}
										></button>
									)
								)}
							</div>
						</div>
					)}
				</div>

				{/* Call to action */}
				<div
					className="mt-16 p-8 rounded-lg text-center"
					style={{
						backgroundColor: colors.white,
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
						border: `1px solid ${colors.pink}`,
					}}
				>
					<h3
						className="text-2xl font-bold mb-4"
						style={{ color: colors.darkRed }}
					>
						Interested in Collaborating?
					</h3>
					<p className="text-gray-600 mb-6 max-w-3xl mx-auto">
						I'm always open to discussing new projects, creative ideas, or
						opportunities to be part of your vision. Let's connect and explore
						how we can work together to build something amazing.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link
							to="/contact"
							className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium text-white shadow transition-colors"
							style={{ backgroundColor: colors.darkRed }}
							onMouseOver={(e) =>
								(e.currentTarget.style.backgroundColor = colors.pink)
							}
							onMouseOut={(e) =>
								(e.currentTarget.style.backgroundColor = colors.darkRed)
							}
						>
							Get In Touch
						</Link>
						<a
							href="https://github.com/adiviaka"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-10 items-center justify-center rounded-md border px-6 text-sm font-medium shadow-sm transition-colors"
							style={{
								backgroundColor: "white",
								color: colors.darkRed,
								borderColor: colors.darkRed,
							}}
							onMouseOver={(e) => {
								e.currentTarget.style.backgroundColor = `${colors.lightGreen}30`;
								e.currentTarget.style.borderColor = colors.darkGreen;
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.backgroundColor = "white";
								e.currentTarget.style.borderColor = colors.darkRed;
							}}
						>
							See All Projects
						</a>
					</div>
				</div>

				{/* Navigation buttons */}
				<div className="mt-12 flex justify-between">
					<Link
						to="/experience"
						className="inline-flex h-10 items-center justify-center rounded-md border px-6 text-sm font-medium shadow-sm transition-colors"
						style={{
							backgroundColor: "white",
							color: colors.darkRed,
							borderColor: colors.darkRed,
						}}
						onMouseOver={(e) => {
							e.currentTarget.style.backgroundColor = `${colors.lightGreen}30`;
							e.currentTarget.style.borderColor = colors.darkGreen;
						}}
						onMouseOut={(e) => {
							e.currentTarget.style.backgroundColor = "white";
							e.currentTarget.style.borderColor = colors.darkRed;
						}}
					>
						← Previous: Experience
					</Link>
					<Link
						to="/contact"
						className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium text-white shadow transition-colors"
						style={{ backgroundColor: colors.darkRed }}
						onMouseOver={(e) =>
							(e.currentTarget.style.backgroundColor = colors.pink)
						}
						onMouseOut={(e) =>
							(e.currentTarget.style.backgroundColor = colors.darkRed)
						}
					>
						Next: Contact →
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Projects;
