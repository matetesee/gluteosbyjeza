import { useState } from "react";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import type { OnboardingData } from "./types";

export default function App() {
  const [profile, setProfile] = useState<OnboardingData | null>(null);

  if (!profile) {
    return <Onboarding onFinish={setProfile} />;
  }

  return <Dashboard data={profile} />;
}
