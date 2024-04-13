"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  tabOptions = [1, 2, 3, 4],
  currentTab = 1,
}: Props) => {
  const router = useRouter();
  const [selected, setSeleted] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSeleted(tab);
    setCookie("selectedTab", tab.toString());
    router.refresh();
  };
  return (
    <div
      className={`
        grid grid-cols-5 w-full space-x-2 rounded-xl bg-gray-200 p-2
    `}
    >
      {tabOptions.map((tab) => (
        <div key={`tab-${tab}`}>
          <input
            type="radio"
            checked={selected === tab}
            onChange={() => {}}
            id={tab.toString()}
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelected(tab)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition"
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
