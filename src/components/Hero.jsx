import Navbar from './Navbar'

export default function Hero() {
    return (
        <div
            className="w-full h-screen text-white relative"
            style={{
                background: "url('/img/banner.jpg') center / cover no-repeat",
            }}
        >
            <Navbar />
            <div className="absolute bottom-[22%] left-[8%]">
                <h1
                    className="text-5xl font-bold leading-tight mb-8 hover:tracking-widest transition-all duration-100"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                    SATISFY YOUR<br />CRAVINGS ANYTIME!
                </h1>
                <a href="#" className="hero-btn">
                    BOOK A TABLE
                </a>
            </div>
        </div>
    )
}
