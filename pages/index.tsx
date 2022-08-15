import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

const TRACKING_ID = "G-L6VCPNEK5W";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PartyTown Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
      />
      <Script
        id="ga-init-script"
        async
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${TRACKING_ID}', {
                cookie_flags: 'max-age=7200;secure;samesite=none'
              });`,
        }}
      />
      <h1>PartyTown test</h1>
      <p>
        This page exists to measure the performance benefits of using PartyTown
        in production.
      </p>
      <div id="sb-sip-app" data-amount="3000"></div>
      <script
        defer
        src="https://embed.simplybusiness.com/sip/loader.js"
      ></script>
    </div>
  );
};

export default Home;
