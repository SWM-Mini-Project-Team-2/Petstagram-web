import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-center bg-white gap-4 items-end">
      <Link className="text-2xl font-semibold" to="/">
        Perstagram
      </Link>
      <Link className="text-lg font-semibold" to="/follow">
        Follow
      </Link>
      <Link className="text-lg font-semibold" to="/like">
        Like
      </Link>
      <Link className="text-lg font-semibold" to="/my">
        My
      </Link>
    </header>
  );
};

export default Header;
