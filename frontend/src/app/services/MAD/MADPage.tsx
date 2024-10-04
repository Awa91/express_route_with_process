import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import MobileAppDevFirstMainFeatured from "./FirstMainFeatured";
import MobileAppDevSecondMainFeatured from "./SecondMainFeatured";
import MobileAppDevThirdMainFeatured from "./ThirdMainFeatured";
import Featured from "../../components/Featured";
import MobileAppDevFifthMainFeatured from "./FifthMainFeatured";

const mobileAppDevFirstMainFeatured = {
  title: "MOBILE APP DEVELOPMENT SERVICES",
  phrase1: "Excellent Mobile Apps with Fast",
  phrase2: "Delivery and Optimized Cost",
  phrase3: "",
  phrase4: " ",
};

const mobileAppDevSecondMainFeatured = {
  line1: "We offer Native or Cross-platform app development and",
  line2: "help you choose which one is the best for your project. Our",
  line3: "business analysts will suggest the possibilities with pros and",
  line4: "cons and help you decide the right way to success.",
  sourceSet: "/assets/MAD/bg.png, /assets/MAD/bg.jpg",
  image: "/assets/MAD/bg.png",
  imageText: "Mobile App Development Service Image",
};

const mobileAppDevThirdMainFeatured = [
  {
    subtitle: "Native iOS app development Creates Intended Value ",
    description:
      "Our iOS app development services aim at creating value for clients and users within a short time-frame and within allocated budget. To this end, we rely on agility, flexibility, and experience. Our team of iOS developers has experience developing fun and user-friendly apps. We offer both iPad or iPhone app development, using Swift and Objective-C in compliance with Apple’s guidelines, and deliver reliable solutions.",
  },

  {
    subtitle:
      "Cross-platform App Development to Bridge Gap between Different Devices",
    description:
      "We are able to deliver cross-platform hybrid solutions which load fast and work regardless of device or platform. To achieve this, we combine the cross-platform app with our web services. Whether you need React Native app, or other hybrid technologies, we provide them while decreasing project delivery time and reducing costs.",
  },

  {
    subtitle:
      "Native Android App Development with Varying Dimensions of Screen and Hardware",
    description:
      "Our Android app development services aim at solving the biggest challenge which is making the app suitable for a wide range of devices with varying dimensions of screen and hardware. We offer solutions that fit all devices.",
  },
];

const mobileAppDevFeatured = [
  {
    subtitle: "FAST MOBILE APP DEVELOPMENT USING BEST PRACTICES",
    description:
      " You want your ideas implemented - fast. We get it. Our development team uses on the best practices, highest industry standards and technologies for quick web and mobile app development.",
    sourceSet:
      "/assets/MAD/fast-mobile-app-development.png, /assets/MAD/fast-mobile-app-development.jpg, ",
    image: "/assets/MAD/fast-mobile-app-development.png",
    imageLabel: "Fast Mobile App Image",
  },

  {
    subtitle: "IDEAS AND FUNDRAISING FOR MANAGEMENT",
    description:
      "Your business needs to grow. We can help you deal with software bug while you improve your marketing strategy to get more clients and business management for more funds.",
    sourceSet:
      "/assets/BAP/ultimate-solution.png, /assets/BAP/ultimate-solution.jpg,",
    image: "/assets/BAP/ultimate-solution.png",
    imageLabel: "Ideas and Fundraising Image",
  },
  {
    subtitle: "STABLE PLATFORM TO MITIGATE SOFTWARE ISSUES",
    description:
      " You consulted the service of a freelancer or an inexperienced company to develop software. But, due to lack of project management and expertise the cooperation has reached its limits and now it’s time to have a platform that just works. We can deal with day-to-day software issues while you make sales, expand your team and work on marketing.",

    sourceSet:
      "/assets/WAP/stable-platform.png, /assets/WAP/stable-platform.jpg,",
    image: "/assets/WAP/stable-platform.png",
    imageLabel: "Stable Platform Image",
  },
];

const mobileAppDevFifthMainFeatured = {
  title: "Ready to Catch up on Mobile Application Development?",
  sourceSet: "/assets/BAP/deep-dive.png, /assets/BAP/deep-dive.jpg",
  image: "/assets/BAP/deep-dive.png",
  imageLabel: "Catch up on Mobile App Development Image",
  url: "/contact",
};

const MobileAppDevPage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot: Mobile App Development Services</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured" id="wrapper">
          <MobileAppDevFirstMainFeatured
            main1={mobileAppDevFirstMainFeatured}
          />
          <MobileAppDevSecondMainFeatured
            main2={mobileAppDevSecondMainFeatured}
          />

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
            OUR MOBILE APPLICATION DEVELOPMENT SERVICES COVER:
          </Typography>

          <Grid
            container
            spacing={1}
            sx={{
              margin: "auto",
              alignItems: "end",
              maxWidth: "73%",
            }}
          >
            {mobileAppDevThirdMainFeatured.map((main3) => (
              <MobileAppDevThirdMainFeatured
                key={main3.subtitle}
                main3={main3}
              />
            ))}
          </Grid>

          <br />
          <Typography
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
            WHAT YOU GET FROM APPSPOT's MOBILE DEVELOPMENT SERVICES:
          </Typography>

          <Grid
            container
            spacing={1}
            sx={{
              margin: "auto",
              alignItems: "end",
              maxWidth: "75%",
              pb: "15%",
            }}
          >
            {mobileAppDevFeatured.map((mobileAppDev) => (
              <Featured key={mobileAppDev.subtitle} feature={mobileAppDev} />
            ))}
          </Grid>
        </main>
        <MobileAppDevFifthMainFeatured main5={mobileAppDevFifthMainFeatured} />
      </Box>
    </>
  );
};

export default MobileAppDevPage;
