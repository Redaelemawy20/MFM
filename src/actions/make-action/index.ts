import { ActionResultType } from "@/ts/Types/FormActionType";

const makeAction = async <T>(
  aciton: (data: T) => Promise<any>,
  data: T,
  sucess?: (data?: T) => void
): Promise<ActionResultType> => {
  try {
    await aciton(data);
    if (sucess) sucess(data);
    return {
      message: false,
    };
  } catch (error) {
    console.log(error);

    return {
      message: "Failed to save!!",
    };
  }
};
export default makeAction;
