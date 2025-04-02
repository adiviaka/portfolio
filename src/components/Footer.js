import React from "react";
import { colors } from "../App";

function Footer() {
	return (
		<footer
			className="py-6 border-t"
			style={{ borderColor: `${colors.pink}30` }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-sm" style={{ color: colors.darkRed }}>
						© {new Date().getFullYear()} Adivia Khusnul Aisha. All rights
						reserved.
					</div>
					<div className="flex space-x-4 mt-4 md:mt-0">
						<a
							href="https://www.linkedin.com/in/adiviakhusnulaisha"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-900 transition-colors"
							style={{ color: colors.darkRed }}
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/adiviaka"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-900 transition-colors"
							style={{ color: colors.darkRed }}
						>
							GitHub
						</a>
						<a
							href="/contact"
							className="hover:text-gray-900 transition-colors"
							style={{ color: colors.darkRed }}
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
