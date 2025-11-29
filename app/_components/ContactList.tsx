import { ContactType } from "../_types/contact";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/contact";

const ContactList = ({ contacts }: { contacts: ContactType[] }) => {
  return (
    <div className="space-y-4">
      {contacts?.map((contact) => (
        <div
          key={contact.id}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
        >
          {/* Contact Info */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-gray-900 truncate">
              {contact.name}
            </h2>
            <p className="text-gray-600 truncate">{contact.email}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Edit Button */}
            <Link
              href={`/contact/edit/${contact.id}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-blue-400 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              <FiEdit className="text-blue-600" size={16} />
              Edit
            </Link>

            {/* Delete Button */}
            <DeleteButton action={deleteContactAction} contact={contact} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
