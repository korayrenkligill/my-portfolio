/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("login");
      console.log("giriş yapılmamış");
    }
  }, [router]);
  return (
    <div className="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis
      recusandae quasi rem laboriosam earum, eveniet ducimus blanditiis ratione
      minus, autem vitae ut fugiat! Expedita molestiae dolore facilis doloremque
      tempore facere doloribus, cupiditate nostrum omnis quibusdam. Repudiandae
      accusamus cumque corporis ut maiores fugiat voluptatibus. Molestiae,
      delectus ad doloremque, non nihil adipisci alias facere in maxime ex, quia
      ratione. Maxime, voluptas harum officiis minus debitis saepe aliquid quas
      odio repudiandae eveniet a, id earum sequi non laboriosam porro quam
      quisquam distinctio perspiciatis, voluptatibus illum nihil deleniti!
      Perspiciatis fugit tenetur esse voluptate numquam sequi modi repellendus
      laudantium labore? Quaerat quos dicta officiis ipsum assumenda, dolorem
      delectus fugiat, quam qui placeat exercitationem aliquid sequi asperiores
      pariatur. Maxime id officiis enim? Ut facilis accusantium quas repellat,
      dignissimos nisi voluptatibus ipsum culpa, impedit sint est quo quae
      obcaecati repellendus debitis. Odio sunt accusantium quisquam eveniet
      quidem id voluptates nesciunt adipisci eaque voluptate. Eligendi, veniam,
      perferendis eius dolorum delectus pariatur voluptas impedit corporis dicta
      eos odit explicabo. Ducimus incidunt laboriosam obcaecati sequi maxime
      libero illo expedita, dolorum fuga, inventore error cumque aperiam tenetur
      optio voluptas odit molestias minima? Magni maxime officia commodi
      repudiandae, illo nulla ducimus perspiciatis, odit dolorem et nam illum
      omnis? Molestiae, eaque maiores.
    </div>
  );
};

export default page;
