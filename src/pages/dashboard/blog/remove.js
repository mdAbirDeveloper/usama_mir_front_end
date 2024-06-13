/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { MdDelete } from "react-icons/md";
import { useRouter } from "next/router";
import DashboardLayout from "../DashboardLayout";
import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { AuthContext } from "@/pages/Authentication/Authcontext";

async function fetchBlogData() {
  try {
    const res = await fetch("https://usama-mir-server.vercel.app/blog");
    const blog = await res.json();
    const data = blog.reverse();
    return data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

const remove = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await fetch(`https://usama-mir-server.vercel.app/blog/${id}`, {
        method: "DELETE",
      })
        .then((deleted) => console.log("deleted successfully"))
        .catch((error) => console.log("error"));
      router.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchBlogData();
      setData(fetchedData);
    }

    getData();
  }, []);

  if (!data) {
    return <div className="min-h-screen text-center">Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <>
          <div className="min-h-screen">
            <h1 className="text-3xl my-8 text-center font-bold uppercase text-green-500">
              {" "}
              remove your Blog
            </h1>
            {data.map((blog) => (
              <>
                <div className="flex justify-between bg-indigo-100 mb-5 md:w-2/4 w-full mx-auto">
                  <img
                    className="bg-green-500 w-20"
                    src={blog?.images[0]}
                  ></img>
                  <p className="my-auto">{blog?.title}</p>
                  <button
                    className="w-10 my-auto"
                    onClick={() => handleDelete(blog._id)}
                  >
                    <MdDelete className="text-3xl text-red-500"></MdDelete>
                  </button>
                  {/* <button className="w-10 my-auto">
                <Link href={`${products._id}`}><FaPen className="text-2xl text-red-500"></FaPen></Link>
              </button> */}
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen text-center">
            <h1 className="text-red-500">please login first to delete a blog</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default remove;

remove.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
