import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img
          className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
          src={useBaseUrl('img/khaibui.svg')}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro-workshops">
            Get started&nbsp;&nbsp;→
          </Link>
        </div>
        {/* <p className="margin-top--md">
          <em>It's completely free to read!</em>
        </p> */}
        {/* <div className="margin-top--lg">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=khaibq&amp;cdk-staticweb&amp;type=star&amp;count=true&amp;size=large"
            width={165}
            height={30}
            title="GitHub Stars"
          />
        </div> */}
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <div className={clsx('margin-vert--lg', 'padding-vert--lg')}>
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h2
              className={clsx('text--center', 'margin-bottom--xl', styles.sectionTitle,)}>
              Feature section with main topics
            </h2>
            <div className={clsx('row', styles.featuresRow)}>
              <div className={clsx('col', 'col--4', styles.featuresRowItem)}>
                <h3>☸️ Selective Workshops</h3>
                <p>
                  My owned workshops with real world scenarios to improve skills and hands on experiences.
                </p>
                <a href={useBaseUrl('/docs/intro-workshops')}>
                  <strong>Learn more</strong>
                </a>
              </div>
              <div className={clsx('col', 'col--4', styles.featuresRowItem)}>
                <h3>🔆 AWS Cheat Sheets</h3>
                <p>
                  Vietnamese version only. Hope that this will help for newbies who are still difficult with English technical terms.
                </p>
                <a href={useBaseUrl('/docs/introduction')}>
                  <strong>Learn more</strong>
                </a>
              </div>
              <div className={clsx('col', 'col--4', styles.featuresRowItem)}>
                <h3>🔯 Code Practice</h3>
                <p>
                  A dashboard for Code Practice. 
                </p>
                <a href={useBaseUrl('/docs/intro-practice')}>
                  <strong>Learn more</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageHeader />
        <FeaturesSection />
      </main>
    </Layout>
  );
}
