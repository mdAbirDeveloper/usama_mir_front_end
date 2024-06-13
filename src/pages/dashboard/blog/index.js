/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import DashboardLayout from "../DashboardLayout";
import { AuthContext } from "@/pages/Authentication/Authcontext";

const index = () => {
  const [submited, setSubmited] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    //console.log(data);

    const formData = new FormData();
    const imgBBUploadPromises = [];

    // Handle multiple image uploads with ImgBB
    for (let i = 0; i < data.images.length; i++) {
      const image = data.images[i];
      const imgBBUrl = `https://api.imgbb.com/1/upload?key=d49ed4f9c6fad26f0dbf08cb306cefce`; // Replace with your actual API key

      formData.append("image", image);

      imgBBUploadPromises.push(
        fetch(imgBBUrl, {
          method: "POST",
          body: formData,
        }).then((res) => res.json())
      );

      formData.delete("image"); // Clear formData for the next image
    }

    // Wait for all images to be uploaded before sending data to MongoDB
    try {
      const imgData = await Promise.all(imgBBUploadPromises);
      const imageUrls = imgData.map((img) => img.data.url);

      const blog = {
        category: data.category,
        title: data.title,
        descriptions: data.blog,
        images: imageUrls, // Array of uploaded image URLs
      };

      //console.log(project);

      // Send data to MongoDB (modify endpoint and format if needed)
      const response = await fetch("https://usama-mir-server.vercel.app/blog", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      const result = await response.json();
      setSubmited("Blog added successfully");
      setLoading(false);
      //console.log(result);
    } catch (error) {
      console.error("Error uploading images or sending data:", error);
      // Handle errors appropriately, e.g., display error messages
    }
  };

  return (
    <div>
      <h1 className="text-3xl mt-8 text-center font-bold uppercase text-green-500">
        Write your Blog
      </h1>
      <form
        className="card-body md:w-4/5 w-full mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control">
          <select
            className="select w-full input input-bordered"
            {...register("category")}
          >
            <option disabled selected>
              Pick your Blog category
            </option>
            <option value="clothing">Clothing</option>
            <option value="foot wear">Foot Wear</option>
            <option value="jewelry">Jewelry</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="products">products</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="personal care">Personal Care</option>
          </select>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="write your Blog Title"
            className="input input-bordered"
            required
            {...register("title")}
          />
        </div>
        <div className="form-control">
          <textarea
            type="text"
            rows={10}
            cols={10}
            placeholder="write your full blog"
            className="input input-bordered"
            required
            {...register("blog")}
          />
        </div>
        <div>
          <label>Choose images of your blog (multiple allowed)</label>
          <input
            type="file"
            {...register("images", { required: true })}
            multiple
          />
          {errors.images && <span>This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <p className="text-xl uppercase font-serif text-green-500">
            {submited}
          </p>

          {user ? (
            <button
              className="btn btn-primary font-bold text-white"
              type="submit"
            >
              {loading ? "......" : "Add Product"}
            </button>
          ) : (
            <>
            <div>
              <h1 className="text-red-500">please login first to upload a blog</h1>
            </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
