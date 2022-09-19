import type { NextPage } from "next";

interface Props {}

import PageHeading from "components/page-heading/PageHeading";
import Youtube from "components/youtube/Youtube";

const Director: NextPage = () => {
  return (
    <>
      <PageHeading title="Director's Desk" />
      <div className="container director">
        <h1>Some heading</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Youtube link="/hWvEmFk07bE" hideHeading autoplay />
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from de
          Finibus Bonorum et Malorum by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
      </div>
    </>
  );
};

export default Director;
