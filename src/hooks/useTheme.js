import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { useEffect } from "react";

const useTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.theme.darkTheme);

    useEffect(() => {
        document.body.className = theme ? "" : "light-mode";
    }, [theme]);

    const switchTheme = () => dispatch(toggleTheme());

    return [theme, switchTheme];
};

export default useTheme;
