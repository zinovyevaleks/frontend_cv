import * as React from "react";
import Header from "../components/Header";

const PortfolioPage = () => {
  return (
    <main className="flex flex-col grow h-full bg-zinc-800 text-zinc-50">
      <Header />
      <div class="container mx-auto grow px-4 bg-zinc-900 ">
        <div className="py-4">
          <div className="text-xl mb-2">Project 1</div>
          <div className="w-2/3 aspect-video bg-gray-200 rounded-md mb-2"></div>
          <div className="flex gap-x-[10px]">
            <span>React-icon</span>
            <span>React-router-icon</span>
            <span>Sass-icon</span>
          </div>
          <div>Title</div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            rerum enim, illo, doloremque nulla ratione debitis a iure
            dignissimos molestias, praesentium vel molestiae sed est voluptate
            nostrum itaque necessitatibus minima.
          </div>
        </div>
      </div>
      <div class="container mx-auto grow px-4 bg-zinc-900 ">
        <div className="py-4">
          <div className="text-xl mb-2">Project 2</div>
          <div className="w-2/3 aspect-video bg-gray-200 rounded-md mb-2"></div>
          <div className="flex gap-x-[10px]">
            <span>React-icon</span>
            <span>React-router-icon</span>
            <span>Sass-icon</span>
          </div>
          <div>Title</div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            rerum enim, illo, doloremque nulla ratione debitis a iure
            dignissimos molestias, praesentium vel molestiae sed est voluptate
            nostrum itaque necessitatibus minima.
          </div>
        </div>
      </div>
      <div class="container mx-auto grow px-4 bg-zinc-900 ">
        <div className="py-4">
          <div className="text-xl mb-2">Project 3</div>
          <div className="w-2/3 aspect-video bg-gray-200 rounded-md mb-2"></div>
          <div className="flex gap-x-[10px]">
            <span>React-icon</span>
            <span>React-router-icon</span>
            <span>Sass-icon</span>
          </div>
          <div>Title</div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            rerum enim, illo, doloremque nulla ratione debitis a iure
            dignissimos molestias, praesentium vel molestiae sed est voluptate
            nostrum itaque necessitatibus minima.
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;

export const Head = () => <title>Портфолио</title>;
