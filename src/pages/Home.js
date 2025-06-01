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
							Backend Developer & Coding Teacher
						</div>

						<h1 className="text-5xl md:text-6xl font-bold tracking-tight whitespace-nowrap">
							<span style={{ color: colors.pink }}>I'm </span>
							<span style={{ color: colors.darkRed }}>
								Adivia Khusnul Aisha
							</span>
						</h1>

						<p className="text-xl text-gray-600">
							In a world of bugs and braces, I find peace in the process. I’m a
							backend developer who loves structure, but not afraid of a little
							chaos. I build APIs, guide young coders, and occasionally
							romanticize debugging with a cup of matcha in hand. My journey
							blends logic and empathy, and I’m here to keep learning, teaching,
							and maybe breaking things (just a little).
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
									src="icon adivia-1.jpg"
									alt="Adivia Khusnul Aisha"
									className="w-full h-full object-cover rounded-full p-2"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
