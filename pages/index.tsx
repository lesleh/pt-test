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
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
      />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${TRACKING_ID}', { 
                page_path: window.location.pathname,
            });
          `,
        }}
      />
      <h1>PartyTown test</h1>
      <p>
        This page exists to measure the performance benefits of using PartyTown
        in production.
      </p>
    </div>
  );
};

export default Home;
