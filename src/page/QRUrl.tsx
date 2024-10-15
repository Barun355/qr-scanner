import { useEffect, useState } from "react";
import { mobileVendor } from "react-device-detect";
import { useParams } from "react-router-dom";
import { databases } from "../utils/appwrite";
import { COLLECTION_ID, DATABASE_ID } from "../utils";
import { Query } from "appwrite";

function QRUrl() {
  const { url } = useParams();
  const qrUrl = import.meta.env.VITE_BASE_URL + "/qr/" + url;

  const [notActive, setNotActive] = useState(false);

  useEffect(() => {
    databases
      .listDocuments(DATABASE_ID, COLLECTION_ID, [Query.equal("qrUrl", qrUrl)])
      .then((data) => {
        if (data.documents[0]?.type === "double" && data.documents[0]?.active) {
          if (mobileVendor.toLocaleLowerCase().includes("apple")) {
            window.location = data.documents[0].secondUrl;
          } else {
            window.location = data.documents[0].firstUrl;
          }
        } else if (
          data.documents[0]?.type === "single" &&
          data.documents[0]?.active
        ) {
          window.location = data.documents[0].qrUrl;
        } else {
          setNotActive(true);
        }
      })
      .catch((err) => alert(err.message));
  }, []);
  return (
    <div className="bg-gray-800 flex justify-center items-center h-screen w-full text-white">
      {notActive ? (
        <h1>
          QR is not active. If you own this qr then make it avaliable for
          everyone. <a href={import.meta.env.VITE_BASE_URL+"/signin"}></a>
        </h1>
      ) : (
        <h1>redirecting...</h1>
      )}
    </div>
  );
}

export default QRUrl;
