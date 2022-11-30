import Head from 'next/head'
import {Header} from "./components/Header";
import {Box} from "@chakra-ui/react";
import Footer from "./components/Footer";
import { Banner, Companies, Growth, Invest, Introduce, Industry, Experts, Holders, Meet, News, About } from "./components/Index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TrancheX</title>
        <meta name="description" content="Your entry to private market investing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Box bg={"backBlack"} pb={20}>
        <Banner></Banner>
        <Companies></Companies>
        <Growth></Growth>

        <Introduce></Introduce>
        <Industry></Industry>
        <Experts></Experts>
        <Holders></Holders>
        <Meet></Meet>
        <About></About>
      </Box>
      <Footer></Footer>
    </div>
  )
}
