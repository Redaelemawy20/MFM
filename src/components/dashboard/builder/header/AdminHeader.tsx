import * as router from "@/utils/router";
import Link from "next/link";
// import { Link } from "@nextui-org/react";

const AdminHeader = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800">Websites Dashboard</h1>
      <nav className="flex items-center space-x-4">
        <Link
          href={router.ENTITIESPATH}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center shadow-lg"
        >
          <i className="fas fa-layer-group mr-2"></i> All Websites
        </Link>
        <Link
          href={router.USERSPATH}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center shadow-lg"
        >
          <i className="fas fa-layer-group mr-2"></i> Manage Users
        </Link>
        <Link
          href={router.ROLES}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center shadow-lg"
        >
          <i className="fas fa-layer-group mr-2"></i> Manage Roles
        </Link>
      </nav>
    </>
  );
};

export default AdminHeader;
