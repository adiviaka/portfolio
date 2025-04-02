import React from "react";
import { colors } from "../App";

function Skills() {
	// Skills with associated icons
	const techSkills = [
		{ name: "PHP", icon: "devicon-php-plain" },
		{ name: "Laravel", icon: "devicon-laravel-plain" },
		{ name: "MySQL", icon: "devicon-mysql-plain" },
		{ name: "JavaScript", icon: "devicon-javascript-plain" },
		{ name: "HTML", icon: "devicon-html5-plain" },
		{ name: "CSS", icon: "devicon-css3-plain" },
		{ name: "Git", icon: "devicon-git-plain" },
		{ name: "Bootstrap", icon: "devicon-bootstrap-plain" },
		{ name: "Tailwind", icon: "devicon-tailwindcss-plain" },
	];

	// Skill categories in magazine-style layout
	const skillCategories = [
		{
			title: "Backend Development",
			description: "Creating robust server-side applications",
			size: "large", // large, medium, small for different box sizes
			color: colors.darkRed,
			items: ["Laravel", "PHP", "MySQL", "RESTful API", "Authentication"],
		},
		{
			title: "Frontend",
			description: "Building responsive interfaces",
			size: "medium",
			color: colors.pink,
			items: ["HTML", "CSS", "JavaScript", "Bootstrap"],
		},
		{
			title: "Tools & Workflow",
			description: "Development collaboration",
			size: "medium",
			color: colors.darkGreen,
			items: ["Postman", "Git", "API Documentation", "Version Control"],
		},
		{
			title: "Design Skills",
			description: "UI/UX design tools",
			size: "small",
			color: colors.darkRed,
			items: ["Figma", "Canva"],
		},
		{
			title: "Soft Skills",
			description: "Professional abilities",
			size: "small",
			color: colors.pink,
			items: ["Leadership", "Public Speaking", "Problem Solving"],
		},
		{
			title: "Microsoft Office",
			description: "Productivity suite proficiency",
			size: "medium",
			color: colors.darkGreen,
			items: ["Word", "Excel", "PowerPoint", "OneNote"],
		},
	];

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

				{/* Tech skills with icons */}
				<div className="mb-12">
					<h3
						className="text-xl font-semibold mb-6"
						style={{ color: colors.darkRed }}
					>
						Technical Skills
					</h3>

					{/* Note: You'll need to add the Devicon library to your HTML head:
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"> */}
					<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
						{techSkills.map((skill, index) => (
							<div
								key={index}
								className="flex flex-col items-center justify-center p-4 rounded-lg transition-transform hover:scale-110"
								style={{
									backgroundColor: colors.white,
									border: `1px solid ${colors.lightGreen}`,
									boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
								}}
							>
								<i
									className={`${skill.icon} text-4xl mb-2`}
									style={{ color: colors.darkRed }}
								></i>
								<span
									className="text-sm font-medium"
									style={{ color: colors.darkGreen }}
								>
									{skill.name}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Magazine-style skill categories */}
				<div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto">
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

				{/* Add note about continuous learning */}
				<div
					className="mt-10 p-6 rounded-lg text-center"
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
			</div>
		</section>
	);
}

export default Skills;
