"use client";
import React, { useState, useEffect, JSXElementConstructor } from "react";
import { useTheme } from "next-themes";
import { Laptop2, Moon, Sun } from "lucide-react";

const ICON_SIZE = 20;

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const icons: { [key: string]: React.ReactNode } = {
    dark: <Moon size={ICON_SIZE} className="animate-jump animate-once" />,
    light: <Sun size={ICON_SIZE} className="animate-jump animate-once" />,
    system: <Laptop2 size={ICON_SIZE} className="animate-jump animate-once" />,
  };

  const changeTheme = (currentTheme: string) => {
    let newTheme = "";

    switch (currentTheme) {
      case "dark":
        newTheme = "system";
        break;
      case "system":
        newTheme = "light";
        break;
      case "light":
        newTheme = "dark";
        break;
      default:
        newTheme = "dark";
        break;
    }

    setTheme(newTheme);
  };

  return (
    <button
      className="p-2 rounded-md hover:bg-slate-4 animate-fade animate-once"
      onClick={() => changeTheme(theme as string)}
    >
      {theme && icons[theme as string]}
    </button>
  );
};

export default ThemeButton;
