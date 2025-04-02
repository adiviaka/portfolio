import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../App";

function Home() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center py-20"
			style={{ backgroundColor: colors.background }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					{/* Left column - Text content */}
					<div className="md:w-1/2 space-y-6">
						<div
							className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
							style={{
								backgroundColor: colors.lightGreen,
								color: colors.darkGreen,
							}}
						>
							Backend Developer
						</div>

						<h1 className="text-5xl md:text-6xl font-bold tracking-tight whitespace-nowrap">
							<span style={{ color: colors.pink }}>I'm </span>
							<span style={{ color: colors.darkRed }}>
								Adivia Khusnul Aisha
							</span>
						</h1>

						<p className="text-xl text-gray-600">
							A versatile backend developer with a passion for creating
							efficient, scalable solutions. I'm constantly exploring new
							technologies and approaches, adapting quickly to challenges, and
							bringing creative solutions to complex problems.
						</p>

						<div className="flex flex-wrap gap-4 pt-2">
							<a
								href="/Resume.pdf"
								className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors"
								style={{ backgroundColor: colors.darkRed }}
								onMouseOver={(e) =>
									(e.currentTarget.style.backgroundColor = colors.pink)
								}
								onMouseOut={(e) =>
									(e.currentTarget.style.backgroundColor = colors.darkRed)
								}
								download
							>
								Download my CV
							</a>
							<Link
								to="/contact"
								className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors"
								style={{
									backgroundColor: "white",
									color: colors.darkRed,
									borderColor: colors.darkRed,
								}}
								onMouseOver={(e) => {
									e.currentTarget.style.backgroundColor = colors.lightGreen;
									e.currentTarget.style.borderColor = colors.darkGreen;
								}}
								onMouseOut={(e) => {
									e.currentTarget.style.backgroundColor = "white";
									e.currentTarget.style.borderColor = colors.darkRed;
								}}
							>
								Contact Me
							</Link>
						</div>

						{/* Professional highlights */}
						<div className="grid grid-cols-3 gap-4 pt-6">
							<div
								className="py-4 px-2 rounded-md text-center"
								style={{
									backgroundColor: `${colors.lightGreen}10`,
									borderWidth: "1px",
									borderStyle: "solid",
									borderColor: colors.lightGreen,
								}}
							>
								<div
									className="text-3xl font-bold"
									style={{ color: colors.darkRed }}
								>
									2+
								</div>
								<div className="text-sm" style={{ color: colors.darkGreen }}>
									Years Experience
								</div>
							</div>
							<div
								className="py-4 px-2 rounded-md text-center"
								style={{
									backgroundColor: `${colors.pink}10`,
									borderWidth: "1px",
									borderStyle: "solid",
									borderColor: colors.pink,
								}}
							>
								<div
									className="text-3xl font-bold"
									style={{ color: colors.darkRed }}
								>
									25+
								</div>
								<div className="text-sm" style={{ color: colors.darkGreen }}>
									Projects
								</div>
							</div>
							<div
								className="py-4 px-2 rounded-md text-center"
								style={{
									backgroundColor: `${colors.lightGreen}10`,
									borderWidth: "1px",
									borderStyle: "solid",
									borderColor: colors.lightGreen,
								}}
							>
								<div
									className="text-3xl font-bold"
									style={{ color: colors.darkRed }}
								>
									10+
								</div>
								<div className="text-sm" style={{ color: colors.darkGreen }}>
									Skills
								</div>
							</div>
						</div>
					</div>

					{/* Right column - Profile image */}
					<div className="md:w-1/2 flex justify-center">
						<div className="relative max-w-sm">
							<div
								className="w-72 h-72 md:w-80 md:h-80 rounded-full"
								style={{
									background: `radial-gradient(circle, ${colors.pink}30 50%, ${colors.background} 100%)`,
								}}
							>
								<img
									src="/api/placeholder/500/500"
									alt="Adivia Khusnul Aisha"
									className="w-full h-full object-cover rounded-full p-2"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Social links */}
				{/* <div className="mt-16 flex justify-center space-x-6">
					<a
						href="https://www.linkedin.com/in/adiviakhusnulaisha"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
						style={{
							backgroundColor: colors.white,
							color: colors.darkRed,
							border: `1px solid ${colors.lightGreen}`,
						}}
						onMouseOver={(e) => {
							e.currentTarget.style.backgroundColor = colors.lightGreen;
							e.currentTarget.style.color = "white";
						}}
						onMouseOut={(e) => {
							e.currentTarget.style.backgroundColor = colors.white;
							e.currentTarget.style.color = colors.darkRed;
						}}
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
						</svg>
					</a>
					<a
						href="https://github.com/adiviaka"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
						style={{
							backgroundColor: colors.white,
							color: colors.darkRed,
							border: `1px solid ${colors.lightGreen}`,
						}}
						onMouseOver={(e) => {
							e.currentTarget.style.backgroundColor = colors.lightGreen;
							e.currentTarget.style.color = "white";
						}}
						onMouseOut={(e) => {
							e.currentTarget.style.backgroundColor = colors.white;
							e.currentTarget.style.color = colors.darkRed;
						}}
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
					</a>
					<a
						href="mailto:diva.adivia@gmail.com"
						className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
						style={{
							backgroundColor: colors.white,
							color: colors.darkRed,
							border: `1px solid ${colors.lightGreen}`,
						}}
						onMouseOver={(e) => {
							e.currentTarget.style.backgroundColor = colors.lightGreen;
							e.currentTarget.style.color = "white";
						}}
						onMouseOut={(e) => {
							e.currentTarget.style.backgroundColor = colors.white;
							e.currentTarget.style.color = colors.darkRed;
						}}
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
						</svg>
					</a>
				</div> */}
			</div>
		</section>
	);
}

export default Home;
