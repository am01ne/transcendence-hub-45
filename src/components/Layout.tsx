import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Trophy, GamepadIcon, MessageSquare, Bell } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideNav = ["/", "/auth"].includes(location.pathname);

  const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: User, path: "/profile", label: "Profile" },
    { icon: Trophy, path: "/tournament", label: "Tournament" },
    { icon: GamepadIcon, path: "/game", label: "Play" },
    { icon: MessageSquare, path: "/chat", label: "Chat" },
    { icon: Bell, path: "/notifications", label: "Notifications" },
  ];

  return (
    <div className="min-h-screen flex">
      {!hideNav && (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 glass-effect rounded-2xl p-4 z-50">
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                      isActive ? "text-blue-400" : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    <Icon size={24} />
                    <span className="text-xs">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
      <main className="flex-1 container mx-auto px-4 pb-24 max-w-7xl">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;