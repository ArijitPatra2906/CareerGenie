import React from "react";

const LogoMobile = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bot h-6 w-6 md:h-8 md:w-8"
          >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
        </div>
        <div className="text-gray-800 font-bold">
          <span className="text-blue-600">SM</span>AI
        </div>
      </div>
    </div>
  );
};

export default LogoMobile;
