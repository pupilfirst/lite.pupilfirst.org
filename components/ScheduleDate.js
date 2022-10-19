/** @format */

export default function ScheduleDate({ date, content }) {
  return (
    <div className="md:grid md:grid-cols-12 p-4">
      <p className="col-span-2 text-sm lg:text-base text-secondary-500 font-medium lg:text-right">
        {date}
      </p>
      <p className="col-span-10 text-sm lg:text-base ml-4 md:ml-8 flex">
        <span className="pr-3">-</span>
        {content}
      </p>
    </div>
  );
}
