import Link from "next/link";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import {
  IoCalendar,
  IoCheckboxOutline,
  IoCodeSlash,
  IoListOutline,
  IoPaperPlane,
  IoPerson,
} from "react-icons/io5";
import SidebarItem from "../SidebarItem/SidebarItem";
import { LogoutButton } from "./LogoutButton";

const menuItems = [
  {
    path: "/dashboard",
    icon: <IoCalendar size={30} />,
    title: "Dashboard",
  },
  {
    path: "/dashboard/rest-todos",
    icon: <IoCheckboxOutline size={30} />,
    title: "Rest TODOS",
  },
  {
    path: "/dashboard/server-todos",
    icon: <IoListOutline size={30} />,
    title: "Server Actions",
  },
  {
    path: "/dashboard/cookies",
    icon: <IoCodeSlash size={30} />,
    title: "Cookies",
  },
  {
    path: "/dashboard/products",
    icon: <IoPaperPlane size={30} />,
    title: "Products",
  },
  {
    path: "/dashboard/profil",
    icon: <IoPerson size={30} />,
    title: "Profile",
  },
];

interface Props {
  name: string | null | undefined;
  image: string | null | undefined;
  roles: string[] | null | undefined;
}

const Sidebar = ({ name, image, roles }: Props) => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="#" title="home">
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="w-32"
              alt="tailus logo"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="mt-8 text-center">
          {image ? (
            <Image
              src={image}
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={150}
              height={150}
            />
          ) : (
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={150}
              height={150}
            />
          )}
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {name}
          </h5>
          <span className="hidden text-gray-400 lg:block capitalize">{roles?.join(',')}</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
