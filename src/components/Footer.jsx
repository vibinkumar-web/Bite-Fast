const quickLinks = ['Home', 'Our Menu', 'Events', 'Reservations', 'Contact']

const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: '42 Flavor Street, Food City, FC 10001' },
    { icon: 'fas fa-phone', text: '+1 (800) 248-3278' },
    { icon: 'fas fa-envelope', text: 'hello@bitefast.com' },
    { icon: 'fas fa-clock', text: 'Mon–Sun: 10:00 AM – 11:00 PM' },
]

const socials = [
    { href: 'https://instagram.com/', icon: 'fab fa-instagram', label: 'Instagram' },
    { href: 'https://facebook.com/', icon: 'fab fa-facebook-f', label: 'Facebook' },
    { href: 'https://twitter.com/', icon: 'fab fa-x-twitter', label: 'Twitter' },
    { href: 'https://youtube.com/', icon: 'fab fa-youtube', label: 'YouTube' },
]

export default function Footer() {
    return (
        <footer className="bg-[#111] text-[#ccc] pt-14 text-[0.9rem]">
            <div className="grid grid-cols-[1.6fr_1fr_1.4fr] gap-12 max-w-6xl mx-auto px-10 pb-10">

                {/* Brand */}
                <div>
                    <h2 className="text-[1.8rem] font-bold text-white mb-3">🍔 BiteFast</h2>
                    <p className="leading-relaxed text-[#aaa] mb-6">
                        Satisfy your cravings anytime, anywhere. Freshly made with love and served at lightning speed.
                    </p>
                    <div className="flex gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={s.label}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#222] text-[#ccc] text-base transition-all duration-300 hover:bg-[#e74c3c] hover:text-white hover:-translate-y-1"
                            >
                                <i className={s.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-[1.05rem] font-semibold text-white mb-4 pb-2 relative after:absolute after:left-0 after:bottom-0 after:w-9 after:h-0.5 after:bg-[#e74c3c] after:rounded">
                        Quick Links
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                        {quickLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="footer-link">
                                    <i className="fas fa-chevron-right text-[#e74c3c] text-[0.65rem]"></i>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-[1.05rem] font-semibold text-white mb-4 pb-2 relative after:absolute after:left-0 after:bottom-0 after:w-9 after:h-0.5 after:bg-[#e74c3c] after:rounded">
                        Contact Us
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                        {contactInfo.map((c) => (
                            <li key={c.text} className="flex items-start gap-2.5 text-[#aaa] leading-relaxed">
                                <i className={`${c.icon} text-[#e74c3c] mt-1 min-w-[16px]`}></i>
                                <span>{c.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#2a2a2a] text-center py-4 px-8 text-[#666] text-[0.82rem] tracking-wide">
                <p>
                    &copy; 2025 BiteFast. All rights reserved. | Crafted with{' '}
                    <span style={{ color: '#e74c3c' }}>&#10084;</span> &amp; fire.
                </p>
            </div>
        </footer>
    )
}
