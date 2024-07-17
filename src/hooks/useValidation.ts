import * as validation from "../../lib/validation/validate";
import { useEffect, useState } from "react";
import AllCustom from "../../ts/common/AllCustom";
import HandleChange from "../../ts/common/HandleChange";
import CallBack from "../../ts/common/Callback";
import { Lang } from "../../ts/common/Translatable";
import Joi, { ValidationError } from "joi";
const buildErrorObj = <T>(data: T): AllCustom<T, string> => {
  let errors = {} as AllCustom<T, string>;
  for (let key in data) {
    errors[key] = "";
  }
  return errors;
};
const useValidation = <T>(
  schema: Joi.PartialSchemaMap<any>,
  data: T,
  lang: Lang = "en"
): {
  errors: AllCustom<T, string>;
  validateField: HandleChange;
  validateContent: HandleChange;
  validateAll: CallBack;
  isValid: boolean;
} => {
  const [errors, setErrors] = useState<AllCustom<T, string>>(
    buildErrorObj(data)
  );
  const [state, setState] = useState<T>(data);
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    setState(data);
  }, [data]);
  useEffect(() => {
    validateAll(false);
  }, [lang, state]);
  const validateAll = (withMsg = true) => {
    const errors = validation.validateAll(schema, state);
    if (withMsg) setErrors(errors as AllCustom<T, string>);
    setIsValid(!Boolean(errors));
    return errors;
  };

  const validateField: HandleChange = ({ name, value }) => {
    const clonedErrors = { ...errors };
    const errorMessage = validation.validateField(schema, name, value);
    if (errorMessage) clonedErrors[name as keyof T] = errorMessage;
    else {
      delete clonedErrors[name as keyof T];
    }
    setErrors(clonedErrors);
  };
  const validateContent: HandleChange = ({ name, value }) => {
    try {
      const clonedErrors = { ...errors };
      const Schema = Joi.object().keys(schema);
      const subSchema = Schema.extract(["content", lang, name]);
      const { error: errorMessage } = subSchema.validate(value);
      if (errorMessage) clonedErrors[name as keyof T] = errorMessage.message;
      else {
        delete clonedErrors[name as keyof T];
      }
      setErrors(clonedErrors);
    } catch (error) {}
  };
  return { errors, validateContent, validateField, validateAll, isValid };
};
export default useValidation;
