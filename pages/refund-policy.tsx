import Hero from "components/home/Hero";
import PageHeading from "components/PageHeading";

interface Props {}

const RefundPolicy: React.FC<Props> = () => {
  return (
    <>
      <Hero />
      <PageHeading title="Refund Policy" />
      <div className="container">
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Return policy</p>
        <p>
          <br />
        </p>
        <p>REFUNDS</p>
        <p>
          <br />
        </p>
        <p>All sales are final and no refunds will be issued.</p>
        <p>
          <br />
        </p>
        <p>Questions</p>
        <p>
          <br />
        </p>
        <p>
          If you have any questions concerning our return policy, please contact
          us at:
        </p>
        <p>
          <a data-fr-linked="true" href="mailto:info@justnyay.com">
            info@justnyay.com
          </a>
        </p>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
export default RefundPolicy;
