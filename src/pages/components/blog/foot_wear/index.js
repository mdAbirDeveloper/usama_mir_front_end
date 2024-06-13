/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const index = ({ data }) => {
  console.log(data);

  return (
    <div className="min-h-screen">
      {data.length === 0 ? (
        <h2 className="text-center">There are no blogs about foot_wear</h2>
      ) : (
        <div>
          <h1 className="text-center md:text-3xl text-xl text-green-500 font-bold font-serif uppercase my-10 italic">
            this is all about foot_wear
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 max-w-[800px] mx-auto">
            {data.map((blog) => (
              <div key={blog._id}>
                <div
                  className="mx-auto mb-10"
                  style={{ borderBottom: "1px solid black" }}
                >
                  <img
                    src={blog?.images[0]}
                    className="p-2 border"
                    alt="Blog Image"
                  />
                  <div className="text-center">
                    <h2 className="text-xl font-bold font-serif text-red-500 opacity-55 my-4">
                      {blog.category.toUpperCase()}
                    </h2>
                    <div className="divider w-1/4 mx-auto">X</div>
                    <h3 className="text-lg font-bold font-serif mb-4">
                      {blog.title}
                    </h3>
                    <p
                      className="text-left"
                      dangerouslySetInnerHTML={{
                        __html: blog.descriptions
                          .split(" ")
                          .slice(0, 60)
                          .join(" ")
                          .replace(/,/g, ",<br />"),
                      }}
                    ></p>
                    <Link href={`/components/blog/${blog._id}`}>
                      <button className="btn btn-outline text-red-500 uppercase my-7 rounded-none">
                        continue reading
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://usama-mir-server.vercel.app/foot_wear`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
