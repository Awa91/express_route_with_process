import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import AboutUsFirstMainFeatured from "./AboutUsFirstMainFeatured";
import AboutUsSecondMainFeatured from "./AboutUsSecondMainFeatured";
import AboutUsFeatured from "./AboutUsFeatured";

const aboutUsFirstMainFeatured = {
  title: "ABOUT",
  description:
    "Appspot Digital Solution (ADS) is the most sought-after development hub for planning, building, support and enhancement of web and mobile applications with its Head Office in Abia, Nigeria. We have a reputation for satisfying and surpassing clients expectations through our services.",
};

const aboutUsSecondMainFeatured = {
  paragraph1:
    "ADS ,a full-app-lifecycle development hub, focuses on building web apps that covers all the segments of a successful product launch and maintenance - ideation, prototyping and design, project management, development, QA testing, and support. We leverage Agile principles and provide each customer product that meets their business needs.",
  paragraph2:
    "We offer application development services to SME that meet their needs while keeping quality, improving productivity, and optimizing cost.",
  sourceSet: "",
  image: "/assets/groceryStoreFinal810x200HQ44kb.jpg",
  imageText: "t",
};

const aboutUsFeatured = [
  {
    subtitle: "Services",
    paragraph1:
      "Our services are designed to the needs of fast growing SME that are looking for software development expertise - either with just coding, or with managing the whole software development and delivery process.",
    paragraph2:
      "We use our full-app-lifecycle approach to make sure products are deployed on time and built according to your needs.",
    url: "services",
  },
];

const AboutUsPage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot : About</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured" id="wrapper">
          <AboutUsFirstMainFeatured main1={aboutUsFirstMainFeatured} />
          <AboutUsSecondMainFeatured main2={aboutUsSecondMainFeatured} />

          <br />

          <Grid
            container
            spacing={1}
            sx={{
              margin: "auto",
              alignItems: "end",
              maxWidth: "75%",
            }}
          >
            {aboutUsFeatured.map((about) => (
              <AboutUsFeatured key={about.subtitle} about={about} />
            ))}
          </Grid>
        </main>
      </Box>
    </>
  );
};

export default AboutUsPage;
