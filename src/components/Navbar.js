import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../App";

function Navbar() {
	const location = useLocation();
	const [activeSection, setActiveSection] = useState("");

	// Update active section based on current route
	useEffect(() => {
		const path = location.pathname;
		setActiveSection(path === "/" ? "home" : path.substring(1));
	}, [location]);

	const NavLink = ({ to, children }) => {
		const isActive = activeSection === (to === "/" ? "home" : to.substring(1));
		return (
			<Link
				to={to}
				className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
					isActive ? "" : "hover:bg-white/50"
				}`}
				style={
					isActive
						? { backgroundColor: colors.darkRed, color: "white" }
						: { color: colors.darkRed }
				}
			>
				{children}
			</Link>
		);
	};

	return (
		<div
			className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-lg"
			style={{
				borderColor: colors.lightGreen,
				backgroundColor: `${colors.background}dd`,
			}}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex-shrink-0">
						<Link
							to="/"
							className="text-xl font-bold"
							style={{ color: colors.darkRed }}
						>
							[aka]
						</Link>
					</div>

					<nav className="hidden md:flex space-x-1">
						<NavLink to="/about">About</NavLink>
						<NavLink to="/skills">Skills</NavLink>
						<NavLink to="/experience">Experience</NavLink>
						<NavLink to="/projects">Projects</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</nav>

					<div className="flex items-center space-x-4">
						<a
							href="https://www.linkedin.com/in/adiviakhusnulaisha"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full transition-colors"
							style={{ color: colors.darkRed, backgroundColor: "transparent" }}
							onMouseOver={(e) =>
								(e.currentTarget.style.backgroundColor = `${colors.lightGreen}50`)
							}
							onMouseOut={(e) =>
								(e.currentTarget.style.backgroundColor = "transparent")
							}
						>
							<FontAwesomeIcon icon={["fab", "linkedin"]} />
						</a>
						<a
							href="https://github.com/adiviaka"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full transition-colors"
							style={{ color: colors.darkRed, backgroundColor: "transparent" }}
							onMouseOver={(e) =>
								(e.currentTarget.style.backgroundColor = `${colors.lightGreen}50`)
							}
							onMouseOut={(e) =>
								(e.currentTarget.style.backgroundColor = "transparent")
							}
						>
							<FontAwesomeIcon icon={["fab", "github"]} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
