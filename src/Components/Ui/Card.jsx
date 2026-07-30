import { useTheme } from "../../Context/ThemeContext";
import { CardContainer } from "../Layout/CardContainer"
export const Card = () =>{
    const {isDark}=useTheme();
    return(
        <div>
        <CardContainer/>
        </div>
    )
}