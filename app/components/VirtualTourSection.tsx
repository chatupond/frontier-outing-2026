export default function VirtualTourSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
            Virtual Tour
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Explore the Villa
          </h2>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            Take a 360° virtual walkthrough of THANN Pool Villa before you arrive
          </p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://my.matterport.com/show/?m=JSPaWt3Ly4D"
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="xr-spatial-tracking"
            title="THANN Pool Villa Virtual Tour"
          />
        </div>
      </div>
    </section>
  );
}
