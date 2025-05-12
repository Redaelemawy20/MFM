function WebsiteCard({
  website,
  highlight,
}: {
  website: Website;
  highlight?: string;
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-6 ${
        highlight ? `border-l-4 ${highlight}` : ''
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-md bg-indigo-100 flex items-center justify-center text-indigo-500 mr-3">
          <span className="text-xl">{website.icon}</span>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{website.name}</h3>
          <p className="text-sm text-gray-500">{website.url}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {website.description}
      </p>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex flex-col">
          <span className="text-gray-500">Visitors</span>
          <span className="font-medium">
            {website.numberOfVisitorsPerMonth.toLocaleString()}/mo
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500">Pages</span>
          <span className="font-medium">{website.numberOfPages}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500">Status</span>
          <span
            className={`font-medium ${
              website.status === 'Active' ? 'text-green-600' : 'text-yellow-600'
            }`}
          >
            {website.status}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500">Type</span>
          <span className="font-medium">{website.type}</span>
        </div>
      </div>
    </div>
  );
}

export default WebsiteCard;
