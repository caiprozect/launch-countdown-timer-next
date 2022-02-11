function FlippingCard({
  cur,
  mod,
  cat,
}: {
  cur: number
  mod: number
  cat: string
}) {
  const prev = (cur + 1) % mod
  return (
    <main className="flex flex-col space-y-12 md:space-y-24">
      <div className="relative text-[#fb6087]">
        <div className="absolute z-10 h-8 w-20 border-b-[2px] border-b-[#1e1f29] bg-transparent md:h-16 md:w-40"></div>
        <div
          key={cur}
          className="flippable flipX relative h-8 w-20 bg-transparent md:h-16 md:w-40"
        >
          <div className="absolute h-full w-full overflow-hidden rounded-t-xl bg-[#343650] text-center text-4xl md:text-7xl">
            <p className="mt-[0.8rem] md:mt-[1.8rem]">
              {prev.toString().padStart(2, '0')}
            </p>
          </div>
          <div
            className="absolute h-full w-full overflow-hidden rounded-b-xl bg-[#343650] text-center text-4xl md:text-7xl"
            style={{
              transform: 'rotateX(180deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <p className="mt-[0.8rem] -translate-y-8 md:mt-[1.8rem] md:-translate-y-16">
              {cur.toString().padStart(2, '0')}
            </p>
          </div>
          <div className="absolute top-7 h-1 w-1 rounded-tr-full bg-[#1e1f29] md:top-14 md:h-2 md:w-2"></div>
          <div
            className="absolute top-7 h-1 w-1 rounded-br-full bg-[#1e1f29] md:top-14 md:h-2 md:w-2"
            style={{
              transform: 'rotateX(180deg)',
            }}
          ></div>
          <div className="absolute left-20 top-7 -ml-1 h-1 w-1 rounded-tl-full bg-[#1e1f29] md:left-40 md:top-14 md:-ml-2 md:h-2 md:w-2"></div>
          <div
            className="absolute left-20 top-7 -ml-1 h-1 w-1 rounded-bl-full bg-[#1e1f29] md:left-40 md:top-14 md:-ml-2 md:h-2 md:w-2"
            style={{
              transform: 'rotateX(180deg)',
            }}
          ></div>
        </div>
        <div className="absolute -z-10 h-8 w-20 -translate-y-8 overflow-hidden rounded-t-xl bg-[#343650] text-center text-4xl md:h-16 md:w-40 md:-translate-y-16 md:text-7xl">
          <p className="mt-[0.8rem] md:mt-[1.8rem]">
            {cur.toString().padStart(2, '0')}
          </p>
        </div>
        <div className="absolute -z-10 h-8 w-20 overflow-hidden rounded-b-xl bg-[#343650] text-center text-4xl md:h-16 md:w-40 md:text-7xl">
          <p className="mt-[0.8rem] -translate-y-8 md:mt-[1.8rem] md:-translate-y-16">
            {prev.toString().padStart(2, '0')}
          </p>
        </div>
        <div className="absolute -z-10 h-1 w-1 -translate-y-1 rounded-tr-full bg-[#1e1f29] md:h-2 md:w-2 md:-translate-y-2"></div>
        <div className="absolute -z-10 h-1 w-1 rounded-br-full bg-[#1e1f29] md:h-2 md:w-2"></div>
        <div className="absolute left-20 -z-10 -ml-1 h-1 w-1 -translate-y-1 rounded-tl-full bg-[#1e1f29] md:left-full md:-ml-2 md:h-2 md:w-2 md:-translate-y-2"></div>
        <div className="absolute left-20 -z-10 -ml-1 h-1 w-1 rounded-bl-full bg-[#1e1f29] md:left-full md:-ml-2 md:h-2 md:w-2"></div>
      </div>

      <div>
        <h2
          key={cur}
          className="lightUp text-center text-xs tracking-widest text-[#8486a9] md:text-lg"
        >
          {cat}
        </h2>
      </div>
    </main>
  )
}

export default FlippingCard
