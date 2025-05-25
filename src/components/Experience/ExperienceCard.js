import React from 'react';

function ExperienceCard(props) {
  return (
    <div className="flex flex-col sm:flex-row items-start bg-white p-6 rounded-xl shadow-lg max-w-2xl w-full">
      {/* Left section: Icon and connecting line */}
      <div className="flex flex-col items-center mr-4 sm:mr-6 mb-4 sm:mb-0">
        {/* Company Logo/Icon container */}
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex justify-center items-center shadow-md">
          {/* Placeholder SVG for Novo logo - replace with actual logo if available */}
          {/* This SVG is a simple representation, you might want to use a more accurate one */}
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17" />
            <path d="M2 12L12 17L22 12" />
          </svg>
        </div>
        {/* Vertical connecting line */}
        <div className="w-0.5 h-12 bg-green-500 mt-1 rounded-sm"></div>
      </div>

      <div className="flex-grow">
        {/* Company Name */}
        <div className="text-lg font-bold text-gray-800 mb-1">{props.company}</div>

        {/* Job Title and Checkmark */}
        <div className="flex items-center mb-1">
          <div className="text-2xl font-bold text-gray-800">{props.jobTitle}</div>
          {/* Checkmark SVG icon */}
          <svg className="ml-2 w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" />
            <path fill="white" d="M9 12L11 14L15 10" />
          </svg>
        </div>

        {/* Job Details */}
        <div className="text-base text-gray-600">
            <p>{props.description}</p>
            <p className="mt-2 text-sm text-gray-500">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;