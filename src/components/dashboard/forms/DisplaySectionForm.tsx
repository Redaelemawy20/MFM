import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./form-button/FormButton";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Form from "@/components/common/Form";
import TextFeild from "../form-controls/Input";
import useStateManager from "@/hooks/useStateManager";

interface DisplaySectionFormProps extends FormProps {
  sections: { id: number; name: string; imgUrl: string }[];
  selectedIndex?: number;
  entity_slug: string;
  sectionType: "nav" | "news" | "footer" | "persons";
  withorder?: { order: number };
}

export default function DisplaySectionForm({
  action,
  errorMessage,
  sections,
  selectedIndex,
  entity_slug,
  sectionType,
  withorder,
}: DisplaySectionFormProps) {
  const { state, handleChange } = useStateManager({
    sectionId: selectedIndex || 0,
    order: withorder ? withorder.order : 1,
  });
  const formData = new FormData();
  formData.set("sectionId", String(state.sectionId));
  formData.set("sectionType", sectionType);
  formData.set("entity_slug", entity_slug);
  if (withorder) formData.set("order", String(state.order));
  const modefiedAction = action.bind(null, formData);
  return (
    <Form modifiedAction={modefiedAction} errorMessage={errorMessage}>
      <h3 className="text-lg">Select template that data will be showed in</h3>
      <div className="flex flex-col gap-2 ">
        {sections.length
          ? sections.map((s, index) => {
              return (
                <Card
                  key={index}
                  isPressable
                  className="m-2"
                  // style={{ width: 200 }}
                >
                  <label htmlFor={s.name + s.id}>
                    <CardBody className="overflow-visible p-0">
                      <Image
                        width="100"
                        height="100"
                        alt={s.name}
                        className="w-full object-cover h-[140px] rounded-lg "
                        src={s.imgUrl}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                      <b className="text-nowrap">{s.name}</b>
                      <p className="text-default-500 ms-2">
                        <input
                          id={s.name + s.id}
                          key={s.name}
                          type="checkbox"
                          checked={state.sectionId == s.id}
                          onClick={(e) =>
                            handleChange({ name: "sectionId", value: s.id })
                          }
                        />
                      </p>
                    </CardFooter>
                  </label>
                </Card>
              );
            })
          : "there no templates"}
      </div>
      {withorder && (
        <TextFeild
          name="order"
          label="enter order in the home page ex: 2 will show after 2 sections"
          value={state.order}
          onChange={handleChange}
        />
      )}

      <FormButton>Save</FormButton>
    </Form>
  );
}
