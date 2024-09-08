"use client";
import axios from "axios";
import Link from "next/link";
import { FaRegNewspaper } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";

import Pages from "./DefaultPages";
import {
  BASEPATH,
  entityAdminNewsPath,
  entityAdminStaffPath,
} from "@/utils/router";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const WebsiteHeader = () => {
  const params = useParams<{ e: string }>();
  const {
    data: entity,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () =>
      axios
        .get(`/api/admin/pages?entity_slug=${params.e}`)
        .then((res) => res.data),
    queryKey: [`/api/admin/pages/${params.e}`],
  });
  if (isLoading) return <div>...</div>;
  if (isError) return null;
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-3 font-bold text-gray-800">
        <h1 className="text-2xl   capitalize">{entity.name}</h1>
        <Link href={BASEPATH}>Home Dashboard</Link>
      </div>
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

        <Pages pages={entity.pages || []} />
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
