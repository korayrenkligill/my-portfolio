import React from "react";
import blogs from "@/json/blogs.json";
import BlogItem from "@/components/Blogs/BlogItem";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      {blogs.map((item, key) => (
        <BlogItem item={item} key={key} />
      ))}
    </div>
  );
};

export default page;
