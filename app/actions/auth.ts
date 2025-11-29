"use server";
import axios from "axios";
import { UserType } from "../_types/user";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  console.log("data", formData);
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get(
        "password"
      )}`
    );
    const user: UserType = response.data[0];
    if (!user) throw new Error("Invalid Credentials");
    //set user in the cookies
    await setSession({ name: user.name, email: user.email, id: user.id });
  } catch (error) {
    console.log("Failed to login", error);
  }
  redirect("/contact");
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
