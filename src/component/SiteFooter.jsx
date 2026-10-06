import { ArrowUp, Scale } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#home">
        <Scale size={18} /> EKINI PARTNERS
      </a>
      <span>Business law, considered differently.</span>
      <a className="back-to-top" href="#home">
        Back to top <ArrowUp size={15} />
      </a>
      <small>© {new Date().getFullYear()} Ekini Partners</small>
    </footer>
  );
}
