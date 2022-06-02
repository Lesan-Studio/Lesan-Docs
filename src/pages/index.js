import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import scrollAnimate from 'aos';
import { init } from 'ityped';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const typed = document.querySelector('#typed');
    init(typed, {
      showCursor: false,
      strings: ['ልሳን ስቱዲዪ'],
      typeSpeed: 200,
      startDelay: 4200,
      loop: false,
    });
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="">{siteConfig.title}</h1>
        <h1 id="typed" className="hero__subtitle">
          <span role="img" aria-label="boss in glasses">
            😎
          </span>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Quick Tutorial
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    scrollAnimate.init({ duration: 2000 });
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Lesan Studio Community"
    >
      <HomepageHeader />
      <main data-aos="fade-down">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
