import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  
  
  return (
    <>
    <Layout>

  <Head>
    <title>Segunda página</title>
  </Head>
  <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>Página First Post</h1>

      <h2>
        <Link href="/">Volta Amigão!</Link>
      </h2>
      
    </Layout>

      
        

      
    </>


  );



}

