export const validateForm = (data) => {
  if (Object.values(data).includes("")) throw Error("Check the fields");
};
