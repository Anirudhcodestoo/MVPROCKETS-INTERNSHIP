import { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <header className="relative flex justify-between items-center max-w-6xl mx-auto py-6 px-4">
        <h1 className="text-xl font-bold">John</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-blue-500">Works</a>
          <a href="#" className="hover:text-blue-500">Blog</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={btnRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <nav
            ref={menuRef}
            className="absolute right-4 top-full mt-2 w-40 rounded-lg border bg-white shadow-md md:hidden"
          >
            <ul className="py-2">
              <li>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Works
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Hi, I am John,<br />Creative Technologist
          </h2>
          <p className="text-gray-600 mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded mt-6 hover:bg-red-600">
            Download Resume
          </button>
        </div>
        <img
          src="profile.png"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover"
        />
      </section>

      {/* Recent Posts */}
      <section className="bg-blue-50 py-10 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Recent posts</h3>
          <a href="#" className="text-blue-500">View all</a>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg">Making a design system from scratch</h4>
            <p className="text-sm text-gray-500 mt-2">12 Feb 2020 | Design, Pattern</p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg">Creating pixel perfect icons in Figma</h4>
            <p className="text-sm text-gray-500 mt-2">12 Feb 2020 | Figma, Icon Design</p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </p>
          </div>
        </div>
      </section>
    </div>  {/* ✅ Closing wrapper div */}
  );
}
