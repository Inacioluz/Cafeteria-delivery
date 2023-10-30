import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { LayoutConstainer } from './styles'

export function DefaultLayout() {
    return (
        <div>
            <LayoutConstainer>
                <Header /> 
            </LayoutConstainer>
                <Outlet />
        </div>
    )
}