import { createElement } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Fingerprint,
  Landmark,
  Scale,
  UsersRound,
} from "lucide-react";

const practices = [
  {
    icon: Building2,
    number: "01",
    title: "Corporate & Commercial",
    description:
      "Practical advice for the decisions, agreements and relationships that shape a business.",
  },
  {
    icon: BriefcaseBusiness,
    number: "02",
    title: "Mergers & Acquisitions",
    description:
      "Clear-eyed support from first conversation through negotiation and completion.",
  },
  {
    icon: Scale,
    number: "03",
    title: "Governance & Compliance",
    description:
      "Sound structures and guidance to help leadership meet its responsibilities.",
  },
  {
    icon: Landmark,
    number: "04",
    title: "Finance & Investment",
    description:
      "Counsel for financing arrangements, investment and capital raising matters.",
  },
  {
    icon: UsersRound,
    number: "05",
    title: "Employment & Workplace",
    description:
      "Guidance for employers navigating teams, policies and workplace change.",
  },
  {
    icon: Fingerprint,
    number: "06",
    title: "Intellectual Property",
    description:
      "Helping businesses protect, manage and make use of their creative assets.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      className="section expertise-section"
      id="expertise"
      aria-labelledby="expertise-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">How we help</p>
          <h2 id="expertise-title">
            Business moves.
            <br />
            <em>We move with you.</em>
          </h2>
        </div>
        <p className="section-aside">
          From the everyday to the defining, our work is grounded in context,
          commercial sense and a close understanding of your goals.
        </p>
      </div>
      <div className="practice-grid">
        {practices.map(({ icon, number, title, description }) => (
          <article className="practice-item" key={number}>
            <div className="practice-top">
              <span>{number}</span>
              {createElement(icon, { size: 22, strokeWidth: 1.5 })}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#contact" aria-label={`Discuss ${title}`}>
              Discuss this area <ArrowUpRight size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
