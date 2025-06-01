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
	faServer,
	faDatabase,
} from "@fortawesome/free-solid-svg-icons";

function Projects() {
	// Featured projects - now with 5 projects and Postman links
	const featuredProjects = [
		{
			title: "API for 'Fassion' E-Commerce Website",
			description:
				"Developed a comprehensive API for 'Fassion' E-Commerce website with improved scalability, performance, and security. Achieved a 20% increase in website performance and data retrieval speed through implementing backend functionalities using PHP and Laravel. Designed and optimized database structures with MySQL for efficient data retrieval.",
			image: "fassion_api.jpeg",
			tags: ["PHP", "Laravel", "MySQL", "REST API", "E-commerce"],
			postman: "https://documenter.getpostman.com/view/25862030/2s93Xu3RXz",
			github: "https://github.com/adiviaka/fassion-api",
			highlights: [
				"RESTful API with authentication",
				"20% performance improvement",
				"Optimized database queries",
				"Comprehensive API documentation",
			],
		},
		{
			title: "Product Distribution Information System",
			description:
				"Led a team of 3 software engineers (backend, frontend, UI/UX designer) to develop an API for Product Distribution Information System at PT Anugerah Emas Hijau. Implemented backend functionalities using PHP and Laravel framework, resulting in a 20% increase in website performance. Successfully managed sprint planning and code reviews, improving project completion rate by 20%.",
			image: "/api/placeholder/600/450",
			tags: [
				"PHP",
				"Laravel",
				"MySQL",
				"API Development",
				"Team Leadership",
				"Agile",
			],
			postman:
				"https://documenter.getpostman.com/view/25862030/product-distribution",
			github: "https://github.com/adiviaka/aeha-product-distribution",
			highlights: [
				"Led 3-person development team",
				"20% performance improvement",
				"20% faster data retrieval",
				"Implemented secure user roles",
				"Agile development practices",
			],
		},
		{
			title: "Internal Ticketing System",
			description:
				"Developed and maintained RESTful APIs for an internal ticketing system at Awan Network Indonesia. Enabled streamlined cross-departmental communication and issue tracking with secure authentication systems. Achieved 40% reduction in API response times through optimization and caching strategies, maintaining 99.9% uptime.",
			image: "/api/placeholder/600/450",
			tags: [
				"PHP",
				"Laravel",
				"RESTful API",
				"Authentication",
				"Database Optimization",
				"Caching",
			],
			postman:
				"https://documenter.getpostman.com/view/25862030/ticketing-system",
			github: "https://github.com/adiviaka/ticketing-system",
			highlights: [
				"40% reduction in API response time",
				"99.9% uptime achieved",
				"Multi-level authentication system",
				"Cross-departmental notification system",
				"Comprehensive API documentation",
			],
		},
		{
			title: "E-Office Management System",
			description:
				"Developed a comprehensive e-office management system for streamlining internal office operations. Built robust APIs for document management, workflow automation, and employee tracking. Implemented secure authentication and role-based access control. Achieved significant improvement in office efficiency and reduced paper-based processes by 80%.",
			image: "/api/placeholder/600/450",
			tags: [
				"PHP",
				"Laravel",
				"MySQL",
				"Document Management",
				"Workflow Automation",
				"RBAC",
			],
			postman: "https://documenter.getpostman.com/view/25862030/eoffice-system",
			github: "https://github.com/adiviaka/eoffice-system",
			highlights: [
				"80% reduction in paper-based processes",
				"Automated workflow management",
				"Role-based access control",
				"Document version control",
				"Real-time notifications",
			],
		},
		{
			title: "Asset Management System (SIMASE)",
			description:
				"Designed user interfaces and user experiences for PLN's Asset Management System (SIMASE). Achieved 30% increase in user engagement through intuitive design and consistent UI elements. Maintained 95% consistency in design elements across the interface and collaborated with development team to ensure 100% adherence to project milestones.",
			image: "/api/placeholder/600/450",
			tags: [
				"UI/UX Design",
				"Figma",
				"Prototyping",
				"User Research",
				"Asset Management",
			],
			demo: "https://simase-demo.netlify.app",
			github: "https://github.com/adiviaka/simase-ui",
			highlights: [
				"30% increase in user engagement",
				"95% design consistency",
				"Complete design system",
				"User-centered design approach",
				"Collaborative development",
			],
		},
	];

	// State for featured projects carousel (separate from GitHub repos)
	const [featuredCurrentSlide, setFeaturedCurrentSlide] = useState(0);

	// State for GitHub repositories
	const [githubRepos, setGithubRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [githubCurrentSlide, setGithubCurrentSlide] = useState(0);
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
				setError(null);

				const apiUrl = "https://api.github.com/users/adiviaka/repos";
				const token = process.env.REACT_APP_GITHUB_TOKEN;
				const headers = token ? { Authorization: `token ${token}` } : {};

				const response = await fetch(apiUrl, { headers });

				if (!response.ok) {
					throw new Error(`GitHub API error: ${response.status}`);
				}

				let repos = await response.json();
				repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

				const reposWithTopics = await Promise.all(
					repos.map(async (repo) => {
						try {
							const topicsResponse = await fetch(repo.url + "/topics", {
								headers: {
									...headers,
									Accept: "application/vnd.github.mercy-preview+json",
								},
							});

							if (topicsResponse.ok) {
								const topicsData = await topicsResponse.json();
								return { ...repo, topics: topicsData.names || [] };
							}

							return { ...repo, topics: [] };
						} catch (err) {
							console.error(`Error fetching topics for ${repo.name}:`, err);
							return { ...repo, topics: [] };
						}
					})
				);

				setGithubRepos(reposWithTopics);
				setLoading(false);
			} catch (err) {
				console.error("Error fetching GitHub repos:", err);
				setError("Failed to fetch GitHub repositories. " + err.message);
				setLoading(false);
			}
		};

		fetchGithubRepos();
	}, []);

	// Function to move to next slide for GitHub repos
	const nextGithubSlide = () => {
		setGithubCurrentSlide((prevSlide) =>
			prevSlide === Math.floor(filteredRepos.length / 3) - 1 ? 0 : prevSlide + 1
		);
	};

	// Function to move to previous slide for GitHub repos
	const prevGithubSlide = () => {
		setGithubCurrentSlide((prevSlide) =>
			prevSlide === 0 ? Math.floor(filteredRepos.length / 3) - 1 : prevSlide - 1
		);
	};

	// Function to handle dot indicators click for GitHub repos
	const goToGithubSlide = (index) => {
		setGithubCurrentSlide(index);
	};

	// Functions for featured projects carousel
	const nextFeaturedSlide = () => {
		setFeaturedCurrentSlide(
			(prevSlide) => (prevSlide + 1) % featuredProjects.length
		);
	};

	const prevFeaturedSlide = () => {
		setFeaturedCurrentSlide((prevSlide) =>
			prevSlide === 0 ? featuredProjects.length - 1 : prevSlide - 1
		);
	};

	const goToFeaturedSlide = (index) => {
		setFeaturedCurrentSlide(index);
	};

	// Create infinite loop array for featured projects
	const getVisibleFeaturedProjects = () => {
		const visibleProjects = [];
		for (let i = 0; i < 3; i++) {
			const projectIndex = (featuredCurrentSlide + i) % featuredProjects.length;
			visibleProjects.push({
				...featuredProjects[projectIndex],
				originalIndex: projectIndex,
			});
		}
		return visibleProjects;
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
				{/* Project Details View - Enhanced Layout */}
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
								className="mb-6 flex items-center gap-2 text-sm px-4 py-2 rounded-md hover:bg-white transition-colors"
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
								{/* Full width image with proper 4:3 aspect ratio */}
								<div className="w-full">
									<div
										className="w-full relative bg-gray-100"
										style={{ aspectRatio: "4/3" }}
									>
										<img
											src={selectedProject.image}
											alt={selectedProject.title}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>

								{/* Content section */}
								<div className="p-6 md:p-8">
									<h2
										className="text-3xl font-bold mb-4"
										style={{ color: colors.darkRed }}
									>
										{selectedProject.title}
									</h2>

									<p className="text-gray-600 mb-6 text-lg leading-relaxed">
										{selectedProject.description}
									</p>

									<div className="mb-6">
										<h3
											className="text-lg font-semibold mb-3"
											style={{ color: colors.darkGreen }}
										>
											Key Highlights
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
											{selectedProject.highlights?.map((highlight, index) => (
												<div key={index} className="flex items-start">
													<span
														className="inline-block mr-3 mt-1 text-sm"
														style={{ color: colors.pink }}
													>
														●
													</span>
													<span className="text-sm">{highlight}</span>
												</div>
											))}
										</div>
									</div>

									<div className="flex flex-wrap gap-2 mb-8">
										{selectedProject.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium"
												style={{
													backgroundColor: `${colors.darkGreen}15`,
													color: colors.darkGreen,
													border: `1px solid ${colors.darkGreen}30`,
												}}
											>
												{tag}
											</span>
										))}
									</div>

									<div className="flex flex-wrap gap-4">
										{/* Primary action - Postman or Demo */}
										{selectedProject.postman && (
											<a
												href={selectedProject.postman}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex h-12 items-center justify-center rounded-md px-6 text-sm font-medium text-white shadow transition-colors"
												style={{ backgroundColor: colors.darkRed }}
												onMouseOver={(e) =>
													(e.currentTarget.style.backgroundColor = colors.pink)
												}
												onMouseOut={(e) =>
													(e.currentTarget.style.backgroundColor =
														colors.darkRed)
												}
											>
												<FontAwesomeIcon icon={faServer} className="mr-2" />
												View API Documentation
											</a>
										)}

										{selectedProject.demo && !selectedProject.postman && (
											<a
												href={selectedProject.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex h-12 items-center justify-center rounded-md px-6 text-sm font-medium text-white shadow transition-colors"
												style={{ backgroundColor: colors.darkRed }}
												onMouseOver={(e) =>
													(e.currentTarget.style.backgroundColor = colors.pink)
												}
												onMouseOut={(e) =>
													(e.currentTarget.style.backgroundColor =
														colors.darkRed)
												}
											>
												<FontAwesomeIcon
													icon={faExternalLinkAlt}
													className="mr-2"
												/>
												Live Demo
											</a>
										)}

										{/* Secondary action - GitHub */}
										<a
											href={selectedProject.github}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex h-12 items-center justify-center rounded-md border px-6 text-sm font-medium shadow-sm transition-colors"
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
											View Source Code
										</a>
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

						{/* Featured projects carousel */}
						<div className="relative mb-16">
							{/* Carousel Controls */}
							<button
								onClick={prevFeaturedSlide}
								className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all -ml-6"
								style={{ border: `2px solid ${colors.darkRed}` }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke={colors.darkRed}
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</button>

							<button
								onClick={nextFeaturedSlide}
								className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all -mr-6"
								style={{ border: `2px solid ${colors.darkRed}` }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke={colors.darkRed}
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</button>

							{/* Carousel Container */}
							<div className="overflow-hidden">
								<motion.div
									className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
									variants={staggerContainer}
									initial="hidden"
									animate="visible"
									key={featuredCurrentSlide}
								>
									{getVisibleFeaturedProjects().map((project, index) => (
										<motion.div
											key={`${project.originalIndex}-${featuredCurrentSlide}`}
											variants={fadeInUp}
											layoutId={`project-${project.title.replace(/\s/g, "-")}`}
											className="flex flex-col rounded-lg overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
											style={{
												backgroundColor: colors.white,
												boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
												border: `1px solid ${colors.pink}30`,
											}}
										>
											<div
												className="relative group"
												style={{ aspectRatio: "4/3" }}
											>
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
												<div className="flex gap-2">
													<button
														onClick={() => openProjectDetails(project)}
														className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow transition-colors flex-1"
														style={{ backgroundColor: colors.darkRed }}
														onMouseOver={(e) =>
															(e.currentTarget.style.backgroundColor =
																colors.pink)
														}
														onMouseOut={(e) =>
															(e.currentTarget.style.backgroundColor =
																colors.darkRed)
														}
													>
														View Details
													</button>

													{/* Primary link - Postman or Demo */}
													{project.postman && (
														<a
															href={project.postman}
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
																e.currentTarget.style.borderColor =
																	colors.darkGreen;
															}}
															onMouseOut={(e) => {
																e.currentTarget.style.backgroundColor = "white";
																e.currentTarget.style.borderColor =
																	colors.darkRed;
															}}
															aria-label={`API Documentation for ${project.title}`}
														>
															<FontAwesomeIcon icon={faServer} />
														</a>
													)}

													{project.demo && !project.postman && (
														<a
															href={project.demo}
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
																e.currentTarget.style.borderColor =
																	colors.darkGreen;
															}}
															onMouseOut={(e) => {
																e.currentTarget.style.backgroundColor = "white";
																e.currentTarget.style.borderColor =
																	colors.darkRed;
															}}
															aria-label={`Live Demo for ${project.title}`}
														>
															<FontAwesomeIcon icon={faExternalLinkAlt} />
														</a>
													)}
												</div>
											</div>
										</motion.div>
									))}
								</motion.div>
							</div>

							{/* Carousel Indicators */}
							<div className="flex justify-center mt-8 space-x-3">
								{featuredProjects.map((_, index) => (
									<button
										key={index}
										onClick={() => goToFeaturedSlide(index)}
										className={`transition-all duration-300 rounded-full ${
											featuredCurrentSlide === index ? "w-8 h-3" : "w-3 h-3"
										}`}
										style={{
											backgroundColor:
												featuredCurrentSlide === index
													? colors.darkRed
													: colors.lightGreen,
										}}
										aria-label={`Go to project ${index + 1}`}
									></button>
								))}
							</div>

							{/* Project counter */}
							<div className="text-center mt-4">
								<span className="text-sm" style={{ color: colors.darkGreen }}>
									Project {featuredCurrentSlide + 1} of{" "}
									{featuredProjects.length}
								</span>
							</div>
						</div>

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
												onClick={prevGithubSlide}
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
												onClick={nextGithubSlide}
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
												transform: `translateX(-${githubCurrentSlide * 100}%)`,
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
														onClick={() => goToGithubSlide(index)}
														className={`w-3 h-3 rounded-full transition-all ${
															githubCurrentSlide === index ? "w-6" : ""
														}`}
														style={{
															backgroundColor:
																githubCurrentSlide === index
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
					</>
				)}
			</div>
		</section>
	);
}

export default Projects;
