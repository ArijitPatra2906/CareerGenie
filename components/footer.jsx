import React from "react";
import Logo from "./logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="w-full text-center">
          <div className="w-full text-center space-y-4">
            <Logo />
            <p className="text-gray-600">
              Advance your career with personalized guidance, interview prep,
              and AI-powered tools for job success.
            </p>
            <div className="flex w-full items-center justify-center space-x-4">
              {[
                {
                  icon: <Twitter className="text-blue-500" />,
                  href: "#",
                },
                {
                  icon: <Linkedin className="text-blue-700" />,
                  href: "#",
                },
                {
                  icon: <Facebook className="text-blue-600" />,
                  href: "#",
                },
                {
                  icon: <Instagram className="text-pink-500" />,
                  href: "#",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:bg-gray-100 p-2 rounded-full transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} CareerAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
