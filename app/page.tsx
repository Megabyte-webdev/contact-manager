import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      {/* Hero Text */}
      <div className="text-center max-w-xl mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Welcome to <span className="text-blue-600">Contact Manager</span>
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Manage your contacts easily and efficiently with a clean and intuitive
          interface.
        </p>
      </div>

      {/* Illustration */}
      <div className="mb-8">
        <Image
          src="/window.svg"
          alt="contact manager"
          width={350}
          height={350}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* CTA Text */}
      <div className="text-center">
        <p className="text-lg text-gray-700">
          Start organizing your personal and professional contacts today.
        </p>

        <div className="mt-5">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium shadow hover:bg-blue-700 transition-all"
          >
            View Contacts
          </a>
        </div>
      </div>
    </div>
  );
}
