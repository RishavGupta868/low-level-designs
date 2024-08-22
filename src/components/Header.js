import { Link, useLocation } from "react-router-dom";

const Header = ({ lang, setLang }) => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  return (
    <div className="text-center bg-orange-400 p-4 ">
      <h1 className="font-extrabold text-xl text-blue-700 p-2">Meme Page</h1>
      <nav className="flex flex-row p-4 font-semibold text-lg mx-4">
        <Link to={"/"} className="pr-8">
          Home
        </Link>
        <Link to={"/about"} className="pr-8">
          About Us
        </Link>
        <Link to={"/login"} className="pr-8">
          Login
        </Link>
        <Link to={"/profile"} className="pr-8">
          Profile
        </Link>
      </nav>
      {isAboutPage && (
        <div>
          <label className="px-1 font-semibold">Select language</label>
          <select
            className="border-black border p-2"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="esp">Spanish</option>
            <option value="ge">German</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Header;
