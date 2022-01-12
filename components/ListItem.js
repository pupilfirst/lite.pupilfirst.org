/** @format */

export default function ListItem({ content }) {
	return (
		<>
			<li>
				<p className="list-with-underscore pb-2 text-sm lg:text-lg">
					{content}
				</p>
			</li>
		</>
	);
}
