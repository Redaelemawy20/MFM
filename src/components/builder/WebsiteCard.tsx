import { useContent } from '@/hooks/useContent';
import { fileSrc } from '@/utils/file-src';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function WebsiteCard({
  website,
  highlight,
}: {
  website: Website;
  highlight?: string;
}) {
  const t = useTranslations('common');
  const translate = useContent();
  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-6 ${
        highlight ? `border-l-4 ${highlight}` : ''
      }`}
    >
      <div className="flex items-center mb-4">
        {/* if not logo show first letter of name */}
        <div className="w-10 h-10 rounded-md bg-indigo-100 flex items-center justify-center text-indigo-500 mr-3">
          {website.meta?.logoImage?._s ? (
            <Image
              src={fileSrc(website.meta?.logoImage?._s)}
              alt={website.name}
              width={100}
              height={100}
            />
          ) : (
            <span className="text-indigo-500">{website.name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{website.name}</h3>
          <p className="text-sm text-gray-500">{website.slug}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {translate(website.meta.description)}
      </p>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex flex-col">
          <span className="text-gray-500">{t('visitors')}</span>
          <span className="font-medium">
            {website.numberOfVisitorsPerMonth}/mo
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500">{t('pages')}</span>
          <span className="font-medium">{website.numberOfPages || 0}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500">{t('status')}</span>
          <span
            className={`font-medium ${
              website.status === 'ACTIVE' ? 'text-green-600' : 'text-yellow-600'
            }`}
          >
            {website.status}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500">{t('type')}</span>
          <span className="font-medium">{website.type}</span>
        </div>
      </div>
    </div>
  );
}

export default WebsiteCard;
