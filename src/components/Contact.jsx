import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 px-8 bg-gray-800 text-white">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        {submitted ? (
          <p className="text-green-400 text-lg"> Thank you! Your message has been sent.</p>
        ) : (
          <form
            action="https://formspree.io/f/meozeoej" 
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="grid gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded bg-gray-900 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded bg-gray-900 text-white"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="px-4 py-3 rounded bg-gray-900 text-white"
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Contact Links */}
        <div className="flex flex-col gap-6">
          <p className="text-lg">
            Feel free to reach out through the form or connect with me directly:
          </p>
          <div className="flex items-center gap-4">
            <FaGithub className="text-2xl text-white" />
            <a
              href="https://github.com/m-jazib04"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              github.com/m-jazib04
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-2xl text-white" />
            <a
              href="YOUR_LINKEDIN_URL_HERE"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-white" />
            <a
              href="mailto:muhammadjazib471@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              muhammadjazib471@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
