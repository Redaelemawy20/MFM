"use client";

import { useRouter } from "next/navigation";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const SideBarWithBack = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <aside className="g-gray-800 box-border">
      <button
        className="flex w-full flex-row !justify-start  text-white mb-4 bg-slate-500 px-1 py-2"
        onClick={() => router.back()}
      >
        <MdOutlineArrowBackIosNew className="h-5 w-5 mr-2" />
        Back
      </button>
      <div>{children}</div>
    </aside>
  );
};

export default SideBarWithBack;
