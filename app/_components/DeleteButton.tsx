"use client";

import { FiTrash2 } from "react-icons/fi";
import { ContactType } from "../_types/contact";
import { useActionState } from "react";

interface DeleteButttonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact: ContactType;
}

const DeleteButton = ({ action, contact }: DeleteButttonProps) => {
  const [_, formAction] = useActionState(action, null);
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={contact.id} />
      <button
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this contact?"))
            e.preventDefault();
        }}
        className="text-sm px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer flex gap-2 items-center"
      >
        <FiTrash2 /> Delete
      </button>
    </form>
  );
};

export default DeleteButton;
