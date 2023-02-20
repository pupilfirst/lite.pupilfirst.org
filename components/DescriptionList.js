/** @format */

export default function DescriptionList({
  heading,
  content,
  children,
  darkBackground = false,
  className = "",
}) {
  return (
    <div className="md:-ml-8">
      <h3
        className={`${
          darkBackground
            ? "heading-with-underscore--cyan-green text-blue-500"
            : "text-secondary-500"
        } heading-with-underscore text-xl lg:text-5xl font-bold ${className}`}
      >
        {heading}
      </h3>
      <div className="ml-8 pt-4 text-sm lg:text-lg ">{content}</div>
      {children && (
        <div className="ml-8 pt-2 text-sm lg:text-lg">{children}</div>
      )}
    </div>
  );
}
