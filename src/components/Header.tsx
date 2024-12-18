import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "dfdf", role: "" };

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logOutHandler= ()=>{
    
  }
  return (
    <nav className="navbar">
      <h2>E-Commerce</h2>

      <div className="header">
        <Link onClick={()=>setIsOpen(false)} to={"/"}>Home</Link>
        <Link onClick={()=>setIsOpen(false)} to={"/search"}>
          <FaSearch />
        </Link>
        <Link onClick={()=>setIsOpen(false)} to={"/cart"}>
          <FaShoppingBag />
        </Link>

        {user?._id ? (
          <>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser />
            </button>
            <dialog open={isOpen}>
              <div>
                {user?.role === "admin" && (
                  <Link onClick={()=>setIsOpen(false)} to={"/admin/dashboard"}>Dashboard</Link>
                )}
                <Link onClick={()=>setIsOpen(false)} to={"/orders"}>Orders</Link>
                <button onClick={logOutHandler}>
                  <FaSignOutAlt />
                </button>
              </div>
            </dialog>
          </>
        ) : (
          <Link to={'/login'}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
