import React, { useState } from "react";

const CommonQuestions = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="border-b p-4">
      <div
        className="accordion-title flex flex-row justify-between items-center"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="common-title mr-4 w-full">{title}</div>
        <div>
          {isActive ? (
            <img
              src="/images/arrow-down.svg"
              className="w-4 mb-3 mr-4 rotate-180"
            />
          ) : (
            <img src="/images/arrow-down.svg" className="w-4 mb-3 mr-4" />
          )}
        </div>
      </div>

      <div>
        {isActive && (
          <div className="common-description mt-8 mb-4 text-[#797979]">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonQuestions;
