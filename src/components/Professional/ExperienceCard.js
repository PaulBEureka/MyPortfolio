import React from 'react';

function ExperienceCard(props) {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-stretch experience-card p-4 rounded shadow-sm w-100 mb-4 position-relative">
      
      {/* Left section: Circle and vertical line */}
      <div className="d-none d-sm-flex flex-column align-items-center me-sm-4 mb-3 mb-sm-0 position-relative" style={{ minWidth: '20px' }}>
        {/* Solid Circle */}
        <div className="rounded-circle bg-purple" style={{ width: "20px", height: "20px", zIndex: 1 }}></div>

        {/* Vertical Line */}
        <div
          className="bg-purple position-absolute"
          style={{ width: '2px', top: '20px', bottom: '0' }}
        ></div>
      </div>


      {/* Right section: Content */}
      <div className="flex-grow-1 text-start">
        {/* Job Title */}
        <div className="d-flex align-items-center mb-2">
          <h4 className="fw-bold text-light mb-0">{props.jobTitle}</h4>
        </div>

        {/* Company Name */}
        <h5 className="text-light mb-1 pb-2">{props.company}</h5>

        

        {/* Description and Date */}
        <div className="text-start">
          <p className="text-light mb-1">
            {props.tasksDone.map((task, index) => (
              <li key={index} className="mb-1">
                {task}
              </li>
            ))}
          </p>
          <p className="text-light small">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
