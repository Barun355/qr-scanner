import { NavLink, Outlet } from "react-router-dom";

function CreateQR() {
  const navItems = [
    {
      label: "QR",
      slug: "",
    },
    {
      label: "Single Link",
      slug: "sl",
    },
    {
      label: "Double Link",
      slug: "dl",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-start pt-4 pb-8 px-6 lg:px-14">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
          QR-Generator
        </h1>
      </div>
      <div className="flex w-full border-b border-slate-500 px-6 lg:px-16 gap-2 lg:gap-6 lg:text-base text-sm">
        {navItems &&
          navItems.map((item) => (
            <NavLink
              to={item.slug}
              key={item.slug}
              className={({ isActive }) =>
                [
                  isActive
                    ? "text-white border-b border-white"
                    : "text-gray-500 border-none hover:text-white hover:bg-gray-700 hover:rounded-lg",
                  "px-4 py-2",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
      </div>
      <div className="px-6 lg:px-14 pt-10 bg-gray-900 h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default CreateQR;
