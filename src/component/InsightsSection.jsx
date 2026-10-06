import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const perspectives = [
  {
    category: "Working together",
    title: "The first conversation is about your business",
    summary:
      "A useful legal relationship begins with listening: what you are building, what is changing and what matters most right now.",
  },
  {
    category: "Making decisions",
    title: "Turning complexity into a clear next step",
    summary:
      "Good advice should help decision-makers see their options, understand the trade-offs and move forward with purpose.",
  },
  {
    category: "Looking ahead",
    title: "Building for the long term",
    summary:
      "The strongest business foundations are made with tomorrow in mind, not just the immediate transaction or question.",
  },
];

export default function InsightsSection() {
  const [openArticle, setOpenArticle] = useState(null);

  return (
    <section
      className="section insights-section"
      id="insights"
      aria-labelledby="insights-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Notes from the practice</p>
          <h2 id="insights-title">
            A little <em>perspective.</em>
          </h2>
        </div>
        <p className="section-aside">
          A few ideas about how we work and the way we think about business
          counsel.
        </p>
      </div>
      <div className="insight-list">
        {perspectives.map((article, index) => {
          const isOpen = openArticle === index;
          return (
            <article
              className={`insight-row${isOpen ? " is-open" : ""}`}
              key={article.title}
            >
              <span className="insight-number">0{index + 1}</span>
              <div className="insight-main">
                <p>{article.category}</p>
                <h3>{article.title}</h3>
                {isOpen && <p className="insight-summary">{article.summary}</p>}
              </div>
              <button
                type="button"
                className="insight-toggle"
                aria-expanded={isOpen}
                aria-label={`${isOpen ? "Close" : "Read"}: ${article.title}`}
                onClick={() => setOpenArticle(isOpen ? null : index)}
              >
                {isOpen ? <ArrowDown size={19} /> : <ArrowUpRight size={19} />}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
