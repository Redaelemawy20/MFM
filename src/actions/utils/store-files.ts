import { ActionResultType } from "@/ts/common/FormActionType";
import fs from "fs/promises";
import path from "path";

export default async function stroreFiles(
  files: any[],
  formData: FormData
): Promise<ActionResultType> {
  try {
    const writeOperations = files.map(async (file) => {
      console.log(file);

      const f = formData.get(file.name) as File;
      console.log(f);

      const arrayBuffer = await f.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);

      const uploadsPath = path.join(process.cwd(), "/storage", "u", file.name);
      await fs.writeFile(uploadsPath, buffer);
    });

    await Promise.all(writeOperations);
    return {
      message: false,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "Error storing files",
    };
  }
}
