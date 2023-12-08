import Head from "next/head";
import { useSession } from "next-auth/react";
import HomeComponent from "@/components/Home";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {/*           <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            {session ? `Welcome ${session.user.name}` : "Welcome"}
          </h1> */}
          <HomeComponent />
        </div>
      </main>
    </>
  );
}
