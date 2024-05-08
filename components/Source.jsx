import { TfiNewWindow } from "react-icons/tfi";

const Source = ({ url }) => {
  return (
    <footer className="flex flex-col space-y-5">
      <hr/>
      <div className="flex flex-col sm:flex-row text-sm sm:space-x-5 sm:items-center">
        <h4 className="text-[#757575]">Source</h4>

        <a
          target="_blank"
          className="text-[#2D2D2D] flex items-center gap-5 underline dark:text-white"
          href={url[0]}
        >
          {url[0]}
          <TfiNewWindow />
        </a>
      </div>
    </footer>
  );
};

export default Source;
