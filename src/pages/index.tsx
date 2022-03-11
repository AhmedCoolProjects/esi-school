import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { HomepageESIClubs } from "../components";
import Translate, { translate } from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          src="img/logos/logo-dark.png"
          alt="LOGO"
          className="w-[120px] h-[120px]
          object-contain sm:w-[140px] sm:h-[140px]
          md:w-[160px] md:h-[160px]"
        />

        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline">
            A documentation site for the ESI School students
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs-s1/intro">
            <Translate>Start Learning</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({
        message: "WELCOME",
        description: "welcome title",
      })}
      description="ESI, official documentation web app for courses, tps, tds, exams, activities and more">
      <HomepageHeader />
      <main>
        <HomepageESIClubs />
      </main>
    </Layout>
  );
}
