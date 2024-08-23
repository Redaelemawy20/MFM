import TextFeild from "@/components/dashboard/form-controls/Input";
import useStateManager from "@/hooks/useStateManager";
import FormProps from "@/ts/interfaces/FormProps";
import NavProps, { NavData, NavItemI } from "@/ts/interfaces/NavPops";
import Accordions from "../../dashboard/form-controls/Accordion";
import InputI from "@/components/dashboard/form-controls/interfaces/InputI";
import FormButton from "@/components/dashboard/forms/form-button/FormButton";
import Form from "@/components/common/Form";
import MuiAccordionDetails from "@/components/dashboard/form-controls/interfaces/AccordionI";
import CheckBox from "@/components/dashboard/form-controls/CheckBox";
import CheckBoxI from "../../dashboard/form-controls/interfaces/CheckBoxI";
import WithTabs from "@/components/common/withTabs";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "@/components/dashboard/forms/context/FormContext";
import LanguageSelect from "@/components/dashboard/form-controls/LanguageSelect";

interface NavEditPropsI extends Omit<NavProps, "logo">, FormProps {
  entity_slug: string;
}
const NavEdit = ({
  entity_slug,
  data,
  action,
  errorMessage,
}: NavEditPropsI) => {
  return (
    <FormProvider
      data={data}
      errorMessage={errorMessage}
      action={action}
      entity_slug={entity_slug}
    >
      <FormElements />
    </FormProvider>
  );
};

export default NavEdit;
interface NavContext extends ContextType {
  state: NavData;
  entity_slug: string;
  errorMessage?: string;
}
const FormElements = () => {
  const { state, setLang, lang, entity_slug, action } =
    useFormContext<NavContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state }));
  formData.set("entity_slug", entity_slug);
  formData.set("type", "nav");
  const modefiedAction = action.bind(null, formData);

  return (
    <Form modifiedAction={modefiedAction}>
      <LanguageSelect onChange={setLang} value={lang} />
      <WithTabs tabs={["Top Nav", "Links"]}>
        <>
          <TextFeild label="Top Start Text" name="start" value={state.start} />
          <TextFeild label="Top End Text" name="end" value={state.end} />
        </>
        <Accordions
          name="items"
          value={state.items}
          getTitle={() => ""}
          childs={(item, onChange) => {
            let itemsChilds = {
              hasDropDown: () => (
                <CheckBox
                  onChange={onChange}
                  name="hasDropDown"
                  label="has sub menu"
                  value={Boolean(item.hasDropDown)}
                />
              ),
              name: () => (
                <TextFeild
                  name="name"
                  label="link text"
                  value={item.name}
                  onChange={onChange}
                  translatable
                />
              ),
            };

            if (item.hasDropDown)
              return {
                ...itemsChilds,
                menu: () => (
                  <div className="ms-4">
                    <Accordions
                      getTitle={() => ""}
                      value={item.menu}
                      name="menu"
                      onChange={onChange}
                      childs={(menuItem, oncChange) => {
                        let menuItemChilds = {
                          hasDropDown: () => (
                            <CheckBox
                              name="hasDropDown"
                              label="has sub menu"
                              value={Boolean(menuItem.hasDropDown)}
                              onChange={oncChange}
                            />
                          ),
                          name: () => (
                            <TextFeild
                              name="name"
                              label="link text"
                              value={menuItem.name}
                              onChange={oncChange}
                              translatable
                            />
                          ),
                        };

                        if (menuItem.hasDropDown) {
                          return {
                            ...menuItemChilds,
                            menu: () => (
                              <div className="ms-6">
                                <Accordions
                                  value={menuItem.menu}
                                  getTitle={() => ""}
                                  name="menu"
                                  onChange={oncChange}
                                  childs={(subMenuItem, onSubMenuChange) => ({
                                    name: () => (
                                      <TextFeild
                                        name="name"
                                        label="link text"
                                        value={subMenuItem.name}
                                        onChange={onSubMenuChange}
                                        translatable
                                      />
                                    ),
                                    href: () => (
                                      <TextFeild
                                        name="href"
                                        label="link value"
                                        value={subMenuItem.href}
                                        onChange={onSubMenuChange}
                                      />
                                    ),
                                  })}
                                />
                              </div>
                            ),
                          };
                        }
                        return {
                          ...menuItemChilds,
                          href: () => (
                            <TextFeild
                              name="href"
                              label="link value"
                              value={menuItem.href}
                              onChange={oncChange}
                            />
                          ),
                        };
                      }}
                    />
                  </div>
                ),
              };
            return {
              ...itemsChilds,
              href: () => (
                <TextFeild
                  name="href"
                  label="link value"
                  value={item.href}
                  onChange={onChange}
                />
              ),
            };
          }}
        />
      </WithTabs>

      <FormButton>Save</FormButton>
    </Form>
  );
};
