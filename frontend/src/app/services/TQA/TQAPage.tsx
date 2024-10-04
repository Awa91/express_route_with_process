import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import TQAFirstMainFeatured from "./FirstMainFeatured";
import TQASecondMainFeatured from "./SecondMainFeatured";
import Featured from "../../components/Featured";
import TQAThirdMainFeatured from "./ThirdMainFeatured";

const tqaFirstMainFeatured = {
  title:
    "QUALITY ASSURANCE SERVICES INCORPORATED INTO THE DEVELOPMENT METHODOLOGY OF ANY PRODUCT",
  phrase1: "Launch Tested, Reliable and",
  phrase2: "Validated Products",
};

const tqaSecondMainFeatured = {
  title: "WHAT  DIFFERENTIATES  QA SERVICES FROM DEVELOPMENT",
  paragraph1:
    "QA services have one common issue which is not understanding their purpose. Inasmuch as all production process needs to have quality management. The question now is - do you even test your work before you apply it? That's where QA services come in play.",
  paragraph2:
    "These services have one main objective which is to test the quality of the product and identity any possible bug within the code.",
  paragraph3:
    "QA ensures that new features do not break existing ones. It also verifies app compliance with different browsers and OSs that your app supports.",

  sourceSet: "/assets/TQA/bg.png, /assets/TQA/bg.jpg",
  image: "/assets/TQA/bg.png",
  imageText: "Quality Assurance",
};

const tqaFeatured = [
  {
    subtitle: "ACCEPTANCE TESTING TO ADDRESS MAIN CUSTOMER PAIN POINTS",
    description:
      "Acceptance test is the most crucial software QA need. This aimed at providing answer to the QA fundamental question - Does the app solve the identified business problem? The answer to this question will validate that the solution has addressed the main customer pain points.",
    sourceSet:
      "/assets/TQA/acceptance-test.png,  /assets/TQA/acceptance-test.jpg, ",
    image: "/assets/TQA/acceptance-test.png",
    imageLabel: "Acceptance Testing",
  },

  {
    subtitle: "USABILITY TESTING BY OUR RESEARCH TEAM MEMBERS",
    description:
      "Usability test aims at finding answer to the question - is using the app complicated or easy? We uncover the answer to this by testing the solution with real users from different profiles. Users are provided with particular tasks and observed by our researchers. If majority of the users find it complicated to use the app, then we go back to the  drawing board and fix the usability issues.",
    sourceSet:
      "/assets/TQA/usability-test.png, /assets/TQA/usability-test.jpg, ",
    image: "/assets/TQA/usability-test.png",
    imageLabel: "Usability Testing",
  },
  {
    subtitle: "AUTOMATED TESTS FOR INDICATORS",
    description:
      "Automated test is performed on a large scale only after insights are drawn from manual test. We rely on scripted languages to test the same areas over and over again and obtain lab-measured indicators which are hard to capture with manual testing.",
    sourceSet:
      "/assets/TQA/automated-test.png, /assets/TQA/automated-test.jpg, ",
    image: "/assets/TQA/automated-test.png",
    imageLabel: "Automated Test",
  },

  {
    subtitle:
      "UNIT, INTEGRATION, FUNCTIONAL TESTING TO PROVIDE EXPECTED RESULTS",
    description:
      "This test aims to ensure that the individual application functions provide expected results and do they work together.",
    sourceSet:
      "/assets/TQA/unit-integration-functional-test.png, /assets/TQA/unit-integration-functional-test.jpg, ",
    image: "/assets/TQA/unit-integration-functional-test.png",
    imageLabel: "Unit, Integration and Functional Testing",
  },

  {
    subtitle:
      "PENETRATION AND SECURITY TESTING TO PROTECT YOUR APP FROM HACKERS",
    description:
      "This test aims to protect your app from hackers. We follow industry standards and diligently ensure our code is protecting your application from hackers.",
    sourceSet:
      "/assets/TQA/penetration-security-test.png, /assets/TQA/penetration-security-test.jpg, ",
    image: "/assets/TQA/penetration-security-test.png",
    imageLabel: "Penetration and Security Testing",
  },
];

const tqaThirdMainFeatured = {
  title: "Ensuring your app works as it should",
  sourceSet: "/assets/BAP/deep-dive.png, /assets/BAP/deep-dive.jpg",
  image: "/assets/BAP/deep-dive.png",
  imageLabel: "Deep Dive into Quality Assurance",
  url: "/contact",
};

const TQAPage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot: Quality Assurance Services</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured" id="wrapper">
          <TQAFirstMainFeatured main1={tqaFirstMainFeatured} />
          <TQASecondMainFeatured main2={tqaSecondMainFeatured} />

          <br />
          <Typography
            component="h1"
            variant="h4"
            sx={{
              textAlign: "center",
              pt: "20px",
              pb: "20px",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
            }}
          >
            OUR QUALITY ASSURANCE SERVICES COVER:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              pt: "20px",
              pb: "20px",
              ml: "20%",
              mr: "20%",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
            }}
          >
            Appspot QA process is built into the development of any product. We
            rely on agile methodology in testing all the parts of the app before
            it goes live and finding any possible issues before the users do.
          </Typography>

          <Grid
            container
            spacing={1}
            sx={{
              margin: "auto",
              alignItems: "end",
              maxWidth: "75%",
              pb: "5%",
            }}
          >
            {tqaFeatured.map((tqa) => (
              <Featured key={tqa.subtitle} feature={tqa} />
            ))}
          </Grid>
          <TQAThirdMainFeatured main3={tqaThirdMainFeatured} />
        </main>
      </Box>
    </>
  );
};

export default TQAPage;
