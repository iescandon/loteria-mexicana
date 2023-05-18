import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-44 flex justify-center py-4">
      <Link className="h-full" href="/">
        <img
          className="h-full"
          src="/images/logo-icon.png"
          alt="don clemente loteria logo"
        />
      </Link>
    </nav>
  );
}
