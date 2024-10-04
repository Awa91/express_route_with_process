import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import WebAppDevFirstMainFeatured from "./FirstMainFeatured";
import WebAppDevSecondMainFeatured from "./SecondMainFeatured";
import Featured from "../../components/Featured";

import WebAppDevFourthMainFeatured from "./FourthMainFeatured";
import WebAppDevFifthMainFeatured from "./FifthMainFeatured";

const webAppDevFirstMainFeatured = {
  title: "WEB APPLICATION DEVELOPMENT SERVICES",
  phrase1: "Reliable and Experienced Partner",
  phrase2: "for Your Web Application",
  phrase3: "Development",
};

const webAppDevSecondMainFeatured = {
  line1:
    "Our services offer all the lifecycle stages of app engineering so you can choose the",
  line2: "whole package or a single segment. This model helps us to work on",
  line3:
    "various solutions and gain industry expertise with different technologies.",
  line4:
    " With this insight, we are able to build perfect solutions and create value",
  line5: "for clients and end-users, optimizing budget and time constraints.",
  sourceSet: "/assets/WAP/bg.png, /assets/WAP/bg.jpg",
  image: "/assets/WAP/bg.png",
  imageText: "Web Development Services",
};

const webAppDevFeatured = [
  {
    subtitle: "FAST WEB APPLICATION DEVELOPMENT USING BEST PRACTICES",
    description:
      "You bring your ideas and we implement them using the best practices, highest industry standards and technologies for rapid web app development. We rely on SCRUM, agile, and other stardards to deliever a product that meets your business needs.",
    sourceSet:
      "/assets/WAP/fast-web-app-development.png, /assets/WAP/fast-web-app-development.jpg, ",
    image: "/assets/WAP/fast-web-app-development.png",
    imageLabel: "Fast Web App",
  },

  {
    subtitle: "IDEAS AND FUNDRAISING FOR CLIENTS AND BUSINESS MANAGEMENT",
    description:
      "We get it, your business needs to grow. We offer a reliable services that enable you to work on your marketing strategy to get more clients and business management for more funds.",
    sourceSet:
      "/assets/BAP/ultimate-solution.png, /assets/BAP/ultimate-solution.jpg,",
    image: "/assets/BAP/ultimate-solution.png",
    imageLabel: "Ideas and Fundraising",
  },
  {
    subtitle: "STABLE PLATFORM TO MITIGATE SOFTWARE ISSUES",
    description:
      "You consulted the service of a freelancer or an inexperienced company to develop your app and the cooperation has reached its limits,because of lack of project management and expertise, now you need a platform that works. You want to focus more on making sales, expanding your team and working on marketing, and not dealing with day-to-day software issues.",
    sourceSet:
      "/assets/WAP/stable-platform.png, /assets/WAP/stable-platform.jpg,",
    image: "/assets/WAP/stable-platform.png",
    imageLabel: "Stable Platform",
  },

  {
    subtitle: "COMPETITIVE AND TRANSPARENT PRICING MODEL",

    description:
      "Our pricing model provide you with two options, a project based rate up to 4 to 5 times lower than in Western countries with the same level of knowledge and expertise, or a flat monthly rate based model for routine maintenace.",
    sourceSet: "/assets/WAP/pricing-model.png, /assets/WAP/pricing-model.jpg, ",
    image: "/assets/WAP/pricing-model.png",
    imageLabel: "Pricing Model",
  },
];

const webAppDevFourthMainFeatured = {
  title: "Ready to Catch up on Web Application Development?",
  sourceSet: "/assets/BAP/deep-dive.png, /assets/BAP/deep-dive.jpg",
  image: "/assets/BAP/deep-dive.png",
  imageLabel: "Deep Dive into Web App Development",
  url: "/contact",
};

const webAppDevFifthMainFeatured = [
  {
    subtitle:
      "Web applications develop from scratch to meet your business need",
    description:
      "You have an idea for an app but no technical background to know if it’s even possible to execute or how to approach building it. We set you up starting from business analysis, prototyping, and design, to choosing the  best technology within an optimized framework for delivering a usable solution fast.",
  },
  {
    subtitle: "Mitigate risk by extending your in-house development team",
    description:
      "Whether you need temporary help for your main project or you need your enterprise team to focus on a more important task - having senior software engineers at hand without having them on your payroll is a cost-effective way for delivering on project deadlines and closing key milestones.",
  },
  {
    subtitle: "Recover your web application from inexperienced developers",
    description:
      "Many developers shy away from other people’s code, but our experience and consulting can help you determine the right course of action for your web app development project. We first determine if the previous work was done  following best practices and industry standards and tell you transparently how we can recover your project.",
  },
];

const WebAppDevPage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot: Web Application Development Services</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured">
          <WebAppDevFirstMainFeatured main1={webAppDevFirstMainFeatured} />
          <WebAppDevSecondMainFeatured main2={webAppDevSecondMainFeatured} />

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
            OUR WEB APPLICATION DEVELOPMENT SERVICES ARE SPECIALIZED FOR:
          </Typography>

          <Grid
            container
            spacing={1}
            sx={{
              margin: "auto",
              alignItems: "end",
              maxWidth: "75%",
            }}
          >
            {webAppDevFifthMainFeatured.map((main5) => (
              <WebAppDevFifthMainFeatured key={main5.subtitle} main5={main5} />
            ))}
          </Grid>

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
            Web applications we love developing
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
            {webAppDevFeatured.map((webAppDev) => (
              <Featured key={webAppDev.subtitle} feature={webAppDev} />
            ))}
          </Grid>

          <WebAppDevFourthMainFeatured main4={webAppDevFourthMainFeatured} />
        </main>
      </Box>
    </>
  );
};

export default WebAppDevPage;
