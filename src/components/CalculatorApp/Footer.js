import styled from "styled-components";

const Attribution = styled.div`
  font-size: 11px;
  text-align: center;
  + a {
    color: hsl(228, 45%, 44%);
  }
`;

const Footer = () => {
  return (
    <footer>
      <Attribution>
        Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/enhsu/Calculator-App">Ian Hsu</a>.
      </Attribution>
    </footer>
  );
}

export default Footer;