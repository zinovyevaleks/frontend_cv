import React from "react";

const Header = () => {
  return (
    <header className="header bg-zinc-800 text-zinc-50">
      <div className="mx-auto container ">
        <div className="px-6 py-4">aleksandr_zinovyev</div>
        <div className="flex flex-nowrap overflow-auto divide-x-2 divide-zinc-900">
          <div className="shrink-0 py-4 px-8 bg-zinc-900 border-b-4 border-teal-600">О себе</div>
          <div className="shrink-0 py-4 px-8 bg-zinc-700">Примеры проектов</div>
          <div className="shrink-0 py-4 px-8 bg-zinc-700">Контакты</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
