import React from 'react';
import { Link } from 'react-router-dom';
import {
  GlobalStyle,
  Title,
  TermsAndCoContainer,
  BoldTxt,
} from '../../styles/componentStyles/Authentication/AuthStyles';
import NavbarHorizontal from '../../components/NavbarHorizontal';
import { Container, TopContainer, BottomContainer } from '../../styles/pageStyles/AuthAndAdmin/AuthPageStyles';

const TermsAndCond = () => {
  return (
    <Container>
      <TopContainer>
        <NavbarHorizontal />
      </TopContainer>

      <BottomContainer>
        <GlobalStyle />
        <TermsAndCoContainer>
          <Title className="forgetPass">Terms & Conditions</Title>
          <br />
          <p>
            Welcome to our online learning platform. These terms and conditions outline the rules and regulations for
            the use of our website.
            <br />
            <br />
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use
            our website if you do not agree to all the terms and conditions stated on this page.
            <br />
            <br />
            The following terminology applies to these terms and conditions, privacy statement, and disclaimer notice and
            any or all agreements:
            <br />
            <br />
            - "Client," "You," and "Your" refer to you, the person accessing this website and accepting the company's
            terms and conditions.
            <br />
            - "The Company," "Ourselves," "We," "Our," and "Us" refer to our company.
            <br />
            - "Party," "Parties," or "Us" refer to both the client and ourselves, or either the client or ourselves.
            <br />
            <br />
            The content of the pages of this website is for your general information and use only. It is subject to
            change without notice.
            <br />
            <br />
            Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness,
            performance, completeness, or suitability of the information and materials found or offered on this website
            for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or
            errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent
            permitted by law.
            <br />
            <br />
            Your use of any information or materials on this website is entirely at your own risk, for which we shall
            not be liable. It shall be your own responsibility to ensure that any products, services, or information
            available through this website meet your specific requirements.
            <br />
            <br />
            This website contains material that is owned by or licensed to us. This material includes, but is not limited
            to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance
            with the copyright notice.
            <br />
            <br />
            Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
            <br />
            <br />
            From time to time, this website may also include links to other websites. These links are provided for your
            convenience to provide further information. They do not signify that we endorse the website(s). We have no
            responsibility for the content of the linked website(s).
            <br />
            <br />
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of
            your country.
            <br />
            <br />
            By using our website, you agree to comply with and be bound by these terms and conditions.
            <br />
            <br />
            If you have any questions or concerns about these terms and conditions, please contact us.
            <br />
            <br />
            Thank you for using our online learning platform.
          </p>

            <br/>
          <BoldTxt>
            <Link to="/signup" className="boldTxt">
              Back to login
            </Link>
          </BoldTxt>
        </TermsAndCoContainer>
      </BottomContainer>
    </Container>
  );
};

export default TermsAndCond;
