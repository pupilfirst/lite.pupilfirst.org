import React from "react";
import Link from "next/link";

function FooterLink({ title, href }) {
  return (
    <div className="p-2 text-secondary-500 font-medium text-sm   hover:bg-secondary-50 hover:text-secondary-800 cursor-pointer rounded-full">
      <Link href={href}>{title}</Link>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="-mt-3 z-50">
      <div className="flex gap-3 items-center">
        <div className="border-t border-gray-200 flex-1 h-px"></div>
        <img src="/logos/LITE-logo.svg" alt="" className="h-6" />
        <div className="border-t border-gray-300 flex-1 h-px"></div>
      </div>
      <div className="max-w-7xl mx-auto py-6 px-2 flex flex-wrap items-center gap-2 justify-center">
        <FooterLink title="Dynamic curriculum" href="/dynamic-curriculum" />
        <FooterLink title="Faculty development program" href="/wd-fdp" />
        <FooterLink title="LITE Showcase" href="/showcase" />
        <FooterLink title="Teaching fellowship" href="/teaching" />
        <FooterLink title="Faculty" href="/faculty" />
        <FooterLink title="Hiring network" href="/early-adopter" />
      </div>
    </footer>
  );
}
