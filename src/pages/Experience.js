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
									description="Delivering engaging coding education using Timedoor Academy's comprehensive curriculum, teaching students both in English and Indonesian. Effectively communicating complex programming concepts including Python, JavaScript, HTML, and CSS through structured lesson plans. Guiding students through hands-on projects in web development, game creation using Scratch, and basic robotics programming. Maintaining high student engagement through interactive teaching methods and providing timely progress updates to parents regarding children's development in programming skills."
									skills={[
										"Teaching",
										"Python",
										"JavaScript",
										"HTML",
										"CSS",
										"Scratch",
										"Robotics Programming",
									]}
									color={colors.darkRed}
								/>

								<ExperienceItem
									period="May 2024 - Present"
									company="Awan Network Indonesia"
									title="Back-end Developer"
									description="Developing and maintaining RESTful APIs for an internal ticketing system, enabling streamlined cross-departmental communication and issue tracking. Designing and implementing secure authentication and authorization systems, ensuring proper access control and data protection. Optimizing database queries and implementing caching strategies, resulting in a 40% reduction in API response times. Built robust API endpoints for ticket creation, assignment, status updates, and notification systems. Maintained high availability of API services with 99.9% uptime through proactive monitoring and quick issue resolution."
									skills={[
										"PHP",
										"Laravel",
										"RESTful API",
										"Database Optimization",
										"Authentication Systems",
										"Caching Strategies",
										"API Documentation",
									]}
									color={colors.darkRed}
								/>

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
										"Meeting Management",
									]}
									color={colors.darkRed}
								/>

								<ExperienceItem
									period="Nov 2023 - Mar 2024"
									company="PT Anugerah Emas Hijau (AEHA)"
									title="Backend Developer"
									description="Led a team of 3 software engineers containing backend, frontend, and UI/UX designer, ensuring alignment with project goals. Developed API for Product Distribution Information System achieving 20% increase in website performance. Designed and optimized database structures using MySQL resulting in 20% increase in data retrieval speed. Collaborated with frontend developers and participated in sprint planning, leading to 20% increase in project completion rate. Conducted code reviews resulting in 15% improvement in code quality."
									skills={[
										"PHP",
										"Laravel",
										"MySQL",
										"API Development",
										"Team Leadership",
										"Agile Methodology",
										"Code Review",
									]}
									color={colors.darkRed}
								/>

								<ExperienceItem
									period="Nov 2023 - Jan 2024"
									company="PT Taman Media Indonesia (Crocodic)"
									title="Secretary"
									description="Coordinated administrative tasks of the IoT division, leading to 15% increase in workflow efficiency. Maintained detailed records of divisional activities, resulting in 20% increase in project efficiency. Managed inventory and procurement of supplies, reducing project execution delays by 20%. Collaborated with procurement to connect with vendors and supported budgeting and expense tracking processes."
									skills={[
										"Administration",
										"Project Management",
										"Inventory Management",
										"Budgeting",
										"Vendor Relations",
									]}
									color={colors.darkRed}
								/>

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
										"Survey Methods",
									]}
									color={colors.darkRed}
								/>

								<ExperienceItem
									period="Jun 2022 - Jul 2022"
									company="PT PLN (Persero) UPT Semarang"
									title="UI/UX Designer"
									description="Designed user interfaces and user experiences for the Asset Management System (SIMASE), resulting in 30% increase in user engagement. Created wireframes, mockups, and prototypes to visualize design concepts. Ensured 95% consistency in design elements across the interface. Implemented design solutions in collaboration with development team, ensuring 100% adherence to project milestones."
									skills={[
										"UI/UX Design",
										"Figma",
										"Wireframing",
										"Prototyping",
										"User Research",
										"Design Systems",
									]}
									color={colors.darkRed}
								/>
							</div>
						)}

						{/* Organizational Experience Content */}
						{activeExperience === "organizational" && (
							<div className="space-y-12">
								<ExperienceItem
									period="2021 - 2022"
									company="Various University Organizations"
									title="Committee Member & Leader"
									description="Served in multiple leadership and organizational roles including: Equipment Division of UKM Expo 2021, Public Relation Division of TEC 2021, Commission of Pemira FT 2021, Publication and Documentation of The ACE 2022, and Secretary of KKL Computer Engineering 2020. Led teams, managed events, and coordinated communication across various university activities."
									skills={[
										"Event Management",
										"Public Relations",
										"Team Leadership",
										"Documentation",
										"Communication",
									]}
									color={colors.darkGreen}
								/>

								<ExperienceItem
									period="2020 - 2021"
									company="Various Events"
									title="Master of Ceremony & Moderator"
									description="Served as MC for multiple high-profile events including Recreation 2021, Webinar TOEFL Akbar, LKMMPD 2021, Visiting Lecture on Smart Society 5.0, Career Talk, and Farewell Party. Moderated seminars including Seminar Karir 2021 and Webinar Class Make Up with Girl Boss Indonesia, demonstrating strong public speaking and presentation skills."
									skills={[
										"Public Speaking",
										"Event Moderation",
										"Presentation",
										"Leadership",
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
									period="Feb 2023 - Oct 2023"
									company="Girl Boss Indonesia"
									title="Event Management Division Staff"
									description="Recognized as Best Staff of Event Management Division for April-May 2023 period. Successfully contributed to organizing and executing events for Girl Boss Indonesia's Batch 1 volunteer program. Led committee for Farewell event and received Certificate of Appreciation for outstanding contributions."
									skills={[
										"Event Management",
										"Team Collaboration",
										"Leadership",
										"Organization",
										"Planning",
									]}
									color={colors.pink}
								/>

								<ExperienceItem
									period="2022 - 2023"
									company="Marine Debris Rangers"
									title="School Education Division Volunteer"
									description="Served as an educator in an environmental organization focused on plastic pollution and marine conservation. Developed and delivered educational programs for schools about environmental issues, waste management, and ocean protection. Facilitated interactive workshops to raise awareness about plastic pollution and helped students understand their role in environmental conservation."
									skills={[
										"Environmental Education",
										"Workshop Facilitation",
										"Public Speaking",
										"Curriculum Development",
										"Conservation Awareness",
									]}
									color={colors.pink}
								/>

								<ExperienceItem
									period="2020 - Present"
									company="Various Organizations"
									title="Community Volunteer"
									description="Served as Public Relation Division volunteer for MAF 2020. Regularly volunteered as a teacher for underprivileged children in the 'Johar' market relocation, providing educational support and mentoring to children with limited access to educational resources. Helped organize community events aimed at improving literacy and educational outcomes for marginalized communities."
									skills={[
										"Teaching",
										"Community Service",
										"Public Relations",
										"Education",
										"Social Work",
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
