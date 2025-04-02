import React, { useState } from "react";
import { colors } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission (would connect to a backend service)
		console.log("Form submitted:", formData);
		// Reset form after submission
		setFormData({ name: "", email: "", message: "" });
		// Show success message (in a real app)
	};

	return (
		<section
			id="contact"
			className="pt-24 py-16" // Add pt-24 to account for the fixed navbar
			style={{ backgroundColor: colors.white, minHeight: "100vh" }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div>
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

						<div className="space-y-4">
							<ContactInfo
								icon="envelope"
								label="Email"
								value="diva.adivia@gmail.com"
								href="mailto:diva.adivia@gmail.com"
							/>
							<ContactInfo
								icon="phone"
								label="Phone"
								value="+62 821 3868 2404"
								href="tel:+6282138682404"
							/>
							<ContactInfo
								icon={["fab", "linkedin"]}
								label="LinkedIn"
								value="linkedin.com/in/adiviakhusnulaisha"
								href="https://www.linkedin.com/in/adiviakhusnulaisha"
							/>
							<ContactInfo
								icon={["fab", "github"]}
								label="GitHub"
								value="github.com/adiviaka"
								href="https://github.com/adiviaka"
							/>
						</div>

						<div
							className="mt-8 p-6 rounded-lg"
							style={{
								backgroundColor: `${colors.lightGreen}10`,
								borderWidth: "1px",
								borderStyle: "solid",
								borderColor: colors.lightGreen,
							}}
						>
							<h3
								className="text-lg font-semibold mb-2"
								style={{ color: colors.darkRed }}
							>
								Located in
							</h3>
							<p style={{ color: colors.darkGreen }}>Semarang, Indonesia</p>
						</div>
					</div>

					<div>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-1 gap-4">
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
										className="flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1"
										style={{
											borderColor: colors.lightGreen,
											color: colors.darkRed,
										}}
										placeholder="Your name"
										required
									/>
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
										className="flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1"
										style={{
											borderColor: colors.lightGreen,
											color: colors.darkRed,
										}}
										placeholder="your.email@example.com"
										required
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
										className="flex min-h-[120px] w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1"
										style={{
											borderColor: colors.lightGreen,
											color: colors.darkRed,
										}}
										placeholder="Your message"
										required
									></textarea>
								</div>
							</div>

							<button
								type="submit"
								className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
								style={{ backgroundColor: colors.darkRed }}
								onMouseOver={(e) =>
									(e.currentTarget.style.backgroundColor = colors.pink)
								}
								onMouseOut={(e) =>
									(e.currentTarget.style.backgroundColor = colors.darkRed)
								}
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

function ContactInfo({ icon, label, value, href }) {
	return (
		<div className="flex items-start">
			<div
				className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
				style={{
					backgroundColor: `${colors.lightGreen}30`,
					color: colors.darkGreen,
				}}
			>
				<FontAwesomeIcon icon={icon} />
			</div>
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
					className="hover:text-gray-600 transition-colors"
					style={{ color: colors.darkRed }}
				>
					{value}
				</a>
			</div>
		</div>
	);
}

export default Contact;
