// Components
import Seo from "../components/layout/Seo";
import MainContainer from "../components/utils/Container";

// ChakraUI
import { Stack, Heading, Image, Text, Grid, Box } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Seo title="About" />
      <MainContainer py={100}>
        <Grid
          gap={50}
          templateColumns={["repeat(1, 1fr)", null, "repeat(2,1fr)"]}
        >
          <Stack align="center" justify="center">
            <Image
              alt="Me: Fraol Lemecha"
              width="md"
              boxShadow="2xl"
              src="/me.webp"
              borderRadius="2xl"
            />

            <Text py={5}>
              My name is Fraol Lemecha. I am a full stack (node) web developer.
            </Text>
          </Stack>

          <Box>
            <Heading size="lg" py={2}>
              My History
            </Heading>

            <Text py={2}>
              Before I learnt how to program I used to see a lot of hacking and
              programming movies and when I saw those movies I knew that
              programming was a process of typing in letters and special
              characters with the keyboard. So, I used to try to open exe files
              with notepad sometimes the notepad window will say NOT RESPONDING
              and I would have to restart the pc and sometimes it will open and
              I will see gibberish text made up of many characters and then I
              will think how could somebody write this, but now I now that those
              are compiled binary file.
            </Text>

            <Text py={2}>
              I started programing 3 years ago because of an app that I got from
              my friend. The app was called Spy boy and it had a 5-line VBS
              script that popped out a window that had an input box and a button
              with the text ok. When you type in some text and click ok the
              computer will speak the text that you typed into the input box. I
              had no idea what that 5-line code meant but I was happy that it
              was functional. After I started to explore more about VBS on the
              internet and I learnt many things like variables and control
              structures. After three weeks I made my own VBS script quiz app.
              After some time, I thought not everything could have been made
              with VBS. So, I searched around the internet and met HTML. I also
              learned some CSS and JS. Then I learned Python, Arduino, Node and
              many frameworks and libraries like React, Express, EJS, JQuery,
              Bootstrap, Materialize CSS, JOI, mongo DB and some others.
            </Text>
          </Box>
        </Grid>
      </MainContainer>
    </>
  );
}
