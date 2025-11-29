import React from "react";
import Link from "next/link";
import { getSession } from "../lib/session";
import { getContacts } from "../api/contact";
import ContactList from "../_components/ContactList";

const ContactPage = async () => {
  const user = await getSession();

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Access Restricted
          </h1>
          <p className="text-gray-600 mb-4">
            You need to be logged in to view your contacts.
          </p>
          <Link
            href="/login"
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const contacts = await getContacts(user.id);

  if (!contacts || contacts.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            No Contacts Yet
          </h1>
          <p className="text-gray-600 mb-4">
            You haven&apos;t added any contacts. Start by creating your first
            one.
          </p>
          <Link
            href="/contact/new"
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Add a Contact
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Your Contacts
            </h1>
            <p className="text-sm text-gray-500">
              Manage and organize your saved contacts.
            </p>
          </div>
          <Link
            href="/contact/new"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            + Add Contact
          </Link>
        </div>

        {/* Contact List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
          <ContactList contacts={contacts} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
