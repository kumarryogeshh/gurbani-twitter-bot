import { generateGurbaniCouplet } from "./openai.js";

export const handler = async (event) => {
  const couplet = await generateGurbaniCouplet();
  console.log(couplet.body);
  const response = couplet;
  return response;
};
