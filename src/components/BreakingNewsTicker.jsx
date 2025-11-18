import React from "react";

export const BreakingNewsTicker = () => {
  const breakingNews = [
    "🚨 BREAKING: New evidence uncovered in decades-old cold case",
    "⚡ EXCLUSIVE: Serial killer patterns analyzed by forensic experts",
    "📰 UPDATE: Major development in high-profile court judgment",
    "🔍 INVESTIGATION: Unsolved mysteries from India's criminal history",
    "⚖️ JUSTICE: Landmark verdict changes course of criminal law",
  ];

  // Duplicate for infinite scroll
  const tickerContent = [...breakingNews, ...breakingNews];

  return (
    <div className="breaking-ticker">
      <div className="ticker-track">
        {tickerContent.map((news, idx) => (
          <span key={idx} className="ticker-item">
            {news}
          </span>
        ))}
      </div>
    </div>
  );
};
