import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    // Check localStorage first, then system preference
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (storedTheme) {
        setTheme(storedTheme)
    } else {
        const isDark = document.documentElement.classList.contains("dark")
        setTheme(isDark ? "dark" : "light")
    }
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
    const meta = document.getElementById("color-scheme-meta")
    if (meta) meta.setAttribute("content", theme)
  }, [theme, hasMounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  // Avoid hydration mismatch by rendering a placeholder or the button in a neutral state initially
  if (!hasMounted) {
    return (
        <button className="p-2 opacity-0" aria-hidden="true">
            <span className="sr-only">Toggle theme</span>
            <div className="h-5 w-5" />
        </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Alternar tema"
      title={theme === "light" ? "Mudar para modo escuro" : "Mudar para modo claro"}
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sun"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41-1.41" />
          <path d="m19.07 4.93-1.41-1.41" />
        </svg>
      )}
    </button>
  )
}
