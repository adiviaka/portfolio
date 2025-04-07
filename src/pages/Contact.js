import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { colors } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faPhone,
	faMapMarkerAlt,
	faCheck,
	faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [formStatus, setFormStatus] = useState({
		submitted: false,
		success: false,
		error: false,
		message: "",
	});

	const [formErrors, setFormErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const formRef = useRef(null);

	const validateForm = () => {
		let valid = true;
		const errors = {
			name: "",
			email: "",
			message: "",
		};

		// Name validation
		if (formData.name.trim().length < 2) {
			errors.name = "Name must be at least 2 characters";
			valid = false;
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			errors.email = "Please enter a valid email address";
			valid = false;
		}

		// Message validation
		if (formData.message.trim().length < 10) {
			errors.message = "Message must be at least 10 characters";
			valid = false;
		}

		setFormErrors(errors);
		return valid;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Clear error when user types
		if (formErrors[name]) {
			setFormErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		// Simulate form submission with a delay
		setFormStatus({
			submitted: true,
			success: false,
			error: false,
			message: "Sending your message...",
		});

		// Simulate a network request
		setTimeout(() => {
			// Success simulation (in a real app, this would be an API call result)
			setFormStatus({
				submitted: true,
				success: true,
				error: false,
				message: "Your message has been sent! I'll get back to you soon.",
			});

			// Reset form after successful submission
			setFormData({ name: "", email: "", subject: "", message: "" });

			// Reset status after a delay
			setTimeout(() => {
				setFormStatus({
					submitted: false,
					success: false,
					error: false,
					message: "",
				});
			}, 5000);
		}, 1500);
	};

	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="contact"
			className="pt-24 py-16"
			style={{ backgroundColor: colors.white, minHeight: "100vh" }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-12"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.1,
							},
						},
					}}
				>
					<motion.div variants={fadeInUp}>
						<h2
							className="text-3xl font-bold tracking-tight mb-6"
							style={{ color: colors.darkRed }}
						>
							Get In Touch
						</h2>
						<p className="text-gray-600 mb-8">
							I'm currently available for freelance work and job opportunities.
							If you have a project that you want to get started, think you need
							my help with something, or just want to say hello, feel free to
							contact me.
						</p>

						<motion.div
							className="space-y-6"
							variants={{
								hidden: {},
								visible: {
									transition: {
										staggerChildren: 0.1,
									},
								},
							}}
						>
							<ContactInfo
								icon={faEnvelope}
								label="Email"
								value="diva.adivia@gmail.com"
								href="mailto:diva.adivia@gmail.com"
							/>
							<ContactInfo
								icon={faPhone}
								label="Phone"
								value="+62 821 3868 2404"
								href="tel:+6282138682404"
							/>
							<ContactInfo
								icon={faLinkedin}
								label="LinkedIn"
								value="linkedin.com/in/adiviakhusnulaisha"
								href="https://www.linkedin.com/in/adiviakhusnulaisha"
							/>
							<ContactInfo
								icon={faGithub}
								label="GitHub"
								value="github.com/adiviaka"
								href="https://github.com/adiviaka"
							/>
						</motion.div>

						<motion.div
							variants={fadeInUp}
							className="mt-8 p-6 rounded-lg"
							style={{
								backgroundColor: `${colors.lightGreen}10`,
								borderWidth: "1px",
								borderStyle: "solid",
								borderColor: colors.lightGreen,
							}}
							whileHover={{
								scale: 1.02,
								boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
							}}
						>
							<div className="flex items-center gap-3">
								<div
									className="w-8 h-8 rounded-full flex items-center justify-center"
									style={{ backgroundColor: colors.darkGreen, color: "white" }}
								>
									<FontAwesomeIcon icon={faMapMarkerAlt} />
								</div>
								<h3
									className="text-lg font-semibold"
									style={{ color: colors.darkRed }}
								>
									Located in
								</h3>
							</div>
							<p className="mt-2 ml-11" style={{ color: colors.darkGreen }}>
								Semarang, Indonesia
							</p>
						</motion.div>
					</motion.div>

					<motion.div variants={fadeInUp}>
						<form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
							{/* Form status message */}
							{formStatus.submitted && (
								<motion.div
									className={`p-4 rounded-md ${
										formStatus.error
											? "bg-red-50 border border-red-200"
											: formStatus.success
											? "bg-green-50 border border-green-200"
											: "bg-blue-50 border border-blue-200"
									}`}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
								>
									<div className="flex items-center gap-2">
										{formStatus.error ? (
											<FontAwesomeIcon
												icon={faExclamationTriangle}
												className="text-red-500"
											/>
										) : formStatus.success ? (
											<FontAwesomeIcon
												icon={faCheck}
												className="text-green-500"
											/>
										) : (
											<div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
										)}
										<p
											className={`text-sm ${
												formStatus.error
													? "text-red-700"
													: formStatus.success
													? "text-green-700"
													: "text-blue-700"
											}`}
										>
											{formStatus.message}
										</p>
									</div>
								</motion.div>
							)}

							<div className="grid grid-cols-1 gap-6">
								<div className="space-y-2">
									<label
										htmlFor="name"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										style={{ color: colors.darkGreen }}
									>
										Name
									</label>
									<input
										id="name"
										name="name"
										type="text"
										value={formData.name}
										onChange={handleChange}
										className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
											formErrors.name
												? "border-red-300 focus:ring-red-400"
												: "focus:ring-green-400"
										}`}
										style={{
											borderColor: formErrors.name
												? "#FCA5A5"
												: colors.lightGreen,
											color: colors.darkRed,
										}}
										placeholder="Your name"
									/>
									{formErrors.name && (
										<p className="text-xs text-red-500 mt-1">
											{formErrors.name}
										</p>
									)}
								</div>

								<div className="space-y-2">
									<label
										htmlFor="email"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										style={{ color: colors.darkGreen }}
									>
										Email
									</label>
									<input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
											formErrors.email
												? "border-red-300 focus:ring-red-400"
												: "focus:ring-green-400"
										}`}
										style={{
											borderColor: formErrors.email
												? "#FCA5A5"
												: colors.lightGreen,
											color: colors.darkRed,
										}}
										placeholder="your.email@example.com"
									/>
									{formErrors.email && (
										<p className="text-xs text-red-500 mt-1">
											{formErrors.email}
										</p>
									)}
								</div>

								<div className="space-y-2">
									<label
										htmlFor="subject"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										style={{ color: colors.darkGreen }}
									>
										Subject (Optional)
									</label>
									<input
										id="subject"
										name="subject"
										type="text"
										value={formData.subject}
										onChange={handleChange}
										className="flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-green-400"
										style={{
											borderColor: colors.lightGreen,
											color: colors.darkRed,
										}}
										placeholder="What's this regarding?"
									/>
								</div>

								<div className="space-y-2">
									<label
										htmlFor="message"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										style={{ color: colors.darkGreen }}
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										className={`flex min-h-[120px] w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
											formErrors.message
												? "border-red-300 focus:ring-red-400"
												: "focus:ring-green-400"
										}`}
										style={{
											borderColor: formErrors.message
												? "#FCA5A5"
												: colors.lightGreen,
											color: colors.darkRed,
										}}
										placeholder="Your message"
									></textarea>
									{formErrors.message && (
										<p className="text-xs text-red-500 mt-1">
											{formErrors.message}
										</p>
									)}
								</div>
							</div>

							<motion.button
								type="submit"
								className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
								style={{ backgroundColor: colors.darkRed }}
								whileHover={{
									backgroundColor: colors.pink,
									scale: 1.02,
								}}
								whileTap={{ scale: 0.98 }}
								disabled={formStatus.submitted && !formStatus.error}
							>
								{formStatus.submitted &&
								!formStatus.success &&
								!formStatus.error ? (
									<>
										<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
										Sending...
									</>
								) : (
									"Send Message"
								)}
							</motion.button>
						</form>

						{/* FAQ section */}
						<motion.div
							className="mt-12 pt-8 border-t"
							style={{ borderColor: `${colors.lightGreen}30` }}
							variants={fadeInUp}
						>
							<h3
								className="text-xl font-semibold mb-4"
								style={{ color: colors.darkRed }}
							>
								Frequently Asked Questions
							</h3>

							<div className="space-y-4">
								<FAQ
									question="What type of projects are you looking for?"
									answer="I'm interested in backend development projects, particularly those involving PHP, Laravel, and MySQL. I enjoy building robust APIs and efficient database solutions."
									colors={colors}
								/>
								<FAQ
									question="What's your availability?"
									answer="I'm currently available for part-time projects alongside my current roles. I typically respond to inquiries within 24 hours."
									colors={colors}
								/>
								<FAQ
									question="Do you work remotely?"
									answer="Yes, I'm comfortable working remotely and have experience collaborating with distributed teams using various project management and communication tools."
									colors={colors}
								/>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

function ContactInfo({ icon, label, value, href }) {
	const itemVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<motion.div className="flex items-start" variants={itemVariants}>
			<motion.div
				className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
				style={{
					backgroundColor: `${colors.lightGreen}30`,
					color: colors.darkGreen,
				}}
				whileHover={{ scale: 1.1, backgroundColor: `${colors.lightGreen}50` }}
			>
				<FontAwesomeIcon icon={icon} />
			</motion.div>
			<div>
				<div
					className="text-sm font-medium"
					style={{ color: colors.darkGreen }}
				>
					{label}
				</div>
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:underline transition-colors"
					style={{ color: colors.darkRed }}
				>
					{value}
				</a>
			</div>
		</motion.div>
	);
}

function FAQ({ question, answer, colors }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="border rounded-md overflow-hidden transition-all duration-200"
			style={{
				borderColor: isOpen ? colors.lightGreen : `${colors.lightGreen}30`,
				backgroundColor: isOpen ? `${colors.lightGreen}05` : "transparent",
			}}
		>
			<button
				className="flex justify-between items-center w-full p-4 text-left"
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
			>
				<h4 className="font-medium text-sm" style={{ color: colors.darkRed }}>
					{question}
				</h4>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={`h-4 w-4 transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
					style={{ color: colors.darkGreen }}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="px-4 pb-4">
					<p className="text-sm text-gray-600">{answer}</p>
				</div>
			)}
		</div>
	);
}

export default Contact;
