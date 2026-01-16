import { Mail, Phone } from "lucide-react";

export function ContactInfo({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-2 text-white ${className}`}>
      <p className="flex items-center justify-center gap-2">
        <Mail className="h-4 w-4" />
        <span>mastercrafters.ent@gmail.com</span>
      </p>
      <p className="flex items-center justify-center gap-2">
        <Phone className="h-4 w-4" />
        <span>+91 8329303275</span>
      </p>
    </div>
  );
}