import { useState } from "react";
import { ArrowUpRight, Copy } from "lucide-react";

export default function ContactSection() {
  const [formMessage, setFormMessage] = useState("");
  const [preparedEnquiry, setPreparedEnquiry] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    setPreparedEnquiry(
      `Enquiry from ${name}\nReply to: ${email}\n\n${message}`,
    );
    setFormMessage("Your enquiry is ready to copy into your email app.");
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(preparedEnquiry);
      setFormMessage("Enquiry copied. Paste it into your email app to send.");
    } catch {
      setFormMessage(
        "Clipboard access is unavailable. Select and copy the enquiry above.",
      );
    }
  }

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-copy">
        <p className="eyebrow">The next step</p>
        <h2 id="contact-title">
          Let's start with <em>a conversation.</em>
        </h2>
        <p>
          Tell us a little about what you are working through. We will take it
          from there.
        </p>
        <p className="contact-note">
          Prepare a message here, then send it from your preferred email app.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" autoComplete="name" required />
        <label htmlFor="contact-email">Work email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <label htmlFor="contact-message">How can we help?</label>
        <textarea id="contact-message" name="message" rows="3" required />
        <button className="button button-light" type="submit">
          Prepare enquiry <ArrowUpRight size={17} />
        </button>
        <p className="form-note" aria-live="polite">
          {formMessage || "Nothing is stored on this site."}
        </p>
        {preparedEnquiry && (
          <div className="enquiry-preview">
            <pre>{preparedEnquiry}</pre>
            <button
              className="copy-enquiry"
              type="button"
              onClick={copyEnquiry}
            >
              <Copy size={14} /> Copy enquiry
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
