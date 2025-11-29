"use client";

import React, { useActionState, useEffect } from "react";
import { ContactFormProps } from "../_types/contact";
import { useRouter } from "next/navigation";

const ContactForm = ({ contact, action }: ContactFormProps) => {
  const [state, formAction] = useActionState(action, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/contact");
    }
  }, [state, router]);

  const isSubmitting = state?.pending; // optional if you return this from action

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="id" value={contact?.id} />

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          defaultValue={contact?.name || ""}
          placeholder="Enter contact name"
          required
          className="block w-full rounded-md border border-gray-300 bg-white shadow-sm px-3 py-2 text-sm text-gray-900 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={contact?.email || ""}
          placeholder="Enter contact email"
          required
          className="block w-full rounded-md border border-gray-300 bg-white shadow-sm px-3 py-2 text-sm text-gray-900 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Error message */}
      {state?.error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md px-3 py-2">
          {state.error}
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-md 
                   bg-blue-600 text-white text-sm font-medium shadow-sm 
                   hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed 
                   transition-colors"
      >
        {isSubmitting
          ? contact?.id
            ? "Updating..."
            : "Saving..."
          : contact?.id
          ? "Update Contact"
          : "Save Contact"}
      </button>
    </form>
  );
};

export default ContactForm;
