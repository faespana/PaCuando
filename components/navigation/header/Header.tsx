import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <Link href="/">
        <h2>PC?</h2>
      </Link>

      <div className="flex justify-between">
        <Link href="/new_post">
          <h3 className="mx-3.5 text-app-blue">+ Crear Publicación</h3>
        </Link>

        <Link href="/login">
          <h3 className="mx-3.5">Log in</h3>
        </Link>

        <Link href="/sign-up">
          <h3 className="mx-3.5">Sign up</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
