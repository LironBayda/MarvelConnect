import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Characters</Link> <bar/>
        <Link to="/comics">Comics</Link> <bar/>
        <Link to="/contact">Contact</Link> <bar/>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
