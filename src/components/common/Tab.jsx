import React, { useState } from 'react';

function Tab({tabs, ...rest}) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div {...rest}>
      <div className="tab-headers flex gap-2">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-grow text-center border-b-2 py-2 ${index === activeTab ? 'border-[#00146E] text-[#212529]' : 'border-[#CED4DA] text-[#92989D]'}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tab;