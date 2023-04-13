import Hero from "components/home/Hero";
import PageHeading from "components/PageHeading";
import styled from "styled-components";

interface Props {}

export const H2 = styled.h2`
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const P = styled.p`
  line-height: 1.4;
  margin-bottom: 1rem;
`;

const TermsAndConditions: React.FC<Props> = () => {
  return (
    <>
      <Hero />
      <PageHeading title="Terms and Conditions" />
      <div className="container" style={{ lineHeight: 1.4 }}>
        <P
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: ".5rem",
          }}
        >
          Terms and Conditions
        </P>
        <P>Welcome to Just Nyay!</P>
        <P>
          These terms and conditions outline the rules and regulations for the
          use of Advozone India Private Limited&apos;s Website, located at
          https//justnyay.com.
        </P>
        <P>
          By accessing or using Justnyay.com, you agree to be bound by these
          terms and conditions. Please read them carefully before using our
          website or services.
        </P>
        <P>
          No Refund for Registration Fees and Fees for Legal Services:
          <br />
          <br /> All fees paid for registration on Justnyay.com are
          non-refundable. In addition, fees for legal consultation,
          documentation, and litigation will be charged separately and are
          non-refundable. The fees for these services may vary from lawyer to
          lawyer, case to case, and document to document. Justnyay.com does not
          guarantee any specific results or outcomes from legal services
          provided by the lawyers on our platform.
        </P>
        <P>
          Payment for Legal Services: All payments for legal services must be
          made through the Justnyay.com platform. Justnyay.com will hold the
          funds until the completion of the legal service, and the funds will
          then be released to the lawyer.
        </P>
        <H2>Dispute Resolution:</H2>
        <P>
          In case of any disputes related to legal services provided by the
          lawyers on Justnyay.com, we encourage you to first contact the lawyer
          to resolve the issue. If the issue is not resolved, please contact us
          at info@justnyay.com, and we will try to facilitate a resolution
          between you and the lawyer.
        </P>
        <H2>Changes to Terms and Conditions:</H2>
        <P>
          We reserve the right to modify these terms and conditions at any time.
          If we make any changes, we will notify you by posting the updated
          terms and conditions on our website.
        </P>
        <P>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements:
          &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to
          you, the person log on this website and compliant to the
          Company&rsquo;s terms and conditions. &quot;The Company&quot;,
          &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and
          &quot;Us&quot;, refers to our Company. &quot;Party&quot;,
          &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and
          ourselves. All terms refer to the offer, acceptance and consideration
          of payment necessary to undertake the process of our assistance to the
          Client in the most appropriate manner for the express purpose of
          meeting the Client&rsquo;s needs in respect of provision of the
          Company&rsquo;s stated services, in accordance with and subject to,
          prevailing law of Netherlands. Any use of the above terminology or
          other words in the singular, plural, capitalization and/or he/she or
          they, are taken as interchangeable and therefore as referring to same.
        </P>
        <P>Cookies</P>
        <P>
          We employ the use of cookies. By accessing Just Nyay, you agreed to
          use cookies in agreement with the Advozone India Private
          Limited&apos;s Privacy Policy.
        </P>
        <P>
          Most interactive websites use cookies to let us retrieve the
          user&rsquo;s details for each visit. Cookies are used by our website
          to enable the functionality of certain areas to make it easier for
          people visiting our website. Some of our affiliate/advertising
          partners may also use cookies.
        </P>
        <P>License</P>
        <P>
          Unless otherwise stated, Advozone India Private Limited and/or its
          licensors own the intellectual property rights for all material on
          Just Nyay. All intellectual property rights are reserved. You may
          access this from Just Nyay for your own personal use subjected to
          restrictions set in these terms and conditions.
        </P>
        <P>You must not:</P>
        <P>&bull;&nbsp; &nbsp;&nbsp;Republish material from Just Nyay</P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;Sell, rent or sub-license material from Just
          Nyay
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;Reproduce, duplicate or copy material from
          Just Nyay
        </P>
        <P>&bull;&nbsp; &nbsp;&nbsp;Redistribute content from Just Nyay</P>
        <P>This Agreement shall begin on the date hereof.</P>
        <P>
          Parts of this website offer an opportunity for users to post and
          exchange opinions and information in certain areas of the website.
          Advozone India Private Limited does not filter, edit, publish or
          review Comments prior to their presence on the website. Comments do
          not reflect the views and opinions of Advozone India Private
          Limited,its agents and/or affiliates. Comments reflect the views and
          opinions of the person who post their views and opinions. To the
          extent permitted by applicable laws, Advozone India Private Limited
          shall not be liable for the Comments or for any liability, damages or
          expenses caused and/or suffered as a result of any use of and/or
          posting of and/or appearance of the Comments on this website.
        </P>
        <P>
          Advozone India Private Limited reserves the right to monitor all
          Comments and to remove any Comments which can be considered
          inappropriate, offensive or causes breach of these Terms and
          Conditions.
        </P>
        <P>You warrant and represent that:</P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;You are entitled to post the Comments on our
          website and have all necessary licenses and consents to do so;
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;The Comments do not invade any intellectual
          property right, including without limitation copyright, patent or
          trademark of any third party;
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;The Comments do not contain any defamatory,
          libelous, offensive, indecent or otherwise unlawful material which is
          an invasion of privacy
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;The Comments will not be used to solicit or
          promote business or custom or present commercial activities or
          unlawful activity.
        </P>
        <P>
          You hereby grant Advozone India Private Limited a non-exclusive
          license to use, reproduce, edit and authorize others to use, reproduce
          and edit any of your Comments in any and all forms, formats or media.
        </P>
        <P>Hyperlinking to our Content</P>
        <P>
          The following organizations may link to our Website without prior
          written approval:
        </P>
        <P>&bull;&nbsp; &nbsp;&nbsp;Government agencies;</P>
        <P>&bull;&nbsp; &nbsp;&nbsp;Search engines;</P>
        <P>&bull;&nbsp; &nbsp;&nbsp;News organizations;</P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;Online directory distributors may link to our
          Website in the same manner as they hyperlink to the Websites of other
          listed businesses; and
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;System wide Accredited Businesses except
          soliciting non-profit organizations, charity shopping malls, and
          charity fundraising groups which may not hyperlink to our Web site.
        </P>
        <P>
          These organizations may link to our home page, to publications or to
          other Website information so long as the link: (a) is not in any way
          deceptive; (b) does not falsely imply sponsorship, endorsement or
          approval of the linking party and its products and/or services; and
          (c) fits within the context of the linking party&rsquo;s site.
        </P>
        <P>
          We may consider and approve other link requests from the following
          types of organizations:
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;commonly-known consumer and/or business
          information sources;
        </P>
        <P>&bull;&nbsp; &nbsp;&nbsp;dot.com community sites;</P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;associations or other groups representing
          charities;
        </P>
        <P>&bull;&nbsp; &nbsp;&nbsp;online directory distributors;</P>
        <P>&bull;&nbsp; &nbsp;&nbsp;internet portals;</P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;accounting, law and consulting firms; and
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;educational institutions and trade
          associations.
        </P>
        <P>
          We will approve link requests from these organizations if we decide
          that: (a) the link would not make us look unfavorably to ourselves or
          to our accredited businesses; (b) the organization does not have any
          negative records with us; (c) the benefit to us from the visibility of
          the hyperlink compensates the absence of Advozone India Private
          Limited; and (d) the link is in the context of general resource
          information.
        </P>
        <P>
          These organizations may link to our home page so long as the link: (a)
          is not in any way deceptive; (b) does not falsely imply sponsorship,
          endorsement or approval of the linking party and its products or
          services; and (c) fits within the context of the linking party&rsquo;s
          site.
        </P>
        <P>
          If you are one of the organizations listed in paragraph 2 above and
          are interested in linking to our website, you must inform us by
          sending an e-mail to Advozone India Private Limited. Please include
          your name, your organization name, contact information as well as the
          URL of your site, a list of any URLs from which you intend to link to
          our Website, and a list of the URLs on our site to which you would
          like to link. Wait 2-3 weeks for a response.
        </P>
        <P>Approved organizations may hyperlink to our Website as follows:</P>
        <P>&bull;&nbsp; &nbsp;&nbsp;By use of our corporate name; or</P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;By use of the uniform resource locator being
          linked to; or
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;By use of any other description of our
          Website being linked to that makes sense within the context and format
          of content on the linking party&rsquo;s site.
        </P>
        <P>
          No use of Advozone India Private Limited&apos;s logo or other artwork
          will be allowed for linking absent a trademark license agreement.
        </P>
        <P>iFrames</P>
        <P>
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
        </P>
        <P>Content Liability</P>
        <P>
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </P>
        <P>Your Privacy</P>
        <P>Please read Privacy Policy</P>
        <P>Reservation of Rights</P>
        <P>
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it&rsquo;s linking policy at any time.
          By continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
        </P>
        <P>Removal of links from our website</P>
        <P>
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly.
        </P>
        <P>
          We do not ensure that the information on this website is correct, we
          do not warrant its completeness or accuracy; nor do we promise to
          ensure that the website remains available or that the material on the
          website is kept up to date.
        </P>
        <P>Disclaimer</P>
        <P>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;limit or exclude our or your liability for
          death or personal injury;
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;limit or exclude our or your liability for
          fraud or fraudulent misrepresentation;
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;limit any of our or your liabilities in any
          way that is not permitted under applicable law; or
        </P>
        <P>
          &bull;&nbsp; &nbsp;&nbsp;exclude any of our or your liabilities that
          may not be excluded under applicable law.
        </P>
        <P>
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty.
        </P>
        <P>
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
        </P>
        <P>
          If you have any questions regarding our terms and conditions, please
          feel free to contact us at info@justnyay.com.
        </P>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default TermsAndConditions;
