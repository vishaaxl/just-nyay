interface Props {
  title: string;
}

const PageHeading: React.FC<Props> = ({ title }) => {
  title = title.replace(/-/g, " ");

  return <div className="page-heading">{title}</div>;
};

export default PageHeading;
