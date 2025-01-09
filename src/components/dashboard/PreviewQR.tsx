import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";
import { account, databases, ID, storage } from "../../utils/appwrite";
import { COLLECTION_ID, DATABASE_ID, STORAGE_ID } from "../../utils";
import { toast } from "react-toastify";

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

function PreviewQR({
  url,
  type,
  qrUrl,
  active,
  qrSizeDefault = 200,
}: PreviewQRType) {
  const { firstUrl, secondUrl } = url;
  const [qrSize, setQrSize] = useState(qrSizeDefault);
  const [qrLogo, setQrLogo] = useState("");
  const [qrLogoSize, setQrLogoSize] = useState(50);

  const qrCanvaRef = useRef<HTMLCanvasElement | null>(null);

  async function handleDownloadQR() {
    toast.warning("Keep your QR safe as you will not get another copy.");

    const { $id } = await account.get();

    if (!$id) {
      toast.error("User not found");
      return;
    }

    if (qrCanvaRef?.current === null) {
      toast.warning("Image not found");
      return;
    }
    const pngUrl = qrCanvaRef?.current
      ?.toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    if (!pngUrl) {
      // TODO: add toast
      toast.warning("Unable to download & save image");
      return 0;
    }
    const data = atob(qrCanvaRef.current.toDataURL("image/png").split(",")[1]);
    const blob = new Blob([data], { type: "image/png" });
    const user = await account.get();
    const unique_id = ID.unique();
    const file_name = user.$id + "_" + unique_id + "_" + Date.now();
    const file = new File([blob], file_name, { type: "image/png" });

    let downloadLink = document.createElement("a");

    const image = await storage.createFile(STORAGE_ID, ID.unique(), file);

    if (!image.$id) {
      toast.error("Unable to save the qr.");
      return;
    }

    if (type === "double") {
      databases
        .createDocument(DATABASE_ID, COLLECTION_ID, unique_id, {
          userId: $id,
          qrUrl: import.meta.env.VITE_BASE_URL + "/qr/" + qrUrl,
          firstUrl,
          secondUrl,
          active,
          type,
          image_id: image.$id,
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
          toast.error(error?.message);
        });
    } else if (type === "single") {
      console.log({
        userId: $id,
        qrUrl: import.meta.env.VITE_BASE_URL + "/qr/" + qrUrl,
        firstUrl,
        active,
        type,
        image_id: image.$id,
      });
      databases
        .createDocument(DATABASE_ID, COLLECTION_ID, unique_id, {
          userId: $id,
          qrUrl: import.meta.env.VITE_BASE_URL + "/qr/" + qrUrl,
          firstUrl,
          active,
          type,
          image_id: image.$id,
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
          toast.error(error.message);
        });
    }
  }

  return (
    <div>
      <h1 className="text-3xl">Preview</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center justify-between">
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
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="qr-size" className="ml-1 text-base text-slate-400">
            QR Logo
          </label>
          <input
            type="file"
            className="block w-fit text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            onChange={(e) =>
              e.target.files &&
              setQrLogo(URL.createObjectURL(e?.target?.files[0]))
            }
          />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <label htmlFor="qr-size" className="ml-1 text-base text-slate-400">
            QR Logo Size (in pixel)
          </label>
          <input
            type="number"
            className="text-md bg-slate-700 rounded-md outline-none border-none py-2 px-2 w-20 text-cenl-4 pr-6"
            value={qrLogoSize}
            onChange={(e) => setQrLogoSize(Number(e.target.value))}
            id="qr-logo-size"
            min={50}
          />
        </div>
        <QRCodeCanvas
          value={import.meta.env.VITE_BASE_URL + "/qr/" + qrUrl}
          title={import.meta.env.VITE_BASE_URL + "/qr/" + qrUrl}
          marginSize={2}
          minVersion={5}
          imageSettings={{
            excavate: true,
            src: qrLogo,
            height: qrLogoSize,
            width: qrLogoSize,
          }}
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
