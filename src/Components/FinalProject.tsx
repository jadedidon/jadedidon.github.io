import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProjectType } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  project: ProjectType;
  onBack: () => void;
};

export default function FinalProject({ project, onBack }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(".fade-in");
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 10%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    const imgs = containerRef.current?.querySelectorAll("img") || [];
    let loaded = 0;
    const onImgLoad = () => {
      loaded++;
      if (loaded === imgs.length) ScrollTrigger.refresh();
    };
    imgs.forEach((img) => {
      if (img.complete) onImgLoad();
      else img.addEventListener("load", onImgLoad, { once: true });
    });

    return () => {
      ctx.revert();
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
    };
  }, [project]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [project]);

  return (
    <section ref={containerRef} className="pt-0">
      <div className="w-full h-[90vh] overflow-hidden fade-in">
        <video
          src={project.video}
          loop
          muted
          autoPlay
          playsInline
          controls
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 py-20 px-6 md:px-12">
        <div className="md:w-2/3 lg:w-3/4 fade-in space-y-6 pr-24">
          <h2 className="font-futura font-bold text-2xl leading-tight">
            Pas Commun(s)
          </h2>

          <p className="font-futura font-medium text-lg text-gray-600">2025</p>

          <p className="font-geologica font-light text-lg text-gray-700 leading-relaxed text-justify">
            “Pas Commun(s)” is a dance-based mediation project designed to
            accompany the rehabilitation of a neighborhood undergoing
            transformation in Saint-Denis. Conceived as a sensory exploration of
            the area, it invites residents to meet, exchange, and discover their
            environment, connecting past, present and future.
          </p>
          <p className="font-geologica font-light text-lg text-gray-700 leading-relaxed text-justify">
            “Pas Commun(s)” is a dance-based mediation project designed to
            accompany the rehabilitation of a neighborhood undergoing
            transformation in Saint-Denis. Conceived as a sensory exploration of
            the area, it invites residents to meet, exchange, and discover their
            environment, connecting past, present and future.
          </p>
        </div>

        <aside className="md:w-1/3 lg:w-1/4 fade-in">
          <div className="space-y-8">
            <div>
              <h3 className="font-geologica font-semibold text-sm uppercase tracking-wide text-gray-800">
                Project Type
              </h3>
              <p className="font-geologica font-extralight text-sm text-gray-600">
                Bachelor’s Degree project
              </p>
            </div>

            <div>
              <h3 className="font-geologica font-semibold text-sm uppercase tracking-wide text-gray-800">
                Missions
              </h3>

              <p className="font-geologica font-extralight text-sm text-gray-600">
                360° strategy
              </p>
              <p className="font-geologica font-extralight text-sm text-gray-600">
                Visual identity
              </p>
              <p className="font-geologica font-extralight text-sm text-gray-600">
                3D modeling
              </p>
              <p className="font-geologica font-extralight text-sm text-gray-600">
                Model making
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="w-full fade-in">
        <img
          src={"/images/final_project/VISUEL2_LONG_diplome.jpg"}
          alt={`${project.title} - image 1`}
          className="w-full h-full object-cover"
        />
        <img
          src={"/images/final_project/VISUEL3_9_16_diplome.jpg"}
          alt={`${project.title} - image 2`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 fade-in">
        <div className="md:w-2/3 lg:w-3/4 fade-in space-y-6 pr-24">
          <p className="font-geologica font-light text-lg text-gray-700 leading-relaxed text-justify">
            The visual identity of the project is shaped through graphic
            research based on the typology and unique features of the future
            district, translating the site’s architectural and urban
            characteristics into a coherent visual language.
          </p>
        </div>
      </div>

      <div className="w-full fade-in">
        <img
          src={"/images/final_project/VISUEL4_LONG_diplome.jpg"}
          alt={`${project.title} - image 3`}
          className="w-full h-full object-cover my-4"
        />
        <img
          src={"/images/final_project/VISUEL5_9_16_diplome.jpg"}
          alt={`${project.title} - image 4`}
          className="w-full h-full object-cover my-4"
        />
        <img
          src={"/images/final_project/VISUEL6_9_16_diplome.jpg"}
          alt={`${project.title} - image 5`}
          className="w-full h-full object-cover my-4"
        />
      </div>
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 fade-in">
        <div className="md:w-2/3 lg:w-3/4 fade-in space-y-6">
          <p className="font-geologica font-light text-lg text-gray-700 leading-relaxed text-justify">
            The installations are all designed as scaffolding structures,
            echoing the construction-site context of the neighborhood.
          </p>
        </div>
      </div>
      <div className="w-full fade-in">
        <img
          src={"/images/final_project/VISUEL7_9_16_diplome.jpg"}
          alt={`${project.title} - image 6`}
          className="w-full h-full object-cover my-4"
        />
        <img
          src={"/images/final_project/VISUEL8_9_16_diplome.jpg"}
          alt={`${project.title} - image 7`}
          className="w-full h-full object-cover my-4"
        />
        <img
          src={"/images/final_project/VISUEL9_9_16_diplome.jpg"}
          alt={`${project.title} - image 8`}
          className="w-full h-full object-cover my-4"
        />
        <img
          src={"/images/final_project/VISUEL10_9_16_diplome.jpg"}
          alt={`${project.title} - image 9`}
          className="w-full h-full object-cover my-4"
        />
      </div>

      <div className="flex justify-end max-w-7xl mx-auto px-6 md:px-12 py-10">
        <button
          onClick={onBack}
          className="px-4 py-2 hover:bg-gray-100 transition"
        >
          ← Back to projects
        </button>
      </div>
    </section>
  );
}
