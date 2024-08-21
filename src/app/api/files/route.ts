import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import path from "path";

export function GET(req: NextRequest) {
  // Get the image name from the query parameters
  const searchParams = req.nextUrl.searchParams;
  const name = searchParams.get("name") as string;

  // Define the storage folder path
  const storageFolderPath = path.join(process.cwd(), "storage", "u"); // Adjust the path according to your storage folder

  // Construct the full path to the image file
  const imagePath = path.join(storageFolderPath, name);

  // Check if the file exists
  if (fs.existsSync(imagePath)) {
    // Read the image file
    const image = fs.readFileSync(imagePath);

    // Determine the content type based on the file extension
    const ext = path.extname(name).toLowerCase();
    // let contentType;
    // switch (ext) {
    //   case ".jpg":
    //   case ".jpeg":
    //     contentType = "image/jpeg";
    //     break;
    //   case ".png":
    //     contentType = "image/png";
    //     break;
    //   case ".gif":
    //     contentType = "image/gif";
    //     break;
    //   default:
    //     contentType = "application/octet-stream";
    // }

    // Set the content type and return the image
    // Response. setHeader("Content-Type", contentType);
    return new Response(image);
  } else {
    return new Response("not found", {
      status: 404,
    });
    // If the file does not exist, return a 404 response
    res.status(404).json({ error: "Image not found" });
  }
}
