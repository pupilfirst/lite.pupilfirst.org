export default function SectionWithHeading({
  children,
  heading,
  darkBackground = false,
  className = "",
}) {
  return (
    <section
      className={`${
        darkBackground ? "bg-gray-800 text-white" : "bg-orange-50"
      } border-t border-gray-200 relative ${className}`}
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto ">
        <div className="mx-4  xl:mx-0 border-l border-gray-200">
          <div className="py-10 lg:py-16">
            <div className="heading-with-leftborder">
              <h2 className="font-bold text-2xl lg:text-6xl text-black-500 leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                {heading}
              </h2>
            </div>
            <div className="max-w-6xl mt-6 md:mt-8 ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
