function Navbar() {
  return (
    <nav className="w-11/12 mx-auto">
      <div className="flex justify-between items-center">
        <a
          href="#"
          className={` font-curly text-5xl text-slate-900 font-extrabold border-b-[.2rem] border-purple-500 ${styles.navbar}`}
        >
          Igweze Hycient
        </a>
        <ul
          id=""
          className=" w-1/4 justify-between items-center text-base font-semibold hidden md:flex"
        >
          <li>
            <a href="sass.html">About</a>
          </li>
          <li>
            <a href="badges.html">PortFolio</a>
          </li>
          <li>
            <a href="collapsible.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
