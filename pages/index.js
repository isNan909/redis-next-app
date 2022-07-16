import Head from 'next/head';
import Jobform from '../components/jobform';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Hire best talents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jobform />
    </div>
  );
}
