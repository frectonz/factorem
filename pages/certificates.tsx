// ChakraUi
import { Grid, Stack, Image, Heading } from "@chakra-ui/react";

// Components
import MotionBox from "../components/utils/MotionBox";
import MainContainer from "../components/utils/Container";

// Config
import certificates from "../data/config/certificates.json";

export default function Certificates() {
  return (
    <>
      <MainContainer py={100}>
        <Grid
          gap={10}
          templateColumns={[`repeat(1, 1fr)`, null, `repeat(3, 1fr)`]}
        >
          {certificates.map((c, i) => {
            return (
              <Stack key={i}>
                <MotionBox>
                  <Image src={c.image} borderRadius="md" />
                </MotionBox>
                <Heading size="xs" textShadow="sm">
                  {c.name}
                </Heading>
              </Stack>
            );
          })}
        </Grid>
      </MainContainer>
    </>
  );
}
