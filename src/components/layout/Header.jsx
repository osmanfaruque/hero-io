import { NavLink } from "react-router-dom";
import logoImage from "../../../hero-io-resources/assets/logo.png";

function Header() {
  const linkClass = ({ isActive }) =>
    [
      "rounded px-2 py-1 text-sm font-medium transition-colors",
      isActive ? "text-violet-500 underline" : "text-slate-700 hover:text-violet-500",
    ].join(" ");

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-3 p-4 md:px-6">
        <NavLink className="shrink-0" to="/">
          <img alt="Hero IO logo" className="h-8 w-auto" src={logoImage} />
        </NavLink>
        <nav className="flex items-center gap-3 md:gap-6">
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>
          <NavLink className={linkClass} to="/apps">
            Apps
          </NavLink>
          <NavLink className={linkClass} to="/installation">
            Installation
          </NavLink>
        </nav>
        <a
          className="rounded-md bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-600"
          href="https://github.com/osmanfaruque"
          rel="noreferrer"
          target="_blank"
        >
          Contribute
        </a>
      </div>
    </header>
  );
}

export default Header;
