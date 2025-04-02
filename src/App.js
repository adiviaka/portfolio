import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust if in different folder
import Footer from "./components/Footer"; // Adjust if in different folder
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./fontawesome"; // Adjust if needed

// Lily-inspired color palette
export const colors = {
	darkRed: "#893941",
	pink: "#CB7885",
	lightGreen: "#D4D994",
	darkGreen: "#5E6623",
	background: "#f9f9f7",
	white: "#ffffff",
};

function App() {
	return (
		<Router>
			<div
				className="min-h-screen flex flex-col"
				style={{ backgroundColor: colors.background }}
			>
				<Navbar />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
