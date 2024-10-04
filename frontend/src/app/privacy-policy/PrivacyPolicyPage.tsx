import Grid from "@mui/material/Grid";
import PrivacyPolicyFirstMainFeatured from "./PrivacyPolicyFirstMainFeatured";
import PrivacyPolicyFeatured from "./PrivacyPolicyFeatured";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const privacyPolicyFirstMainFeatured = [
  {
    subtitle: "1.  AN OVERVIEW ON DATA PROTECTION",
    paragraph1:
      "Appspot Digital Solution takes the protection of your Personal Data (Data) very seriously. Therefore, we handle your Data as confidential information and in compliance with the statutory data protection regulations and this Privacy Policy. Whenever you use our Services, various Data will be collected.",
    paragraph2:
      "This policy will provide you with an overview of how we collect your data as well as the purposes we use this data for when you use our games and other services (“Services”).",
    paragraph3:
      "The term “Personal Data” (or “Data”) includes all data that can be used to personally identify you, either directly (such as your first and last name, your email address or your telephone number), or indirectly (such as your phone ID, cookie identifier or game data).",
    paragraph4:
      "If you have any questions or suggestions about data protection or want to reach out to our data protection officer, you can contact us ",
  },
];
const privacyPolicyFeatured = [
  {
    subtitle: "2.  COLLECTION AND USE OF YOUR DATA",
    paragraph1:
      "One of way through which your Data is collected by you communicating it to us. This may be Data that you enter in a contact form or if you connect our Services to third-party accounts, such as Facebook or Google. Other Data is automatically collected when you download and use our Services. If you watch advertisements within our Services or those of your partners.In order to fully use our Services, it is necessary to provide the data listed below. Without this Data, we are not able to provide our Services in its full extent to you. We may collect and use your Data when you:",
    paragraph2: "i)Download our games",
    paragraph3:
      "When you download our games, we collect the time, date and install source of your download. When you first play our games, we may automatically generate a user ID (“Player ID”).",
    paragraph4: "ii) Use our Sevices",
    paragraph5: "When you use our Services, we may automatically collect your:",
    paragraph6:
      "• game data such as achieved game levels, and statistics including the playtime or the use of the various features as well as the data associated with any bugs and malfunctions.",
    paragraph7:
      "• IP address and approximate location data (derived from your IP address)",
    paragraph8: "• mobile device identifiers such as your device ID",
    paragraph9:
      "• device data and technical data such as device type and operating system, network connection type and mobile carrier, screen resolution, device language",
    paragraph10: "• user preferences and settings, such as game language.",
    paragraph11:
      "We collect this Data to provide you with access to our games, for example to your saved game and to improve your experience and the security of our Services.",
  },
  {
    subtitle: "3.  STATISTICS AND ANALYTICS",
    paragraph1:
      "To improve the features and design of our Services we may analyze all collected data. The analyses of your usage Data are usually conducted anonymously; i.e. the patterns cannot be traced back to you.",
    paragraph2:
      "Specifically, we use third-party analytical tools in connection with our own Services. These partners process your data only at and according to our specific instructions and may use cookies and other tracking technologies to collect information about your use of our Apps.",
    paragraph3:
      "You can object to the use of personalized advertising by making the following settings depending on your device type: On iPhone or iPad, first open “Settings,” tap on “Privacy,” and open “Advertising.” Here you can enable “Limit Ad Tracking.” If you use devices with Android and Google Play Services, first open “Google Settings,” tap on “Advertising,” then open “Disable interest-related ads,” then tap on “OK.”",
    paragraph4: "",
    paragraph5: "",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },
  {
    subtitle: "4.  DISCLOSURE OF DATA",
    paragraph1: "We may share your Data with:",
    paragraph2:
      "• The technical service providers involved in the supply of the Services. As subcontractors, these service providers are under the same obligations as Appspot Digital Solution to comply with applicable data protection laws.",
    paragraph3:
      "• The partners who use your Data to provide you with Personalized Content.",
    paragraph4:
      "• Other companies, only in the event of a transfer of Appspot Digital Solution activities.",
    paragraph5:
      "• Administrative or judicial authorities to verify the proper use of our Services or for the purposes of an investigation, in compliance with applicable law. Appspot Digital Solution always verifies the legitimacy of the request.",
    paragraph6:
      "In such cases, your Data may be transferred to countries located outside of the African Union who provide an equivalent level of protection. In the event of transfer to other countries, the protection of your Data is especially ensured by the signature of standard contractual clauses approved by the African Commission.",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },
  {
    subtitle: "5.  DELETION OF YOUR DATA",
    paragraph1:
      "Unless the law specifies a different retention period, we will delete or anonymize your personal information as soon as it is no longer needed for the purposes for which we collected or used it in accordance with the preceding paragraphs. If Data must be kept for legal reasons, they are blocked and no longer available for further use.",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    paragraph5: "",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },
  {
    subtitle: "6. BASES OF DATA PROCESSING",
    paragraph1: "We may use your Data in one of the following circumstances:",
    paragraph2:
      "• The existence of a contract between us to provide you with Services. You enter into this contract with us by accepting our Terms and Conditions.",
    paragraph3:
      "• Our legitimate interest (or reasonable expectations of users), to offer you the best possible user experience, such as to ensure the security of the Services, moderate the community or respond to your requests and questions.",
    paragraph4:
      "• If it is required to comply with a legal obligation or document compliance with legal obligations.",
    paragraph5:
      "• Your consent to offer you products, services or personalized content depending on your user profile.",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },
  {
    subtitle: "7. AGE LIMITS",
    paragraph1:
      "To use our Services you must confirm full legal capacity or, in case of restricted legal capacity, obtain the consent of your legal guardian. We do not knowingly collect or ask for personal information from children. In case you can’t confirm full legal capacity, please do not send us any Data about yourself, including name, address or email address. If we learn that we have collected Personal Data of a child, we will delete these as soon as possible. If you think that we might have Data from a child, please contact us at admin@appspot.ng.",
    paragraph2:
      "However, we may collect technical information required for delivering the Service and for the support of our internal operations from all users of our Services. For more information, please see the article on the access and terms specific to minors in our Terms and Conditions.",
    paragraph3: "",
    paragraph4: "",
    paragraph5: "",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },
  {
    subtitle: "8. YOUR RIGHTS",
    paragraph1:
      "In case you have questions about this Privacy Policy or want to exercise your rights as described below, please contact us via email at admin@appspot.ng. Obtain a copy of your Data – “Right of access and data portability”:",
    paragraph2:
      "Obtain a copy of your Data – “Right of access and data portability”:",
    paragraph3:
      "At any time, you can request a copy of your Data. You may also consult the Data, use it yourself or transfer it to another service provider.",
    paragraph4: "• Correct your Data – “Right to rectification”",
    paragraph5:
      "You have the right to correct your Data when it is inaccurate or incomplete (for example, change your address).",
    paragraph6:
      "• Delete your Account – “Right to erasure (right to be forgotten)”",
    paragraph7:
      "You can request the closure of your Account and the deletion of the associated Data.",
    paragraph8:
      "• Limit the use of your Data – “Right to restriction of processing”",
    paragraph9:
      "You also have the right to request that your Data no longer be used or not be deleted during the time we are processing your request.",
    paragraph10:
      "• Give and withdraw your consent – “Right to object and withdraw your consent”:",
    paragraph11:
      "At any time, you may withdraw your consent or object to the receipt of newsletters and advertising emails, the personalization of advertisements or the sharing of your Data with our partners (except for technical service providers) by email request to admin@appspot.ng.",
  },
  {
    subtitle: "9. CHANGES TO THIS PRIVACY POLICY",
    paragraph1:
      "We reserve the right to update this Privacy Policy, if necessary, in compliance with the applicable data protection regulations. This way, we can adapt it to the current legal requirements and take changes in our services into account, e.g. when introducing new Services. The most current version always applies to your visit.",
    paragraph2:
      "The current version of this Privacy Policy is always available at /privacy-policy/.",
    paragraph3: "",
    paragraph4: "",
    paragraph5: "",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },
];

const PrivacyPolicyPage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot : Privacy Policy</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured" id="wrapper">
          <br />
          <Typography
            sx={{
              textAlign: "start",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
              fontSize: "0.875rem",
              ml: "21%",
              pb: "15px",
              pt: "15px",
            }}
          >
            APPSPOT PRIVACY POLICY
          </Typography>

          <Grid
            container
            spacing={1}
            sx={{
              margin: "auto",
              alignItems: "end",
              maxWidth: "75%",
            }}
          ></Grid>

          <Grid
            container
            spacing={1}
            sx={{
              margin: "auto",
              alignItems: "end",
              maxWidth: "60%",
            }}
          >
            {privacyPolicyFirstMainFeatured.map((main1) => (
              <PrivacyPolicyFirstMainFeatured
                key={main1.subtitle}
                main1={main1}
              />
            ))}

            {privacyPolicyFeatured.map((policy) => (
              <PrivacyPolicyFeatured key={policy.subtitle} policy={policy} />
            ))}
          </Grid>
        </main>
      </Box>
    </>
  );
};

export default PrivacyPolicyPage;
