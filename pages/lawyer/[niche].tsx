import type { GetServerSideProps, NextPage } from "next";

import PageHeading from "components/page-heading/PageHeading";
import PriceMenu from "components/price-chart/PriceMenu";

import { pages } from "data";
import { useEffect, useState } from "react";

interface Props {
  heading: string;
  content: string;
}

const Index: NextPage<Props> = ({ heading, content }) => {
  return (
    <>
      <PageHeading title={heading.replace(/-/g, " ")} />
      <section className="container">
        <div className="main_login_form">
          {content.length > 10 && (
            <div
              className="dynamic-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          <PriceMenu />
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let url = context.params;
  const data = pages.filter((page) => page.title === url?.niche);

  return {
    props: { heading: url?.niche, content: String(data[0]?.content) },
  };
};

export default Index;
