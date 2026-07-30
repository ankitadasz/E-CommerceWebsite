
import { Card } from "../Components/Ui/Card"
import { useTheme } from "../Context/ThemeContext";

export const Home = () =>{
    const {isDark}=useTheme();
    return (
        <>
        <Card/>
        </>
    )
}