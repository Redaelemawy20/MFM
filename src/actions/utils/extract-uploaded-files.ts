export default function (obj: Object): [{}[], object, object] {
  let result: any[] = [];
  const dataToStore = { ...obj };

  function search(obj: any) {
    if (typeof obj !== "object" || obj === null) {
      return;
    }
    if (Array.isArray(obj)) {
      for (let item of obj) {
        search(item);
      }
      return;
    }
    if (typeof obj === "object") {
      if (isValidBase64(obj)) {
        result.push({ ...obj });
        obj.preview = obj.name;
        obj._s = obj.name;
        delete obj["image"];
        delete obj.name;
        return;
      } else {
        for (let key in obj) {
          search(obj[key]);
        }
      }
    }
  }

  search(dataToStore);
  return [result, dataToStore, obj];
}

function isValidBase64(value: any) {
  return value && typeof value === "object" && value.image;
}
