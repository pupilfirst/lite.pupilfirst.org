/** @format */

export default function NumberListItem({ number, content }) {
	return (
		<div className="flex">
			<p className="w-4 md:w-8 flex items-center text-lg md:text-xl font-semibold text-secondary-500">
				{number}
			</p>
			<div className="flex-1 p-3 lg:px-6 md:p-6 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-gray-200">
				<p className="text-sm md:text-base font-medium">{content}</p>
			</div>
		</div>
	);
}
