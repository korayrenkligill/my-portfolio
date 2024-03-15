import React from "react";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 relative">
      <div className="container mx-auto py-8 px-4 flex flex-col items-stretch md:items-center">
        <h1 className="text-xs md:text-sm text-gray-600">Contact Me</h1>
        <h2 className="text-base md:text-2xl font-semibold text-gray-600 mb-4 md:mb-8">
          Let&apos;s Talk
        </h2>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col w-full md:min-w-80">
              <label htmlFor="" className="text-xs text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                className="p-2 rounded-md text-sm border-0 outline-0"
                placeholder="Emily.."
              />
            </div>
            <div className="flex flex-col md:min-w-80">
              <label htmlFor="" className="text-xs text-gray-400 mb-1">
                Surname
              </label>
              <input
                type="text"
                className="p-2 rounded-md text-sm border-0 outline-0"
                placeholder="Johnson.."
              />
            </div>
          </div>
          <div className="flex flex-col md:min-w-80">
            <label htmlFor="" className="text-xs text-gray-400 mb-1">
              E-mail
            </label>
            <input
              type="text"
              className="p-2 rounded-md text-sm border-0 outline-0"
              placeholder="emily.johnson@example.com.."
            />
          </div>
          <div className="flex flex-col md:min-w-80">
            <label htmlFor="" className="text-xs text-gray-400 mb-1">
              Message
            </label>
            <textarea
              rows={3}
              className="p-2 rounded-md resize-y text-sm border-0 outline-0"
              placeholder="emily.johnson@example.com.."
            ></textarea>
          </div>
          <button className="flex items-center justify-center gap-1 text-sm md:text-base bg-black text-white p-2 rounded-md hover:text-purple-400 transition-colors duration-300">
            <IoIosSend />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
