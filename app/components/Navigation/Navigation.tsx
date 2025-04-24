import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigationList">
        <li className="navigationItem">
          <Link href="/" className="navigationLink">
            Home
          </Link>
        </li>
        <li className="navigationItem">
          <Link href="/portfolio" className="navigationLink">
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};
