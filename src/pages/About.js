import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { colors } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCode,
	faCoffee,
	faChalkboardTeacher,
	faMicrophone,
	faLeaf,
	faFolderOpen,
	faGraduationCap,
	faBrain,
	faHeart,
	faArrowRight,
	faArrowLeft,
	faGlobe,
	faLock,
	faSignal,
} from "@fortawesome/free-solid-svg-icons";

function About() {
	const [currentFactIndex, setCurrentFactIndex] = useState(0);
	const [apiLoading, setApiLoading] = useState(true);
	const [showResponse, setShowResponse] = useState(false);

	// Simulate API loading effect
	useEffect(() => {
		const timer = setTimeout(() => {
			setApiLoading(false);
			setShowResponse(true);
		}, 1500);
		return () => clearTimeout(timer);
	}, []);

	const funFacts = [
		{
			id: 1,
			icon: faBrain,
			title: "Code Whisperer",
			description:
				"I get genuinely excited when a stubborn bug finally gives up — and yes, I *do* talk to my code (usually nicely).",
			color: colors.darkRed,
			bgColor: `${colors.darkRed}15`,
		},
		{
			id: 2,
			icon: faCoffee,
			title: "Matcha Devotion Level: Extreme",
			description:
				"I bring my tumbler of matcha *everywhere*. It's not a habit, it's a lifestyle. If it's green and foamy, I'm there.",
			color: colors.darkGreen,
			bgColor: `${colors.darkGreen}15`,
		},
		{
			id: 3,
			icon: faChalkboardTeacher,
			title: "More Than Just Teaching",
			description:
				"I love hearing my students' stories just as much as I love teaching them to code. Sometimes I learn more from them than they do from me — and that's the best part.",
			color: colors.pink,
			bgColor: `${colors.pink}15`,
		},
		{
			id: 4,
			icon: faMicrophone,
			title: "Mic? Hand it to me.",
			description:
				"Hosting events, moderating webinars, or MC-ing tech talks? I've done them all — usually with a smile and a perfectly timed dad joke.",
			color: colors.darkRed,
			bgColor: `${colors.darkRed}15`,
		},
		{
			id: 5,
			icon: faLeaf,
			title: "Environmentally Minded",
			description:
				"Plastic bottles stress me out. I try my best to reduce waste, choose reusable everything, and live a little greener every day.",
			color: colors.darkGreen,
			bgColor: `${colors.darkGreen}15`,
		},
		{
			id: 6,
			icon: faFolderOpen,
			title: "Organized but Chaotic",
			description:
				'My folders may include names like "final_final_REALfix_v3", but my actual work? Structured, tested, and deployed like a dream.',
			color: colors.pink,
			bgColor: `${colors.pink}15`,
		},
		{
			id: 7,
			icon: faGraduationCap,
			title: "Lifetime Learner Energy",
			description:
				"I get excited about learning new frameworks, new teaching methods, and even budgeting spreadsheets (yes, really).",
			color: colors.darkRed,
			bgColor: `${colors.darkRed}15`,
		},
	];

	const nextFact = () => {
		setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
	};

	const prevFact = () => {
		setCurrentFactIndex(
			(prev) => (prev - 1 + funFacts.length) % funFacts.length
		);
	};

	const currentFact = funFacts[currentFactIndex];

	return (
		<section
			id="about"
			className="pt-32 py-20"
			style={{ backgroundColor: colors.background, minHeight: "100vh" }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* About Me Section - Made wider and more spacious */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-20"
				>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
						{/* Text Content - Takes 2 columns */}
						<div className="lg:col-span-2">
							<h2
								className="text-4xl font-bold tracking-tight mb-8"
								style={{ color: colors.darkRed }}
							>
								💻 About Me
							</h2>

							<div className="space-y-6 text-gray-600 leading-relaxed text-lg">
								<p>
									<strong className="text-gray-800">
										Engineer by degree, backend dev by day, coding teacher by
										passion, and matcha enthusiast in between.
									</strong>
								</p>

								<p>
									By day (and sometimes night), I'm a backend developer who
									builds APIs, structures databases, and occasionally whispers
									encouragement to my Laravel projects when they behave. I work
									at Awan Network Indonesia, where I turn logic into solutions —
									and Postman into my second home.
								</p>

								<p>
									On weekends, I switch hats and become a coding teacher at
									Timedoor Academy. I don't just teach — I talk, I listen, and I
									learn from my students too (even when they don't realize it).
									I genuinely enjoy hearing their little life updates between
									lessons, because to me, tech isn't just about solving problems
									— it's about connecting with people.
								</p>

								<p>
									Outside the code, I'm someone who loves{" "}
									<strong style={{ color: colors.darkRed }}>
										public speaking
									</strong>
									,{" "}
									<strong style={{ color: colors.darkGreen }}>
										volunteering
									</strong>
									, and being that reliable friend who somehow ends up
									organizing everything — from events to Google Drive folders. I
									care deeply about the{" "}
									<strong style={{ color: colors.darkGreen }}>
										environment
									</strong>
									, and I make a conscious effort to reduce waste. I carry my
									trusty tumbler (filled with matcha, obviously) everywhere I
									go, and I always try to choose reusable over disposable —
									because small habits <em>do</em> matter.
								</p>

								<p>
									I'm driven by curiosity, empathy, and the belief that learning
									is a lifelong journey — one best shared with others. Whether
									I'm writing clean code or sipping matcha during a team call, I
									try to show up with kindness, intention, and a little humor.
								</p>
							</div>

							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
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
							</div>
						</div>

						{/* API Browser Interface - Takes 1 column */}
						<div className="lg:col-span-1 flex items-center">
							<motion.div
								className="rounded-lg shadow-lg overflow-hidden w-full"
								style={{
									borderWidth: "1px",
									borderStyle: "solid",
									borderColor: colors.lightGreen,
									backgroundColor: colors.white,
								}}
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.3 }}
							>
								{/* Browser Header */}
								<div
									className="flex items-center justify-between p-3 border-b"
									style={{
										backgroundColor: colors.white,
										borderColor: `${colors.lightGreen}50`,
									}}
								>
									<div className="flex space-x-2">
										<div className="w-3 h-3 rounded-full bg-red-500"></div>
										<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
										<div className="w-3 h-3 rounded-full bg-green-500"></div>
									</div>
									<div className="flex items-center space-x-2">
										<FontAwesomeIcon
											icon={faLock}
											className="text-xs"
											style={{ color: colors.darkGreen }}
										/>
										<FontAwesomeIcon
											icon={faSignal}
											className="text-xs"
											style={{ color: colors.darkGreen }}
										/>
									</div>
								</div>

								{/* Address Bar */}
								<div
									className="flex items-center p-3 border-b"
									style={{
										backgroundColor: `${colors.lightGreen}10`,
										borderColor: `${colors.lightGreen}30`,
									}}
								>
									<FontAwesomeIcon
										icon={faGlobe}
										className="mr-2 text-sm"
										style={{ color: colors.darkGreen }}
									/>
									<div
										className="flex-1 text-sm font-mono px-3 py-1 rounded"
										style={{
											backgroundColor: colors.white,
											color: colors.darkGreen,
											border: `1px solid ${colors.lightGreen}`,
										}}
									>
										GET /api/developer/adivia
									</div>
								</div>

								{/* Response Headers */}
								<div
									className="p-3 border-b text-xs"
									style={{
										backgroundColor: `${colors.darkGreen}05`,
										borderColor: `${colors.lightGreen}30`,
										color: colors.darkGreen,
									}}
								>
									<div className="font-mono space-y-1">
										<div>
											Status:{" "}
											<span style={{ color: colors.darkRed }}>200 OK</span>
										</div>
										<div>
											Content-Type:{" "}
											<span style={{ color: colors.darkRed }}>
												application/json
											</span>
										</div>
										<div>
											Response-Time:{" "}
											<span style={{ color: colors.darkRed }}>127ms</span>
										</div>
									</div>
								</div>

								{/* JSON Response */}
								<div className="p-4" style={{ backgroundColor: "#282c34" }}>
									{apiLoading ? (
										<div className="flex items-center justify-center py-8">
											<div className="flex items-center space-x-2 text-gray-400">
												<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
												<div
													className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
													style={{ animationDelay: "0.1s" }}
												></div>
												<div
													className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
													style={{ animationDelay: "0.2s" }}
												></div>
												<span className="ml-2 text-sm">Loading...</span>
											</div>
										</div>
									) : (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.5 }}
											className="font-mono text-sm"
											style={{ color: "#abb2bf" }}
										>
											<div>
												<span style={{ color: "#61AFEF" }}>{"{"}</span>
											</div>
											<div className="ml-2">
												<span style={{ color: "#E06C75" }}>"status"</span>
												<span style={{ color: "#ABB2BF" }}>: </span>
												<span style={{ color: "#98C379" }}>"success"</span>
												<span style={{ color: "#ABB2BF" }}>,</span>
											</div>
											<div className="ml-2">
												<span style={{ color: "#E06C75" }}>"developer"</span>
												<span style={{ color: "#ABB2BF" }}>: </span>
												<span style={{ color: "#98C379" }}>
													"Adivia Khusnul Aisha"
												</span>
												<span style={{ color: "#ABB2BF" }}>,</span>
											</div>
											<div className="ml-2">
												<span style={{ color: "#E06C75" }}>"current_mood"</span>
												<span style={{ color: "#ABB2BF" }}>: </span>
												<span style={{ color: "#98C379" }}>
													"coding with matcha ☕"
												</span>
												<span style={{ color: "#ABB2BF" }}>,</span>
											</div>
											<div className="ml-2">
												<span style={{ color: "#E06C75" }}>"specialties"</span>
												<span style={{ color: "#ABB2BF" }}>: [</span>
											</div>
											<div className="ml-4">
												<span style={{ color: "#98C379" }}>"PHP"</span>
												<span style={{ color: "#ABB2BF" }}>, </span>
												<span style={{ color: "#98C379" }}>"Laravel"</span>
												<span style={{ color: "#ABB2BF" }}>, </span>
												<span style={{ color: "#98C379" }}>"APIs"</span>
												<span style={{ color: "#ABB2BF" }}>, </span>
												<span style={{ color: "#98C379" }}>"Teaching"</span>
											</div>
											<div className="ml-2">
												<span style={{ color: "#ABB2BF" }}>],</span>
											</div>
											<div className="ml-2">
												<span style={{ color: "#E06C75" }}>"fun_fact"</span>
												<span style={{ color: "#ABB2BF" }}>: </span>
												<span style={{ color: "#98C379" }}>
													"Talks to code (and it listens!)"
												</span>
												<span style={{ color: "#ABB2BF" }}>,</span>
											</div>
											<div className="ml-2">
												<span style={{ color: "#E06C75" }}>
													"environment_friendly"
												</span>
												<span style={{ color: "#ABB2BF" }}>: </span>
												<span style={{ color: "#D19A66" }}>true</span>
												<span style={{ color: "#ABB2BF" }}>,</span>
											</div>
											<div className="ml-2">
												<span style={{ color: "#E06C75" }}>
													"available_for"
												</span>
												<span style={{ color: "#ABB2BF" }}>: </span>
												<span style={{ color: "#98C379" }}>
													"backend magic ✨"
												</span>
											</div>
											<div>
												<span style={{ color: "#61AFEF" }}>{"}"}</span>
												<span
													className="ml-1 animate-pulse"
													style={{ color: "#ABB2BF" }}
												>
													|
												</span>
											</div>
										</motion.div>
									)}
								</div>

								{/* Footer */}
								<div
									className="px-4 py-2 text-xs border-t"
									style={{
										backgroundColor: `${colors.lightGreen}05`,
										borderColor: `${colors.lightGreen}30`,
										color: colors.darkGreen,
									}}
								>
									✨ Live API • Powered by caffeine & curiosity
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* Fun Facts Section - Single Interactive Card */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.6 }}
					className="mb-20"
				>
					<div className="text-center mb-10">
						<h3
							className="text-3xl font-bold mb-4"
							style={{ color: colors.darkRed }}
						>
							🍵 Fun Facts About Me
						</h3>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Click the arrows or tap the card to discover more quirky things
							about me!
						</p>
					</div>

					<div className="max-w-2xl mx-auto">
						<motion.div
							className="relative overflow-hidden rounded-xl p-8 cursor-pointer"
							style={{
								backgroundColor: colors.white,
								border: `3px solid ${currentFact.color}`,
								boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
							}}
							whileHover={{
								scale: 1.02,
								y: -5,
							}}
							whileTap={{ scale: 0.98 }}
							onClick={nextFact}
							key={currentFact.id} // This forces re-animation when fact changes
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
						>
							{/* Background decoration */}
							<div
								className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 transform translate-x-12 -translate-y-12"
								style={{ backgroundColor: currentFact.color }}
							></div>

							{/* Navigation arrows */}
							<button
								onClick={(e) => {
									e.stopPropagation();
									prevFact();
								}}
								className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
								style={{
									backgroundColor: `${currentFact.color}20`,
									color: currentFact.color,
								}}
							>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>

							<button
								onClick={(e) => {
									e.stopPropagation();
									nextFact();
								}}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
								style={{
									backgroundColor: `${currentFact.color}20`,
									color: currentFact.color,
								}}
							>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>

							{/* Content */}
							<div className="text-center px-12">
								{/* Icon */}
								<div
									className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
									style={{
										backgroundColor: currentFact.color,
										color: "white",
									}}
								>
									<FontAwesomeIcon
										icon={currentFact.icon}
										className="text-2xl"
									/>
								</div>

								{/* Title */}
								<h4
									className="text-2xl font-bold mb-4"
									style={{ color: currentFact.color }}
								>
									{currentFact.title}
								</h4>

								{/* Description */}
								<p className="text-gray-700 text-lg leading-relaxed mb-6">
									{currentFact.description}
								</p>

								{/* Counter */}
								<div className="flex justify-center items-center space-x-2">
									{funFacts.map((_, index) => (
										<button
											key={index}
											onClick={(e) => {
												e.stopPropagation();
												setCurrentFactIndex(index);
											}}
											className={`w-3 h-3 rounded-full transition-all duration-300 ${
												index === currentFactIndex ? "w-8" : ""
											}`}
											style={{
												backgroundColor:
													index === currentFactIndex
														? currentFact.color
														: `${currentFact.color}30`,
											}}
										></button>
									))}
								</div>
							</div>

							{/* Tap hint */}
							<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
								<div
									className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
									style={{
										backgroundColor: `${currentFact.color}15`,
										color: currentFact.color,
									}}
								>
									Tap to see more!
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* Education Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.6 }}
				>
					<h3
						className="text-3xl font-bold mb-6"
						style={{ color: colors.darkRed }}
					>
						🎓 Education
					</h3>
					<div
						className="p-8 rounded-lg"
						style={{
							backgroundColor: `${colors.lightGreen}10`,
							borderWidth: "1px",
							borderStyle: "solid",
							borderColor: colors.lightGreen,
						}}
					>
						<div className="flex flex-col md:flex-row justify-between mb-4">
							<h4
								className="text-2xl font-semibold"
								style={{ color: colors.darkRed }}
							>
								Bachelor Degree in Computer Engineering
							</h4>
							<span
								className="text-sm font-medium mt-2 md:mt-0"
								style={{ color: colors.darkGreen }}
							>
								Aug 2020 - Mar 2024
							</span>
						</div>
						<p className="text-xl mb-4" style={{ color: colors.darkGreen }}>
							Universitas Diponegoro - Semarang, Indonesia
						</p>
						<div className="space-y-4 text-gray-600 leading-relaxed">
							<p>
								I studied{" "}
								<strong style={{ color: colors.darkRed }}>
									Computer Engineering
								</strong>{" "}
								at Universitas Diponegoro, where I fell in love with backend
								development and problem-solving through code. During college, I
								explored everything from API development and database design to
								UI/UX and public speaking (yes, I was that one person who always
								got picked to be the MC).
							</p>
							<p>
								Outside the classroom, I actively joined organizations,
								volunteered, and grabbed every opportunity to learn something
								new — whether it was building web apps with Laravel, organizing
								campus events, mentoring juniors, or designing interfaces with
								Figma. College wasn't just about passing exams — it was where I
								learned to collaborate, lead, and turn curiosity into real
								projects.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default About;
