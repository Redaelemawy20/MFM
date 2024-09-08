"use client";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./form-button/FormButton";
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import Image from "next/image";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { sortSectionsWithOrder } from "@/utils/sort-sections-w-order";
interface SortSectionFormProps extends FormProps {
  sections: {
    section: { id: number; name: string; imgUrl: string };
    order: number | null;
  }[];
}

export default function SortPageSectionForm({
  action,
  errorMessage,
  sections,
}: SortSectionFormProps) {
  const [state, setState] = useState(sections);
  const handleUp = (index: number) => {
    const clonedState = [...state];
    const temp = clonedState[index - 1];
    clonedState[index - 1] = { ...clonedState[index], order: index - 1 };
    clonedState[index] = { ...temp, order: index };
    setState(clonedState);
  };
  const handleDown = (index: number) => {
    const clonedState = [...state];
    const temp = clonedState[index + 1];
    clonedState[index + 1] = { ...clonedState[index], order: index + 1 };
    clonedState[index] = { ...temp, order: index };

    setState(clonedState);
  };
  const formData = new FormData();

  formData.set(
    "data",
    JSON.stringify({
      sections: state,
    })
  );
  const boundAction = action.bind(null, formData);
  return (
    <form action={boundAction} className="w-[500px]">
      <div className="flex flex-col  gap-4 p-4">
        <h3 className="text-lg">Sort sections </h3>

        <div className="flex !flex-col  !items-start !justify-start  ">
          {state.length
            ? state.map((s, index) => {
                return (
                  <Card
                    key={index}
                    isPressable
                    className="m-2"
                    style={{
                      width: 450,
                    }}
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        width="100"
                        height="100"
                        alt={s.section.name}
                        className="w-full object-cover h-[140px] rounded-lg "
                        src={s.section.imgUrl}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                      <b className="text-nowrap">{s.section.name}</b>
                      <p className="flex flex-row ms-2">
                        <Chip
                          isDisabled={index == state.length - 1}
                          onClick={() => handleDown(index)}
                        >
                          <FaArrowDown />
                        </Chip>
                        <Chip
                          className="ms-2"
                          isDisabled={index === 0}
                          onClick={() => handleUp(index)}
                        >
                          <FaArrowUp />
                        </Chip>
                      </p>
                    </CardFooter>
                  </Card>
                );
              })
            : "there is no sections to add"}
        </div>
        {errorMessage ?? <div> {errorMessage} </div>}
        <FormButton>Save</FormButton>
      </div>
    </form>
  );
}
