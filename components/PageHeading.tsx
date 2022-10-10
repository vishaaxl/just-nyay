import Image from "next/image";

interface Props {
  title: string;
  imgUrl?: string;
}

const PageHeading: React.FC<Props> = ({ title, imgUrl }) => {
  title = title.replace(/-/g, " ");

  return (
    <div className="page-heading">
      {imgUrl ? (
        <Image
          alt=""
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          style={{ zIndex: "-1" }}
        />
      ) : (
        <Image
          alt=""
          src="/images/case-1.jpeg"
          layout="fill"
          objectFit="cover"
          style={{ zIndex: "-1" }}
        />
      )}
      {title}
    </div>
  );
};

export default PageHeading;
