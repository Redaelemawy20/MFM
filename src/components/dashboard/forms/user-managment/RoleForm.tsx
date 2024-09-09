import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "../form-button/FormButton";
import Form from "@/components/common/Form";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "../context/FormContext";
import React from "react";
import Entity from "@/ts/interfaces/Entity";
import { Role } from "@/ts/interfaces/Role";
import { Select, SelectItem } from "@nextui-org/react";

interface RoleFormI extends FormProps {
  cerdential?: { id: number; slug: string };
  entities: Entity[];
  roles: Role[];
}

export default function RoleForm({
  action,
  cerdential,
  errorMessage,
  entities,
  roles,
}: RoleFormI) {
  return (
    <FormProvider
      action={action}
      data={cerdential || {}}
      errorMessage={errorMessage}
      entities={entities}
      roles={roles}
    >
      <FormElements />
    </FormProvider>
  );
}
interface RoleContext extends ContextType {
  state: { entityId: number; roleId: number };
  entities: Entity[];
  roles: Role[];
}

function FormElements() {
  const { state, action, entities, roles, handleChange } =
    useFormContext<RoleContext>();

  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state }));

  const modefiedAction = action.bind(null, formData);

  return (
    <Form modifiedAction={modefiedAction}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        entity to make control on
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={state.entityId}
        name="entityId"
        onChange={(e) => handleChange(e.target)}
      >
        <option key="none" value="">
          None
        </option>
        {entities.map((e) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        type of control
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={state.roleId}
        name="roleId"
        onChange={(e) => handleChange(e.target)}
      >
        <option key="none" value="">
          None
        </option>
        {roles.map((e) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>

      <FormButton>Save</FormButton>
    </Form>
  );
}
