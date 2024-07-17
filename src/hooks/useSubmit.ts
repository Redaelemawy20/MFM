import axios, { Method } from "axios";
import { useSnackbar } from "notistack";
type sendOptions = {
  payload: any;
  altUrl?: string;
  method?: Method;
};
export const useSubmit = (url: string): [Submit] => {
  const { enqueueSnackbar } = useSnackbar();
  const send: Submit = async ({
    payload,
    altUrl,
    method = "post",
  }: sendOptions) => {
    try {
      const response = await axios({
        method,
        url: altUrl || url,
        data: payload,
        withCredentials: true,
      });
      enqueueSnackbar("item  saved!", { variant: "success" });
      return { data: response.data, error: null };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(error.response?.data.message || "item not saved", {
          variant: "error",
        });
        return { error: error.response?.data ?? true, data: "" };
      }
      enqueueSnackbar("item not saved", { variant: "error" });
      return { error: true, data: null };
    }
  };
  return [send];
};
type Submit = (options: sendOptions) => Promise<{
  data?: any;
  error?: any;
}>;
