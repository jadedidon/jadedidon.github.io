export default function About() {
  return (
    <div className="mt-[-40px]">
      <video
        src="/videos/about/JADE_noir.mp4"
        className="w-full h-full overflow-hidden fade-in"
        autoPlay
        muted
        loop
      ></video>
      <div className="md:w-2/3 lg:w-3/4 space-y-4 fade-in p-12 text-justify mb-24">
        <h2 className="text-3xl font-bold mb-8">Hello !</h2>

        <p className="text-lg text-gray-700 mb-4">
          I’m Jade, a graphic design student currently pursuing a two-year
          Master’s degree in Graphic Design, Creative Strategies, and Media.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Throughout my studies, I’ve had the opportunity to explore various
          fields of design, from visual identity and editorial design to
          strategy and branding, allowing me to build a versatile profile.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I am now seeking for a three-month internship in advertising and
          communication, available from February 23rd to May 18th, 2026.
        </p>
      </div>
    </div>
  );
}
