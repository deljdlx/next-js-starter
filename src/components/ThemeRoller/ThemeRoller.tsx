import React, { useEffect, useRef, useState } from "react";


export const ThemeRoller: React.FC = () => {

    const [theme, setTheme] = useState("demo-00");

    const themes = [
        'demo-00', 'demo-01',
    ];

    // 🔥 Charger dynamiquement le CSS des pièces
    useEffect(() => {
        const linkId = "chess-theme-style";
        let existingLink = document.getElementById(linkId) as HTMLLinkElement;

        if (!existingLink) {
            existingLink = document.createElement("link");
            existingLink.id = linkId;
            existingLink.rel = "stylesheet";
            document.head.appendChild(existingLink);
        }

        existingLink.href = `/assets/themes/${theme}.css`;
    }, [theme]);


    return (
        <>
            {/* Sélecteur de thème */}
            <div className="theme_roller">
                <select
                    className="select select-bordered w-full max-w-xs"
                    id="theme-select"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
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
