import { useEffect } from "react";
import {  mobileVendor } from "react-device-detect";
import { useParams } from "react-router-dom";
import { databases } from "../utils/appwrite";
import { COLLECTION_ID, DATABASE_ID } from "../utils";
import { Query } from "appwrite";

function QRUrl() {
  const { url } = useParams();
  const qrUrl = import.meta.env.VITE_BASE_URL + "/qr/" + url;

  useEffect(() => {
    console.log(qrUrl, url)
    databases
      .listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal("qrUrl", qrUrl),
      ])
      .then((data) => {
        console.log(data)
        if(data.documents[0]?.type === 'double'){
          if (mobileVendor.toLocaleLowerCase().includes("apple")) {
              window.location = data.documents[0].secondUrl
          } else {
              window.location = data.documents[0].firstUrl
          }
        } else if (data.documents[0]?.type === 'single') {
            window.location = data.documents[0].qrUrl
        }

      }).catch(err => alert(err.message));
  }, []);
  return (
    <div className="bg-gray-800 flex justify-center items-center h-screen w-full text-white">
      <h1>redirecting...</h1>
    </div>
  );
}

export default QRUrl;
