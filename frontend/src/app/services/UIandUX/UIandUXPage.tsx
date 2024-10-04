import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import UIandUXDesignFirstMainFeatured from "./FirstMainFeatured";
import UIandUXDesignSecondMainFeatured from "./SecondMainFeatured";
import Featured from "../../components/Featured";
import UIandUXDesignThirdMainFeatured from "./ThirdMainFeatured";

const uiAndUxDesignFirstMainFeatured = {
  title:
    "DESIGN SERVICES BASED ON LATEST UI & UX PRINCIPLES FOR QUICK PRODUCT LAUNCH, SUPERIOR USABILITY AND INCREASED USER ENGAGEMENT",
  phrase1: "Get a Great UI and UX",
  phrase2: "Designed",
  phrase3: "Applications",
};

const uiAndUxDesignSecondMainFeatured = {
  line1: "WHAT MAKES ADS APP DESIGN SERVICES DIFFERENT",
  line2: "Passionate & dedicated Design Team.",
  line3:
    "Our design team is committed in meeting your business need. Our solutions have satisfied the needs of our existing clients. Your product will work fast and look great on every platform.",
  line4: "Goal-oriented UI & UX Design",
  line5:
    "Without goal, a design is faulty, no matter how astonishing it is. We have been developing and running several successful in-house apps and understand that there are specific purposes your app needs to achieve. If your purpose is to sell products we focus the design on driving conversions, if you aim at educating and spreading information than we focus on storytelling and awareness. The design at all time is driven towards achieving a specific goal.",
  line6: "Adjustable and Versatile to Meet Your Needs",
  line7:
    "Our solutions range across several industries and target demographics. Having obtained such experience our design services team is able to adapt to your specific needs and requests.",
  line8: "Reliable Process to Derive the Most Value out of Your Investment",
  line9:
    "Your investment is always optimized in terms of time and budget constraints. Our UX and UI design process is set to get the most value out of our clients investment.",
  sourceSet: "/assets/UIandUX/bg.png, /assets/UIandUX/bg.jpg",
  image: "/assets/UIandUX/bg.png",
  imageText: "Design Services",
};

const uiAndUxDesignFeatured = [
  {
    subtitle: "EFFECTIVE APPROACH FOR ASSESSING CLIENT DESIGN NEEDS",
    description:
      "Without practicality, an aesthetically pleasing design is nothing, although practicality alone is not enough for highly competitive markets. Our products are aimed at providing high levels of customer satisfaction which we achieve through business analysis and planning.",
    sourceSet:
      "/assets/UIandUX/need-analysis.png, /assets/UIandUX/need-analysis.jpg, ",
    image: "/assets/UIandUX/need-analysis.png",
    imageLabel: "Client Design Needs",
  },

  {
    subtitle: "LOW-FIDELITY UX WIREFRAMING TO BRING YOUR IDEA ALIVE",
    description:
      "We identify the main idea, the concept, and perspective of the whole design and sketch all the elements needed to make it possible. This creates a set of building blocks and their proposed interaction. At ADS we persistently aim at spending just the right amount of time on low fidelity wireframes which are quick to produce but essential for the next steps.",
    sourceSet:
      "/assets/UIandUX/ux-wireframing.png, /assets/UIandUX/ux-wireframing.jpg, ",
    image: "/assets/UIandUX/ux-wireframing.png",
    imageLabel: "Low Fidelity UX Wireframe",
  },
  {
    subtitle: "HIGH-FIDELITY UX WIREFRAMING TO REFINE YOUR IDEA",
    description:
      "At this step of the design we refine the low-fidelity wireframes to represent an actual look and feel of the proposed design. Test users will now interact with the product and provide first feedback before the commencement of front-end developing.",
    sourceSet:
      "/assets/UIandUX/high-fidelity-ux-wireframing.png, /assets/UIandUX/high-fidelity-ux-wireframing.jpg,",
    image: "/assets/UIandUX/high-fidelity-ux-wireframing.png",
    imageLabel: "High Fidelity UX Wireframe",
  },

  {
    subtitle: " ITERATIVE UI DESIGN TO CREATE EXCITING BRANDED EXPERIENCE ",
    description:
      "Our experienced team of UI designers now bring life to the wireframes. We build a prototype for testing purposes and design iterations. This creates a polished product ready to deliver exciting, branded experience and engage your customers. Our UX designers, information architecture specialists, and front-end developers collaborate to create a reliable solution with superior appeal.",

    sourceSet: "/assets/UIandUX/ui-design.png, /assets/UIandUX/ui-design.jpg, ",
    image: "/assets/UIandUX/ui-design.png",
    imageLabel: "Branded Experience",
  },
];

const uiAndUxDesignThirdMainFeatured = {
  title: "Sweep the competition with astonishing app design",
  sourceSet: "/assets/BAP/deep-dive.png, /assets/BAP/deep-dive.jpg",
  image: "/assets/BAP/deep-dive.png",
  imageLabel: "Deep Dive into App Design",
  url: "/contact",
};

const UIandUXDesignPage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot: Design Services</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured" id="wrapper">
          <UIandUXDesignFirstMainFeatured
            main1={uiAndUxDesignFirstMainFeatured}
          />
          <UIandUXDesignSecondMainFeatured
            main2={uiAndUxDesignSecondMainFeatured}
          />

          <br />
          <Typography
            component="h1"
            variant="h6"
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
            Our UX and UI Design Service in Segments
          </Typography>
          <Typography
            variant="body1"
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
            Years of experience have led us to develop the most effective design
            process with high standards, best practices, and tools which saves
            time and cuts cost while delivering a sales-ready solution.
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
            {uiAndUxDesignFeatured.map((design) => (
              <Featured key={design.subtitle} feature={design} />
            ))}
          </Grid>
          <UIandUXDesignThirdMainFeatured
            main3={uiAndUxDesignThirdMainFeatured}
          />
        </main>
      </Box>
    </>
  );
};

export default UIandUXDesignPage;
