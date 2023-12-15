export const srcToJson = (src: string) => {
  return src.replace(".png", ".json");
};

export const sliceAccountStr = (str: string) => {
  if (!str) return;
  const len = str.length;
  const start = str.slice(0, 3);
  const end = str.slice(len - 5, len - 1);
  return `${start}...${end}`;
};
