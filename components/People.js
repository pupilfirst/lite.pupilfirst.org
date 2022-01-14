/** @format */

import React from "react";

export default function People({ name, role, imgSrc }) {
	return (
		<div>
			<div className="relative rounded-lg bg-gradient-to-br from-yellow-300 to-primary-400 w-5/6 md:w-auto">
				<img
					src={imgSrc}
					alt={name}
					className="block w-full object-cover md:object-contain p-0.5 rounded-lg"
				/>
			</div>
			<p className={"text-lg font-semibold pt-2"}>{name}</p>
			<p className={"text-sm text-gray-600 leading-tight pt-1"}>{role}</p>
		</div>
	);
}
