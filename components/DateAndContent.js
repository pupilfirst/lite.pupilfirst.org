/** @format */

export default function DateAndContent({ date, content }) {
	return (
		<div className="grid grid-cols-12 gap-2 md:gap-3">
			<p className="col-span-4 text-secondary-500 font-medium">{date}</p>
			<p className="col-span-8 flex">
				<span className="pr-3">-</span>
				{content}
			</p>
		</div>
	);
}
