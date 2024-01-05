import '../styles/globals.css';
import '../styles/font.css';
import '../styles/colors.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../styles/animation.css';
import NextNProgress from 'nextjs-progressbar';
import 'animate.css';
import { NextScript } from 'next/document';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        startPosition={0.3}
        options={{ easing: 'ease', speed: 500 }}
        color="#640093"
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <NextScript
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8080400946337818"
        crossorigin="anonymous"
      />
    </>
  );
}

export default MyApp;
