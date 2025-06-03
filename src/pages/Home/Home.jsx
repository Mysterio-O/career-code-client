import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';


const Home = () => {

  const jobsPromise = fetch('https://career-code-server-gamma.vercel.app/jobs').then(res => res.json())

  return (
    <>
      <section className="banner mb-10">
        <Banner />
      </section>
      <Suspense fallback={'loading...'}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </>
  );
};

export default Home; 