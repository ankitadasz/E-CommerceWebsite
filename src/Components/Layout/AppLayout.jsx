import { Footer } from "../Ui/Footer"
import { Header } from "../Ui/Header"
import {Outlet} from "react-router-dom"

export const AppLayout = () =>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}