import { styled, css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      /* background-color: #ccc; */
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      /* background-color: #ccc; */
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3rem;
      font-weight: 400;
      /* background-color: #ccc; */
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3.5rem;
      font-weight: 500;
      text-align: center;
      /* background-color: #ccc; */
    `}



  line-height:1.4;
`;

export default Heading;
