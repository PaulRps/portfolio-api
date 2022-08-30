import { bootstrapApi, bootstrapServerless } from "src/bootstrap";

let server;
export const handler = async (event, context, callback) => {
  server = server ?? (await bootstrapServerless());
  return server(event, context, callback);
};