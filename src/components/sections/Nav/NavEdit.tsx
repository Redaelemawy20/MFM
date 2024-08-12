import TextFeild from "@/components/dashboard/form-controls/Input";
import useStateManager from "@/hooks/useStateManager";
import FormProps from "@/ts/interfaces/FormProps";
import NavProps, { NavItemI } from "@/ts/interfaces/NavPops";
import Accordions from "../../dashboard/form-controls/Accordion";
import InputI from "@/components/dashboard/form-controls/interfaces/InputI";
import FormButton from "@/components/dashboard/forms/FormButton";
import Form from "@/components/common/Form";
import MuiAccordionDetails from "@/components/dashboard/form-controls/interfaces/AccordionI";
import CheckBox from "@/components/dashboard/form-controls/CheckBox";
import CheckBoxI from "../../dashboard/form-controls/interfaces/CheckBoxI";
import WithTabs from "@/components/common/withTabs";

interface NavEditPropsI extends Omit<NavProps, "logo">, FormProps {
  entity_slug: string;
}
const NavEdit = ({
  entity_slug,
  data,
  action,
  errorMessage,
}: NavEditPropsI) => {
  const { state, handleChange } = useStateManager(data);
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state }));
  formData.set("entity_slug", entity_slug);
  const modefiedAction = action.bind(null, formData);
  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <WithTabs tabs={["Top Nav", "Links"]}>
        <>
          <TextFeild
            label="Top Start Text"
            name="start"
            value={state.start}
            onChange={handleChange}
          />
          <TextFeild
            label="Top End Text"
            name="end"
            value={state.end}
            onChange={handleChange}
          />
        </>
        <Accordions
          name="items"
          value={state.items}
          onChange={handleChange}
          titleProp="name"
          childs={(item) => {
            const checkBox = (props: CheckBoxI) => (
              <CheckBox
                {...props}
                label="has sub menu"
                value={Boolean(item.hasDropDown)}
              />
            );
            if (item.hasDropDown)
              return {
                hasDropDown: checkBox,
                menu: (props: MuiAccordionDetails<NavItemI, "name">) => (
                  <div className="ms-4">
                    <Accordions
                      {...props}
                      value={item.menu}
                      titleProp={"name"}
                      childs={() => ({
                        href: (p) => <TextFeild {...(p as InputI)} />,
                      })}
                    />
                  </div>
                ),
              };
            return {
              hasDropDown: checkBox,
              href: (props) => <TextFeild {...(props as InputI)} />,
            };
          }}
        />
      </WithTabs>

      <FormButton>Save</FormButton>
    </Form>
  );
};

export default NavEdit;
