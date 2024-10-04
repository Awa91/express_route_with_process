import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import SandEFirstMainFeatured from "./FirstMainFeatured";
import SandESecondMainFeatured from "./SecondMainFeatured";
import SandEThirdMainFeatured from "./ThirdMainFeatured";
import SandEFourthMainFeatured from "./FourthMainFeatured";
import Featured from "../../components/Featured";

const sAndEFirstMainFeatured = {
  title: "SUPPORT AND ENHANCEMENT SERVICES AFTER IMPLEMENTATION",
  phrase1: "Mitigate Downtime to Boost",
  phrase2: "User Satisfaction",
  phrase3: "and Increase",
  phrase4: "Sales.",
};

const sAndESecondMainFeatured = {
  line1:
    "The life of an app isn't put to an end at the time of its release. It actually only begins then,",
  line2:
    "or even later - when you start getting users. And these users will have",
  line3:
    "questions, problems, and will need support - we could help with that.",
  line4:
    "We provide services that will take care of those questions and problems from your users.",
  sourceSet: "/assets/SE/bg.png, /assets/SE/bg.jpg",
  image: "/assets/SE/bg.png",
  imageText: "Support and Enhancement Services",
};

const sAndEThirdMainFeatured = [
  {
    subtitle: "Guiding Customers to Master your App",
    description:
      "Sometimes you might be overwhelmed with finding out what you need in an app. We are here to back you up. Your customers will get all the guidance they need to master your app. Users get easily frustrated and abandon apps. Our fast & effective support systems boost user retention and lower abandonment.Thus, their lifetime value improves as well.",
  },
  {
    subtitle: "Resolving Technical Support Issues on Time",
    description:
      "Even though technology is great, sometimes it is known to act out. We understand that downtime could be damaging for brands and we are here for you. Our support and development teams are close & communicate effectively. Whenever there is a technical issue,our development team knows about it on time. Since they have developed the app in the first place and know where to look, and what you get is prompt resolving of any technical issues.",
  },
  {
    subtitle: "Providing Maintenance Services",
    description:
      "While we make great apps, there’s always room for continuous improvement as technology develops. Perfective, adaptive or scheduled maintenance - we do it all.We could enhance or redo anything that gets in the way of performance and functionality of your app. We adapt your app to work stably and reliably if any external-factor change affects its performance or stability. Ultimately, this means higher security.Our regular updates make sure that your app never regresses, however only improves to the latest technology so that you stay ahead of the competition. ",
  },
];

const sAndEFeatured = [
  {
    subtitle: "MANAGING COST OF SERVICE",
    description:
      "Our support services offers a controlled monthly fee that enables you to manage expenses an in-house support team would incur such as overhead, training, equipment, and unexpected costs.",
    sourceSet: "/assets/WAP/pricing-model.png, /assets/WAP/pricing-model.jpg,",
    image: "/assets/WAP/pricing-model.png",
    imageLabel: "Cost Management",
  },

  {
    subtitle: "FOCUSING ON MARKETING",
    description:
      "Rather than spending your time on doing app support, you could focus your time on marketing, product development, and customer experience. We got your back.",
    sourceSet:
      "/assets/SE/marketing-product-development-and-customer-experience.png, /assets/SE/marketing-product-development-and-customer-experience.jpg, ",
    image:
      "/assets/SE/marketing-product-development-and-customer-experience.png",
    imageLabel: "Marketing",
  },
  {
    subtitle: "GAINING ACCESS TO EXTENSIVE EXPERIENCE",
    description:
      "Rather than having to train your in-house team, you get one point of contact that already has a team of experienced professionals ready to handle any request your users might have.",
    sourceSet:
      "/assets/SE/extensive-experience.png,  /assets/SE/extensive-experience.jpg,  ",
    image: "/assets/SE/extensive-experience.png",
    imageLabel: "Extensive Experience",
  },

  {
    subtitle: "BOOSTING USER TRUST & RETENTION",
    description:
      "When customers’ problems are solved on time, it boosts brand trust and customer lifetime value. We could help them find their way and add to the fact that we developed the app.",
    sourceSet:
      "/assets/SE/trust-and-retention.png, /assets/SE/trust-and-retention.jpg, ",
    image: "/assets/SE/trust-and-retention.png",
    imageLabel: "Trust and Retention ",
  },

  {
    subtitle: "INCREASING SECURITY",
    description:
      "As an app development hub, we have experience with possible cyber-attacks and security issues. You can count on us to deal with these problems quickly and effectively for your company.",
    sourceSet:
      "/assets/SE/increase-security.png, /assets/SE/increase-security.jpg, ",
    image: "/assets/SE/increase-security.png",
    imageLabel: "Online Security",
  },

  {
    subtitle: "DEVELOPING WHAT THE USERS NEED",
    description:
      "Guesswork is not part of our development process of the app. We rely on live feedback from your clients which produces the right ideas for future updates.",
    sourceSet: "/assets/SE/users-need.png,  /assets/SE/users-need.jpg,",
    image: "/assets/SE/users-need.png",
    imageLabel: "Users Need",
  },
];

const sAndEFourthMainFeatured = {
  title: "Get an Experienced Support Team",
  sourceSet: "/assets/BAP/deep-dive.png, /assets/BAP/deep-dive.jpg",
  image: "/assets/BAP/deep-dive.png",
  imageLabel: "the",
  url: "/contact",
};

const SandEPage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot: Support and Enhancement Services</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured" id="wrapper">
          <SandEFirstMainFeatured main1={sAndEFirstMainFeatured} />
          <SandESecondMainFeatured main2={sAndESecondMainFeatured} />

          <Typography
            component="h1"
            variant="h4"
            sx={{
              textAlign: "center",
              pt: "25px",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
            }}
          >
            ADS APPLICATION SUPPORT SERVICES INCLUDE :
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
            {sAndEThirdMainFeatured.map((main3) => (
              <SandEThirdMainFeatured key={main3.subtitle} main3={main3} />
            ))}
          </Grid>

          <br />
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              pt: "25px",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
            }}
          >
            OUR SUPPORT SERVICES HELP TO:
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
            {sAndEFeatured.map((sAndE) => (
              <Featured key={sAndE.subtitle} feature={sAndE} />
            ))}
          </Grid>
          <SandEFourthMainFeatured main4={sAndEFourthMainFeatured} />
        </main>
      </Box>
    </>
  );
};

export default SandEPage;
