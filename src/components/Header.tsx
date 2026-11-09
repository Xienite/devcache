import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-page-padding flex justify-between py-4">
      <div className="flex gap-4 items-center">
        <Link to="/" className="text-2xl">
          <span className="text-primary">dev</span>cache
        </Link>
        <span>|</span>
        <Link to="/" className="text-2xl text-gray-600">
          <span className="text-gray-600">ux</span>cache
        </Link>
      </div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
