import ContactForm from "@/components/Common/ContactForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50"
      style={{ minHeight: "calc(100vh - 98px)" }}
    >
      <ContactForm />
      <div>OR</div>
      <div className="py-8 px-4 grid grid-cols-1 w-full lg:w-auto lg:grid-cols-3 gap-4">
        <Link
          href="https://www.instagram.com/korayrkgl/"
          className="flex items-center gap-2 bg-white p-3 rounded-md"
        >
          <Image
            width={16}
            height={16}
            src="/images/icons/instagram-icon.png"
            alt="icon"
          />
          <p className="text-sm">@korayrkgl</p>
        </Link>
        <Link
          href="mailto:koray.renkligill@gmail.com"
          className="flex items-center gap-2 bg-white p-3 rounded-md"
        >
          <Image
            width={16}
            height={16}
            src="/images/icons/gmail-icon.png"
            alt="icon"
          />
          <p className="text-sm">koray.renkligill@gmail.com</p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/koray-renkligil-bb9a961a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="flex items-center gap-2 bg-white p-3 rounded-md"
        >
          <Image
            width={16}
            height={16}
            src="/images/icons/linkedin-icon.png"
            alt="icon"
          />
          <p className="text-sm">Koray Renkligil</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
