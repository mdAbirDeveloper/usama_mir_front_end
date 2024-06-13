/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

const details = () => {
  const router = useRouter();
  const { detailsId } = router.query;

  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://usama-mir-server.vercel.app/showDetail/${detailsId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error);
        // Handle error, show error message, etc.
      }
    };

    if (detailsId) {
      fetchProduct();
    }
  }, [detailsId]);
  if (loading) {
    return (
      <div className="text-center text-2xl font-serif font-bold my-6">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {
        blogs?.map((blog) =><>
        <div className="max-w-[800px] mx-auto">
          <div className=" shadow">
            <img src={blog?.images[0]} className="p-2 border" />
          </div>
          <div className="text-center shadow-2xl p-4">
            <h1 className="text-xl font-bold font-serif text-red-500 opacity-55 my-4 uppercase">{blog.category}</h1>
            <div className="divider w-1/4 mx-auto">X</div>
            <h1 className="text-xl font-bold font-serif mb-4">{blog.title}</h1>
            <p className="text-left mb-4">{blog.descriptions}</p>
          </div>
          <div className="flex gap-10 py-10 text-3xl justify-center">
            <AiFillFacebook className="text-blue-500 hover:text-4xl" />
            <AiFillInstagram className="text-red-500 hover:text-4xl" />
            <FaWhatsappSquare className="text-green-500 hover:text-4xl" />
            <AiFillGithub className="text-gray-500 hover:text-4xl" />
            <AiFillTwitterSquare className="text-blue-500 hover:text-4xl" />
          </div>
        </div>
        </>)
      }
    </div>
  );
};

export default details;
