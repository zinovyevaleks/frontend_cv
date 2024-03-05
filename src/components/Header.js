import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="header bg-zinc-800 text-zinc-50">
      <div className="mx-auto container ">
        <div className="px-6 py-4">aleksandr_zinovyev</div>
        <nav className="flex flex-nowrap overflow-auto">
          <Link
            to="/"
            className="relative shrink-0 py-4 px-8 uppercase bg-zinc-700"
            activeClassName="bg-zinc-900 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-teal-600"
          >
            о_себе
          </Link>
          <Link to="/portfolio"
            className="relative shrink-0 py-4 px-8 uppercase bg-zinc-700"
            activeClassName="bg-zinc-900 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-teal-600"
          >
            примеры_проектов
          </Link>
          <Link
            to="/contacts"
            className="relative shrink-0 py-4 px-8 uppercase bg-zinc-700"
            activeClassName="bg-zinc-900 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-teal-600"
          >
            контакты
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
