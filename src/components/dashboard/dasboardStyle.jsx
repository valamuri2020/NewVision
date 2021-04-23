import styled from "styled-components";
import { Col } from "react-bootstrap";

const mobileSize = "768px";
const gray = "#ccc";
const darkpink = "#853F3F";
const lightpink = "#F06B6B";
const palepink = "#f2b8b8";

export const Container = styled.div`
  margin: 5rem 7rem;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${mobileSize}) {
    margin: 5rem 1rem;
  }
`;

export const SubContainer = styled.div`
  flex-direction: row;
  display:flex;
  justify-content:space-around;
  @media only screen and (max-width: ${mobileSize}) {
    flex-direction:column;
  }
`
export const Card = styled.div`
  border: 1px solid black;
  border-radius: 0.6rem;
  display: flex;
  min-height: 8rem;
  padding: 1em;
  background: white;
  margin: 1em 0em;
  flex-direction: column;
  max-width: 23rem;
  justify-content:space-between;
  @media only screen and (max-width: ${mobileSize}) {
    padding: 1em;
    justify-content: center;
  }
`;

export const AddCard = styled.div`
  border: 2px dashed black;
  border-radius: 1rem;
  display: flex;
  min-height: 10rem;
  padding: 2em;
  justify-content: center;
  align-items: center;
  margin: 1em;
  max-width: 100rem;
  @media only screen and (max-width: ${mobileSize}) {
    flex-direction: column;
    padding: 1em;
    justify-content: center;
  }
`;
export const Content = styled.div`
  font-size: 1em;
  color: ${(props) => props.color};
  font-weight: 700;
  margin: 0.2em 0;
  display:flex;
  align-items:center;
`;
export const SubCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AddSubCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  font-style: italic;
  line-height: 1em;
  height: 5em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  >div:nth-child(1) {
    font-size:1.25rem;
    font-weight:600;
  }
`;

export const Button = styled.div`
`

export const SubData = styled.div`
  display:flex;
  margin: 0.5rem 0rem;
  justify-content:space-between;
  flex-wrap:wrap;
`

export const Stats = styled.div`
  min-width:2rem;
  margin-right: 0.7rem;
  >div:nth-child(1) {
    font-size:0.8rem;
  }
  >div:nth-child(2) {
    font-size:1.2rem;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;
export const Heading = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-left: 20px;
  font-weight: 700;
`;
export const Data = styled.div`
  margin: 8px;
  border: 2px solid #000;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  font-weight: 600;
  padding: 0.5rem 1rem;
`;

export const Image = styled.img`
  width: 140px;
  object-fit: scale-down;
  border-radius: 20px;
  margin-right: 1em;
  padding: 5px;
`;

export const AddData = styled.div`
  margin: 1rem;
  height: 107px;
  margin: 8px;
  color: black;
  display: flex;
  :hover {
    background: white;
  }
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  padding: 1rem 2rem;
  font-size: 14px;
  border: 2px dashed #767676;
  border-radius: 4px;
`;

export const Divider = styled(Col)`
  height: 5px;
  background-color: ${props => props.color || darkpink };
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 22px;
`;