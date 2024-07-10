import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./FormButton";

interface AddSectionFormProps extends FormProps {
  sections: { id: number; name: string }[];
  page: string;
}

export default function AddPageSectionForm({
  action,
  errorMessage,
  sections,
  page,
}: AddSectionFormProps) {
  return (
    <form action={action}>
      <div className="flex flex-col gap-4 p-4 w-80">
        <h3 className="text-lg">Add sections to this page</h3>
        <input hidden defaultValue={page} name="pagename" />
        <div className="flex">
          {sections.length
            ? sections.map((s) => {
                return (
                  <div className="flex flex-col ml-1" key={s.id + s.name}>
                    <label htmlFor={s.name + s.id}>{s.name}</label>
                    <input
                      id={s.name + s.id}
                      name="sections"
                      key={s.name}
                      type="checkbox"
                      value={s.id}
                    />
                  </div>
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
