import ContactForm from "@/app/_components/ContactForm";
import { updateContactAction } from "@/app/actions/contact";
import { getContactById } from "@/app/api/contact";
import React, { use } from "react";

interface EditContactPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditContactPage = ({ params }: EditContactPageProps) => {
  const { id } = use(params);

  // Fetch the contact by id (json-server style: /contacts/:id)
  const contact = use(getContactById(id));

  // Optional: handle not found
  if (!contact) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Contact not found
          </h1>
          <p className="text-gray-600 mb-4">
            We couldn&apos;t find the contact you&apos;re trying to edit.
          </p>
          <a
            href="/contact"
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Contacts
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Edit Contact
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Update the details of this contact and save your changes.
        </p>
        <ContactForm action={updateContactAction} contact={contact} />
      </div>
    </div>
  );
};

export default EditContactPage;
