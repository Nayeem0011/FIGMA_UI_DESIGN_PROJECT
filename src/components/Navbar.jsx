import logo from "../assets/logo.jpg";
import Button from "../button/button";

const Navbar = () => {
  return (
    <header className="navbar_bg flex flex-wrap items-center justify-between px-4 py-3 md:px-10 lg:px-[100px] gap-4">
      <div className="max-w-7xl mx-auto">
        <img
          src={logo}
          alt="Company Logo"
          className="w-[107px] h-auto max-h-[40px]"
        />
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-4 mx-auto sm:gap-6 md:gap-[22px] text-sm sm:text-base">
        <a href="#" className="nav_a_text">Home</a>
        <a href="#" className="nav_a_text">Features</a>
        <a href="#" className="nav_a_text">Community</a>
        <a href="#" className="nav_a_text">Blog</a>
        <a href="#" className="nav_a_text">Pricing</a>
        <Button className="" />
      </nav>
    </header>
  );
};

export default Navbar;

