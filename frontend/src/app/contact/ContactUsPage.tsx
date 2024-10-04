import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import ContactUsFirstMainFeatured from "./ContactUsFirstMainFeatured";
import ContactUsFeatured from "./ContactUsFeatured";

const contactUsFirstMainFeatured = {
  title:
    "We could help you turn your idea into reality or takeover your existing project.",
  description:
    "Schedule a free consultation at admin@appspot.ng and we will follow up with you shortly.",
};

const contactUsFeatured = [
  {
    title: "GET IN TOUCH",
    subtitle: "FAST APPLICATION DEVELOPMENT",
    paragraph1: "admin@appspot.ng",
    paragraph2: "+2349039341049",
  },
  {
    title: "",
    subtitle: "Address",
    paragraph1: "173 Ehi Road, Aba",
    paragraph2: "Abia State",
  },
];

const ContactUsPage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot: Contact</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main>
          <ContactUsFirstMainFeatured main1={contactUsFirstMainFeatured} />

          <Grid
            container
            spacing={5}
            sx={{
              margin: "auto",
              alignItems: "start",
            }}
          >
            {contactUsFeatured.map((contact) => (
              <ContactUsFeatured key={contact.subtitle} contact={contact} />
            ))}
          </Grid>
        </main>
      </Box>
    </>
  );
};

export default ContactUsPage;
