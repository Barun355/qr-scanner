import { Link, Outlet, useNavigate } from "react-router-dom";
import { account } from "../../utils/appwrite";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsQrCodeScan } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

interface NavItemType {
  label: string,
  Icon: JSX.Element,
  slug: string
}

function Layout() {

  const navItems: NavItemType[] = [
    {
      label: "Dashboard",
      slug: "/dashboard",
      Icon: <RxDashboard />
    },
    {
      label: "Create QR",
      slug: "/dashboard/create-qr",
      Icon: <BsQrCodeScan />
    }
  ]

  const navigate = useNavigate();
  
  const [_, setUser] = useState<any>(null);
  const [sidebar, setSidebar] = useState(false)

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
      <div className={`bg-gray-900 transition-all duration-200 h-full flex-col justify-between fixed flex top-0 left-0 ${!sidebar? '-translate-x-full': 'translate-x-0'} lg:static lg:top-auto lg:left-auto lg:translate-x-0 w-56 py-8 px-6`}>
        <div className="flex justify-between items-center pt-4 pb-10">
          <Link to="/" className="cursor-pointer py-2 px-4 bg-slate-800 hover:bg-slate-600 rounded-lg">QR Generator</Link>
          <IoClose className="cursor-pointer visible lg:hidden" onClick={_ => setSidebar(false)} />
        </div>
        <div className="w-full flex-1 flex-col gap-1">
          {
            navItems && navItems.map(({label, Icon, slug}: NavItemType) => (
              <Link to={slug} key={slug} className="flex gap-4 items-center justify-start py-2 pl-2 active:bg-blue-600 hover:bg-blue-800 rounded-lg">
                {Icon}
                <label htmlFor={label}>{label}</label>
              </Link>
            ))
          }
        </div>
        <div className="flex justify-center items-center">
          <button className="py-2 px-4 border-2 border-red-800 hover:bg-red-800 w-full rounded-lg" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="flex-1 flex-col px-8 py-4 bg-gray-800">
        <div className="flex justify-between pt-4 pb-8">
          <div className="gap-4 *:cursor-pointer hidden lg:flex">
            <span>/</span>
            <span>Create QR</span>
          </div>
          <GiHamburgerMenu className="cursor-pointer block lg:hidden" onClick={_ => setSidebar(true)} />
          <FaArrowLeft className="cursor-pointer transition-transform duration-200 hover:-translate-x-1" />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
