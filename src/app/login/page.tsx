/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import auth from "@/Api/Auth/Auth";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

const page = () => {
  const router = useRouter();

  const [user, setUser] = useState<LoginType>({
    emailOrUsername: "",
    password: "",
    rememberMe: false,
  });
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setUser((oldData) => ({
        ...oldData,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await auth
        .login({
          usernameOrEmail: user.emailOrUsername ?? "",
          password: user.password ?? "",
          rememberMe: user.rememberMe,
        })
        .then((resp) => {
          const date = new Date();
          localStorage.setItem("accessToken", resp.accessToken);
          localStorage.setItem("refreshToken", resp.refreshToken);
          localStorage.setItem(
            "accessTokenexpireDate",
            (Number(date.getTime()) + resp.expiresIn).toString()
          );
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [user]
  );
  return (
    <div className="bg-gradient-to-r flex-1 from-indigo-50 via-purple-50 to-indigo-50">
      <div
        className="container mx-auto h-full flex items-center justify-center"
        style={{
          minHeight: "calc(100vh - 98px)",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 p-4 md:p-8 rounded-xl shadow-md bg-white"
        >
          <div className="flex flex-col w-full md:min-w-80">
            <label htmlFor="emailOrUsername" className="text-xs text-gray-400">
              E-mail / Username
            </label>
            <input
              id="emailOrUsername"
              type="text"
              className="p-2 rounded-md text-sm border outline-0"
              placeholder="Emily.."
              name="emailOrUsername"
              value={user.emailOrUsername}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full md:min-w-80">
            <label htmlFor="password" className="text-xs text-gray-400">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="p-2 rounded-md text-sm border border-gray-200 outline-0"
              placeholder="Your pass.."
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              defaultChecked={user.rememberMe}
              onChange={() => {
                setUser((oldData) => ({
                  ...oldData,
                  rememberMe: !user.rememberMe,
                }));
              }}
            />
            <label htmlFor="rememberMe" className="text-xs text-blue-600">
              Remember me
            </label>
          </div>
          <button className="bg-black text-white p-2 rounded-md">Login</button>
        </form>
      </div>
    </div>
  );
};

export default page;
