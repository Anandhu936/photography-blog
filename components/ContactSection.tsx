"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
const ContactSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Open default email client with pre-filled details
        window.location.href = `mailto:your.anandhunair777@gamil.com?subject=Message from ${name}&body=${message} (Contact: ${email})`;
    };

    return (
        <div id="contact" className="flex  items-center justify-center  px-4 py-4 lg:py-8 lg:px-8" >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-2xl shadow-2xl p-8 max-w-md w-full"
            >
                <h2 className="text-2xl font-bold text-foreground  mb-6 text-center">
                    Contact Me
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Message
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-4">
                    Or email directly at{" "}
                    <a
                        href="mailto:your.anandhunair777@gmail.com"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        anandhunair777@gmail.com
                    </a>
                </p>
            </motion.div>
        </div>
    );
};

export default ContactSection;
