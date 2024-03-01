export const kebabize = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? "-" : "") + $.toLowerCase(),
  );

export function kebabizeObj(obj: Record<any, unknown>) {
  const newObj: Record<string, unknown> = {};
  for (const key in obj) {
    newObj[kebabize(key)] = obj[key];
  }
  return newObj;
}
