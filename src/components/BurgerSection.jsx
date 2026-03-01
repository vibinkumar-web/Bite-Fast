const burgers = [
    {
        id: 1,
        img: '/img/burger1.png',
        alt: 'Classic Smash Burger',
        name: 'Classic Smash Burger',
        desc: "A golden-seared smash patty stacked with melted cheddar, crispy lettuce, juicy tomatoes, and our signature smoky sauce — all nestled in a toasted brioche bun.",
        price: '$9.99',
    },
    {
        id: 2,
        img: '/img/burger2.png',
        alt: 'BBQ Bacon Burger',
        name: 'BBQ Bacon Burger',
        desc: "Double-stacked beef patties loaded with thick-cut crispy bacon, caramelized onions, and tangy BBQ sauce on a toasted sesame bun. Pure indulgence.",
        price: '$12.49',
    },
    {
        id: 3,
        img: '/img/burger3.png',
        alt: 'Spicy Inferno Burger',
        name: 'Spicy Inferno Burger',
        desc: "A flame-grilled beef patty with jalapeños, ghost pepper mayo, pepper jack cheese, and crunchy onion rings — for those who dare to feel the heat.",
        price: '$11.99',
    },
    {
        id: 4,
        img: '/img/burger4.png',
        alt: 'Garden Delight Burger',
        name: 'Garden Delight Burger',
        desc: "A hearty plant-based patty with avocado spread, roasted red peppers, arugula, and a zesty lemon aioli — delicious, nutritious, and completely satisfying.",
        price: '$10.49',
    },
]

function BurgerCard({ img, alt, name, desc, price }) {
    return (
        <div className="scroll-reveal flex flex-col items-center bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)] group">
            <img
                src={img}
                alt={alt}
                className="w-full max-w-[320px] h-[260px] object-contain pt-6 px-6 drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1"
            />
            <div className="flex flex-col items-center gap-2 px-7 py-5 text-center flex-1">
                <h2 className="text-[1.4rem] font-bold text-[#1a1a1a]">{name}</h2>
                <p className="text-[0.9rem] text-[#555] leading-relaxed max-w-[420px]">{desc}</p>
                <span className="mt-3 inline-block bg-gradient-to-br from-[#e74c3c] to-[#c0392b] text-white font-bold text-[1.1rem] px-5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(231,76,60,0.35)] tracking-wide">
                    {price}
                </span>
            </div>
        </div>
    )
}

export default function BurgerSection() {
    return (
        <>
            {/* Burger Banner */}
            <div
                className="w-full h-screen flex items-center"
                style={{
                    background: "url('/img/bg5.jpg') no-repeat center / cover",
                }}
            >
                <div className="pl-16 text-white">
                    <h1 className="text-5xl font-black leading-tight pb-8 [text-shadow:2px_2px_12px_rgba(0,0,0,0.7)]">
                        FUEL YOUR DAY<br />BURGER YOUR WAY!
                    </h1>
                    <a href="#" className="burger-cta">
                        TRY A BITE
                    </a>
                </div>
            </div>

            {/* Burger Grid */}
            <section className="grid grid-cols-2 gap-10 px-20 py-16 bg-[#fdfdfd]">
                {burgers.map((b) => (
                    <BurgerCard key={b.id} {...b} />
                ))}
            </section>
        </>
    )
}
