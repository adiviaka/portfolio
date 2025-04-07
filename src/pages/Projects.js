import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faExternalLinkAlt,
	faSearch,
	faStar,
	faCodeBranch,
	faTag,
	faFilter,
	faArrowLeft,
	faArrowRight,
	faCode,
} from "@fortawesome/free-solid-svg-icons";

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
			highlights: [
				"RESTful API with authentication",
				"Optimized database queries",
				"Comprehensive documentation",
			],
		},
		{
			title: "Product Distribution Information System",
			description:
				"Led a team of 3 software engineers to develop an API for Product Distribution Information System at PT Anugerah Emas Hijau. Implemented backend functionalities using PHP and Laravel framework, resulting in a 20% increase in website performance.",
			image: "/api/placeholder/600/400",
			tags: ["PHP", "Laravel", "MySQL", "API Development", "Team Leadership"],
			github: "https://github.com/adiviaka/aeha-product-distribution",
			highlights: [
				"Led 3-person development team",
				"Implemented secure user roles",
				"Created real-time tracking features",
			],
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
			highlights: [
				"40% reduction in API response time",
				"Multi-level authentication system",
				"Cross-departmental notification system",
			],
		},
	];

	// State for GitHub repositories
	const [githubRepos, setGithubRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState("All");
	const [selectedProject, setSelectedProject] = useState(null);

	// Filter options for GitHub repos
	const filterOptions = ["All", "PHP", "JavaScript", "Python", "API"];

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
			prevSlide === Math.floor(filteredRepos.length / 3) - 1 ? 0 : prevSlide + 1
		);
	};

	// Function to move to previous slide
	const prevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? Math.floor(filteredRepos.length / 3) - 1 : prevSlide - 1
		);
	};

	// Function to handle dot indicators click
	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	// Filter repositories based on search and filter
	const filteredRepos = githubRepos.filter((repo) => {
		const matchesSearch =
			repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			repo.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
			repo.topics?.some((topic) =>
				topic.toLowerCase().includes(searchQuery.toLowerCase())
			);

		const matchesFilter =
			activeFilter === "All" ||
			repo.language === activeFilter ||
			(activeFilter === "API" && repo.topics?.includes("api"));

		return matchesSearch && matchesFilter;
	});

	// Show project details
	const openProjectDetails = (project) => {
		setSelectedProject(project);
		// Scroll to top when opening project details
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const staggerContainer = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<section
			id="projects"
			className="pt-24 py-16"
			style={{ backgroundColor: `${colors.lightGreen}15`, minHeight: "100vh" }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Project Details View */}
				<AnimatePresence>
					{selectedProject && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="mb-12"
						>
							<button
								onClick={() => setSelectedProject(null)}
								className="mb-4 flex items-center gap-2 text-sm px-4 py-2 rounded-md hover:bg-white transition-colors"
								style={{
									backgroundColor: `${colors.white}80`,
									color: colors.darkRed,
									border: `1px solid ${colors.darkRed}`,
								}}
							>
								<FontAwesomeIcon icon={faArrowLeft} />
								Back to all projects
							</button>

							<motion.div
								className="bg-white rounded-lg overflow-hidden shadow-lg border"
								style={{ borderColor: `${colors.pink}30` }}
								layoutId={`project-${selectedProject.title.replace(
									/\s/g,
									"-"
								)}`}
							>
								<div className="md:flex">
									<div className="md:w-2/5">
										<img
											src={selectedProject.image}
											alt={selectedProject.title}
											className="w-full h-64 md:h-full object-cover"
										/>
									</div>
									<div className="md:w-3/5 p-6 md:p-8">
										<h2
											className="text-2xl font-bold mb-4"
											style={{ color: colors.darkRed }}
										>
											{selectedProject.title}
										</h2>

										<p className="text-gray-600 mb-6">
											{selectedProject.description}
										</p>

										<div className="mb-6">
											<h3
												className="text-lg font-semibold mb-2"
												style={{ color: colors.darkGreen }}
											>
												Key Highlights
											</h3>
											<ul className="space-y-2">
												{selectedProject.highlights?.map((highlight, index) => (
													<li key={index} className="flex items-start">
														<span
															className="inline-block mr-2 mt-1"
															style={{ color: colors.pink }}
														>
															■
														</span>
														<span>{highlight}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="flex flex-wrap gap-2 mb-6">
											{selectedProject.tags.map((tag, tagIndex) => (
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

										<div className="flex gap-4">
											<a
												href={selectedProject.github}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow transition-colors"
												style={{ backgroundColor: colors.darkRed }}
												onMouseOver={(e) =>
													(e.currentTarget.style.backgroundColor = colors.pink)
												}
												onMouseOut={(e) =>
													(e.currentTarget.style.backgroundColor =
														colors.darkRed)
												}
											>
												<FontAwesomeIcon icon={faGithub} className="mr-2" />
												View on GitHub
											</a>

											{selectedProject.demo && (
												<a
													href={selectedProject.demo}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium shadow-sm transition-colors"
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
														e.currentTarget.style.backgroundColor = "white";
														e.currentTarget.style.borderColor = colors.darkRed;
													}}
												>
													<FontAwesomeIcon
														icon={faExternalLinkAlt}
														className="mr-2"
													/>
													Live Demo
												</a>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>

				{!selectedProject && (
					<>
						<motion.h2
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-3xl font-bold tracking-tight mb-2"
							style={{ color: colors.darkRed }}
						>
							Featured Projects
						</motion.h2>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-gray-600 mb-10"
						>
							A selection of my recent work and personal projects
						</motion.p>

						<motion.div
							variants={staggerContainer}
							initial="hidden"
							animate="visible"
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
						>
							{featuredProjects.map((project, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									layoutId={`project-${project.title.replace(/\s/g, "-")}`}
									className="flex flex-col rounded-lg overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
									style={{
										backgroundColor: colors.white,
										boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
										border: `1px solid ${colors.pink}30`,
									}}
								>
									<div className="h-48 overflow-hidden relative group">
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
											<div className="p-4 w-full">
												<button
													onClick={() => openProjectDetails(project)}
													className="w-full py-2 text-xs text-center font-medium rounded-md text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
												>
													View Details
												</button>
											</div>
										</div>
									</div>

									<div className="flex-1 p-6">
										<h3
											className="text-xl font-bold mb-2"
											style={{ color: colors.darkRed }}
										>
											{project.title}
										</h3>
										<p className="text-gray-600 text-sm mb-4 line-clamp-3">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2 mb-4">
											{project.tags.slice(0, 3).map((tag, tagIndex) => (
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
											{project.tags.length > 3 && (
												<span
													className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium"
													style={{
														backgroundColor: `${colors.pink}10`,
														color: colors.pink,
														border: `1px solid ${colors.pink}30`,
													}}
												>
													+{project.tags.length - 3} more
												</span>
											)}
										</div>
									</div>

									<div className="p-6 pt-0 mt-auto">
										<div className="flex gap-4">
											<button
												onClick={() => openProjectDetails(project)}
												className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow transition-colors flex-1"
												style={{ backgroundColor: colors.darkRed }}
												onMouseOver={(e) =>
													(e.currentTarget.style.backgroundColor = colors.pink)
												}
												onMouseOut={(e) =>
													(e.currentTarget.style.backgroundColor =
														colors.darkRed)
												}
											>
												View Details
											</button>
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium shadow-sm transition-colors"
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
												aria-label={`GitHub repository for ${project.title}`}
											>
												<FontAwesomeIcon icon={faGithub} />
											</a>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>

						{/* GitHub Repositories Section */}
						<motion.div
							className="mt-20"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
						>
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
								<div>
									<h2
										className="text-3xl font-bold tracking-tight"
										style={{ color: colors.darkRed }}
									>
										GitHub Repositories
									</h2>
									<p className="text-gray-600 text-sm mt-1">
										Explore my open-source work and personal projects
									</p>
								</div>
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
									<FontAwesomeIcon icon={faGithub} className="mr-2" />
									View All on GitHub
								</a>
							</div>

							{/* Search and filters */}
							<div
								className="mb-6 bg-white p-4 rounded-lg shadow-sm border"
								style={{ borderColor: `${colors.lightGreen}40` }}
							>
								<div className="flex flex-col sm:flex-row gap-4">
									<div className="relative flex-1">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<FontAwesomeIcon
												icon={faSearch}
												className="text-gray-400"
											/>
										</div>
										<input
											type="text"
											placeholder="Search repositories..."
											value={searchQuery}
											onChange={(e) => setSearchQuery(e.target.value)}
											className="pl-10 pr-4 py-2 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-opacity-50"
											style={{
												borderColor: `${colors.lightGreen}50`,
												color: colors.darkGreen,
												focusRing: colors.pink,
											}}
										/>
									</div>

									<div className="flex items-center">
										<span
											className="text-sm mr-2 hidden sm:inline"
											style={{ color: colors.darkGreen }}
										>
											<FontAwesomeIcon icon={faFilter} className="mr-1" />{" "}
											Filter:
										</span>
										<div className="flex flex-wrap gap-2 text-sm">
											{filterOptions.map((filter) => (
												<button
													key={filter}
													onClick={() => setActiveFilter(filter)}
													className={`px-3 py-1 rounded-full transition-colors ${
														activeFilter === filter ? "text-white" : ""
													}`}
													style={{
														backgroundColor:
															activeFilter === filter
																? colors.darkRed
																: `${colors.lightGreen}10`,
														color:
															activeFilter === filter
																? "white"
																: colors.darkGreen,
														border:
															activeFilter === filter
																? "none"
																: `1px solid ${colors.lightGreen}30`,
													}}
												>
													{filter}
												</button>
											))}
										</div>
									</div>
								</div>
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
							) : filteredRepos.length === 0 ? (
								<div
									className="p-12 text-center bg-white rounded-lg border"
									style={{ borderColor: `${colors.lightGreen}30` }}
								>
									<FontAwesomeIcon
										icon={faCode}
										className="text-4xl mb-4"
										style={{ color: `${colors.darkGreen}40` }}
									/>
									<h3
										className="text-lg font-medium mb-2"
										style={{ color: colors.darkRed }}
									>
										No matching repositories found
									</h3>
									<p className="text-gray-600 mb-4">
										Try adjusting your search or filter criteria
									</p>
									<button
										onClick={() => {
											setSearchQuery("");
											setActiveFilter("All");
										}}
										className="text-sm font-medium px-4 py-2 rounded-md"
										style={{ color: colors.darkGreen }}
									>
										Clear filters
									</button>
								</div>
							) : (
								<div className="relative">
									{/* Carousel Controls - only show if we have enough repos to warrant paging */}
									{filteredRepos.length > 3 && (
										<>
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
										</>
									)}

									<div className="overflow-hidden">
										<div
											className="flex transition-transform duration-500 ease-in-out"
											style={{
												transform: `translateX(-${currentSlide * 100}%)`,
											}}
										>
											{/* Divide repositories into groups of 3 for each slide */}
											{Array.from(
												{
													length: Math.max(
														1,
														Math.ceil(filteredRepos.length / 3)
													),
												},
												(_, slideIndex) => (
													<div
														key={slideIndex}
														className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-full"
													>
														{filteredRepos
															.slice(slideIndex * 3, slideIndex * 3 + 3)
															.map((repo, repoIndex) => (
																<motion.div
																	key={repoIndex}
																	className="flex flex-col rounded-lg overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
																	style={{
																		backgroundColor: colors.white,
																		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
																		border: `1px solid ${colors.lightGreen}30`,
																	}}
																	initial={{ opacity: 0, y: 20 }}
																	animate={{ opacity: 1, y: 0 }}
																	transition={{ delay: 0.1 * repoIndex }}
																>
																	<div className="p-6">
																		<div className="flex items-center gap-2 mb-2">
																			<div
																				className="w-3 h-3 rounded-full"
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
																			></div>
																			<span className="text-xs text-gray-600">
																				{repo.language || "Not specified"}
																			</span>
																		</div>

																		<h3
																			className="text-xl font-bold mb-2 truncate"
																			style={{ color: colors.darkRed }}
																		>
																			{repo.name}
																		</h3>
																		<p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
																			{repo.description ||
																				"No description available"}
																		</p>

																		<div className="flex items-center gap-4 mb-4">
																			<div className="flex items-center text-xs text-gray-600">
																				<FontAwesomeIcon
																					icon={faStar}
																					className="mr-1"
																					style={{ color: "#F59E0B" }}
																				/>
																				{repo.stargazers_count}
																			</div>
																			<div className="flex items-center text-xs text-gray-600">
																				<FontAwesomeIcon
																					icon={faCodeBranch}
																					className="mr-1"
																					style={{ color: "#10B981" }}
																				/>
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
																							<FontAwesomeIcon
																								icon={faTag}
																								className="mr-1 text-2xs"
																							/>
																							{topic}
																						</span>
																					))}
																				{repo.topics.length > 3 && (
																					<span
																						className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium"
																						style={{
																							backgroundColor: `${colors.darkGreen}15`,
																							color: colors.darkGreen,
																							border: `1px solid ${colors.darkGreen}30`,
																						}}
																					>
																						+{repo.topics.length - 3}
																					</span>
																				)}
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
																			<FontAwesomeIcon
																				icon={faGithub}
																				className="mr-2"
																			/>
																			View Repository
																		</a>
																	</div>
																</motion.div>
															))}
													</div>
												)
											)}
										</div>
									</div>

									{/* Carousel Indicators */}
									{filteredRepos.length > 3 && (
										<div className="flex justify-center mt-6 space-x-2">
											{Array.from(
												{ length: Math.ceil(filteredRepos.length / 3) },
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
														aria-label={`Go to slide ${index + 1}`}
													></button>
												)
											)}
										</div>
									)}
								</div>
							)}
						</motion.div>

						{/* Call to action */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
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
								opportunities to be part of your vision. Let's connect and
								explore how we can work together to build something amazing.
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
									<FontAwesomeIcon icon={faArrowRight} className="mr-2" />
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
									<FontAwesomeIcon icon={faGithub} className="mr-2" />
									See All Projects
								</a>
							</div>
						</motion.div>

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
								<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
								Previous: Experience
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
								Next: Contact
								<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
							</Link>
						</div>
					</>
				)}
			</div>
		</section>
	);
}

export default Projects;
