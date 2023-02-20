/** @format */

export default function DateAndContent({
  date,
  content,
  darkBackground = false,
  className = "",
}) {
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-3">
      <p
        className={`${
          darkBackground ? "text-blue-500" : "text-secondary-500"
        } col-span-4 font-medium ${className}`}
      >
        {date}
      </p>
      <p className="col-span-8 flex">
        <span className="pr-3">-</span>
        {content}
      </p>
    </div>
  );
}
