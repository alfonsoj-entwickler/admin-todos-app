'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: React.ReactNode;
  title: string;
}

const SidebarItem = ({ path, icon, title }: Props) => {
  const currentPath = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 group transition-all hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 ${
          currentPath === path
            ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : ""
        }`}
      >
        {icon}
        <span className="group-hover:text-white">{title}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
