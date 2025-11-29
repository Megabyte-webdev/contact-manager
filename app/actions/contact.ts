"use server";
import { revalidatePath } from "next/cache";
import { createContact, deleteContact, updateContact } from "../api/contact";
import { getSession } from "../lib/session";
import { ContactType } from "../_types/contact";

export const createContactAction = async (
  prevState: any,
  formData: FormData
) => {
  if (!formData.get("name")) {
    return { error: "Name is missing" };
  }

  const user = await getSession();

  const newContact: Omit<ContactType, "id"> = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id,
  };

  try {
    await createContact(newContact);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("error creating contact", error);
    return { error: "Failed to create contact" };
  }
};

export const updateContactAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) => {
  const id = formData.get("id");
  if (!id) return { error: "Contact id is required" };
  const user = await getSession();

  const updatedContact: Omit<ContactType, "id"> = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id,
  };

  try {
    await updateContact(id, updatedContact);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("error creating contact", error);
    return { error: "Failed to create contact" };
  }
};

export const deleteContactAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) => {
  const id = formData.get("id") as string;
  console.log("Deleting contact with id:", id);
  try {
    await deleteContact(id);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("delete contact failed", error);
    return { error: "Failed to delete contact" };
  }
};
