import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../App";

function About() {
	return (
		<section
			id="about"
			className="pt-24 py-16"
			style={{ backgroundColor: colors.background, minHeight: "100vh" }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div>
						<h2
							className="text-3xl font-bold tracking-tight mb-6"
							style={{ color: colors.darkRed }}
						>
							About Me
						</h2>

						<div className="space-y-4 text-gray-600">
							<p>
								Hello! I'm Adivia, a computer engineering graduate from
								Universitas Diponegoro in Semarang, Indonesia. I'm dedicated to
								creating beautiful, functional digital experiences that solve
								real problems.
							</p>

							<p>
								With expertise in backend development using PHP, Laravel, and
								MySQL, I enjoy building robust server-side applications and
								APIs. I'm also skilled in frontend collaboration and design
								tools like Figma for creating seamless user experiences.
							</p>

							<p>
								I'm an eager and adaptable learner with a proactive approach to
								professional development. Currently working as a part-time
								English coding teacher at Timedoor Academy and as a back-end
								developer at Awan Network Indonesia, I'm always looking for
								opportunities to grow and learn.
							</p>
						</div>

						<div className="mt-6">
							<Link
								to="/contact"
								className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
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

					<div className="flex justify-center">
						<div
							className="rounded-lg shadow-lg overflow-hidden"
							style={{
								maxWidth: "450px",
								borderWidth: "1px",
								borderStyle: "solid",
								borderColor: colors.lightGreen,
							}}
						>
							<div
								className="flex items-center p-3"
								style={{ backgroundColor: colors.darkRed }}
							>
								<div className="flex space-x-2">
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
								<div className="ml-4 text-white text-xs font-medium">
									ApiController.php
								</div>
							</div>
							<div
								className="p-4 font-mono text-sm overflow-x-auto"
								style={{
									backgroundColor: "#282c34",
									color: "#abb2bf",
									whiteSpace: "pre",
								}}
							>
								{`public function getProjects(Request $request)
{
    try {
        $projects = Project::with(['technologies'])
            ->where('status', 'published')
            ->orderBy('created_at', 'desc')
            ->paginate($request->per_page ?? 10);
            
        return ResponseFormatter::success(
            $projects,
            'Projects retrieved successfully'
        );
    } catch (Exception $e) {
        return ResponseFormatter::error(
            'An error occurred',
            500,
            $e->getMessage()
        );
    }
}`}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12">
					<h3
						className="text-2xl font-bold mb-4"
						style={{ color: colors.darkRed }}
					>
						Education
					</h3>
					<div
						className="p-6 rounded-lg"
						style={{
							backgroundColor: `${colors.lightGreen}10`,
							borderWidth: "1px",
							borderStyle: "solid",
							borderColor: colors.lightGreen,
						}}
					>
						<div className="flex flex-col md:flex-row justify-between mb-2">
							<h4
								className="text-xl font-semibold"
								style={{ color: colors.darkRed }}
							>
								Bachelor Degree in Computer Engineering
							</h4>
							<span
								className="text-sm font-medium"
								style={{ color: colors.darkGreen }}
							>
								Aug 2020 - Mar 2024
							</span>
						</div>
						<p className="text-lg mb-2" style={{ color: colors.darkGreen }}>
							Universitas Diponegoro - Semarang, Indonesia
						</p>
						<p className="text-gray-600">
							Specialized in backend development with expertise in PHP, Laravel,
							and MySQL. Skilled in API development, frontend collaboration, and
							design tools like Figma. Proficient in Microsoft Office for clear
							communication and documentation.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
