import { useState } from "react"
import UseDarkSide from "./useDarkMode"
import { DarkModeSwitch } from "react-toggle-dark-mode"

export default function Switcher() {
    const [colorTheme, setTheme] = UseDarkSide()
    const [darkSide, setDarkSide] = useState(colorTheme === "light" ? false : true)

    const toggleDarkMode = (checked) => {
        setTheme(checked ? "dark" : "light")
        setDarkSide(checked)
    }

    return (
        <div>
            <DarkModeSwitch
                size={50}
                checked={darkSide}
                onChange={toggleDarkMode}
            />
        </div>
    )
}