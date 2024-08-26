import Image from "next/image";
import { Inter } from "next/font/google";
import GetApp from "@/components/getApp";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>HERE THE REMOTE PORT 5</h1>
      <GetApp />
    </>);
}
