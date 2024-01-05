import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';
import { SiDiscord } from 'react-icons/si';
import Education from '../components/Education';
import Why from '../components/Why';
import ProjectSwiper from '../components/ProjectSwiper';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className="mainbg">
      <Head>
        <title>Amatak Personal Porfolio | Projects | App | Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Amatak Personal Portfolio, here are some of the demonstrations...."
        />
        <meta name="google-adsense-account" content="ca-pub-8080400946337818"/>

        <link rel="icon" href="/mainfavicon.png" />
      
      </Head>
      <div className="container max-w-[1200px] mx-auto min-w-[200px] p-8 pt-1 sm:p-5 sm:pt-1">
        <div className="">
          <Header />
          <Hero />
        </div>
        <div>
          <Education />
          <Why />
          <ProjectSwiper />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
