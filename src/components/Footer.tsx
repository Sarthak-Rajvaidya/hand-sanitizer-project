import { FlaskConical } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-8 px-4 text-center">
    <div className="flex items-center justify-center gap-2 mb-2">
      <FlaskConical className="h-5 w-5 text-primary" />
      <span className="font-display font-semibold gradient-text">ChemProto</span>
    </div>
    <p className="text-muted-foreground text-sm">
      Chemical Prototyping Project | 2nd Year Engineering
    </p>
    <p className="text-muted-foreground/50 text-xs mt-1">
      © 2025 All Rights Reserved
    </p>
  </footer>
);

export default Footer;
