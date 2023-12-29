import Head from 'next/head'
import Script from 'next/script'
import { Header } from '../components/Header'
import { Simulator } from '../components/Simulator'

export default function Home() {
  return (
    <div className="px-8 lg:px-16 xl:px-32 dark:bg-gray-950">
      <Head>
        <title>Not Even Close</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="/wowheadtooltips.js" />

      <main className="min-h-screen py-8 flex flex-col gap-4">
        <Header />
        <Simulator />
      </main>
    </div>
  )
}
