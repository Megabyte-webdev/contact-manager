import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getSession } from "../lib/session";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-2xl font-semibold tracking-tight text-blue-600 hover:text-blue-700 transition-colors"
        >
          Contact Manager
        </Link>

        {/* Menu */}
        <div className="flex items-center space-x-4 md:space-x-6 text-sm md:text-base font-medium text-gray-700">
          {session ? (
            <>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contacts
              </Link>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hover:text-blue-600 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
