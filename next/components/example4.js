import styled, { css } from "styled-components";
import { example3Spread } from "./example3";

export const ExtendedExample4 = styled(example3Spread.H1).attrs({
  as: "a",
})`
  font-size: 5rem;
`;
