import PageHeading from "components/PageHeading";
import { GetServerSideProps } from "next";

import styles from "../../styles/page.module.scss";
import { pages } from "../../data.js";

interface Props {
  title: string;
  pageContent: {
    id: number;
    heading: string;
    title: string;
    content: string;
  }[];
}

const Page: React.FC<Props> = ({ title, pageContent }) => {
  return (
    <>
      <PageHeading title={title} />
      <section className="container">
        {pageContent[0] && (
          <>
            <h3 className={styles.main_heading}>{pageContent[0].heading}</h3>
            <p className={styles.para}>{pageContent[0].content}</p>
          </>
        )}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.query;

  const data = pages.filter((item) => item.title == page);

  return {
    props: {
      title: page,
      pageContent: data,
    },
  };
};
export default Page;
