import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./FormButton";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

interface AddSectionFormProps extends FormProps {
  sections: { id: number; name: string; imgUrl: string }[];
  page: string;
  entity_slug: string;
}

export default function AddPageSectionForm({
  action,
  errorMessage,
  sections,
  page,
  entity_slug,
}: AddSectionFormProps) {
  return (
    <form action={action} className="w-[700px]">
      <div className="flex flex-col  gap-4 p-4">
        <h3 className="text-lg">Add sections to this page</h3>
        <input hidden defaultValue={page} name="pagename" />
        <input hidden defaultValue={entity_slug} name="entity_slug" />
        <div className="flex !flex-row flex-wrap !items-start !justify-start  ">
          {sections.length
            ? sections.map((s, index) => {
                return (
                  <Card
                    key={index}
                    isPressable
                    className="m-2"
                    style={{ width: 200 }}
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
                            name="sections"
                            key={s.name}
                            type="checkbox"
                            value={s.id}
                          />
                        </p>
                      </CardFooter>
                    </label>
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
