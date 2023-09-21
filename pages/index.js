import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Alert from '../components/alert';



export default function Home() {
  return (
    
    <body  className=' bg-gray-600  h-screen'>
        <Layout home>

      <Head>
        <title> My Profile </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className='text-red-500'>Hello, My name is Estêvão i am 17 years old, I live in São Vicente </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Alert type='success' >Sucesso</Alert>
      </section>
    </Layout>
      </body>
  );
}

