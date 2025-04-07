import { useState } from "react";
import { colors } from "../App";
import ExperienceItem from "./ExperienceItem";
import WordSearchGame from "./WordSearchGame";

function Experience() {
	// State to track which experience type is active
	const [activeExperience, setActiveExperience] = useState(null);

	// Handle choosing an experience category
	const handleChooseExperience = (experienceType) => {
		setActiveExperience(experienceType);
	};

	return (
		<section
			id="experience"
			className="pt-24 py-16"
			style={{ backgroundColor: colors.background, minHeight: "100vh" }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2
					className="text-3xl font-bold tracking-tight mb-4"
					style={{ color: colors.darkRed }}
				>
					Experience
				</h2>

				{/* Word search game - only shown when no experience is selected */}
				{!activeExperience && (
					<WordSearchGame
						onExperienceSelect={handleChooseExperience}
						colors={colors}
					/>
				)}

				{/* Experience content section - only shown after choosing */}
				{activeExperience && (
					<div>
						{/* Experience navigation tabs */}
						<div className="flex flex-wrap gap-2 mb-6 border-b">
							<button
								onClick={() => setActiveExperience("work")}
								className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
									activeExperience === "work" ? "border-b-2" : ""
								}`}
								style={{
									borderColor: colors.darkRed,
									backgroundColor:
										activeExperience === "work"
											? `${colors.darkRed}10`
											: "transparent",
									color: colors.darkRed,
								}}
							>
								Work Experience
							</button>
							<button
								onClick={() => setActiveExperience("organizational")}
								className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
									activeExperience === "organizational" ? "border-b-2" : ""
								}`}
								style={{
									borderColor: colors.darkGreen,
									backgroundColor:
										activeExperience === "organizational"
											? `${colors.darkGreen}10`
											: "transparent",
									color: colors.darkGreen,
								}}
							>
								Organizational Experience
							</button>
							<button
								onClick={() => setActiveExperience("volunteer")}
								className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
									activeExperience === "volunteer" ? "border-b-2" : ""
								}`}
								style={{
									borderColor: colors.pink,
									backgroundColor:
										activeExperience === "volunteer"
											? `${colors.pink}10`
											: "transparent",
									color: colors.pink,
								}}
							>
								Volunteer Experience
							</button>
						</div>

						{/* "Back to game" button */}
						<button
							onClick={() => setActiveExperience(null)}
							className="mb-6 flex items-center gap-2 text-sm px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
							style={{
								backgroundColor: colors.white,
								color: colors.darkRed,
								border: `1px solid ${colors.darkRed}`,
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
								/>
							</svg>
							Back to Word Search
						</button>

						{/* Work Experience Content */}
						{activeExperience === "work" && (
							<div className="space-y-12">
								<ExperienceItem
									period="Jun 2024 - Present"
									company="Timedoor Academy Semarang"
									title="Part Time English Coding Teacher"
									description="Delivering engaging coding education using Timedoor Academy's comprehensive curriculum, teaching students both in English and Indonesian. Effectively communicating complex programming concepts including Python, JavaScript, HTML, and CSS through structured lesson plans. Guiding students through hands-on projects in web development, game creation using Scratch, and basic robotics programming."
									skills={["Teaching", "Python", "JavaScript", "HTML", "CSS"]}
									color={colors.darkRed}
								/>

								<ExperienceItem
									period="May 2024 - Present"
									company="Awan Network Indonesia"
									title="Back-end Developer"
									description="Developing and maintaining RESTful APIs for an internal ticketing system, enabling streamlined cross-departmental communication and issue tracking. Designing and implementing secure authentication and authorization systems, ensuring proper access control and data protection. Optimizing database queries and implementing caching strategies, resulting in a 40% reduction in API response times."
									skills={[
										"PHP",
										"Laravel",
										"API Development",
										"Database Optimization",
										"Authentication Systems",
									]}
									color={colors.darkRed}
								/>

								<ExperienceItem
									period="Nov 2023 - Mar 2024"
									company="PT Anugerah Emas Hijau (AEHA)"
									title="Backend Developer"
									description="Developed API for Product Distribution Information System at PT Anugerah Emas Hijau (AEHA). Led a team of 3 software engineers containing backend, frontend, and UI/UX designer, ensuring alignment with project goals and meeting deadlines with attention to detail. Implemented backend functionalities using PHP and Laravel framework, following best practices and coding standards, resulting in a 20% increase in website performance."
									skills={[
										"PHP",
										"Laravel",
										"MySQL",
										"API Development",
										"Team Leadership",
									]}
									color={colors.darkRed}
								/>
							</div>
						)}

						{/* Organizational Experience Content */}
						{activeExperience === "organizational" && (
							<div className="space-y-12">
								<ExperienceItem
									period="Dec 2023 - Mar 2024"
									company="UNDIP Robotic IMTA Team for Dana Padanan 2024"
									title="Team Assistant"
									description="Managed administrative duties efficiently, resulting in a 20% reduction in meeting scheduling time and a 15% increase in overall team productivity. Implemented a streamlined document organization system, reducing document retrieval time by 25%. Maintained meticulous records of team activities, leading to a 30% decrease in missed project deadlines and ensuring seamless coordination among team members."
									skills={[
										"Administration",
										"Documentation",
										"Team Coordination",
										"Time Management",
									]}
									color={colors.darkGreen}
								/>

								<ExperienceItem
									period="Nov 2023 - Jan 2024"
									company="PT Taman Media Indonesia (Crocodic)"
									title="Secretary"
									description="Coordinated administrative tasks of the IoT division, leading to a 15% increase in workflow efficiency and productivity. Maintained detailed records of divisional activities to enhance accountability and transparency within the division, resulting in a 20% increase in project efficiency."
									skills={[
										"Administration",
										"Documentation",
										"Organization",
										"Communication",
									]}
									color={colors.darkGreen}
								/>
							</div>
						)}

						{/* Volunteer Experience Content */}
						{activeExperience === "volunteer" && (
							<div className="space-y-12">
								<ExperienceItem
									period="Oct 2022 - Nov 2022"
									company="Badan Pusat Statistik Semarang"
									title="Field Data Collection Officer (PPL) of REGSOSEK 2022"
									description="Conducted field surveys to collect data with 98% accuracy, improving data quality and efficiency. Traveled to designated locations or households as per survey requirements, meeting survey objectives effectively. Verified and cross-checked collected data for completeness and accuracy, maintaining data with a 98% accuracy rate. Collaborated with team members and field staff to achieve survey goals and objectives, increasing survey completion rate by 15%."
									skills={[
										"Data Collection",
										"Field Research",
										"Data Verification",
										"Team Collaboration",
									]}
									color={colors.pink}
								/>

								<ExperienceItem
									period="Jun 2022 - Jul 2022"
									company="PT PLN (Persero) UPT Semarang"
									title="UI/UX Designer"
									description="Designed user interfaces and user experiences for the Asset Management System (SIMASE) to ensure usability, efficiency, and user satisfaction, resulting in a 30% increase in user engagement. Created wireframes, mockups, and prototypes to visualize design concepts and facilitate feedback and iteration."
									skills={[
										"UI/UX Design",
										"Wireframing",
										"Prototyping",
										"User Research",
									]}
									color={colors.pink}
								/>
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
}

export default Experience;
