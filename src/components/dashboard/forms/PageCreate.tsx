import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./FormButton";

export default function PageCreateForm({ action, errorMessage }: FormProps) {
  return (
    <form action={action}>
      <div className="flex flex-col gap-4 p-4 w-80">
        <h3 className="text-lg">Add a new page</h3>
        <input type="text" name="name" />
        {errorMessage ?? <div> {errorMessage} </div>}
        <FormButton>Save</FormButton>
      </div>
    </form>
  );
}
