import React, { useState, useEffect, useRef } from "react";
import { colors } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimesCircle,
	faExternalLinkAlt,
	faFileAlt,
	faCertificate,
} from "@fortawesome/free-solid-svg-icons";

// Certificate modal styles with increased size
const modalStyles = {
	overlay: {
		position: "fixed",
		inset: 0,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		zIndex: 50,
		padding: "0.5rem",
	},
	modal: {
		backgroundColor: "white",
		borderRadius: "0.5rem",
		maxWidth: "90vw", // Increased from 2xl to 90% of viewport width
		width: "1000px", // Set explicit large width
		height: "85vh", // Increased from 90% to 85% of viewport height
		display: "flex",
		flexDirection: "column",
		boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "1rem",
		borderBottom: "1px solid #e5e7eb",
	},
	content: {
		padding: "1.5rem", // Increased padding
		overflowY: "auto",
		flexGrow: 1,
	},
	imageContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
	image: {
		maxWidth: "100%",
		maxHeight: "70vh", // Increased image max height
		objectFit: "contain",
		borderRadius: "0.25rem",
		border: "1px solid #e5e7eb",
	},
	pdfContainer: {
		height: "70vh", // Increased PDF container height
	},
	closeButton: {
		padding: "0.5rem",
		borderRadius: "9999px",
		transition: "background-color 0.2s",
		cursor: "pointer",
	},
};

function Skills() {
	// Technical skills with associated icons - add Postman, Scratch, and Construct
	const techSkills = [
		{ name: "PHP", icon: "devicon-php-plain" },
		{ name: "Laravel", icon: "devicon-laravel-plain" },
		{ name: "MySQL", icon: "devicon-mysql-plain" },
		{ name: "JavaScript", icon: "devicon-javascript-plain" },
		{ name: "HTML", icon: "devicon-html5-plain" },
		{ name: "CSS", icon: "devicon-css3-plain" },
		{ name: "Git", icon: "devicon-git-plain" },
		{ name: "Python", icon: "devicon-python-plain" },
		{ name: "Figma", icon: "devicon-figma-plain" },
		{ name: "Postman", icon: "devicon-postman-plain" },
		{ name: "Scratch", icon: "devicon-scratch-plain" },
		{ name: "Construct", icon: "devicon-construct-plain" },
	];

	// Skill categories in magazine-style layout
	const skillCategories = [
		{
			title: "Backend Development",
			description: "Creating robust server-side applications",
			size: "large", // large, medium, small for different box sizes
			color: colors.darkRed,
			items: [
				"Laravel",
				"PHP",
				"MySQL",
				"RESTful API",
				"Authentication",
				"Database Optimization",
				"Caching Strategies",
			],
		},
		{
			title: "Frontend & Design",
			description: "Building user interfaces and experiences",
			size: "medium",
			color: colors.pink,
			items: [
				"HTML",
				"CSS",
				"JavaScript",
				"Figma",
				"UI/UX Design",
				"Wireframing",
				"Prototyping",
			],
		},
		{
			title: "Tools & Workflow",
			description: "Development collaboration and methodology",
			size: "medium",
			color: colors.darkGreen,
			items: [
				"Postman",
				"Git",
				"API Documentation",
				"Version Control",
				"Agile Methodology",
				"Code Review",
			],
		},
		{
			title: "Teaching & Education",
			description: "Technical education and mentoring",
			size: "small",
			color: colors.darkRed,
			items: [
				"Python",
				"Scratch",
				"Robotics",
				"English Coding Education",
				"Curriculum Development",
			],
		},
		{
			title: "Soft Skills",
			description: "Professional abilities and leadership",
			size: "small",
			color: colors.pink,
			items: [
				"Leadership",
				"Public Speaking",
				"Problem Solving",
				"Active Listening",
				"Empathy",
				"Decision Making",
				"Team Collaboration",
			],
		},
		{
			title: "Microsoft Office",
			description: "Productivity suite proficiency",
			size: "medium",
			color: colors.darkGreen,
			items: ["Word", "Excel", "PowerPoint", "OneNote"],
		},
	];

	// Certificates data - updated with color palette
	const certificates = [
		{
			title: "Cloud Practitioner Essentials",
			issuer: "Dicoding Indonesia",
			date: "April 2023",
			type: "pdf",
			credential: "certificates/cloud-aws.pdf",
			color: colors.darkRed,
		},
		{
			title: "Database Design",
			issuer: "Oracle",
			date: "April 2023",
			type: "pdf",
			credential: "certificates/database-design.pdf",
			color: colors.pink,
		},
		{
			title: "Database Programming with SQL",
			issuer: "Oracle",
			date: "April 2023",
			type: "pdf",
			credential: "certificates/database-programming-sql.pdf",
			color: colors.darkGreen,
		},
		{
			title: "Database Foundation",
			issuer: "Oracle",
			date: "May 2022",
			type: "",
			credential: "",
			color: colors.darkRed,
		},
		{
			title: "Introduction to IoT",
			issuer: "Cisco",
			date: "June 2021",
			type: "link",
			credential:
				"https://www.credly.com/badges/84b1aa1e-f0bc-4eb5-be70-df266f66e90e",
			color: colors.pink,
		},
		{
			title: "CCNA: Introduction to Networks",
			issuer: "Cisco",
			date: "August 2021",
			type: "link",
			credential:
				"https://www.credly.com/badges/713b6539-4bbd-4959-aab2-2ebdccae0e0e",
			color: colors.darkGreen,
		},
		{
			title: "IT Essentials: PC Hardware and Software",
			issuer: "Cisco",
			date: "February 2021",
			type: "link",
			credential:
				"https://www.credly.com/badges/b2b5e674-8ae2-4742-88ce-c8b8ee7a3385",
			color: colors.darkRed,
		},
		{
			title: "CCNA: Switching, Routing, and Wireless Essentials",
			issuer: "Cisco",
			date: "December 2021",
			type: "link",
			credential:
				"https://www.credly.com/badges/b806afa6-3658-4bae-9ccf-2b6fea34136d",
			color: colors.pink,
		},
		{
			title: "Introduction to Software Engineering",
			issuer: "RevoU",
			date: "March 2024",
			type: "pdf",
			credential: "/certificates/revou.pdf",
			color: colors.darkGreen,
		},
	];

	// State for certificate modal
	const [selectedCertificate, setSelectedCertificate] = useState(null);
	const [animationPaused, setAnimationPaused] = useState(false);

	// Open certificate modal
	const openCertificateModal = (certificate) => {
		setSelectedCertificate(certificate);
	};

	// Close certificate modal
	const closeCertificateModal = () => {
		setSelectedCertificate(null);
	};

	// Handle hover on carousel
	const handleCarouselHover = (isPaused) => {
		setAnimationPaused(isPaused);
	};

	// Render certificate content based on type
	const renderCertificateContent = () => {
		if (!selectedCertificate) return null;

		switch (selectedCertificate.type) {
			case "link":
				return (
					<div className="flex flex-col items-center justify-center h-full">
						<div className="text-center">
							<h3
								className="text-2xl font-bold mb-4"
								style={{ color: colors.darkRed }}
							>
								{selectedCertificate.title}
							</h3>
							<p className="mb-8 text-gray-600 text-lg">
								This certificate is available at the issuer's website. Click the
								button below to verify.
							</p>
							<a
								href={selectedCertificate.credential}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-3 rounded-md text-white text-lg"
								style={{ backgroundColor: colors.darkRed }}
							>
								<FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
								Verify Certificate
							</a>
						</div>
					</div>
				);
			case "pdf":
				return (
					<div className="h-full flex flex-col">
						<h3
							className="text-2xl font-bold mb-4"
							style={{ color: colors.darkRed }}
						>
							{selectedCertificate.title}
						</h3>
						<div className="flex-grow" style={modalStyles.pdfContainer}>
							<object
								data={selectedCertificate.credential}
								type="application/pdf"
								width="100%"
								height="100%"
								className="border rounded"
							>
								<div className="flex items-center justify-center h-full bg-gray-100 rounded">
									<div className="text-center p-4">
										<FontAwesomeIcon
											icon={faFileAlt}
											className="text-6xl mb-4"
											style={{ color: colors.darkGreen }}
										/>
										<p className="text-lg mb-4">
											PDF cannot be displayed in preview.
										</p>
										<a
											href={selectedCertificate.credential}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block mt-2 px-6 py-3 rounded-md text-white text-lg"
											style={{ backgroundColor: colors.darkRed }}
										>
											Download PDF
										</a>
									</div>
								</div>
							</object>
						</div>
					</div>
				);
			case "image":
				return (
					<div className="h-full flex flex-col">
						<h3
							className="text-2xl font-bold mb-4"
							style={{ color: colors.darkRed }}
						>
							{selectedCertificate.title}
						</h3>
						<div style={modalStyles.imageContainer}>
							<img
								src={selectedCertificate.credential}
								alt={`${selectedCertificate.title} Certificate`}
								style={modalStyles.image}
							/>
						</div>
					</div>
				);
			default:
				return (
					<div className="flex items-center justify-center h-full">
						<p>Certificate preview not available</p>
					</div>
				);
		}
	};

	return (
		<section
			id="skills"
			className="pt-24 py-16"
			style={{ backgroundColor: colors.background, minHeight: "100vh" }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="space-y-2 mb-10">
					<h2
						className="text-3xl font-bold tracking-tight"
						style={{ color: colors.darkRed }}
					>
						My Skills
					</h2>
					<p className="text-lg" style={{ color: colors.darkGreen }}>
						A collection of my technical expertise and professional abilities
					</p>
				</div>

				{/* Tech skills with infinite carousel */}
				<div className="mb-12">
					<h3
						className="text-xl font-semibold mb-6"
						style={{ color: colors.darkRed }}
					>
						Technical Skills
					</h3>

					{/* Infinite carousel container */}
					<div
						className="relative overflow-hidden pb-4"
						onMouseEnter={() => handleCarouselHover(true)}
						onMouseLeave={() => handleCarouselHover(false)}
					>
						<div
							className="skills-carousel-container"
							style={{
								animationPlayState: animationPaused ? "paused" : "running",
							}}
						>
							<div className="skills-carousel">
								{/* Duplicate skills for infinite loop */}
								{[...techSkills, ...techSkills].map((skill, index) => (
									<div key={index} className="skills-carousel-item">
										<div
											className="flex flex-col items-center justify-center p-4 rounded-lg transition-transform hover:scale-110"
											style={{
												backgroundColor: colors.white,
												border: `1px solid ${colors.lightGreen}`,
												boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
												width: "110px",
												height: "110px",
											}}
										>
											<i
												className={`${skill.icon} text-4xl mb-2`}
												style={{ color: colors.darkRed }}
											></i>
											<span
												className="text-sm font-medium text-center"
												style={{ color: colors.darkGreen }}
											>
												{skill.name}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Magazine-style skill categories */}
				<div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto mb-12">
					{skillCategories.map((category, index) => {
						// Determine grid span based on size
						const colSpan =
							category.size === "large"
								? "md:col-span-4"
								: category.size === "medium"
								? "md:col-span-3"
								: "md:col-span-2";
						const rowSpan =
							category.size === "large"
								? "md:row-span-2"
								: category.size === "medium"
								? "md:row-span-1"
								: "md:row-span-1";

						return (
							<div
								key={index}
								className={`rounded-lg p-4 ${colSpan} ${rowSpan} flex flex-col`}
								style={{
									backgroundColor: colors.white,
									border: `2px solid ${category.color}`,
									boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
								}}
							>
								<h3
									className="text-lg font-bold mb-1"
									style={{ color: category.color }}
								>
									{category.title}
								</h3>
								<p className="text-xs mb-3 text-gray-600">
									{category.description}
								</p>

								<div className="flex flex-wrap gap-2 mt-auto">
									{category.items.map((item, itemIndex) => (
										<span
											key={itemIndex}
											className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium"
											style={{
												backgroundColor: `${category.color}15`,
												color: category.color,
												border: `1px solid ${category.color}40`,
											}}
										>
											{item}
										</span>
									))}
								</div>
							</div>
						);
					})}
				</div>

				{/* Certifications - Different style */}
				<div className="mb-12">
					<h3
						className="text-2xl font-bold mb-6"
						style={{ color: colors.darkRed }}
					>
						Certifications
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{certificates.map((cert, index) => (
							<div
								key={index}
								onClick={() => openCertificateModal(cert)}
								className="flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
								style={{
									backgroundColor: colors.white,
									borderLeft: `4px solid ${cert.color}`,
									boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
								}}
							>
								<div
									className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
									style={{ backgroundColor: `${cert.color}20` }}
								>
									<FontAwesomeIcon
										icon={faCertificate}
										className="text-xl"
										style={{ color: cert.color }}
									/>
								</div>
								<div className="flex-grow">
									<h4 className="font-bold" style={{ color: colors.darkRed }}>
										{cert.title}
									</h4>
									<div className="flex justify-between items-center text-sm">
										<span style={{ color: colors.darkGreen }}>
											{cert.issuer}
										</span>
										<span className="text-gray-500">{cert.date}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Add note about continuous learning */}
				<div
					className="p-6 rounded-lg text-center"
					style={{
						backgroundColor: colors.white,
						border: `1px solid ${colors.lightGreen}`,
						boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
					}}
				>
					<h3
						className="text-lg font-semibold mb-2"
						style={{ color: colors.darkRed }}
					>
						Always Learning
					</h3>
					<p className="text-gray-600">
						As a versatile developer with a passion for growth, I'm constantly
						exploring new technologies and approaches. I adapt quickly to
						challenges and bring creative solutions to complex problems.
					</p>
				</div>

				{/* Certificate Modal - ENLARGED VERSION */}
				{selectedCertificate && (
					<div style={modalStyles.overlay}>
						<div style={modalStyles.modal}>
							<div style={modalStyles.header}>
								<div className="flex items-center">
									<div
										className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
										style={{
											backgroundColor: `${selectedCertificate.color}20`,
										}}
									>
										<FontAwesomeIcon
											icon={faCertificate}
											className="text-xl"
											style={{ color: selectedCertificate.color }}
										/>
									</div>
									<div>
										<h3
											className="text-xl font-bold"
											style={{ color: colors.darkRed }}
										>
											{selectedCertificate.title}
										</h3>
										<div className="text-sm">
											<span style={{ color: colors.darkGreen }}>
												{selectedCertificate.issuer}
											</span>
											<span className="text-gray-500 ml-2">
												• {selectedCertificate.date}
											</span>
										</div>
									</div>
								</div>
								<button
									onClick={closeCertificateModal}
									style={modalStyles.closeButton}
									className="hover:bg-gray-100"
									aria-label="Close modal"
								>
									<FontAwesomeIcon
										icon={faTimesCircle}
										className="text-gray-500 text-xl"
									/>
								</button>
							</div>
							<div style={modalStyles.content}>
								{renderCertificateContent()}
							</div>
						</div>
					</div>
				)}
			</div>

			{/* CSS for infinite carousel */}
			<style jsx="true">{`
				.skills-carousel-container {
					overflow: hidden;
					position: relative;
					margin: 0 -10px;
					animation-play-state: running;
				}

				.skills-carousel {
					display: flex;
					width: max-content;
					animation: carouselAnimation 40s linear infinite;
				}

				.skills-carousel-item {
					padding: 10px;
					flex-shrink: 0;
				}

				@keyframes carouselAnimation {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
			`}</style>
		</section>
	);
}

export default Skills;
