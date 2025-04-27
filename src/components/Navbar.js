"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../App";

function Navbar() {
	const location = useLocation();
	const [activeSection, setActiveSection] = useState("");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Update active section based on current route
	useEffect(() => {
		const path = location.pathname;
		setActiveSection(path === "/" ? "home" : path.substring(1));

		// Close mobile menu when route changes
		setMobileMenuOpen(false);
	}, [location]);

	const NavLink = ({ to, children, isMobile = false }) => {
		const isActive = activeSection === (to === "/" ? "home" : to.substring(1));
		return (
			<Link
				to={to}
				className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
					isActive ? "" : "hover:bg-white/50"
				} ${isMobile ? "block w-full text-center py-3" : ""}`}
				style={
					isActive
						? { backgroundColor: colors.darkRed, color: "white" }
						: { color: colors.darkRed }
				}
				onClick={() => isMobile && setMobileMenuOpen(false)}
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

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-1">
						<NavLink to="/about">About</NavLink>
						<NavLink to="/skills">Skills</NavLink>
						<NavLink to="/experience">Experience</NavLink>
						<NavLink to="/projects">Projects</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</nav>

					{/* Social Media Icons - Desktop */}
					<div className="hidden md:flex items-center space-x-4">
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

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							type="button"
							className="p-2 rounded-md"
							style={{ color: colors.darkRed }}
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-expanded={mobileMenuOpen}
						>
							<span className="sr-only">Open main menu</span>
							{mobileMenuOpen ? (
								<FontAwesomeIcon icon="times" className="h-6 w-6" />
							) : (
								<FontAwesomeIcon icon="bars" className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
					mobileMenuOpen ? "max-h-96" : "max-h-0"
				}`}
				style={{
					backgroundColor: `${colors.background}f5`,
					borderBottom: mobileMenuOpen
						? `1px solid ${colors.lightGreen}`
						: "none",
				}}
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					<NavLink to="/about" isMobile>
						About
					</NavLink>
					<NavLink to="/skills" isMobile>
						Skills
					</NavLink>
					<NavLink to="/experience" isMobile>
						Experience
					</NavLink>
					<NavLink to="/projects" isMobile>
						Projects
					</NavLink>
					<NavLink to="/contact" isMobile>
						Contact
					</NavLink>
				</div>

				{/* Social Media Icons - Mobile */}
				<div
					className="flex justify-center space-x-6 py-4 border-t"
					style={{ borderColor: `${colors.lightGreen}50` }}
				>
					<a
						href="https://www.linkedin.com/in/adiviakhusnulaisha"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full transition-colors"
						style={{ color: colors.darkRed, backgroundColor: "transparent" }}
					>
						<FontAwesomeIcon icon={["fab", "linkedin"]} />
					</a>
					<a
						href="https://github.com/adiviaka"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full transition-colors"
						style={{ color: colors.darkRed, backgroundColor: "transparent" }}
					>
						<FontAwesomeIcon icon={["fab", "github"]} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
