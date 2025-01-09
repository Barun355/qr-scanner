import { Query } from "appwrite";
import { COLLECTION_ID, DATABASE_ID, STORAGE_ID } from "../../../utils";
import { account, databases, storage } from "../../../utils/appwrite";
import Table from "../table";
import { useEffect, useState } from "react";
import { QR_DataType } from "../../../../types/qrdata.ts";
import { toast } from "react-toastify";

function QR() {
  const [qrData, setQRData] = useState<any>(null);

  async function fetchQRUrls() {
    const { $id } = await account.get();
    const data = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("userId", $id),
    ]);

    const filterData: QR_DataType[] = data.documents.map((filtData) => {
      return {
        $id: filtData.$id,
        qrUrl: filtData?.qrUrl,
        firstUrl: filtData?.firstUrl,
        secondUrl: filtData?.secondUrl,
        active: filtData?.active,
        type: filtData?.type,
        image_id: filtData?.image_id,
      };
    });

    setQRData(filterData);
  }

  useEffect(() => {
    fetchQRUrls();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Table
        title="Your generated QR's"
        data={{
          header: ["Type", "QR Url", "First Link", "Second Link", "Active"],
          body: qrData,
        }}
        action={true}
        actionName="Download"
        onDelete={(data: any) => {
          const url_id = data?.url_id;
          const image_id = data?.image_id;
          storage.deleteFile(STORAGE_ID, image_id).then(data => {
            console.log(data)
          }).catch(e => {
            console.log(e)
            toast.error(e.message)
          })
          databases.deleteDocument(DATABASE_ID, COLLECTION_ID, url_id).then(data => {
            console.log(data)
            // toast.error(data)
            toast.error("Item deleted sucessfully. Refresh the page to reflect the action.")
          }).catch(error => {
            toast.warning(error.message); 
            console.log(error)
          })
        }}
      />
    </div>
  );
}

export default QR;
