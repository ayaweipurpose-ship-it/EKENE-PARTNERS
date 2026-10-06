import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> Independent counsel. Enduring perspective.
        </p>
        <h1 id="hero-title">
          Clarity for your most <em>consequential</em> decisions.
        </h1>
        <p className="hero-intro">
          Thoughtful legal counsel for businesses building, changing and shaping
          what comes next.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">
            Talk to our team <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href="#expertise">
            Explore our expertise <ArrowDown size={15} />
          </a>
        </div>
        <div className="hero-caption">
          <span>01 / 05</span>
          <span>Business law, considered differently</span>
        </div>
      </div>
      <div
        className="hero-image"
        role="img"
        aria-label="Sunlit contemporary boardroom with a long meeting table"
      >
        <div className="image-note">
          <span>EKINI PARTNERS</span>
          <span>COUNSEL FOR WHAT'S NEXT</span>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true">
        LAGOS · NIGERIA
      </div>
    </section>
  );
}
