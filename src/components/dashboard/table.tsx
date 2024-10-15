import { QR_DataType } from "../../../types/qrdata.ts";
import { databases } from "../../utils/appwrite.ts";
import { copyToClipBoard } from "../../utils/copyToClipBoard.ts";
import { COLLECTION_ID, DATABASE_ID } from "../../utils/index.ts";
import Toggle from "./toggle.tsx";

interface TableType {
  title: string;
  description?: string;
  data: {
    header: string[];
    body: QR_DataType[];
  };
}

function Table({ title, description, data }: TableType) {

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-white bg-gray-800">
          {title}
          <p className="mt-1 text-sm font-normal text-gray-400">
            {description}
          </p>
        </caption>
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            {data.header?.length &&
              data.header.map((head) => (
                <th scope="col" className="px-6 py-3" key={head}>
                  {head}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.body?.length > 0 &&
            data.body.map(
              ({ active, qrUrl, firstUrl, secondUrl, type, $id }) => (
                <tr className="border-b bg-gray-800 border-gray-700" key={$id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowraptext-white uppercase"
                  >
                    {type || "-"}
                  </th>
                  <td
                    className="px-6 py-4 hover:bg-slate-600 cursor-pointer"
                    onClick={(_) => {
                      copyToClipBoard(qrUrl);
                      alert("Url Copy to clipboard");
                    }}
                  >
                    {qrUrl}
                  </td>
                  <td className="px-6 py-4">{firstUrl || "-"}</td>
                  <td className="px-6 py-4">{secondUrl || "-"}</td>
                  <td className="px-6 py-4 text-right">
                    <Toggle
                      active={active}
                      setActive={async () => {
                        await databases.updateDocument(
                          DATABASE_ID,
                          COLLECTION_ID,
                          $id,
                          { active: !active }
                        );
                        window.location.reload();
                      }}
                    />
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
