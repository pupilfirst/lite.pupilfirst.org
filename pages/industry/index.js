/** @format */

import React from "react";

export default function industry() {
	return (
		<div>
			<main className="bg-primary-50 mx-auto">
				<section className="hero__bg-pattern relative">
					<header className=" max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
						<div className="flex justify-between items-center">
							<a className="block" href="/">
								<img
									className="block w-20 md:w-28"
									src="/logos/LITE-logo.svg"
									alt="Logo of Leadership in Teaching Excellence (LITE)national programme."
								/>
							</a>
							<img
								className="w-16 md:w-24"
								src="/logos/aicte-logo.png"
								alt="Logo of All India Council for Technical Education (AICTE)"
							/>
						</div>
					</header>
					<div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto pb-8 md:pb-16 px-4 xl:px-0">
						<div className="w-full mx-auto md:w-4/5 text-center relative z-10">
							<div className="inline-block rounded bg-primary-100 py-1 px-1 md:px-2 mt-4 ">
								<p className="font-medium text-sm text-primary-800">
									All India Council for Technical Education.
								</p>
							</div>
							<h1 className="hero__title-gradient text-center text-xl md:text-2xl lg:text-3xl lg:py-4 font-medium">
								Leadership in Teaching Excellence (LITE)
								<br />
								<span className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
									Industry Network & Teaching Fellowships
								</span>
							</h1>
							<p className="text-2xl">Catalysed by Act Grants</p>
							<p className="max-w-4xl mx-auto text-center text-sm md:text-base lg:text-xl pt-2">
								LITE industry Network and Fellowships is a call by{" "}
								<a href="https://actgrants.in/">ACT Grants</a> to the technology
								industry for partnering with the All India Council for Technical
								Education (AICTE) for hiring software engineers who meet global
								industry standards.
							</p>
						</div>
					</div>
					<div className="absolute inset-0 md:inset-x-0 md:top-8 2xl:inset-0 z-0">
						<img
							aria-hidden="true"
							className="h-full w-full object-cover relative"
							src="/hero/hero-bg.png"
							alt="LITE - hero background image"
						/>
						<div className="absolute inset-0"></div>
					</div>
				</section>
			</main>
		</div>
	);
}
