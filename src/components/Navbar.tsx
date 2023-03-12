import React from "react";

export default function Navbar() {
  return (
    <nav className="font-Courgette text-2xl flex flex-row border-b border-slate-700 bg-black text-white">
      <h1 className="p-4 pr-9 border-l border-slate-700 items-center justify-center hover:bg-slate-600">
        About
      </h1>
      <h1 className="p-4 pr-9 border-l border-slate-700 items-center justify-center hover:bg-slate-600">
        More
      </h1>
      <h1 className="p-4 pr-9 border-l border-slate-700 items-center justify-center hover:bg-slate-600">
        Navbar
      </h1>
    </nav>
  );
}
