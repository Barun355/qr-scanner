import { Query } from "appwrite";
import { COLLECTION_ID, DATABASE_ID } from "../../../utils";
import { account, databases } from "../../../utils/appwrite";
import Table from "../table";
import { useEffect, useState } from "react";
import { QR_DataType } from "../../../../types/qrdata.ts";

function QR() {

  const [qrData, setQRData] = useState<any>(null)

  async function fetchQRs() {
    const { $id } = await account.get();
    const data = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("userId", $id)
    ]);
    
    console.log(data)
    const filterData:QR_DataType[] = data.documents.map(filtData => { return {$id: filtData.$id, qrUrl: filtData?.qrUrl, firstUrl: filtData?.firstUrl, secondUrl: filtData?.secondUrl, active: filtData?.active, type: filtData?.type}})
    
    console.log(filterData)
    setQRData(filterData)
  }

  useEffect(() => {
    fetchQRs()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <Table
        title="Your generated QR's"
        data={{
          header: ["Type", "QR Url", "First Link", "Second Link", "Active"],
          body: qrData
        }}
      />
    </div>
  );
}

export default QR;
