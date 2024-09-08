"use client";
import axios from "axios";
import Link from "next/link";
import { FaRegNewspaper } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";

import Pages from "./DefaultPages";
import { entityAdminNewsPath, entityAdminStaffPath } from "@/utils/router";
import { useParams } from "next/navigation";

const WebsiteHeader = () => {
  const params = useParams<{ e: string }>();

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800">My Website</h1>
      <nav className="flex items-center space-x-4 !text-[16px] !text-bold">
        <Link
          href={entityAdminNewsPath(params.e)}
          className="px-4 py-2 bg-orange-900 text-white rounded-lg hover:bg-orange-300 transition-colors duration-200 flex items-center justify-center shadow-lg gap-1"
        >
          Website News
          <FaRegNewspaper fontSize={30} />
        </Link>
        <Link
          href={entityAdminStaffPath(params.e)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center gap-1"
        >
          Website Staff
          <RiTeamLine fontSize={30} />
        </Link>

        <Pages />
      </nav>
    </>
  );
};

export default WebsiteHeader;

function getMovies() {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data);
}
