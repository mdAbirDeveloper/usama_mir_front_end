/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { AiFillContacts, AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

const index = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 grid-cols-1 my-10 gap-6 p-2 border shadow-2xl">
        <div>
          <p>
            My twin sister and I were born in Paris in 1979, and grew up in
            France, England, and (mostly) the suburbs of Michigan. I launched my
            career at Cosmopolitan, where my editorial responsibilities included
            stopping good-looking men on the street and asking them sexy
            questions. After working for women’s magazines for three years, I
            became the editor-in-chief of Bene, a small award-winning magazine
            about Italian life and style. From 2005 to 2007, I launched and ran
            the quarterly, which covered fashion, design, food, wine, travel and
            lifestyle. In 2008, I left Bene to write for magazines, including
            Glamour, Elle, New During this time, I started A Cup of Jo as a
            weekend hobby, but after a few years — to my surprise — the site
            grew big enough to become my full-time job. (Here’s a post about
            blogging as a career.) My husband and I now live in Brooklyn with
            our two little boys, Toby and Anton. Please feel free to email me
            anytime at hello@loremipsum.com, or find me on Instagram and
            Twitter. Thank you so much for reading.
          </p>
          <div className="flex gap-10 py-10 text-3xl">
            <AiFillFacebook className="text-blue-500 hover:text-4xl" />
            <AiFillInstagram className="text-red-500 hover:text-4xl" />
            <FaWhatsappSquare className="text-green-500 hover:text-4xl" />
            <AiFillGithub className="text-gray-500 hover:text-4xl" />
            <AiFillTwitterSquare className="text-blue-500 hover:text-4xl" />
          </div>
        </div>
        <div className="" >
          <img src="/avatar.png" alt="avatar"></img>
        </div>
      </div>
    </div>
  );
};

export default index;
