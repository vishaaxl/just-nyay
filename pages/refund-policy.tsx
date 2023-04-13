import Hero from "components/home/Hero";
import PageHeading from "components/PageHeading";
import styled from "styled-components";

interface Props {}

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const P = styled.p`
  line-height: 1.4;
  margin-bottom: 1rem;
`;

const RefundPolicy: React.FC<Props> = () => {
  return (
    <>
      <Hero />
      <PageHeading title="Refund Policy" />
      <div className="container">
        <H2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Return policy
        </H2>
        <P>
          Justnyay.com is committed to providing the best legal advice and
          consultancy services to our clients. However, if you are not satisfied
          with our services, we do not have a refund policy in place.
        </P>
        <H2>Refund Eligibility:</H2>
        <P>
          We do not offer a refund if you have received any legal advice or
          consultancy services from our panel of lawyers.
        </P>
        <H2>Dispute Request:</H2>
        <P>
          To request a dispute, you must contact us at info@justnyay.com within
          24 hours of making the payment. In your request, you must provide the
          reason for your dissatisfaction with our services.
        </P>
        <H2>No Refund for Registration Fees:</H2>
        <P>
          We do not offer a refund for Registration fees. Once you have
          subscribed to our registration package, you will not be eligible for a
          refund.
        </P>
        <H2>Changes to Refund Policy:</H2>
        <P>
          We reserve the right to modify this refund policy at any time. If we
          make any changes, we will notify you by posting the updated policy on
          our website.
        </P>
        <p>
          <br />
        </p>
        <p>Questions</p>
        <p>
          <br />
        </p>
        <P>
          If you have any questions regarding our refund policy, please feel
          free to contact us at{" "}
          <a data-fr-linked="true" href="mailto:info@justnyay.com">
            info@justnyay.com
          </a>
          .
        </P>

        <br />
        <br />
      </div>
    </>
  );
};
export default RefundPolicy;
