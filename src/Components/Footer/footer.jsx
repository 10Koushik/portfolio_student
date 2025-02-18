import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
    return (
        <div
            id="Footer"
            className="flex flex-col md:flex-row justify-around p-10 md:p-12 items-center bg-[#1E3A8A]"
        >
            <div className="flex items-center gap-8 md:gap-12">
                <a href="https://wa.me/0987654321" target="_blank" rel="noopener noreferrer" className="text-green-400 text-5xl md:text-6xl">
                    <FaWhatsapp />
                </a>
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white">Get in Touch</h2>
                    <p className="text-xm md:text-2sl font-bold text-indigo-200 font-mono italic">Interested in collaborating or just want to chat? Feel free to reach out!</p>                </div>
            </div>
            <ul className="text-sm md:text-xl text-indigo-200 mt-6 md:mt-0 font-mono">
                <li className="flex gap-1 items-center">
                    <MdOutlineEmail size={20} />
                    <a href="mailto:www.gmail.com" className="hover:underline">
                        abc@gmail.com
                    </a>
                </li>
                <li className="flex gap-1 items-center">
                    <CiLinkedin />
                    <a href="https://www.linkedin.com/in" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        linkedin.com
                    </a>
                </li>
                <li className="flex gap-1 items-center">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <FaGithub />
                        github.com
                    </a>
                </li>
                <li className="flex gap-1 items-center">
                    <a href="tel:+9876543210" className="flex items-center gap-1">
                        <FiPhone size={20} />
                        +91-9876543210
                    </a>
                    <span className="mx-1">/</span>
                    <a href="tel:+9876543210" className="flex items-center gap-1">
                        9876543210
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;
