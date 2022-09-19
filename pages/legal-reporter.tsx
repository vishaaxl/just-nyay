import type { NextPage } from "next";

interface Props {}

import PageHeading from "components/page-heading/PageHeading";
import Youtube from "components/youtube/Youtube";

const LegalReporter: NextPage = () => {
  return (
    <>
      <PageHeading title="Legal Reporter" />
      <div className="container director">
        <a
          href="https://www.youtube.com/c/LegalReporter"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="hover">Legal Reporter On Youtube</h1>
        </a>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <div className="legal-reporter-wrapper">
          <Youtube hideHeading />
          <Youtube hideHeading />
          <Youtube hideHeading />
          <Youtube hideHeading />
          <Youtube hideHeading />
          <Youtube hideHeading />
        </div>
      </div>
    </>
  );
};

export default LegalReporter;
