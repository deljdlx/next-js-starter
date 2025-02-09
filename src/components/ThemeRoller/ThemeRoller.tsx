import React, { useEffect, useRef, useState } from "react";
import { useApplicationContext } from "../../contexts/applicationContext";

export const ThemeRoller: React.FC = () => {

    const { theme, setTheme } = useApplicationContext();
    const [localTheme, setLocalTheme] = useState(theme);

    const themes = [
        'demo-00', 'demo-01',
    ];


    const handleThemeChange = (theme: string) => {
        setLocalTheme(theme);
        setTheme(theme);
    };

    useEffect(() => {
        const linkId = "theme-style";
        let existingLink = document.getElementById(linkId) as HTMLLinkElement;

        if (!existingLink) {
            existingLink = document.createElement("link");
            existingLink.id = linkId;
            existingLink.rel = "stylesheet";
            document.head.appendChild(existingLink);
        }

        existingLink.href = `/assets/themes/${localTheme}.css`;
    }, [localTheme]);


    return (
        <>
            {/* Sélecteur de thème */}
            <div className="theme_roller">
                <select
                    className="select select-bordered w-full max-w-xs"
                    id="theme-select"
                    value={localTheme}
                    onChange={(e) => handleThemeChange(e.target.value)}
                >
                    {themes.map((t) => (
                        <option key={t} value={t}>
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};
