import { useState } from "react";
import PreviewQR from "../PreviewQR";
import { toast } from "react-toastify";
import { randomUrl } from "../../../utils/randomUrl";

function SingleLink() {
  const [url, setUrl] = useState("");
  const [active, setActive] = useState(true);

  const [generatedUrl, setGeneratedUrl] = useState("")

  return (
    <div className="flex flex-col gap-10 md:gap-auto md:flex-row">
      <form
        className="grid grid-col-1 lg:grid-cols-4 gap-4 grid-rows-3 w-full h-fit"
        onSubmit={(e) => {
          e.preventDefault();
          if (url === "") {
            toast.warning("You should enter the url.");
            return 0;
          }
          setGeneratedUrl(randomUrl(10, { all: true }));
        }}
      >
        <div className="flex flex-col gap-2 lg:col-start-1 lg:col-end-3">
          <label htmlFor="android-link" className="ml-1 text-xs text-slate-400">
            Enter you link
          </label>
          <input
            type="text"
            className="text-md bg-slate-700 rounded-md outline-none border-none py-2 pl-4 pr-6"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            id="android-link"
            // required
          />
        </div>

        <div className="lg:row-start-2 lg:col-start-1 lg:col-end-3">
          <div className="flex gap-2 items-center justify-start">
            <button
              onClick={(_) => setActive((prev) => !prev)}
              className={`w-[2.5rem] h-[1.3rem] flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
                active ? "bg-blue-500" : "bg-gray-400"
              }`}
            >
              {/* Toggle indicator */}
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                  active ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
            <label htmlFor="active-deactive" className="text-md text-white">
              QR is {active ? "live" : "not live"}
            </label>
          </div>
        </div>
        <div className="lg:row-start-3 lg:col-start-1 lg:col-end-3 flex">
          <button
            className="border-none h-fit w-full py-2 px-4 bg-blue-800 hover:bg-blue-600 rounded-lg"
            type="submit"
          >
            Generate
          </button>
        </div>
      </form>
      <div className="grid-rows-2 space-y-6 w-full lg:w-1/2">
        <PreviewQR type="single" qrUrl={generatedUrl} url={{firstUrl: url}} active={active} />
      </div>
    </div>
  );
}

export default SingleLink;
