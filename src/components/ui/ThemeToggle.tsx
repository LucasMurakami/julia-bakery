import { useEffect, useRef } from "react"

export default function ThemeToggle() {
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return

    const handleClick = () => {
      const root = document.documentElement
      root.classList.add("theme-transition")
      const dark = root.classList.toggle("dark")
      localStorage.setItem("theme", dark ? "dark" : "light")
      const meta = document.getElementById("color-scheme-meta")
      if (meta) meta.setAttribute("content", dark ? "dark" : "light")
      setTimeout(() => root.classList.remove("theme-transition"), 350)
    }

    btn.addEventListener("click", handleClick)
    return () => btn.removeEventListener("click", handleClick)
  }, [])

  // dangerouslySetInnerHTML keeps both SVGs out of React's reconciliation tree,
  // so hydration never touches/repaints them. CSS dark: classes swap visibility
  // instantly via the .dark class that Layout.astro sets before first paint.
  return (
    <button
      ref={btnRef}
      className="rounded-full p-2 transition-[background-color] duration-200 hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Alternar tema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="lucide lucide-moon block dark:hidden" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="lucide lucide-sun hidden dark:block" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/><path d="M12 20v2"/>
            <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
            <path d="M2 12h2"/><path d="M20 12h2"/>
            <path d="m6.34 17.66-1.41-1.41"/><path d="m19.07 4.93-1.41-1.41"/>
          </svg>
        `,
      }}
    />
  )
}
