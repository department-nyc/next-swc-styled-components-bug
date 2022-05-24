import styled, { css } from "styled-components";

const handleSomething = css`
  ${({ $something }) => $something && "color: yellow;"}
`;

const baseCss = css`
  ${handleSomething}
  outline: 1px dashed #f5f5f5;
`;

const constructCss = (cssIn) => css`
  ${baseCss}
  ${cssIn}
`;

const stylesCss = {
  H1: {
    css: constructCss(css`
      color: red;
    `),
  },
  H2: {
    css: constructCss(css`
      color: blue;
    `),
  },
};

export const example3Typography = Object.keys(stylesCss).reduce(
  (acc, styleName) => {
    const css_ = stylesCss[styleName].css;
    // create a React component
    const Component = styled.div`
      ${css_}
    `;
    // store the CSS for use inside other styled components
    acc[styleName] = Component;
    acc[`${styleName}Css`] = css_;
    return acc;
  },
  {}
);

export const ExtendedExample3 = styled(example3Typography.H1)`
  font-size: 3rem;
`;

export const example3Spread = {
  ...example3Typography,
};
