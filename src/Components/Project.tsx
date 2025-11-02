import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProjectType } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  project: ProjectType;
  onBack: () => void;
};

export default function Project({ project, onBack }: Props) {
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
              toggleActions: "play none none none", // play none none reverse if we want things to disappear when we scroll up
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
      <div
        className={`w-full ${
          project.title === "Shuriken - Ego or Logo" ? "h-full" : "h-[80vh]"
        } overflow-hidden fade-in`}
      >
        {project.video ? (
          <video
            src={project.video}
            loop
            muted
            autoPlay
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={project.coverImg}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 py-16 px-6 md:px-12">
        <div className="md:w-2/3 lg:w-3/4 space-y-4 fade-in pr-24">
          <h2 className="font-futura font-bold text-2xl leading-tight">
            {project.title}
          </h2>

          {project.date && (
            <p className="font-futura font-medium text-lg text-gray-600">
              {project.date}
            </p>
          )}

          <p className="font-geologica font-light text-lg text-gray-700 leading-relaxed text-justify">
            {project.description}
          </p>

          {project.description1 && (
            <p className="font-geologica font-light text-lg text-gray-700 leading-relaxed text-justify">
              {project.description1}
            </p>
          )}
        </div>

        <aside className="md:w-1/3 lg:w-1/4 fade-in">
          <div className="top-24 space-y-6">
            {project.accomplishments && (
              <div>
                <h3 className="font-geologica font-semibold text-sm tracking-wide uppercase text-gray-800">
                  Finalist Project
                </h3>
                <p className="font-geologica font-extralight text-sm text-gray-600">
                  {project.accomplishments}
                </p>
              </div>
            )}
            {project.firstPlace && (
              <div>
                <h3 className="font-geologica font-semibold text-sm tracking-wide uppercase text-gray-800">
                  First Prize Winner
                </h3>
                <p className="font-geologica font-extralight text-sm text-gray-600">
                  {project.firstPlace}
                </p>
              </div>
            )}
            {project.type && (
              <div>
                <h3 className="font-geologica font-semibold text-sm tracking-wide uppercase text-gray-800">
                  Project type
                </h3>
                <p className="font-geologica font-extralight text-sm text-gray-600">
                  {project.type}
                </p>
              </div>
            )}
            {project.missions && project.missions.length > 0 && (
              <div>
                <h3 className="font-geologica font-semibold text-sm tracking-wide uppercase text-gray-800">
                  Missions
                </h3>
                {project.missions?.map((mission, index) => (
                  <p
                    key={index}
                    className="font-geologica font-extralight text-sm text-gray-600"
                  >
                    {mission}
                  </p>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>

      {project.images && project.images.length > 0 && (
        <div className="w-full mx-auto px-6 md:px-12 pb-10 fade-in">
          <div className={`grid gap-4 w-full grid-cols-1 `}>
            {project.images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${project.title} - image ${index + 1}`}
                className="w-full h-full object-cover my-4"
              />
            ))}
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 py-2 px-6 md:px-12">
        <div className="md:w-2/3 lg:w-3/4 space-y-4 fade-in mr-24">
          {project.bottomDescription && (
            <p className="font-geologica font-light text-lg text-gray-700 leading-relaxed text-justify">
              {project.bottomDescription}
            </p>
          )}
        </div>
      </div>
      {project.bottomImg && (
        <div className="w-full mx-auto px-6 md:px-12 py-10 fade-in">
          <div className={`grid gap-4 w-full grid-cols-1 `}>
            <img
              src={project.bottomImg}
              alt={`${project.title} - bottom image`}
              className="w-full h-full object-cover my-4"
            />
          </div>
        </div>
      )}

      <div className="flex justify-end max-w-7xl mx-auto px-6 md:px-12 pb-8">
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
