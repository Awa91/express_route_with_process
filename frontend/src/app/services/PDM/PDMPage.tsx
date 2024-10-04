import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import PDMFirstMainFeatured from "./FirstMainFeatured";
import PDMSecondMainFeatured from "./SecondMainFeatured";
import PDMThirdMainFeatured from "./ThirdMainFeatured";
import Featured from "../../components/Featured";
import PDMFourthMainFeatured from "./FourthMainFeatured";

const pdmFirstMainFeatured = {
  title: "PROJECT AND DELIVERY MANAGEMENT SERVICES",
  phrase1: "Launch Your App Quicker and on",
  phrase2: "Schedule",
};

const pdmSecondMainFeatured = {
  line1: " Our management team relies on Agile ",
  line2:
    "SCRUM process for developing and sustaining complex products, and our project managers  will communicate with you effectively ,and",
  line3: " direct the team towards your business goals.",
  sourceSet: "/assets/PDM/bg.png, /assets/PDM/bg.jpg",
  image: "/assets/PDM/bg.png",
  imageText: "Project and Delivery Management Services Image",
};

const pdmThirdMainFeatured = [
  {
    subtitle: "Quick App Delivery to Market with the Same Level of Quality",
    description:
      "Traditional approach to project management is inadequate in terms of flexibility because changes are very expensive and time-consuming to perform. To address this issue, we leverage an iterative process that ensures faster time-to-market without losing quality .",
  },
  {
    subtitle: "Additional Value for the Same Resources",
    description:
      "Agile principles were invented to mitigate all the problems associated with traditional development processes. These principles allow us to provide you with additional value for your investment as a result of higher productivity levels when compared with traditional development methodology.",
  },
  {
    subtitle: "Minimize Risk of Project Failure by Making Changes in Time",
    description:
      "Profit making doesn’t depend on a perfect solution. You only need a working solution which surpasses the ‘perfect’ solution still-in-development.  Because guess what? Perfection doesn’t exist! To remain successful, you will be committed to continuous improvement. Agile makes it flexible for you to make changes in time and mitigate failure.",
  },
  {
    subtitle: "Additional Control to Mitigate Surprises",
    description:
      "The transparency of Agile allows you see that something is done within a couple of weeks. Two-week sprints enable you to keep up and make changes early if needed.",
  },
];

const pdmFeatured = [
  {
    subtitle: "BACKLOG PLANNING TO OPTIMIZE VALUE",
    description:
      "Consider it as a list of optimized value. The backlog plan consists of every task that adds value to the project. Each task has its own  priority which enable us to do only the things that matter for the end result.",
    sourceSet:
      "/assets/PDM/backlog-planning.png, /assets/PDM/backlog-planning.jpg, ",
    image: "/assets/PDM/backlog-planning.png",
    imageLabel: "Backlog Planning Image",
  },

  {
    subtitle: "SPRINT PLANNING TO PRIORITIZE RESOURCES",
    description:
      " Your project manager will decide what should be done in the next 2-week and prioritize available resources in order to get you a reliable solution.",
    sourceSet:
      "/assets/PDM/sprint-planning.png, /assets/PDM/sprint-planning.jpg, ",
    image: "/assets/PDM/sprint-planning.png",
    imageLabel: "Sprint Planning Image",
  },
  {
    subtitle: "PRODUCT DEMOS EVERY 2 WEEKS TO SHOWCASE CURRENT LIFECYCLE STAGE",
    description:
      "Our demo session enable us after every two weeks during the app development timeline to present our work so you can be sure that your app is coming to life as planned and is not being set aside until the last moment.",
    sourceSet: "/assets/PDM/product-demo.png, /assets/PDM/product-demo.jpg,",
    image: "/assets/PDM/product-demo.png",
    imageLabel: "Product Demos Image",
  },

  {
    subtitle: "PRIORITY REVIEWS EVERY 2 WEEKS TO MITIGATE LOSSES",
    description:
      "The future isn’t always predictable, mostly in application development where things are moving at a fast pace.  To mitigate losing time and money, we review priorities periodically and make necessary adjustments if needed.",
    sourceSet:
      "/assets/BAP/goals-and-resources.png, /assets/BAP/goals-and-resources.jpg, ",
    image: "/assets/BAP/goals-and-resources.png",
    imageLabel: "Priority Reviews Image",
  },
];

const pdmFourthMainFeatured = {
  title: "Want to Finally Start with Your App Project?",
  sourceSet: "/assets/BAP/deep-dive.png, /assets/BAP/deep-dive.jpg",
  image: "/assets/BAP/deep-dive.png",
  imageLabel: "Start your Project",
  url: "/contact",
};

const PDMPage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot: Project and Delivery Management Services</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured" id="wrapper">
          <PDMFirstMainFeatured main1={pdmFirstMainFeatured} />

          <PDMSecondMainFeatured main2={pdmSecondMainFeatured} />

          <br />
          <Typography
            component="h1"
            variant="h4"
            sx={{
              textAlign: "center",
              pt: "40px",
              pb: "10px",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
            }}
          >
            OUR DEVELOPMENT METHODOLOGY ENSURES:
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
            {pdmThirdMainFeatured.map((main3) => (
              <PDMThirdMainFeatured key={main3.subtitle} main3={main3} />
            ))}
          </Grid>

          <Typography
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
            How we stay on schedule
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              pt: "20px",
              pb: "20px",
              ml: "30%",
              mr: "30%",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
            }}
          >
            Anyone who has worked in development will know that missing
            deadlines occur from time to time. Anxiety, complicated marketing
            strategy and bleeding money are some of the outcome of crossed
            deadlines. To avoid this ADS stays on schedule by:
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
            {pdmFeatured.map((pdm) => (
              <Featured key={pdm.subtitle} feature={pdm} />
            ))}
          </Grid>

          <PDMFourthMainFeatured main4={pdmFourthMainFeatured} />
        </main>
      </Box>
    </>
  );
};

export default PDMPage;
