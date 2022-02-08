function FlippingCard({ cur, mod, cat }) {
  const prev = (cur + 1) % mod
  return (
    <main className="flex flex-col space-y-24">
      <div className="relative text-[#fb6087]">
        <div className="absolute z-10 h-16 w-40 border-b-[2px] border-b-[#1e1f29] bg-transparent"></div>
        <div
          key={cur}
          className="flippable flipX relative h-16 w-40 bg-transparent"
        >
          <div className="absolute h-full w-full overflow-hidden rounded-t-xl bg-[#343650] text-center text-7xl">
            <p className="mt-[1.8rem]">{prev.toString().padStart(2, '0')}</p>
          </div>
          <div
            className="absolute h-full w-full overflow-hidden rounded-b-xl bg-[#343650] text-center text-7xl"
            style={{
              transform: 'rotateX(180deg)',
            }}
          >
            <p className="mt-[1.8rem] -translate-y-16">
              {cur.toString().padStart(2, '0')}
            </p>
          </div>
          <div className="absolute top-14 h-2 w-2 rounded-tr-full bg-[#1e1f29]"></div>
          <div
            className="absolute top-14 h-2 w-2 rounded-br-full bg-[#1e1f29]"
            style={{
              transform: 'rotateX(180deg)',
            }}
          ></div>
          <div className="absolute left-40 top-14 -ml-2 h-2 w-2 rounded-tl-full bg-[#1e1f29]"></div>
          <div
            className="absolute left-40 top-14 -ml-2 h-2 w-2 rounded-bl-full bg-[#1e1f29]"
            style={{
              transform: 'rotateX(180deg)',
            }}
          ></div>
        </div>
        <div className="absolute -z-10 h-16 w-40 -translate-y-16 overflow-hidden rounded-t-xl bg-[#343650] text-center text-7xl">
          <p className="mt-[1.8rem]">{cur.toString().padStart(2, '0')}</p>
        </div>
        <div className="absolute -z-10 h-16 w-40 overflow-hidden rounded-b-xl bg-[#343650] text-center text-7xl">
          <p className="mt-[1.8rem] -translate-y-16">
            {prev.toString().padStart(2, '0')}
          </p>
        </div>
        <div className="absolute -z-10 h-2 w-2 -translate-y-2 rounded-tr-full bg-[#1e1f29]"></div>
        <div className="absolute -z-10 h-2 w-2 rounded-br-full bg-[#1e1f29]"></div>
        <div className="absolute left-full -z-10 -ml-2 h-2 w-2 -translate-y-2 rounded-tl-full bg-[#1e1f29]"></div>
        <div className="absolute left-full -z-10 -ml-2 h-2 w-2 rounded-bl-full bg-[#1e1f29]"></div>
      </div>

      <div>
        <h2
          key={cur}
          className="lightUp text-center text-lg tracking-widest text-[#8486a9]"
        >
          {cat}
        </h2>
      </div>
    </main>
  )
}

export default FlippingCard
