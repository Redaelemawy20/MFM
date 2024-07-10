import { ZodSchema } from "zod";

interface ValidationResult {
  message: string | false;
}

export default function validateFormData<T>(
  schema: ZodSchema<T>,
  data: Object
): ValidationResult {
  // Validate the data object against the schema
  const result = schema.safeParse(data);

  if (result.success) {
    return {
      message: false,
    };
  }

  // Process validation errors
  const errors = result.error.flatten().fieldErrors;
  let message = "";

  Object.keys(errors).forEach((k) => {
    if (message) return;
    const key = k as keyof typeof errors;
    if (errors[key]) message += `${String(key)}: ${errors[key].join(", ")}`;
  });

  return {
    message,
  };
}
