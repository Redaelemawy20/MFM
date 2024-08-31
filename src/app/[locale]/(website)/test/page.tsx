import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

export default () => {
  return (
    <DeviceFrameset device="MacBook Pro" color="gold" width={800}>
      <div>Hello world</div>
    </DeviceFrameset>
  );
};
