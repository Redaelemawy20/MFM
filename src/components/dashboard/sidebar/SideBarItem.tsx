interface SideBarItemProps {
  children: React.ReactNode;
  active?: boolean;
}

const SidebarItem = ({ children, active }: SideBarItemProps) => {
  return (
    <div
      className={`p-4 mb-2  cursor-pointer transition-colors duration-300 ${
        active
          ? " bg-gray-700 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }  hover:bg-gray-700`}
    >
      {children}
    </div>
  );
};

export default SidebarItem;
