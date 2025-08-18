import React from "react";
import ProjectCard from "./ui/ProjectCard";

function Project() {
  return (
    <div className="mt-64">
      <h2 className="text-9xl font-extrabold text-center tracking-tighter">
        Beyond Code
      </h2>
      <p className="text-3xl font-medium text-neutral-900 text-center my-12">
        Shaping strategy, systems & scalable solutions
      </p>
      <div className="space-y-14">
        <ProjectCard
          title="Perfect! I've enhanced the ProjectCard component to fit the full-screen size (h-screen) and max-width-7xl dimensions. Here are the key improvements made"
          gradient="linear-gradient(135deg, #0c4a6e 0%, #1e293b 100%)"
          tech={["Next.js", "Python", "TensorFlow", "Redis", "Stripe API"]}
          image=""
        />
        <ProjectCard
          title="Perfect! I've enhanced the ProjectCard component to fit the full-screen size (h-screen) and max-width-7xl dimensions. Here are the key improvements made9999"
          gradient="linear-gradient(135deg, #581c87 0%, #1f2937 100%)"
          tech={["Next.js", "Python", "TensorFlow", "Redis", "Stripe API"]}
          image=""
        />
        <ProjectCard
          title="Perfect! I've enhanced the ProjectCard component to fit the full-screen size (h-screen) and max-width-7xl dimensions. Here are the key improvements made9999"
          gradient="linear-gradient(135deg, #374151 0%, #111827 100%)"
          tech={["Next.js", "Python", "TensorFlow", "Redis", "Stripe API"]}
          image=""
        />
        <ProjectCard
          title="Perfect! I've enhanced the ProjectCard component to fit the full-screen size (h-screen) and max-width-7xl dimensions. Here are the key improvements made9999"
          gradient="linear-gradient(135deg, #134e4a 0%, #0f172a 100%)"
          tech={["Next.js", "Python", "TensorFlow", "Redis", "Stripe API"]}
          image=""
        />
      </div>
    </div>
  );
}

export default Project;
