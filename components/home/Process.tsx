import { BsBookmarkCheck, BsHeadset, BsReceipt } from "react-icons/bs";
import { MdDocumentScanner, MdGavel, MdReceipt } from "react-icons/md";
import styled from "styled-components";
import { sendConfirmationMessage } from "utils/confirmationMessage";

interface Props {}

const Header = styled.div`
  text-align: center;

  span {
    font-size: 0.9rem;
    opacity: 0.9;
  }

  h2 {
    font-weight: 800;
    .accent {
      color: #b78c59;
      display: inline-block;
    }
  }

  p {
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
  }

  & > * {
    display: block;
    margin-bottom: 1rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  padding-top: 3rem;

  @media (min-width: 425px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    span {
      font-weight: 700;
    }

    p {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .icon-wrapper {
      border: 2px solid #b78c59;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 8rem;
      border-radius: 10%;
      height: 8rem;

      .icon {
        font-size: 3rem;
        color: #b78c59;
      }
    }
  }
`;

const Process: React.FC<Props> = () => {
  return (
    <section
      style={{
        backgroundColor: "#162542",
        color: "#f2f2f2",
        padding: "4rem 0",
      }}
    >
      <div className="container">
        <Header>
          <span>HOW IT WORKS</span>
          <h2>
            Planning <p className="accent">&</p> Process
          </h2>
          <p>
            Justnyay follow a simple, four step process to make sure, you go
            from having legal issues to no issues in no time.
          </p>
        </Header>
        <Wrapper onClick={() => sendConfirmationMessage("8318218163")}>
          <div className="column">
            <div className="icon-wrapper">
              <BsReceipt className="icon" />
            </div>
            <span>Registration</span>
            <p>Register through our portal.</p>
          </div>
          <div className="column">
            <div className="icon-wrapper">
              <BsHeadset className="icon" />
            </div>
            <span>Consultation</span>
            <p>Get expert consultation call.</p>
          </div>
          <div className="column">
            <div className="icon-wrapper">
              <MdDocumentScanner className="icon" />
            </div>
            <span>Documentation</span>
            <p>Get your documents ready.</p>
          </div>
          <div className="column">
            <div className="icon-wrapper">
              <MdGavel className="icon" />
            </div>
            <span>Litigation</span>
            <p>Take Legal action.</p>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default Process;
