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
    <Nav />
    {/* <section className="flex flex-col items-center px-8 py-4 md:pt-8 md:pb-12 md:px-10"> */}
    <section className="flex justify-center px-8 py-4 md:pt-8 md:pb-12 md:px-10">
      <div className="flex flex-col md:flex-row h-full w-full max-w-[800px] justify-center items-center">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 pb-10 md:pb-0">
          <Link className="text-center" href="/caller">
            <img
              className="h-[250px] md:h-[400px] pb-2 md:pb-4"
              src="/images/caller.png"
              alt="loteria cards fanned out"
            />
          <h1 className="text-lg md:text-xl font-medium font-wixMadeforDisplay">EL CANTOR</h1>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <Link className="text-center" href="/player">
            <img
              className="h-[250px] md:h-[400px] pb-2 md:pb-4 drop-shadow-md"
              src="/images/player.png"
              alt="loteria playing card"
            />
            <h1 className="text-lg md:text-xl font-medium font-wixMadeforDisplay">EL JUGADOR</h1>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
