import styled from "styled-components";

const Button = styled.button`
  color: red;
`;

export const ColoredButton = ({ label }: { label?: string }) => (
  <Button>{label || "すごい"}</Button>
);
