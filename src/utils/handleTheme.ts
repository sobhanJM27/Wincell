import { getFromStorage, setToStorage } from "./localStorage";

export default function handleTheme(themeVal?: "light" | "dark") {
  if (themeVal) setToStorage("theme", themeVal);
  const theme = getFromStorage("theme");
  if (
    (theme && theme === "dark") ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    return true;
  } else {
    document.documentElement.classList.remove("dark");
    return false;
  }
}
