const pizzas = [
    {
        id: 1,
        img: '/img/pizza1.png',
        alt: 'Margherita Pizza',
        name: 'Margherita Pizza',
        desc: "A classic beauty — fresh tomato sauce, silky mozzarella, and fragrant basil leaves baked to golden perfection on a thin, crispy crust.",
    },
    {
        id: 2,
        img: '/img/pizza2.png',
        alt: 'Pepperoni Pizza',
        name: 'Pepperoni Pizza',
        desc: "Loaded with generously spiced pepperoni slices and bubbling mozzarella on a rich tomato base — the all-time crowd favourite.",
    },
    {
        id: 3,
        img: '/img/pizza3.png',
        alt: 'BBQ Chicken Pizza',
        name: 'BBQ Chicken Pizza',
        desc: "Smoky BBQ sauce, tender grilled chicken, caramelised onions, and melted cheese — a bold, saucy twist on the classic slice.",
    },
    {
        id: 4,
        img: '/img/pizza4.png',
        alt: 'Veggie Supreme Pizza',
        name: 'Veggie Supreme Pizza',
        desc: "Roasted bell peppers, mushrooms, black olives, and fresh zucchini piled on a herbed tomato base — colourful, hearty, and delicious.",
    },
]

function PizzaCard({ img, alt, name, desc }) {
    return (
        <div className="border-2 border-[#dcdcdc] rounded-2xl flex flex-col justify-start items-center px-6 pt-6 pb-8 text-center gap-3 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.13)] group">
            <img
                src={img}
                alt={alt}
                className="w-full max-w-[320px] h-[240px] object-contain pt-2 drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-95"
            />
            <h2 className="text-[1.3rem] font-bold text-[#1a1a1a]">{name}</h2>
            <p className="text-[0.9rem] text-[#555] leading-relaxed max-w-[380px]">{desc}</p>
        </div>
    )
}

export default function PizzaSection() {
    return (
        <>
            {/* Pizza Banner */}
            <div
                className="w-full h-[40rem] text-white flex flex-col items-end justify-center pr-20"
                style={{
                    background: "url('/img/pizzabanner.jpg') center / cover no-repeat",
                    fontSize: '30px',
                }}
            >
                <h1 className="font-bold leading-snug text-right text-[2rem] md:text-[2.5rem]">
                    HOT, FRESH, AND<br />IRRESISTIBLE<br />YOUR PERFECT<br />SLICE AWAITS!
                </h1>
                <a href="#" className="pizza-btn">
                    TAKE A LOOK
                </a>
            </div>

            {/* Pizza Grid */}
            <section className="grid grid-cols-2 gap-10 px-20 py-12 bg-[#fafafa]">
                {pizzas.map((p) => (
                    <PizzaCard key={p.id} {...p} />
                ))}
            </section>
        </>
    )
}
