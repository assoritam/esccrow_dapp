import styled from "styled-components";
import { Text } from "../../components/text";
import { Row } from "../../components/row";
import { Content } from "../../components/content";

export const SubTitle = styled(Text)`
  margin-top: 20px;
`;

export const PoweredBlock = styled(Row)`
  align-items: center;
  margin-top: 12px;
  svg {
    margin-left: 5px;
  }
  span {
    font-size: 12px;
    color: var(--black);
  }
`;

export const Reminder = styled(Content)`
  background-color: var(--sky-blue);
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 25px;
  margin-top: 25px;
  h3 {
    color: var(--dark);
  }
  svg {
    margin-right: 8px;
  }
  svg path {
    fill: var(--dark);
  }
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const Item = styled.li`
  font-size: 16px;
  color: var(--dark);
`;
