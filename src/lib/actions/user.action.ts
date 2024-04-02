"use server";
import { connect } from "@/lib/db";
import Data from "@/lib/modals/user.modal";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await Data.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
