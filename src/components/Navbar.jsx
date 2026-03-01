const navLinks = ['HOME', 'EVENTS', 'MENU', 'RESERVATION', 'CONTACT']

export default function Navbar() {
    return (
        <nav className="flex items-start justify-center pt-8">
            <ul className="flex gap-12">
                {navLinks.map((link) => (
                    <li key={link}>
                        <a href="#" className="nav-link">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
