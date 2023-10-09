function Navbar() {
  return (
    <nav className="w-11/12 mx-auto sticky top-0 h-fit backdrop-blur">
      <div className="flex justify-between items-center">
        <a
          href="#"
          className="font-curly text-5xl text-slate-900 font-extrabold border-b-[.2rem] border-purple-500"
        >
          Igweze Hycient
        </a>
        <ul
          id=""
          className=" w-1/4 justify-between items-center text-base font-semibold hidden md:flex z-100"
        >
          <li>
            <a href="https://www.linkedin.com/in/igweze-hycient/">About</a>
          </li>
          <li>
            <a href="">PortFolio</a>
          </li>
          <li>
            <a href="mailto:igwezehycient86@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
