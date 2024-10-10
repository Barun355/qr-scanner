import { useRef, useState } from "react";
import { randomUrl } from "../../utils/randomUrl";
import { QRCodeCanvas } from "qrcode.react";
import { account, databases, ID } from "../../utils/appwrite";
import { COLLECTION_ID, DATABASE_ID } from "../../utils";

function CreateQR() {
  const [longUrl, setLongUrl] = useState("");
  const [firstUrl, setFirstUrl] = useState("");
  const [secondUrl, setSecondUrl] = useState("");

  const qrCanvaRef = useRef<HTMLCanvasElement | null>(null);

  async function handleDownloadQR() {
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
    <div className="flex flex-col p-8 gap-8">
      <h1 className="text-lg md:text-xl lg:text-4xl font-bold">QR-Generator</h1>
      <div className="grid grid-col-1 lg:grid-cols-4 gap-4 grid-rows-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="android-link" className="text-xs text-blue-400">
            Android Link
          </label>
          <input
            type="text"
            className="text-md bg-slate-600 rounded-sm outline-none border-none py-1 px-2"
            value={firstUrl}
            onChange={(e) => setFirstUrl(e.target.value)}
            id="android-link"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="android-link" className="text-xs text-blue-400">
            IOS Link
          </label>
          <input
            type="text"
            className="text-md bg-slate-600 rounded-sm outline-none border-none py-1 px-2"
            id="ios-link"
            value={secondUrl}
            onChange={(e) => setSecondUrl(e.target.value)}
          />
        </div>
        <div className="lg:row-start-2 lg:col-start-1">
          <button
            className="border-none py-2 px-4 bg-blue-600 hover:bg-slate-600 rounded-lg"
            onClick={(_) => setLongUrl(randomUrl(20, { all: true }))}
          >
            Generate
          </button>
        </div>
      </div>
      {longUrl !== "" && (
        <div className="grid-rows-2 gap-4">
          <QRCodeCanvas
            value={import.meta.env.VITE_BASE_URL + "/qr/" + longUrl}
            title={import.meta.env.VITE_BASE_URL + "/qr/" + longUrl}
            marginSize={2}
            ref={qrCanvaRef}
            id={longUrl}
          />
          <button
            className="bg-blue-600 hover:bg-slate-600 py-2 px-4 rounded-lg"
            onClick={handleDownloadQR}
          >
            Download QR
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateQR;
