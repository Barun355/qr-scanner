import { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { account, databases, ID } from "../../../utils/appwrite";
import { COLLECTION_ID, DATABASE_ID } from "../../../utils";
import { randomUrl } from "../../../utils/randomUrl";

function DoubleLink() {
  const [longUrl, setLongUrl] = useState("");
  const [firstUrl, setFirstUrl] = useState("");
  const [secondUrl, setSecondUrl] = useState("");
  const [active, setActive] = useState(true);
  const [qrSize, setQrSize] = useState(200);

  const qrCanvaRef = useRef<HTMLCanvasElement | null>(null);

  async function handleDownloadQR() {
    if (firstUrl === "" || secondUrl === ""){
      alert("You should enter the url.")
      return 0;
    }

    alert("Keep your QR safe as you will not get another copy.");

    const { $id } = await account.get();

    const pngUrl = qrCanvaRef?.current
      ?.toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");

    if (pngUrl) {
      databases
        .createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
          userId: $id,
          longUrl: import.meta.env.VITE_BASE_URL + "/qr/" + longUrl,
          firstUrl,
          secondUrl,
        })
        .then((data) => {
          if (data.$id) {
            downloadLink.href = pngUrl;
            downloadLink.download = longUrl + ".png";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          }
        })
        .catch((error) => {
          alert(error?.message);
        });
    }
  }

  return (
    <div className="flex flex-col gap-10 md:gap-auto md:flex-row">
      <form 
        className="grid grid-col-1 lg:grid-cols-4 gap-4 grid-rows-3 w-full h-fit"
        onSubmit={e => {
          e.preventDefault();
          if (firstUrl === "" || secondUrl === ""){
            alert("You should enter the url.")
            return 0;
          }
          setLongUrl(randomUrl(20, { all: true }))
        }}
      >
        <div className="flex flex-col gap-2 lg:col-start-1 lg:col-end-3">
          <label htmlFor="android-link" className="ml-1 text-xs text-slate-400">
            Android Link
          </label>
          <input
            type="text"
            className="text-md bg-slate-700 rounded-md outline-none border-none py-2 pl-4 pr-6"
            value={firstUrl}
            onChange={(e) => setFirstUrl(e.target.value)}
            id="android-link"
            required
          />
        </div>
        <div className="flex flex-col gap-2 lg:col-start-3 lg:col-end-5">
          <label htmlFor="android-link" className="ml-1 text-xs text-slate-400">
            IOS Link
          </label>
          <input
            type="text"
            className="text-md bg-slate-700 rounded-md outline-none border-none py-2 pl-4 pr-6"
            id="ios-link"
            value={secondUrl}
            required
            onChange={(e) => setSecondUrl(e.target.value)}
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
        <h1 className="text-3xl">Preview</h1>
        <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
            <label
              htmlFor="qr-size"
              className="ml-1 text-base text-slate-400"
            >
              QR Size (in pixel)
            </label>
            <input
              type="number"
              className="text-md bg-slate-700 rounded-md outline-none border-none py-2 px-2 w-20 text-cenl-4 pr-6"
              value={qrSize}
              onChange={(e) => setQrSize(Number(e.target.value))}
              id="qr-size"
              min={100}
            />
          </div>
          <QRCodeCanvas
            value={import.meta.env.VITE_BASE_URL + "/qr/" + longUrl}
            title={import.meta.env.VITE_BASE_URL + "/qr/" + longUrl}
            marginSize={2}
            ref={qrCanvaRef}
            id={longUrl}
            size={qrSize}
          />
          
          <button
            className="bg-blue-800 hover:bg-blue-600 disabled:bg-slate-600 py-2 px-4 rounded-lg h-fit w-fit"
            onClick={handleDownloadQR}
            disabled={longUrl === ""? true: false}
          >
            Download QR
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoubleLink;
