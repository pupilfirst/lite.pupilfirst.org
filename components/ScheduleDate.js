/** @format */

export default function ScheduleDate({
  date,
  content,
  darkBackground = false,
  className = "",
}) {
  return (
    <div className="md:grid md:grid-cols-12 p-4">
      <p
        className={`${
          darkBackground ? "text-blue-500" : "text-secondary-500"
        } col-span-2 text-sm lg:text-base font-medium lg:text-right ${className}`}
      >
        {date}
      </p>
      <p className="col-span-10 text-sm lg:text-base ml-4 md:ml-8 flex">
        <span className="pr-3">-</span>
        {content}
      </p>
    </div>
  );
}
