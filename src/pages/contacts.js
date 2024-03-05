import * as React from "react";
import Header from "../components/Header";
import Avatar from "../images/avatar.jpg";

const ContactsPage = () => {
  return (
    <main className="flex flex-col grow h-full bg-zinc-800 text-zinc-50">
      <Header />
      <div class="container mx-auto grow px-4 bg-zinc-900 ">
        <div>Телега:</div>
        <div>Телефон:</div>
        <div>Почта:</div>
      </div>
    </main>
  );
};

export default ContactsPage;

export const Head = () => <title>Контакты</title>;