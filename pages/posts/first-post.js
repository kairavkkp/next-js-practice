import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>First Post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => {
            console.log(
              `script loaded correctly, window.FB has been populated`
            );
          }}
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  );
}
