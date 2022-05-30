import { ReactNode } from "react";

// Components
import { Container, ContainerProps } from "@chakra-ui/react";

interface Props extends ContainerProps {
  children?: ReactNode;
}

export default function MainContainer({ children, ...rest }: Props) {
  return (
    <Container maxW="container.lg" {...rest}>
      {children}
    </Container>
  );
}
