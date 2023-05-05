import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "./Navigation.styled";
import { Loader } from "../Loader/Loader";

export const Navigation = () => {
  return (
    <>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
      </Header>
      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </>
  );
};
