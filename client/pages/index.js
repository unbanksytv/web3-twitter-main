import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const style = {
  wrapper:
    "flex justify-center h-screen min-h-screen  w-screen select-none bg-[#15202b] text-white",
  content: "max-w-[1400px] w-3/4 flex justify-between",
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Web3 Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}