const steaks = [
    {
        id: 1,
        img: '/img/steak1.png',
        alt: 'Juicy Steak',
        name: 'Juicy Steak',
        desc: "A perfectly seared, butter-basted steak with a caramelised crust and a juicy, rosy centre — served with garlic herb sauce and seasonal sides.",
        price: '$18.99',
    },
    {
        id: 2,
        img: '/img/steak2.png',
        alt: 'Mid Rare Steak',
        name: 'Mid Rare Steak',
        desc: "A flame-kissed steak cooked to a warm, pink mid-rare perfection — rich in flavour with a satisfying smoky char on every edge.",
        price: '$21.99',
    },
    {
        id: 3,
        img: '/img/steak3.png',
        alt: 'Rare Steak',
        name: 'Rare Steak',
        desc: "Bold red centre, barely kissed by the flame — for the true steak connoisseur who loves maximum tenderness and natural beef flavour.",
        price: '$23.49',
    },
    {
        id: 4,
        img: '/img/steak4.png',
        alt: 'Delicious Steak',
        name: 'Delicious Steak',
        desc: "A house-special cut marinated in our signature blend of spices and slow-grilled to bring out deep, complex flavours in every single bite.",
        price: '$19.99',
    },
]

function SteakCard({ img, alt, name, desc, price }) {
    return (
        <div className="scroll-reveal flex flex-col items-center bg-white rounded-[20px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.09)] pb-8 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] group">
            <img
                src={img}
                alt={alt}
                className="w-full max-w-[260px] h-[220px] object-contain pt-6 px-4 pb-2 drop-shadow-[0_6px_14px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col items-center gap-2 px-6 pt-3">
                <h2 className="text-[1.25rem] font-bold text-[#1a1a1a]">{name}</h2>
                <p className="text-[0.88rem] leading-relaxed text-[#555] max-w-[360px]">{desc}</p>
                <span className="mt-2 inline-block bg-gradient-to-br from-[#c0392b] to-[#922b21] text-white font-bold text-[1rem] px-5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(192,57,43,0.35)] tracking-wide">
                    {price}
                </span>
            </div>
        </div>
    )
}

export default function SteakSection() {
    return (
        <section className="grid grid-cols-2 gap-10 px-20 py-12 bg-[#fafafa]">
            {steaks.map((s) => (
                <SteakCard key={s.id} {...s} />
            ))}
        </section>
    )
}
