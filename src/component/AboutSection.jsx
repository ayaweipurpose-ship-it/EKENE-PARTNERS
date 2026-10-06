import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-mark" aria-hidden="true">
        E<span>.</span>P
      </div>
      <div className="about-copy">
        <p className="eyebrow">A considered approach</p>
        <h2 id="about-title">
          Good counsel starts with <em>good questions.</em>
        </h2>
        <p>
          We take the time to understand the business behind the brief. That
          means advice shaped around your objectives, your people and the
          realities of the market you work in.
        </p>
        <p>
          Our role is to make complexity more manageable and help you take the
          next step with confidence.
        </p>
        <a className="text-link" href="#contact">
          Meet us in conversation <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="about-note">
        <span>01</span>
        <p>
          Clear advice.
          <br />
          Close partnership.
          <br />A long view.
        </p>
      </div>
    </section>
  );
}
