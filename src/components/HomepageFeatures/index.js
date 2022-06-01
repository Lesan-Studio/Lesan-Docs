import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/world.svg').default,
    description: (
      <>
        Lesan Studio is designed to be a developer friendly synthetic audio
        generator for Amharic Languages. You give it an Amharic text of your
        choice, our backend preprocesses, cleans, and generates the audio for
        you
      </>
    ),
  },
  {
    title: 'Customizable',
    Svg: require('@site/static/img/advanced_customization.svg').default,
    description: (
      <>
        Lesan has hundreds of different of speakers for you to choose from for
        your preferred reading style. Check the <code>speaker&apos;s</code>{' '}
        documeentation.
      </>
    ),
  },
  {
    title: 'Natural Sounding',
    Svg: require('@site/static/img/artificial_intelligence.svg').default,
    description: (
      <>
        We use the best models, techniques, and algorithms to generate
        state-of-the-art natural sounding audio. The generated audio can also be
        used for commercial purposes and save you time and money.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
