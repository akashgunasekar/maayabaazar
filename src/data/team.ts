import { TeamMember } from "@/types";

export const teamData: TeamMember[] = [
  {
    id: "mj-ramanan",
    name: "M. J. Ramanan",
    role: "Founder & Managing Director",
    department: "Executive Leadership",
    bio: "Guides the strategic vision, cinema production initiatives, and event operations of Maayaa Bazaar Hub under the positioning 'Where Cinema Meets Creativity & Events Become Experiences'.",
    image: {
      src: "/images/founder.jpg",
      alt: "M. J. Ramanan — Founder & Managing Director, Maayaa Bazaar Hub",
    },
    isVerified: true,
    appointmentStatus: "Confirmed",
  },
];

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return teamData;
}
