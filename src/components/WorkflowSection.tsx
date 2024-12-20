import { CheckSquare, Calendar, CircleUser } from "lucide-react";

export function WorkflowSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left column with text content */}
          <div className="max-w-lg lg:pl-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Your workflow.
              <br />
              Your way.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              All your projects, goals, calendars, roadmaps, and more—in one
              tool—personalized to how you and your team work.
            </p>
            <a
              href="#"
              className="inline-flex text-blue-600 hover:text-blue-700 font-medium items-center group text-lg"
            >
              Explore projects
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Right column with features */}
          <div className="grid gap-8 lg:pl-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 text-gray-800">
                  <CheckSquare className="w-full h-full" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Tasks and to-dos</h3>
                <p className="text-gray-600 text-base">
                  Tackle any project, big or small.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 text-gray-800">
                  <Calendar className="w-full h-full" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Custom views</h3>
                <p className="text-gray-600 text-base">
                  Visualize work in any format, from calendars to boards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 text-gray-800">
                  <CircleUser className="w-full h-full" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Automations</h3>
                <p className="text-gray-600 text-base">
                  Put tedious tasks on autopilot.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot section */}
        <div className="relative">
          <div className="bg-[#EEF4FF] rounded-2xl p-6">
            <img
              src="/images/workflow2.jpg"
              alt="Workflow Interface"
              className="w-3/4 mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
