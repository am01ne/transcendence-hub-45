import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Trophy, GamepadIcon, MessageSquare } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideNav = ["/", "/auth"].includes(location.pathname);

  const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: User, path: "/profile", label: "Profile" },
    { icon: Trophy, path: "/leaderboard", label: "Leaderboard" },
    { icon: GamepadIcon, path: "/game", label: "Play" },
    { icon: MessageSquare, path: "/chat", label: "Chat" },
  ];

  return (
    <div className="min-h-screen">
      {!hideNav && (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-effect rounded-2xl p-4 z-50">
          <ul className="flex items-center gap-8">
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
      <main className="container mx-auto px-4 pb-24">{children}</main>
    </div>
  );
};

export default Layout;