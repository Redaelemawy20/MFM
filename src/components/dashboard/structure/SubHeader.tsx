const SubHeader = ({ children }: { children: React.ReactNode[] }) => {
  const [start, end] = children;
  return (
    <div>
      <div className="flex w-full justify-between flex-wrap ">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          {start}
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">{end}</div>
      </div>
    </div>
  );
};

export default SubHeader;
