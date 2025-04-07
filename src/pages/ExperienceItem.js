import React from "react";
import { colors } from "../App";

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

export default ExperienceItem;
