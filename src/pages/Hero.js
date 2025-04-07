import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { colors } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowRight,
	faCode,
	faDatabase,
	faServer,
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
	const [currentText, setCurrentText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [typingSpeed, setTypingSpeed] = useState(150);
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

	const phrases = [
		"Backend Developer",
		"API Designer",
		"Database Engineer",
		"Problem Solver",
	];

	useEffect(() => {
		const phrase = phrases[currentPhraseIndex];
		const timeout = setTimeout(() => {
			// Typing effect
			if (!isDeleting) {
				setCurrentText(phrase.substring(0, currentIndex + 1));
				setCurrentIndex((prevIndex) => prevIndex + 1);

				// If completed typing the current phrase
				if (currentIndex === phrase.length) {
					// Pause at the end of the phrase
					setTypingSpeed(1500);
					setIsDeleting(true);
				} else {
					// Normal typing speed
					setTypingSpeed(50 + Math.random() * 50);
				}
			}
			// Deleting effect
			else {
				setCurrentText(phrase.substring(0, currentIndex - 1));
				setCurrentIndex((prevIndex) => prevIndex - 1);

				// If completed deleting the current phrase
				if (currentIndex === 0) {
					setIsDeleting(false);
					setCurrentPhraseIndex(
						(prevIndex) => (prevIndex + 1) % phrases.length
					);
					// Quick transition to next phrase
					setTypingSpeed(200);
				} else {
					// Faster deletion speed
					setTypingSpeed(30);
				}
			}
		}, typingSpeed);

		return () => clearTimeout(timeout);
	}, [currentIndex, isDeleting, currentPhraseIndex, typingSpeed, phrases]);

	// Animated skill cards
	const skills = [
		{ icon: faCode, name: "PHP & Laravel", color: "#8892BF" },
		{ icon: faDatabase, name: "MySQL", color: "#00758F" },
		{ icon: faServer, name: "API Development", color: "#FF9900" },
	];

	return (
		<section
			className="relative min-h-screen flex flex-col justify-center overflow-hidden"
			style={{ backgroundColor: colors.background }}
		>
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
					style={{ backgroundColor: colors.pink }}
				/>
				<div
					className="absolute top-1/3 -left-32 w-96 h-96 rounded-full opacity-10"
					style={{ backgroundColor: colors.darkGreen }}
				/>
				<div
					className="absolute -bottom-40 right-1/4 w-80 h-80 rounded-full opacity-10"
					style={{ backgroundColor: colors.darkRed }}
				/>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-24">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
						{/* Left column - Text content */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="order-2 lg:order-1"
						>
							<div className="space-y-6">
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.2, duration: 0.5 }}
								>
									<div
										className="inline-flex items-center py-1 px-3 rounded-full text-sm font-medium mb-2"
										style={{
											backgroundColor: `${colors.lightGreen}30`,
											color: colors.darkGreen,
										}}
									>
										<span className="relative flex h-2 w-2 mr-2">
											<span
												className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
												style={{ backgroundColor: colors.darkGreen }}
											></span>
											<span
												className="relative inline-flex rounded-full h-2 w-2"
												style={{ backgroundColor: colors.darkGreen }}
											></span>
										</span>
										Available for new projects
									</div>
								</motion.div>

								<div>
									<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
										<span style={{ color: colors.darkRed }}>
											Adivia Khusnul Aisha
										</span>
									</h1>
									<div className="h-8 sm:h-10">
										<div
											className="text-xl sm:text-2xl font-medium relative inline-block after:content-['|'] after:animate-blink after:ml-1 after:text-current"
											style={{ color: colors.pink }}
										>
											{currentText}
											<span className="opacity-0 select-none">|</span>
										</div>
									</div>
								</div>

								<motion.p
									className="text-gray-600 text-lg max-w-lg"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.4, duration: 0.6 }}
								>
									A passionate backend developer specializing in PHP, Laravel,
									and MySQL. I create efficient, scalable solutions to solve
									complex problems.
								</motion.p>

								<motion.div
									className="flex flex-wrap gap-3 pt-4"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6, duration: 0.6 }}
								>
									<Link
										to="/contact"
										className="inline-flex h-12 items-center justify-center rounded-md px-6 text-sm font-medium text-white transition-all duration-300"
										style={{ backgroundColor: colors.darkRed }}
										onMouseOver={(e) => {
											e.currentTarget.style.backgroundColor = colors.pink;
											e.currentTarget.style.transform = "translateY(-2px)";
											e.currentTarget.style.boxShadow =
												"0 4px 12px rgba(0,0,0,0.1)";
										}}
										onMouseOut={(e) => {
											e.currentTarget.style.backgroundColor = colors.darkRed;
											e.currentTarget.style.transform = "translateY(0)";
											e.currentTarget.style.boxShadow = "none";
										}}
									>
										<span>Let's Connect</span>
										<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
									</Link>

									<a
										href="/Resume.pdf"
										className="inline-flex h-12 items-center justify-center rounded-md border px-6 text-sm font-medium transition-all duration-300"
										style={{
											backgroundColor: "transparent",
											color: colors.darkRed,
											borderColor: colors.darkRed,
										}}
										onMouseOver={(e) => {
											e.currentTarget.style.backgroundColor = `${colors.lightGreen}20`;
											e.currentTarget.style.borderColor = colors.darkGreen;
											e.currentTarget.style.transform = "translateY(-2px)";
											e.currentTarget.style.boxShadow =
												"0 4px 12px rgba(0,0,0,0.05)";
										}}
										onMouseOut={(e) => {
											e.currentTarget.style.backgroundColor = "transparent";
											e.currentTarget.style.borderColor = colors.darkRed;
											e.currentTarget.style.transform = "translateY(0)";
											e.currentTarget.style.boxShadow = "none";
										}}
										download
									>
										Download CV
									</a>
								</motion.div>

								{/* Stats counter */}
								<motion.div
									className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 max-w-md"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.8, duration: 0.6 }}
								>
									<StatCounter
										number={2}
										label="Years Experience"
										color={colors.darkRed}
									/>
									<StatCounter
										number={25}
										label="Projects"
										color={colors.pink}
									/>
									<StatCounter
										number={10}
										label="Skills"
										color={colors.darkGreen}
									/>
								</motion.div>
							</div>
						</motion.div>

						{/* Right column - Profile image and skill cards */}
						<motion.div
							className="order-1 lg:order-2 relative"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
						>
							<div className="relative mx-auto max-w-sm lg:max-w-full">
								{/* Main image container */}
								<motion.div
									className="relative z-10"
									animate={{
										y: [0, -8, 0],
									}}
									transition={{
										repeat: Infinity,
										duration: 5,
										ease: "easeInOut",
									}}
								>
									<div
										className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white shadow-xl mx-auto relative overflow-hidden"
										style={{
											borderWidth: "6px",
											borderStyle: "solid",
											borderColor: `${colors.lightGreen}50`,
										}}
									>
										<img
											src="/api/placeholder/500/500"
											alt="Adivia Khusnul Aisha"
											className="w-full h-full object-cover object-center"
											loading="lazy"
										/>
									</div>

									{/* Social media links positioned around image */}
									<SocialLink
										href="https://github.com/adiviaka"
										icon={faGithub}
										position="absolute -bottom-4 -left-2 sm:left-2"
										color={colors.darkRed}
									/>

									<SocialLink
										href="https://www.linkedin.com/in/adiviakhusnulaisha"
										icon={faLinkedin}
										position="absolute -top-2 -right-2 sm:right-2"
										color={colors.darkRed}
									/>
								</motion.div>

								{/* Animated skill cards positioned around the image */}
								<div className="absolute inset-0 pointer-events-none">
									{skills.map((skill, index) => (
										<SkillCard
											key={index}
											icon={skill.icon}
											name={skill.name}
											accentColor={skill.color}
											position={
												index === 0
													? "bottom-20 -left-4 sm:-left-16"
													: index === 1
													? "top-8 -right-4 sm:-right-12"
													: "bottom-0 right-0 sm:right-8"
											}
											delay={0.8 + index * 0.2}
										/>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2 }}
			>
				<motion.div
					className="text-sm font-medium mb-2"
					style={{ color: colors.darkGreen }}
					animate={{ y: [0, 5, 0] }}
					transition={{ repeat: Infinity, duration: 1.5 }}
				>
					Scroll Down
				</motion.div>
				<motion.div
					className="w-5 h-10 border-2 rounded-full flex justify-center"
					style={{ borderColor: colors.darkRed }}
				>
					<motion.div
						className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"
						style={{ backgroundColor: colors.darkRed }}
						animate={{ y: [0, 15, 0] }}
						transition={{ repeat: Infinity, duration: 1.5 }}
					/>
				</motion.div>
			</motion.div>
		</section>
	);
}

// Animated counter component
function StatCounter({ number, label, color }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (count < number) {
			const timeout = setTimeout(() => {
				setCount((prev) => Math.min(prev + 1, number));
			}, 1000 / number);

			return () => clearTimeout(timeout);
		}
	}, [count, number]);

	return (
		<div
			className="p-4 rounded-xl bg-white shadow-sm border text-center transition-transform hover:scale-105 hover:shadow-md"
			style={{ borderColor: `${color}30` }}
		>
			<div className="text-2xl sm:text-3xl font-bold" style={{ color }}>
				{count}+
			</div>
			<div
				className="text-xs font-medium mt-1"
				style={{ color: colors.darkGreen }}
			>
				{label}
			</div>
		</div>
	);
}

// Skill card component
function SkillCard({ icon, name, position, accentColor, delay = 0 }) {
	return (
		<motion.div
			className={`absolute ${position} bg-white shadow-lg rounded-lg p-3 w-32 pointer-events-auto z-20`}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay, duration: 0.5 }}
			style={{ borderLeft: `3px solid ${accentColor}` }}
			whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
		>
			<div className="flex items-center gap-2">
				<div
					className="w-8 h-8 rounded-md flex items-center justify-center"
					style={{ color: accentColor, backgroundColor: `${accentColor}10` }}
				>
					<FontAwesomeIcon icon={icon} />
				</div>
				<div className="text-xs font-medium" style={{ color: colors.darkRed }}>
					{name}
				</div>
			</div>
		</motion.div>
	);
}

// Social link component
function SocialLink({ href, icon, position, color }) {
	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`${position} w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-20`}
			style={{ color }}
			whileHover={{ scale: 1.2, rotate: 10 }}
		>
			<FontAwesomeIcon icon={icon} />
		</motion.a>
	);
}

export default Hero;
