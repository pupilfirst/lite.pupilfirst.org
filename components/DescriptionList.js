/** @format */

export default function DescriptionList({ heading, content, children }) {
	return (
		<div>
			<h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
				{heading}
			</h3>
			<p className="ml-8 pt-1 text-sm lg:text-lg ">{content}</p>
			{children && (
				<div className="ml-8 pt-1 text-sm lg:text-lg">{children}</div>
			)}
		</div>
	);
}
