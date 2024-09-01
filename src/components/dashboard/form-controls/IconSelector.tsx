"use client";
import { HandleChange } from "@/ts/common/HandleChange";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { ModalHeader } from "react-bootstrap";
import { IconContext } from "react-icons";
import { useFormContext } from "../forms/context/FormContext";
import { icons, IconType } from "@/components/common/Icons";

interface IconSelector {
  onChange?: HandleChange;
  name: string;
  value: IconType | null;
  translatable?: boolean;
}

const IconSelector = ({
  onChange,
  value,
  name,
  translatable,
}: IconSelector) => {
  //   const [value, setSelectedIcon] = useState<IconType | null>(null);
  const { handleChangeUpdated } = useFormContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleIconClick = (icon: IconType) => {
    // setSelectedIcon(icon);
    handleChangeUpdated(
      Boolean(translatable),
      value,
      { name, value: icon },
      onChange
    );
  };
  const CurrentIcon = value ? icons[value] : null;
  return (
    <div>
      <Button onPress={onOpen}>
        Select an Icon{" "}
        {CurrentIcon && (
          <IconContext.Provider value={{ size: "24px" }}>
            <CurrentIcon />
          </IconContext.Provider>
        )}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Select Icon
              </ModalHeader>
              <ModalBody>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {Object.keys(icons).map((iconKey) => {
                    const key = iconKey as IconType;
                    const IconComponent = icons[key];
                    return (
                      <div
                        key={key}
                        onClick={() => handleIconClick(key)}
                        style={{
                          margin: "10px",
                          cursor: "pointer",
                          border: value === key ? "2px solid blue" : "none",
                        }}
                      >
                        <IconContext.Provider value={{ size: "24px" }}>
                          <IconComponent />
                        </IconContext.Provider>
                      </div>
                    );
                  })}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default IconSelector;
