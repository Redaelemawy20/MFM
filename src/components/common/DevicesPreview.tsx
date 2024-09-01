import React, { useState } from "react";
import { LocaleProvider } from "../dashboard/forms/context/LocaleContext";
import { Lang } from "@/ts/common/Translatable";
import { DeviceFrameset } from "react-device-frameset";
import { useMessages } from "next-intl";
import "react-device-frameset/styles/marvel-devices.min.css";
import "react-device-frameset/styles/device-emulator.min.css";
type DevicesPreviewProps = {
  lang: Lang;
  children: React.ReactNode;
};
type Device = "MacBook Pro" | "iPhone 8 Plus";
const devices: { label: string; value: Device }[] = [
  { label: "MacBook", value: "MacBook Pro" },
  { label: "iPhone", value: "iPhone 8 Plus" },
];
const DevicesPreview: React.FC<DevicesPreviewProps> = ({ lang, children }) => {
  const messages = useMessages();
  const [activeDevice, setActiveDevice] = useState<Device>(devices[0].value);

  return (
    <div className="flex flex-col m-auto">
      <div className="flex space-x-4 border-b mb-2">
        {devices.map((device) => (
          <button
            key={device.value}
            onClick={() => setActiveDevice(device.value)}
            className={`tab-btn ${
              activeDevice === device.value
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            } py-2 px-4 font-semibold transition duration-300 ease-in-out transform hover:scale-105`}
          >
            {device.label}
          </button>
        ))}
      </div>
      <div className="h-[90vh] overflow-y-auto overflow-x-auto  ">
        <LocaleProvider locale={lang} messages={messages}>
          <DeviceFrameset
            device={activeDevice}
            color="silver"
            width={activeDevice === "MacBook Pro" ? 900 : 400}
          >
            {children}
          </DeviceFrameset>
        </LocaleProvider>
      </div>
    </div>
  );
};
export default DevicesPreview;
