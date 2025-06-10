import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="bg-gradient-to-bl from-indigo-900 to-green-900 min-h-screen text-gray-300">
      <Navbar/>
      <div className="px-8 py-4 min-h-[calc(100dvh-88px)]">
        <Outlet />
      </div>
      <footer className="flex w-full justify-center">© Copyright 2025 Raileanu Nicoale Manuel</footer>
    </div>
  );
}
