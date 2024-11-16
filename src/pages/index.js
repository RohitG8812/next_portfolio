import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Landing from "./landing";
import Layout from "@/components/Layout";
import { Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Script from "next/script";
import Service from "./service";
import Projects from "./projects";
import Exp_Edu from "./exp_edu";
import Skills from "./skills";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohit Gupta - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brandLogo.jpg" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Layout>
          <Landing />
          <Service />
          <Projects />
          <Exp_Edu />
          <Skills />
          <Contact />
        </Layout>

        <Box
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={"scroll-up-btn"}
        >
          <ArrowUpwardIcon />
        </Box>

        <Script
          src="https://unpkg.com/aos@next/dist/aos.js"
          strategy="afterInteractive"
          onLoad={() => {
            AOS.init();
          }}
        />
      </main>
    </>
  );
}
