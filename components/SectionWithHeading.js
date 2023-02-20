export default function SectionWithHeading({
  children,
  heading,
  darkBackground = false,
  className = "",
}) {
  return (
    <section
      className={`${
        darkBackground
          ? "bg-gray-900 text-white border-gray-700 "
          : "bg-primary-50 text-gray-800 border-gray-200"
      } border-t z-30 ${className}`}
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto ">
        <div
          className={`${
            darkBackground ? "border-gray-700 " : "border-gray-200"
          } mx-4 xl:mx-0 border-l ${className}`}
        >
          <div className="py-10 lg:py-16">
            <div
              className={`${
                darkBackground
                  ? "heading-with-leftborder--cyan-green "
                  : "bg-primary-50 border-gray-200"
              } heading-with-leftborder ${className}`}
            >
              <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
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
