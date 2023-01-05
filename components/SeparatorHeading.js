/** @format */

export default function SeparatorHeading({ title }) {
  return (
    <div className="flex items-center gap-4 py-8">
      <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
      <div className="flex-1 h-px border-t-2 border-gray-100"></div>
    </div>
  );
}
