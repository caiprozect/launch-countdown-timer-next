import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import FlippingCard from '../components/FlippingCard'

import Facebook from '../public/icon-facebook.svg'
import Pinterest from '../public/icon-pinterest.svg'
import Instagram from '../public/icon-instagram.svg'

export default function Home() {
  const dday = new Date(2022, 5, 16)

  const targetInterval = 1000
  const delay = useRef(1000)

  const [remain, setRemain] = useState(dday.getTime() - new Date().getTime())

  // console.log(delay.current)

  useEffect(() => {
    const startTime = Date.now()

    const calcRemain = setTimeout(() => {
      if (remain <= 0) {
        clearTimeout(calcRemain)
        return
      }

      setRemain(dday.getTime() - new Date().getTime())

      const fix = Date.now() - startTime - targetInterval

      if (fix > 0) {
        delay.current = targetInterval - fix
      } else {
        delay.current = targetInterval
      }
    }, delay.current)
    return () => clearTimeout(calcRemain)
  }, [remain])

  return (
    <div className="min-w-screen flex h-screen min-h-screen w-screen flex-col items-center justify-start bg-[#1e1f29] font-RedHat">
      <Head>
        <title>Countdown timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="threeD flex h-[76%] w-full flex-col items-center bg-[url(/bg-stars.svg)] bg-cover">
        <section className="flex h-[40%] flex-col justify-end">
          <h1 className="pb-16 text-center text-xl tracking-[0.5rem] text-white md:text-3xl">
            WE'RE LAUNCHING SOON
          </h1>
        </section>
        <section className="mt-4 flex h-[36%] justify-center space-x-4 md:mt-8 md:space-x-12">
          <FlippingCard
            cur={Math.floor(remain / (24 * 60 * 60 * 1000)) % 365}
            mod={365}
            cat="DAYS"
          />
          <FlippingCard
            cur={Math.floor(remain / (60 * 60 * 1000)) % 24}
            mod={24}
            cat="HOURS"
          />
          <FlippingCard
            cat="MINUTES"
            cur={Math.floor(remain / (60 * 1000)) % 60}
            mod={60}
          />
          <FlippingCard
            cat="SECONDS"
            cur={Math.floor(remain / 1000) % 60}
            mod={60}
          />
        </section>
      </main>

      <footer className="flex h-[24%] w-full items-center justify-center space-x-12 bg-[url(/pattern-hills.svg)] bg-cover md:space-x-24">
        <Facebook className="cursor-pointer fill-[#8385A9] hover:fill-[#fb6087] md:scale-150" />
        <Pinterest className="cursor-pointer fill-[#8385A9] hover:fill-[#fb6087] md:scale-150" />
        <Instagram className="cursor-pointer fill-[#8385A9] hover:fill-[#fb6087] md:scale-150" />
      </footer>
    </div>
  )
}
