import PageHeading from "components/PageHeading";
import VideoGrid from "components/pages/VideoGrid";
import type { NextPage } from "next";
import Head from "next/head";

const LeagalReporter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Just Nyay | Legal Issue No Issue</title>

        <meta
          name="description"
          content="One stop solution to all your legal proplems"
        />
        <meta
          name="keywords"
          content="legal, reporter, case, court, solutions"
        ></meta>
      </Head>
      <PageHeading title="Legal Repoter TV" />
      <VideoGrid />
    </>
  );
};

export default LeagalReporter;
