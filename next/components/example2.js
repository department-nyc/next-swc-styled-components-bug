import styled, { css } from "styled-components";
const styleMap = {
  A: css`
    color: red;
  `,
  B: css`
    color: blue;
  `,
};

/**
 * This appears to work
 */
export const example2Components = {};
Object.entries(styleMap).forEach(([key, css_]) => {
  const Component = styled.div`
    ${css_}
    font-size: 2rem;
  `;
  example2Components[key] = Component;
});

/**
 * Extending them does not
 */
export const ExtendedExample2 = styled(example2Components.A).attrs({
  as: "span",
})`
  font-size: 2rem;
`;
