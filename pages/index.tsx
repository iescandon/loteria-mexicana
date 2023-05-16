import Nav from "@/components/nav";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <section className="md:min-h-screen flex flex-col items-center px-8 py-4 md:pt-8 md:pb-12 md:px-10">
      <Nav />
      <div className="flex flex-col md:flex-row h-full w-full max-w-[800px] justify-center items-center mt-8 py-8">
        <div className="flex flex-col items-center justify-center md:w-1/2 pb-6 md:pb-0">
          <Link className="text-center" href="/dealer">
            <img
              className="h-[225px] md:h-[375px]"
              src="/images/caller.png"
              alt="darth vader holding loteria card like a card dealer"
            />
          <h1 className="text-xl font-wixMadeforDisplay">EL CANTOR</h1>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <Link className="text-center" href="/player">
            <img
              className="h-[225px] md:h-[375px] shadow-m"
              src="/images/player.png"
              alt="loteria card"
            />
            <h1 className="text-xl font-wixMadeforDisplay">EL JUGADOR</h1>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
