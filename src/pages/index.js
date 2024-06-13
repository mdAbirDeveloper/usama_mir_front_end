/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import Card from "./components/card";
import Carousel from "./components/carousel";
import Link from "next/link";

export default function Home({ blog }) {
  const [showAll, setShowAll] = useState(false);

  // Reverse the blog array to show the newest blogs first
  const blogsToShow = showAll ? blog.reverse() : blog.slice(-6).reverse();
  const images = ["3.png", "1.png", "2.png"];
  const captions = ["LIFE STYLE", "FASHION BLOG", "TRAVEL GALLERY"];
  const heading = [
    "Unlocking Everyday Inspiration: Insights and Stories from a Lifestyle Blog",
    "Trendy Tips and Outfit Ideas from a Fashion Blog",
    "Captivating Photos and Stories from Our Travel Gallery",
  ];
  const text = [
    "A lifestyle blog provides a rich tapestry of insights and stories covering everything from fashion and travel to health and personal development. It's a source of inspiration and practical advice.",
    "A fashion blog offers the latest trends, styling tips, and outfit ideas to help you express your unique style. It's your go-to guide for staying chic and confident in any setting",
    "A travel gallery showcases breathtaking photos and stories from around the world, inspiring wanderlust and adventure. Discover hidden gems, cultural highlights, and stunning landscapes through captivating images.",
  ];
  return (
    <div>
      <div className="flex justify-center bg-gray-100">
        <Carousel
          images={images}
          heading={heading}
          captions={captions}
          text={text}
        />
      </div>
      <Card />

      {/* blog sections start */}

      <div>
        {blog.length > 0 && (
          <div>
            <div
              className="max-w-[800px] mx-auto mb-10"
              style={{ borderBottom: "1px solid black" }}
            >
              <img
                src={blog[blog.length - 1].images[0]}
                className="p-2 border"
                alt="Blog Image"
              />
              <div className="text-center">
                <h2 className="text-xl font-bold font-serif text-red-500 opacity-55 my-4">
                  {blog[blog.length - 1].category.toUpperCase()}
                </h2>
                <div className="divider w-1/4 mx-auto">X</div>
                <h3 className="text-lg font-bold font-serif mb-4">
                  {blog[blog.length - 1].title}
                </h3>
                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{
                    __html: blog[blog.length - 1].descriptions
                      .split(" ")
                      .slice(0, 100)
                      .join(" ")
                      .replace(/,/g, ",<br />"),
                  }}
                ></p>
                <Link href={`/components/blog/${blog[blog.length - 1]._id}`}>
                  <button className="btn btn-outline text-red-500 uppercase my-7 rounded-none">
                    continue reading
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* all blog section */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 max-w-[800px] mx-auto">
        {blogsToShow.map((blogs) => (
          <div key={blogs._id}>
            <div
              className="mx-auto mb-10"
              style={{ borderBottom: "1px solid black" }}
            >
              <img
                src={blogs?.images[0]}
                className="p-2 border"
                alt="Blog Image"
              />
              <div className="text-center">
                <h2 className="text-xl font-bold font-serif text-red-500 opacity-55 my-4">
                  {blogs.category.toUpperCase()}
                </h2>
                <div className="divider w-1/4 mx-auto">X</div>
                <h3 className="text-lg font-bold font-serif mb-4">
                  {blogs.title}
                </h3>
                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{
                    __html: blogs.descriptions
                      .split(" ")
                      .slice(0, 60)
                      .join(" ")
                      .replace(/,/g, ",<br />"),
                  }}
                ></p>
                <Link href={`/components/blog/${blogs._id}`}>
                  <button className="btn btn-outline text-red-500 uppercase my-7 rounded-none">
                    continue reading
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {blog.length > 6 && !showAll && (
        <div className="text-center">
          <button
            className="btn btn-outline text-red-500 uppercase my-7 rounded-none"
            onClick={() => setShowAll(true)}
          >
            Show Older Blogs
          </button>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://usama-mir-server.vercel.app/blog`);
  const blog = await res.json();

  // Pass data to the page via props
  return { props: { blog } };
}
