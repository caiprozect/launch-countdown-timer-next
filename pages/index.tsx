import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [cur, setCur] = useState(9)
  const [next, setNext] = useState(8)

  useEffect(() => {
    const counter = setInterval(() => {
      if (next === 0) {
        clearInterval(counter)
        return
      }

      setCur(cur - 1)
      setNext(next - 1)
    }, 1000)
    return () => clearInterval(counter)
  }, [cur, next])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Countdown timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-screen threeD flex min-h-screen items-center justify-center">
        <div
          key={cur}
          className="flippable flipX relative h-20 w-40 bg-transparent"
        >
          <div className="absolute h-full w-full overflow-hidden bg-blue-500 text-center text-9xl">
            <p className="mt-2">{cur}</p>
          </div>
          <div
            className="absolute h-full w-full overflow-hidden bg-red-500 text-center text-9xl"
            style={{
              transform: 'rotateX(180deg)',
            }}
          >
            <p className="mt-2 -translate-y-20">{next}</p>
          </div>
        </div>
        <div className="absolute -z-10 h-20 w-40 overflow-hidden bg-red-200 text-center text-9xl">
          <p className="mt-2">{next}</p>
        </div>
        <div className="absolute -z-10 h-20 w-40 translate-y-20 overflow-hidden bg-blue-200 text-center text-9xl">
          <p className="mt-2 -translate-y-20">{cur}</p>
        </div>
      </main>
    </div>
  )
}
