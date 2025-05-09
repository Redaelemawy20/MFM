import React, { useState } from 'react';
import { LocaleProvider } from '../dashboard/forms/context/LocaleContext';
import { Lang } from '@/ts/common/Translatable';
import { DeviceFrameset } from 'react-device-frameset';
import { useMessages, useTranslations } from 'next-intl';
import 'react-device-frameset/styles/marvel-devices.min.css';
import 'react-device-frameset/styles/device-emulator.min.css';
import IframePreview from './IframePreview';

type DevicesPreviewProps = {
  lang: Lang;
  children: React.ReactNode;
};

type Device = 'MacBook Pro' | 'iPhone 8 Plus' | 'iPad Mini' | 'Galaxy Note 8';
type ViewportSize = 'desktop' | 'tablet' | 'mobile';

const devices: {
  label: string;
  value: Device;
  icon: string;
  viewport: ViewportSize;
}[] = [
  {
    label: 'Desktop',
    value: 'MacBook Pro',
    icon: 'desktop',
    viewport: 'desktop',
  },
  { label: 'Tablet', value: 'iPad Mini', icon: 'tablet', viewport: 'tablet' },
  {
    label: 'Mobile',
    value: 'iPhone 8 Plus',
    icon: 'mobile',
    viewport: 'mobile',
  },
  {
    label: 'Android',
    value: 'Galaxy Note 8',
    icon: 'android',
    viewport: 'mobile',
  },
];

const DevicesPreview: React.FC<DevicesPreviewProps> = ({ lang, children }) => {
  const messages = useMessages();
  const t = useTranslations('builder');
  const [activeDevice, setActiveDevice] = useState<Device>(devices[0].value);
  const [zoom, setZoom] = useState<number>(80);
  // Helper to get device width based on type
  const getDeviceWidth = (device: Device): number => {
    switch (device) {
      case 'MacBook Pro':
        return 1200;
      case 'iPad Mini':
        return 768;
      case 'iPhone 8 Plus':
        return 414;
      case 'Galaxy Note 8':
        return 400;
      default:
        return 1200;
    }
  };

  // Get device icon
  const getDeviceIcon = (deviceType: string): JSX.Element => {
    switch (deviceType) {
      case 'desktop':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case 'tablet':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        );
      case 'mobile':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        );
      case 'android':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col bg-gray-50 border rounded-lg shadow-sm">
      {/* Controls header */}
      <div className="p-3 border-b bg-white rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-1">
          {devices.map((device) => (
            <button
              key={device.value}
              onClick={() => setActiveDevice(device.value)}
              className={`flex items-center justify-center p-2 rounded-md transition-colors ${
                activeDevice === device.value
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title={device.label}
            >
              {getDeviceIcon(device.icon)}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Zoom:</span>
            <input
              type="range"
              min="50"
              max="100"
              value={zoom}
              onChange={(e) => setZoom(parseInt(e.target.value))}
              className="w-24"
            />
            <span className="text-xs text-gray-500 w-8">{zoom}%</span>
          </div>

          <div className="flex space-x-1 border-l pl-3">
            <button className="text-gray-600 hover:text-blue-600 p-1 rounded hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-blue-600 p-1 rounded hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Device preview */}
      <div
        className="p-6 flex justify-center overflow-auto bg-gray-100"
        style={{ minHeight: '500px' }}
      >
        <div
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'top center',
            transition: 'transform 0.3s ease',
          }}
        >
          <LocaleProvider locale={lang} messages={messages}>
            <DeviceFrameset
              device={activeDevice}
              color="silver"
              width={getDeviceWidth(activeDevice)}
              height={activeDevice === 'MacBook Pro' ? 700 : 600}
            >
              <IframePreview
                width={getDeviceWidth(activeDevice)}
                height={activeDevice === 'MacBook Pro' ? 700 : 600}
              >
                <div className="overflow-auto h-full w-full">{children}</div>
              </IframePreview>
            </DeviceFrameset>
          </LocaleProvider>
        </div>
      </div>

      {/* Device info footer */}
      <div className="p-2 border-t bg-white text-xs text-gray-500 flex justify-between items-center">
        <span>
          {t('viewingAs')}:{' '}
          <span className="font-medium">
            {devices.find((d) => d.value === activeDevice)?.label}
          </span>
        </span>
        <span>{getDeviceWidth(activeDevice)}px</span>
      </div>
    </div>
  );
};

export default DevicesPreview;
