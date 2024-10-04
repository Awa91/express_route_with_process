import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import AnalysisAndPlanningFirstMainFeatured from "./FirstMainFeature";
import AnalysisAndPlanningSecondMainFeatured from "./SecondMainFeatured";
import Featured from "../../components/Featured";
import AnalysisAndPlanningFourthMainFeatured from "./FourthMainFeatured";

const analysisAndPlanningFirstMainFeatured = {
  title: "DETAILED BUSINESS ANALYSIS AND STRATEGIC PLANNING",
  phrase1: "Is it possible to build and",
  phrase2: "market",
  phrase3: "your app? Find out!",
};

const analysisAndPlanningSecondMainFeatured = {
  title:
    "How Planning Application Development Transforms Your Ideas to Finished Product",
  line1:
    "Software development requires several different roles and skills to work in unison",
  line2:
    " because it is a complex process. Planning and coordination significantly mitigate the ",
  line3: "risk of expensive mistakes, wasted time and money.",

  line4:
    "The documentation we create during our business analysis will not only be",
  line5:
    "usable in the development process, but also in supporting your internal efforts, ",
  line6: "marketing strategy, and investment decisions.",
  sourceSet: "/assets/BAP/bg.png, /assets/BAP/bg.jpg",
  image: "/assets/BAP/bg.png",
  imageText: "Business Analysis and Strategic Planning Image",
};

const analysisAndPlanningFeatured = [
  {
    subtitle: "IDENTIFING PROBLEM & PAIN POINTS FOR DECISION MAKING",
    description:
      "Before making any strategic decision about the next steps in the app development process, it is essential to identify the problem and pain points of your future users. This will serve as the base for decision making in the development process.",
    image: "/assets/BAP/problem-and-pain-points.png",
    sourceSet:
      "/assets/BAP/problem-and-pain-points.png, /assets/BAP/problem-and-pain-points.jpg",

    imageLabel: "Problem and Pain Points Image",
  },

  {
    subtitle: "ANALYZING COMPETITION TO FIND MARKET GAPS",
    description:
      "Competition analysis aims at finding the market gaps which your application will bridge. We evaluate direct and secondary competitors to determine what needs to be done better in order to stand out from the crowd, win new users and snatch the existing users from your competitors.",
    sourceSet:
      "/assets/BAP/analyze-and-outperform-competition.png,  /assets/BAP/analyze-and-outperform-competition.jpg",
    image: "/assets/BAP/analyze-and-outperform-competition.png",
    imageLabel: "Competition Analysis and Market Gap Image",
  },
  {
    subtitle: "FINDING ULTIMATE SOLUTION TO OUTPERFORM COMPETITORS",
    description:
      "The best solution comes from combining entirely different points of view. With our technical perspective and experience in your business domain, we often create more value than the sum of its parts. We brainstorm with our clients to come up with ingenious ways that reduce development time, cut costs and outperform competitors.",
    sourceSet:
      "/assets/BAP/ultimate-solution.png, /assets/BAP/ultimate-solution.jpg, ",
    image: "/assets/BAP/ultimate-solution.png",
    imageLabel: "Ultimate Solution Image",
  },

  {
    subtitle: "SETING GOALS & PRIORITIZING RESOURCES TO EXAMINE THEIR SUCCESS",
    description:
      "Goal setting and resource management are essential for successful product lunch. There is no true guidance without well-defined goals, however not all goals are created equally. We support you determine goals which are specific, measurable, achievable, relevant and time-bound with appropriate metrics to examine their success. Then we intersect goals with technical requirements and determine what needs to be done to achieve these goals so you can prioritize and get the most out of limited resources.",
    sourceSet:
      "/assets/BAP/goals-and-resources.png, /assets/BAP/goals-and-resources.jpg,",
    image: "/assets/BAP/goals-and-resources.png",
    imageLabel: "Goal and Priority Image",
  },

  {
    subtitle: "CHOOSING SUPERIOR TECHNOLOGY TO MITIGATE RISK",
    description:
      "Problem and Competition analysis helps to determine the features your product needs to have. Then we enrich the product with your ideas and the specification. The completion of this helps us find the most appropriate technology, possible challenges and cover potential risks.",
    sourceSet:
      "/assets/BAP/superior-technology.png, /assets/BAP/superior-technology.jpg,",
    image: "/assets/BAP/superior-technology.png",
    imageLabel: "Superior Technology Image",
  },

  {
    subtitle: "ANALYZING MARKET POTENTIAL TO ESTIMATE EARNING",
    description:
      "We assistance clients answer one of the most common questions about their app ideas - How much money can this app make? We come up with earnings estimate by analyzing market potential, target audience, and third-party data.",
    sourceSet:
      "/assets/BAP/earning-potential.png, /assets/BAP/earning-potential.jpg,",
    image: "/assets/BAP/earning-potential.png",
    imageLabel: "Market Potential and Earning Image",
  },

  {
    subtitle: "SETING SCHEDULE FOR LAUNCH CAMPAIGNS & FORECAST",

    description:
      "After finalizing with the list of features and determining the technologies to be used, we provide you with a rough timeline for delivering the finished product and a budgeting forecast so you can work on the marketing strategy and launch campaigns in the meantime.",
    sourceSet:
      "/assets/BAP/launch-campaigns-and-budget.png, /assets/BAP/launch-campaigns-and-budget.jpg,",
    image: "/assets/BAP/launch-campaigns-and-budget.png",
    imageLabel: "Campaigns and Budget Image",
  },

  {
    subtitle: "CHOOSING & TESTING SUPERB DESIGN FOR FEEDBACK",
    description:
      "When we conduct a detailed business analysis we identify the main idea, the concept, and mindset which will guide the whole design and sketch all the elements required to make it possible. Once you are satisfied with the design, wireframes are refined to a prototype with an actual look and feel of the proposed design. Test users can interact with the product and provide first feedback before the start of front-end development. ",
    sourceSet: "/assets/BAP/superb-design.png, /assets/BAP/superb-design.jpg, ",
    image: "/assets/BAP/superb-design.png",
    imageLabel: "Superb Design Image",
  },
];

const analysisAndPlanningThirdMainFeatured = {
  title:
    "Let’s dive deep into your business and find the best strategy for your app development project.",
  sourceSet: "/assets/BAP/deep-dive.png, /assets/BAP/deep-dive.jpg",
  image: "/assets/BAP/deep-dive.png",
  imageLabel: "Deep Dive into Business Image",
  url: "/contact",
};

const AnalysisAndPlanningPage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot: Business Analysis and Strategic Planning</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured" id="wrapper">
          <AnalysisAndPlanningFirstMainFeatured
            main1={analysisAndPlanningFirstMainFeatured}
          />
          <AnalysisAndPlanningSecondMainFeatured
            main2={analysisAndPlanningSecondMainFeatured}
          />

          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
              pt: "5%",
            }}
          >
            Appspot Helps You To:
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
            {analysisAndPlanningFeatured.map((analysisAndPlanningFeatured) => (
              <Featured
                key={analysisAndPlanningFeatured.subtitle}
                feature={analysisAndPlanningFeatured}
              />
            ))}
          </Grid>
          <AnalysisAndPlanningFourthMainFeatured
            main4={analysisAndPlanningThirdMainFeatured}
          />
        </main>
      </Box>
    </>
  );
};

export default AnalysisAndPlanningPage;
