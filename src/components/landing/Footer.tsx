import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-secondary/50 py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-accent-gold font-bold text-lg">SEENJOY ACADEMY</p>
            <p className="text-text-secondary text-sm mt-1">
              © {new Date().getFullYear()} Seenjoy Academy. সর্বস্বত্ব সংরক্ষিত।
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-text-secondary text-sm">
              সাপোর্ট:{" "}
              <a
                href="mailto:support@seenjoyacademy.com"
                className="text-accent-teal hover:underline"
              >
                support@seenjoyacademy.com
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="YouTube"
                className="flex items-center gap-1 text-text-secondary hover:text-accent-gold transition-colors text-sm"
              >
                YouTube <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center gap-1 text-text-secondary hover:text-accent-gold transition-colors text-sm"
              >
                Facebook <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
