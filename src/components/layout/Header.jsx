import { NavLink } from "react-router-dom";

function Header() {
  const baseClass = "rounded px-2 py-1 text-sm text-slate-200";

  return (
    <header className="border-b border-slate-700 bg-slate-800/80">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between p-4 md:px-6">
        <NavLink className="text-lg font-semibold text-violet-300" to="/">
          HERO.IO
        </NavLink>
        <nav className="flex items-center gap-4">
          <NavLink className={baseClass} to="/">
            Home
          </NavLink>
          <NavLink className={baseClass} to="/apps">
            Apps
          </NavLink>
          <NavLink className={baseClass} to="/installation">
            Installation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
