import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Alert from '../components/alert';
import Projetos from '../components/projetos';



export default function Home() {
  return (
    
    <main>
      

        <Layout home>

      <Head>
        <title>Meu Portifólio</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, My name is Estêvão i am 17 years old, I live in São Vicente </p>
        
        <Alert type='success' >Sucesso</Alert>
      </section>
    </Layout>
    <section>
     <Projetos/>
    </section>
      </main>


  );
}

