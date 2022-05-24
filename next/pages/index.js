import styled, { css } from "styled-components";
import { ExtendedExample1, ExtendMe } from "../components/example1";
import { ExtendedExample2, example2Components } from "../components/example2";
import { ExtendedExample3, example3Typography } from "../components/example3";
import { ExtendedExample4 } from "../components/example4";

export default function Home() {
  return (
    <div>
      <h1>Example 1</h1>

      <ExtendMe>This works on dev and production</ExtendMe>
      <ExtendedExample1>Extended 1</ExtendedExample1>

      <h1>Example 2</h1>
      <example2Components.A>Does work</example2Components.A>
      <example2Components.B>Does work</example2Components.B>
      <ExtendedExample2>Extended 2</ExtendedExample2>

      <h1>Example 3</h1>
      <example3Typography.H1>Test H1</example3Typography.H1>
      <ExtendedExample3>Extended 3</ExtendedExample3>

      <h1>Example 4</h1>
      <ExtendedExample4>Extended 4</ExtendedExample4>
    </div>
  );
}
