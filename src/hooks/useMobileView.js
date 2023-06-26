import { useEffect, useState } from "react";

const useMobileView = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            clearTimeout(window.debounce);
            window.debounce = setTimeout(() => {
                setIsMobileView(window.innerWidth <= 768);
                setIsMobileNavOpen(false);
            }, 150);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            if (window.debounce) clearTimeout(window.debounce);
        };
    }, []);

    useEffect(() => {
        if (isMobileNavOpen) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "auto";
    }, [isMobileNavOpen]);

    return [isMobileView, isMobileNavOpen, setIsMobileNavOpen];
};

export default useMobileView;
