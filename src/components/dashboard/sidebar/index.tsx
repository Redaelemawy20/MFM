"use client";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="flex flex-col h-screen w-1/5 bg-gray-800 p-4 box-border">
      {children}
    </aside>
  );
};

export default Sidebar;
