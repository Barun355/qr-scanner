import { Link, Outlet, useNavigate } from "react-router-dom";
import { account } from "../../utils/appwrite";
import { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { BsQrCodeScan } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Breadcrumb from "../../components/Breadcrumb";
import { FaList } from "react-icons/fa";

interface NavItemType {
  label: string;
  Icon: JSX.Element;
  slug: string;
}

function Layout() {
  const navItems: NavItemType[] = [
    {
      label: "Dashboard",
      slug: "/dashboard",
      Icon: <RxDashboard className="h-[1.2em] w-[1.2em]" />,
    },
    {
      label: "Create QR",
      slug: "/dashboard/create-qr/sl",
      Icon: <BsQrCodeScan className="h-[1.2em] w-[1.2em]" />,
    },
    {
      label: "List QR",
      slug: "/dashboard/list-qr",
      Icon: <FaList className="h-[1.2em] w-[1.2em]" />,
    },
  ];

  const navigate = useNavigate();

  const [_, setUser] = useState<any>(null);
  const [sidebar, setSidebar] = useState(false);

  async function handleLogout() {
    await account.deleteSession("current");
    setUser("");
    navigate("/");
  }

  useEffect(() => {
    account
      .get()
      .then((currentUser) => {
        setUser(currentUser);
      })
      .catch((error) => {
        if (error?.code === 401) {
          navigate("/signin");
        }
      });
  }, []);

  return (
    <div className="text-white h-screen w-full flex">
      <div
        className={`bg-gray-900 z-10 transition-all border-r border-slate-500 border- duration-200 h-full flex-col justify-between fixed flex top-0 left-0 ${
          !sidebar ? "-translate-x-full" : "translate-x-0"
        } lg:static lg:top-auto lg:left-auto lg:translate-x-0 w-56 py-8 px-6`}
      >
        <div className="flex justify-between items-center pt-4 pb-10">
          <Link
            to="/"
            className="cursor-pointer py-2 px-4 bg-slate-800 hover:bg-slate-600 rounded-lg"
          >
            Smart Scan
          </Link>
          <IoClose
            className="cursor-pointer visible lg:hidden"
            onClick={(_) => setSidebar(false)}
          />
        </div>
        <div className="w-full flex-1 flex-col gap-10 space-y-4">
          {navItems &&
            navItems.map(({ label, Icon, slug }: NavItemType) => (
              <Link
                to={slug}
                key={slug}
                className="flex gap-4 items-center justify-start py-2 pl-2 active:bg-blue-600 hover:bg-blue-800 rounded-lg transition-colors duration-200"
              >
                {Icon}
                <label htmlFor={label}>{label}</label>
              </Link>
            ))}
        </div>
        <div className="flex justify-center items-center">
          <button
            className="py-2 px-4 border-2 border-red-800 hover:bg-red-800 w-full rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-slate-800 h-full w-full overflow-y-auto">
        <div className="flex justify-between bg-gray-900 pt-8 pb-4 px-8 border-b border-slate-500 sticky top-0 w-full gap-4">
          <Breadcrumb />
          <span className="h-fit w-fit px-6 py-2 bg-slate-700 rounded-full text-gray-400">Beta</span>
          <GiHamburgerMenu
            className="cursor-pointer block lg:hidden"
            onClick={(_) => setSidebar(true)}
          />
        </div>
        <div className="pt-4 grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
