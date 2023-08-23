import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header style={{display:"flex",gap:100, justifyContent:"flex-end", paddingRight:50, height:80, backgroundColor:"orange", alignItems:"center"}}>
        <NavLink
        to="/"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}
        >
            List
        </NavLink>
        <NavLink
        to="/who"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}
        >
            Who
        </NavLink>
    </header>
  )
}
