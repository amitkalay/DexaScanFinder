import { LandingPage } from "./_components/landing-page";
import { clinics } from "./_lib/clinics";

export default function HomePage() {
  return <LandingPage clinics={clinics} />;
}
