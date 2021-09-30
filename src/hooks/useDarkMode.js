import useLocalStorage from "./useLocationStorage"


export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('darkmode', false);

    return [value, setValue];
}