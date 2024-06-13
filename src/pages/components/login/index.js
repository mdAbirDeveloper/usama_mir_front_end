/* eslint-disable react-hooks/rules-of-hooks */
import { AuthContext } from "@/pages/Authentication/Authcontext";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const index = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signUp, login, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const onSubmit = (data) => {
    setError("");
    setSuccess("");
    setLoading(true);
    const email = data.email;
    const password = data.password;
    login(email, password)
      .then((data) => {
        console.log(data, "user creaded succssfully");
        setSuccess("Login successfully");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("something wrong, please try again and check email & pass");
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="max-w-[1000px] mx-auto min-h-screen">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                This login part only for admin, if you dont have any admin pass
                then please dont try to login. Otherwise you may lock forerver
                for this website.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    {...register("email")}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    {...register("password")}
                  />
                  <p className="text-xl font-thin font-serif text-green-500">
                    {success}
                  </p>
                  <p className="text-xl font-thin font-serif text-red-500">
                    {error}
                  </p>
                </div>
                <div className="form-control mt-6">
                  {!user ? (
                    <>
                      <button className="btn btn-primary">
                        {loading ? "....." : "Login"}
                      </button>
                    </>
                  ) : (
                    <>
                    <div>
                      <p>you are already login</p>
                    </div>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
