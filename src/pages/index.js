import * as React from "react";
import Header from "../components/Header";
import Avatar from "../images/avatar.jpg";

const IndexPage = () => {
  return (
    <main className="flex flex-col grow h-full bg-zinc-800 text-zinc-50">
      <Header />
      <div class="container mx-auto grow px-4 bg-zinc-900 ">
        <div className="flex gap-x-[20px]">
          <div class="w-2/3 py-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            cupiditate minus reiciendis similique suscipit nulla dolore iusto
            esse quidem commodi, excepturi quisquam corrupti, veniam at
            molestias rerum ipsa iure sit.
          </div>
          <div class="w-1/3 py-20 flex justify-center">
            <img
              src={Avatar}
              alt="avatar"
              className="w-[200px] h-[200px] object-cover rounded-full ring-2 ring-white"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Резюме</title>;
