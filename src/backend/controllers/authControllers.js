import { Response } from "miragejs";
import { users } from "../db/users";

export const signupHandlers = async (schema, request) => {
  try {
    return new Response(200, {}, { users: { ...users } });
  } catch (error) {
    console.error(error);
  }
};
export const login = (schema, request) => {
  try {
  } catch (error) {}
};
