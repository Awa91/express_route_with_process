import Grid from "@mui/material/Grid";
import ServiceFirstMainFeatured from "./FirstMainFeature";
import ServiceSecondMainFeatured from "./SecondMainFeatured";
import ServicesFeatured from "./Featured";
import ServiceThirdMainFeatured from "./ThirdMainFeatured";
import ServiceFourthMainFeatured from "./FourthMainFeatured";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const sericeFirstMainFeatured = {
  title: "Services",
  description:
    "We build,test and launch complex web and mobile applications that meet your business needs.",
};

const serviceSecondMainFeatured = {
  description:
    "Our services are perfect for SME business owners who need to gain competitive advantage with technology while keeping quality and optimizing cost.",
  image: "/assets/bg.png",
  sourceSet: "/assets/bg.png, /assets/bg.jpg",
  imageText: "Services",
};

const serviceThirdMainFeatured = [
  {
    title: "Project based",
    description:
      "In this model, you focus on business-related decisions while Appspot takes over project management,and makes tech-related decisions as well as provides application development.",
    sourceSet: "/assets/project-base.png, /assets/project-base.jpg",
    image: "/assets/project-base.png",
    imageText: "Project Model",
  },
  {
    title: "Subscription based",
    description:
      "When you know the tasks to be done, however not sure about the project scope and timeline, then we could support you with our dedicated team and you provide them with tasks to work on.",
    sourceSet: "/assets/sub-base-300x200.png, /assets/sub-base-300x200.jpg",
    image: "/assets/sub-base-300x200.png",
    imageText: "Subscription Model",
  },
];

const servicesFeatured = [
  {
    subtitle:
      "Detailed Business Analysis and Strategic Planning Precede Application Development",
    description:
      "In all development project, we begin with an assessment of its requirements as a way of creating clear, iteration-based plan. Our risk-free model enables you to leverage pilot-project assessment free of charge.",
    sourceSet: "/assets/BA300x200.png, /assets/BA300x200.jpg",
    image: "/assets/BA300x200.png",

    imageLabel: "Business Analysis",

    url: "/analysis-and-planning",
  },

  {
    subtitle: "Web Development Services for Complex Applications",
    description:
      "Delivering user friendly, beautiful products are our priority while working on complex web applications.We could develop new products from the ground up, or adapt and customize existing applications.",
    sourceSet: "/assets/web.png, /assets/web.jpg",
    image: "/assets/web.png",

    imageLabel: "Web Development Services",
    url: "/web-application-development",
  },
  {
    subtitle: "Mobile App Development Services for Complex Applications",
    description:
      "Although we deal mostly on web application development,we also love creating easy to use, and good-looking apps for iOS and Android devices.",
    sourceSet: "/assets/mobile.png, /assets/mobile.jpg",
    image: "/assets/mobile.png",

    imageLabel: "Mobile App Development Services",
    url: "/mobile-application-development",
  },

  {
    subtitle: "Design Services for Trending UI & UX principles",
    description:
      "Our design team members rely on the latest UI and UX design principles to assure quick product launch, superior usability and increased user engagement.",
    sourceSet: "/assets/ui.png, /assets/ui.jpg",
    image: "/assets/ui.png",

    imageLabel: "Design Services",
    url: "/ui-and-ux-design",
  },

  {
    subtitle:
      "Project and Delivery Management Services for Seamless deployment",
    description:
      "Appspot relies on Agile SCRUM methodology to assure successful deployment while using an iterative workflow that works well with different departments (marketing, sales).",
    sourceSet: "/assets/delivery.png, /assets/delivery.jpg",
    image: "/assets/delivery.png",

    imageLabel: "Project and Management Services",
    url: "/project-and-delivery-management",
  },

  {
    subtitle:
      "Quality Assurance (QA) Services Incorporated into Development Methodology of Product",
    description:
      "To deliver a secured,stable and working properly applications, we use manual and automatic QA and testing procedures.",
    sourceSet: "/assets/QA.png, /assets/QA.jpg",
    image: "/assets/QA.png",

    imageLabel: "Quality Assurance Services",
    url: "/testing-and-quality-assurance",
  },

  {
    subtitle: "Support and Enhancement Services after Implementation",

    description:
      "Appspot handles technical and customer support for your existing applications, and continually work on product enhancements, without interrupting current product features.",
    sourceSet: "/assets/SE.png, /assets/SE.jpg",
    image: "/assets/SE.png",
    imageLabel: "Image Text",
    url: "/support-and-enhancement",
  },
];

const serviceFourthMainFeatured = [
  {
    title: "Risk Free Assessment",
    description:
      "Our pilot-project assessment enables you to organize your budget and business processes required for an effective development project free of charge.",
  },
  {
    title: "Long-term partnership",
    description:
      "Delivering value to the application end-users takes priority over ticking-off individual tasks.",
  },
];

const ServicePage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot Home</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured" id="wrapper">
          <ServiceFirstMainFeatured main1={sericeFirstMainFeatured} />
          <ServiceSecondMainFeatured main2={serviceSecondMainFeatured} />

          <br />
          <Typography
            component="h1"
            variant="h4"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
              pb: "20px",
              textAlign: "center",
            }}
          >
            To deliver a great application that meets your business need, we
            rely on our full-app-lifecycle approach.
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{
              margin: "auto",
              alignItems: "end",
              maxWidth: "75%",
            }}
          >
            {servicesFeatured.map((service) => (
              <ServicesFeatured key={service.subtitle} service={service} />
            ))}
          </Grid>

          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              color="#c5a042"
              sx={{ pb: "1%", pt: "5%" }}
            >
              Ways to work with us
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              color="#c5a042"
              sx={{ pb: "1%",  }}
            >
              We build, test, launch and enhance complex web and mobile
              applications that meet your business needs.
            </Typography>
          </Box>

          <Grid
            container
            spacing={4}
            sx={{
              margin: "auto",
              alignItems: "end",
              maxWidth: "65%",
            }}
          >
            {serviceThirdMainFeatured.map((main3) => (
              <ServiceThirdMainFeatured key={main3.title} main3={main3} />
            ))}
          </Grid>

          <Typography
            component="h1"
            variant="h4"
            color="#144b70"
            sx={{ textAlign: "center", pt: "5%", pb: "0.5%" }}
          >
            Key benefits of our development services
          </Typography>
          <Grid
            container
            spacing={0}
            sx={{
              alignItems: "end",
            }}
          >
            {serviceFourthMainFeatured.map((main4) => (
              <ServiceFourthMainFeatured key={main4.title} main4={main4} />
            ))}
          </Grid>
        </main>
      </Box>
    </>
  );
};

export default ServicePage;
