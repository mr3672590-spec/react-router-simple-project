import { VscThumbsup } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-red-500 flex justify-center items-center gap-2">
          Contact Us <VscThumbsup />
        </h1>
      </div>

      
      <section className="flex justify-center">
        <div className="bg-gray-100 p-8 rounded-xl shadow-lg w-[400px]">

          
          <div className="flex items-center border-0 hover:border rounded-lg p-2 mb-4 bg-white">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Your Name"
              className="outline-none w-full"
            />
          </div>

    
          <div className="flex items-center border-0 hover:border rounded-lg p-2 mb-4 bg-white">
            <MdEmail className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none w-full"
            />
          </div>

          <div className="flex items-start border-0 hover:border rounded-lg p-2 mb-4 bg-white">
            <FaMessage className="text-gray-500 mr-2 mt-2" />
            <textarea
              placeholder="Your Message"
              className="outline-none w-full h-24"
            ></textarea>
          </div>

          
          <button className="bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600">
            Send Message
          </button>

        </div>
      </section>
    </>
  );
}