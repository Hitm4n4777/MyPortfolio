import { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    id: "home",
    icon: Home,
  },
  {
    label: "About",
    id: "about",
    icon: User,
  },
  {
    label: "Skills",
    id: "skills",
    icon: Code2,
  },
  {
    label: "Projects",
    id: "projects",
    icon: Briefcase,
  },
  {
    label: "Contact",
    id: "contact",
    icon: Mail,
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="nav-container">

        {/* Logo */}

        <button
          className="nav-logo"
          onClick={() => handleNavigation("home")}
          aria-label="Go to homepage"
        >
          <span>&lt;</span>
          Haider Ali
          <span>/&gt;</span>
        </button>

        {/* Desktop Navigation */}

        <nav className="desktop-nav">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
              >
                <Icon size={15} />
                {item.label}
              </button>
            );
          })}

        </nav>

        {/* Mobile Button */}

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>

      {/* Mobile Navigation */}

      <div
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
      >

        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
            >
              <Icon size={17} />
              {item.label}
            </button>
          );
        })}

      </div>

    </header>
  );
}

export default Navbar;