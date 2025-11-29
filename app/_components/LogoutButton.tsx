"use client";
import { useRouter } from "next/navigation";
import { logoutAction } from "../actions/auth";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logoutAction();

      //redirect happens on the server
      //client side fallback redirect
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.log("Logout failed", error);
    }
  };
  return (
    <div
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer"
    >
      Logout
    </div>
  );
};

export default LogoutButton;
