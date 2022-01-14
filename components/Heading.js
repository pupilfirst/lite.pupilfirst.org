/** @format */

export default function Heading({ heading }) {
	return (
		<div className="heading-with-leftborder">
			<h2 className="font-bold text-2xl lg:text-6xl leading-snug lg:ml-28 2xl:ml-44 pl-4">
				{heading}
			</h2>
		</div>
	);
}
