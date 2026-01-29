"use client";

import { Rocket, Settings, HeartHandshake, GraduationCap } from "lucide-react";

const features = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Growth accelerators",
    description: "Proven strategies built into every feature",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Set-it-and-forget-it",
    description: "Automations that run while you sleep",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "White glove support",
    description: "Real humans who understand pet care",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Onboarding included",
    description: "We help you get set up and running",
  },
];

export default function FeaturesBar() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-title text-2xl sm:text-3xl text-critter-maroon text-center mb-12">
          Built with ease and speed in mind
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-critter-orange/10 flex items-center justify-center mx-auto mb-4 text-critter-orange">
                {feature.icon}
              </div>
              <h3 className="font-subtitle text-lg text-critter-maroon mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-critter-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
