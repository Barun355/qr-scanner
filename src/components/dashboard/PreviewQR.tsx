import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";
import { account, databases, ID } from "../../utils/appwrite";
import { COLLECTION_ID, DATABASE_ID } from "../../utils";

interface PreviewQRType {
  type: "single" | "double";
  url: {
    firstUrl?: string;
    secondUrl?: string;
  };
  active: boolean;
  qrUrl: string;
  qrSizeDefault?: number;
}

function PreviewQR({ url, type, qrUrl, active, qrSizeDefault = 200 }: PreviewQRType) {
  const { firstUrl, secondUrl } = url;
  const [qrSize, setQrSize] = useState(qrSizeDefault);

  const qrCanvaRef = useRef<HTMLCanvasElement | null>(null);

  async function handleDownloadQR() {
    alert("Keep your QR safe as you will not get another copy.");

    const { $id } = await account.get();

    const pngUrl = qrCanvaRef?.current
      ?.toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");

    if (!pngUrl) {
      // TODO: add toast
      alert("Unable to download & save image")
      return 0;
    }

    if (type === 'double'){
      databases
        .createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
          userId: $id,
          qrUrl: import.meta.env.VITE_BASE_URL + "/qr/" + qrUrl,
          firstUrl,
          secondUrl,
          active,
          type
        })
        .then((data) => {
          if (data.$id) {
            downloadLink.href = pngUrl;
            downloadLink.download = qrUrl + ".png";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          }
        })
        .catch((error) => {
          // TODO: add toast
          alert(error?.message);
        });
    } else if (type === 'single'){
      databases
        .createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
          userId: $id,
          qrUrl,
          active,
          type
        })
        .then((data) => {
          if (data.$id) {
            downloadLink.href = pngUrl;
            downloadLink.download = data.$id + ".png";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          }
        })
        .catch((error) => {
          // TODO: add toast
          alert(error?.message);
        });
    }
  }

  return (
    <div>
      <h1 className="text-3xl">Preview</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <label htmlFor="qr-size" className="ml-1 text-base text-slate-400">
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
          value={import.meta.env.VITE_BASE_URL + "/qr/" + qrUrl}
          title={import.meta.env.VITE_BASE_URL + "/qr/" + qrUrl}
          marginSize={2}
          ref={qrCanvaRef}
          id={qrUrl}
          size={qrSize}
        />

        <button
          className="bg-blue-800 hover:bg-blue-600 disabled:bg-slate-600 py-2 px-4 rounded-lg h-fit w-fit"
          onClick={handleDownloadQR}
          disabled={qrUrl === "" ? true : false}
        >
          Save QR
        </button>
      </div>
    </div>
  );
}

export default PreviewQR;
