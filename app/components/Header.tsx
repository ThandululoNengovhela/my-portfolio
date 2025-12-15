

export default function Header() {
  return (
    <div data-theme="black" className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>About</a></li>
            <li>
              <a>Content</a>
              <ul className="p-2">
                <li><a>Projects</a></li>
                <li><a>Demos</a></li>
              </ul>
            </li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-base font-bold ">Thandululo Nengovhela</a>    </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>About</a></li>
          <li>
            <details>
              <summary>Content</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li><a>Projects</a></li>
                <li><a>Demos</a></li>
              </ul>
            </details>
          </li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm rounded-xl">Let&apos;s Talk</a>
      </div>
    </div>
    
  )
}