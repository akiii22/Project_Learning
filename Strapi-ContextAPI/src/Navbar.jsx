import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import Navlinks from "./Navlinks";
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubemenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubemenu}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <Navlinks />
      </div>
    </nav>
  );
};
export default Navbar;
