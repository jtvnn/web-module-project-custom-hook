import uselocalStorage from "./useLocationStorage"


export const useDarkMode = () => {
    const [value, setValue] = uselocalStorage('darkmode', false);

    return [value, setValue];
}