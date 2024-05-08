import { IoPlaySharp } from "react-icons/io5";

const Heading = ({ word, phonetic, phonetics }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col sm:gap-4">
        <h1 className="font-bold sm:text-[4rem] text-3xl text-[#2D2D2D] dark:text-white">
          {word}
        </h1>
        <span className="sm:text-2xl text-lg text-[#A445ED]">
          {!phonetic ? "No Phonetic" : phonetic}
        </span>
      </div>
      <button className="bg-[#A445ED]/25 rounded-full flex items-center justify-center sm:w-16 sm:h-16 w-12 h-12 text-2xl hover:bg-[#A445ED] group">
        <IoPlaySharp className="ml-1 text-[#A445ED] group-hover:text-white" />
      </button>
    </div>
  );
};

export default Heading;
