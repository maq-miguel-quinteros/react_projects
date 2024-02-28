import { NavBar } from "../molecules/NavBar"

export const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
            <div>{children}</div>
        </div>
    )
}
