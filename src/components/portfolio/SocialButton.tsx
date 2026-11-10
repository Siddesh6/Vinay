import { toast } from "sonner";
import { PROFILE } from "@/lib/profile";
import { LinkedinIcon } from "./LinkedinIcon";
export function LinkedinLink({ className, label }: { className: string; label?: string }) {
  if (PROFILE.linkedinUrl) {
    return <a href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={className}><LinkedinIcon />{label}</a>;
  }
  return <button type="button" aria-label="LinkedIn profile" onClick={() => toast("LinkedIn profile link coming soon", { description: `Reach me at ${PROFILE.email} meanwhile.` })} className={className}><LinkedinIcon />{label}</button>;
}
