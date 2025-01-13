import { QR } from "../../components";


function ListQR() {

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-start pt-4 pb-8 px-6 lg:px-14">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
          QR-Generator
        </h1>
      </div>
      <div className="px-6 lg:px-14 pt-10 bg-gray-900 h-full">
      <QR />
      </div>
    </div>
  );
}

export default ListQR;
