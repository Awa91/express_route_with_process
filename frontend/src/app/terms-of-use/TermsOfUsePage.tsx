import Grid from "@mui/material/Grid";
import TermsOfUseFeatured from "./TermsOfUseFeatured";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const termsOfUseFeatured = [
  {
    subtitle: "1. General Provisions",
    paragraph1:
      "1.1   Appspot Digital Solution, 171 Ehi Road, Aba, Abia (hereinafter, “Appspot”) develops and publishes mobile and web applications/games (“Services”) that can be downloaded from the App Stores of various providers and provides related services.",
    paragraph2:
      "1.2   The Services are only offered to consumers in terms of section 167 of the Nigerian Federal Competition and Consumer Protection Act, 2018 (“FCCPA”), i.e. any person:",
    paragraph3:
      "a. who purchases or offers to purchase goods other than for the purpose of resale, but does not include a person who purchases any goods for the purpose of using them in the production or manufacture of any other goods or articles for sale; or",
    paragraph4: "b. to whom a service is rendered.",
    paragraph5:
      "1.3   All Services delivered by Appspot are provided exclusively on the basis of these General Terms and Conditions. Any general terms and conditions of the user shall expressly not form part of the agreement, even if Appspot does not expressly object to their applicability.",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },
  {
    subtitle: "2. Conclusion of contract, term, termination",
    paragraph1:
      "2.1   The user confirms to have full legal capacity and, in the case of restricted legal capacity, to have obtained the consent of his/her legal guardian.",
    paragraph2:
      "2.2   The contract for the use of the Services is concluded by downloading the Game from the respective App Store. Details of this process can be found in the terms of use of the respective App Store. The download creates a contract between the user and Appspot for the free use of the respective Services. The corresponding license and usage agreement on the basis of these General Terms and Conditions is concluded for an indefinite period of time and may be terminated by either party at any time without specifying any reasons by providing notice of four weeks.",
    paragraph3:
      "2.3   Appspot continuously updates, changes and adds content to the Services at its own discretion. Users can therefore only utilize the Services or other offering in its then-current form.",
    paragraph4:
      "2.4   The user may not transfer this agreement to third parties. In the event of a breach of this provision (account transfer), Appspot shall be entitled to terminate the agreement without notice.",
    paragraph5:
      "2.5   The statutory right to extraordinary termination of this Agreement without notice for good cause shall not be affected.",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },
  {
    subtitle: "3.   Account and user data",
    paragraph1:
      "3.1   Upon conclusion of the contract and use of the Services, Appspot may store the progress of the Services and any additional content.",
    paragraph2:
      "3.2   The user must select secure access credentials and not make such data available to third parties. Appspot is not responsible for any damage resulting from the breach of this duty. In the event of suspected abuse, Appspot shall be entitled to temporarily block access to the Services in question.",
    paragraph3:
      "3.3   If the user can select a username in the Service, this must not violate applicable laws and/or these General Terms and Conditions. Appspot shall be entitled to change the name in the event of a breach of this provision, either at the instigation of a third party or on its own initiative. No separate justification for the name change shall be necessary. The user has no claim to a specific name. Other rights of Appspot in the event of a breach of this provision shall not be affected.    ",
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
    subtitle: "4. User obligations",
    paragraph1:
      "4.1   When using the Services, the user may not use any other software or other routines that could interfere with the systems of Appspot or other users. This includes actions that could lead to an unreasonable overloading of the systems of Appspot. The use of special software, particularly for systematic or automatic control ofServices, is prohibited.",
    paragraph2:
      "4.2   The user may not use any software that enables “data mining” or otherwise collects information in connection with the Services.",
    paragraph3:
      "4.3   Appspot shall be entitled to delete content that violates applicable law and/or these General Terms and Conditions.",
    paragraph4:
      "4.4   The user may only use the Services for private purposes, unless Appspot has given its express prior written consent to any other use in individual cases.",
    paragraph5:
      "4.5   Any breach of these General Terms and Conditions may lead to termination for good cause. In lieu of such termination, Appspot may, at its sole discretion, announce measures or take sanctioning measures of any kind to enforce the provisions of these General Terms and Conditions. In particular, this shall include declaring a temporary or permanent virtual ban from the systems, warning the user of their temporary or permanent exclusion of the user from that particular Services.",
    paragraph6:
      "4.6   Users shall be obligated to regularly back up all their data on the devices on which they use the Services in a manner appropriate to the risk.    ",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },
  {
    subtitle: "5.   Rights, indemnity",
    paragraph1:
      "5.1   Appspot grants the user a non-exclusive, non-transferable and non-sublicensable right of use for private use with respect to the respective Services for the duration of the contract. This shall include multiple downloads to the device(s) linked to the respective account in the respective App Store. Additionally, the Services may not be reproduced, distributed, publicly performed, broadcast or made publicly accessible on the Internet or via a network, edited or stored on data carriers. It may also not be used or exploited commercially. In addition, de-compilation, disassembly and reverse engineering shall be prohibited, unless expressly permitted by law.",
    paragraph2:
      "5.2   If the user sends Appspot feedback, suggestions and/or ideas (collectively referred to as “Feedback”) regarding the Services or possible enhancements or new developments of  the Services, Appspot may incorporate such Feedback into its Products and/or incorporate such Feedback into the further development of its Products and use such Feedback as part of the Products, or otherwise publish, edit, use and exploit such Feedback. The user grants Appspot, free of charge, the permanent, non-exclusive, spatially unlimited, royalty-free, transferable and sub-licensable right to reproduce, edit, distribute, distribute and make publicly available (in whole and/or in part, and in each case also with respect to adaptations thereof) and otherwise to exploit all Feedback provided by the user. Appspot shall not be obliged to respond to Feedback and/or to use or exploit it. The user waives all possible copyrights in connection with the possible use and exploitation of the Feedback.",
    paragraph3:
      "5.3   The user shall indemnify Appspot against all claims, including damage compensation claims, asserted by third parties due to an infringement of their rights by the user’s conduct or the content or data posted. The user shall also be obliged to reimburse the reasonable costs incurred as a result thereof, particularly the costs arising from any legal defense that may be required (including lawyers’ fees customary for the market, which shall not be limited to the statutory fees). This shall not apply if the user is not responsible for the infringement. All further rights and claims of Appspot shall not be affected.    ",
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
    subtitle: "6.   Warranty, liability",
    paragraph1:
      "6.1   Insofar as Appspot provides services free of charge, no warranty claims shall exist and Appspot shall only be liable in accordance with the provisions of law for intentional and gross negligence; Appspot shall only be liable for defects if it has fraudulently concealed them.",
    paragraph2:
      "6.2   Appspot reserves the right to update, modify and develop its Applications/Games and Services on an ongoing basis at its sole discretion, as well as to discontinue the operation of application/game or to discontinue and/or remove certain Services for economic and/or technical reasons, or to improve and/or personalize the user experience of applications/games and/or services.",
    paragraph3:
      "6.3   Appspot does not guarantee that the Services will be available at all times, in all locations worldwide, and/or on all devices and does not guarantee to continue to offer any Service for any minimum period of time. Appspot reserves the right to terminate all or part of the Services at any time.",
    paragraph4:
      "6.4.1   Appspot does not guarantee the error-free provision of its Applications/Games or Services. It is recommended to always install the latest version of the application/game.",
    paragraph5:
      "6.4.2   The statutory liability of Appspot for damage compensation shall be unrestricted only in the event of intentional action or gross negligence, in the event of negligent or intentional injury to life, limb or health, due to the assumption of a guarantee (which must be expressly designated as such in order to constitute a guarantee in the legal sense), and due to mandatory liability under the Product Liability Act. “Material contractual duties” shall mean duties whose fulfilment initially enables the achievement of the contractual purpose and on whose compliance the parties may therefore normally rely.",
    paragraph6:
      "6.4.3   In events other than those referred to in Section 6.4.2, Appspot shall only be liable for minor negligence in the event of a breach of a material contractual duty. Otherwise, Appspot shall not be liable for minor negligence.",
    paragraph7:
      "6.4.4   The damage compensation for the minor negligent breach of material contractual duties in accordance with Section 6.4.3 shall be limited to the foreseeable damage typical in contracts.",
    paragraph8:
      "6.5   To the extent Appspot is liable for data loss on the merits in accordance with the foregoing, the amount of such liability shall also be limited to the costs that would have been necessary to restore the data if the user had made reasonable regular data backups.",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },

  {
    subtitle: "7. Modifications of these General Terms and Conditions   ",
    paragraph1:
      "7.1   Appspot reserves the right to amend these General Terms and Conditions and other terms and conditions with effect for the future in accordance with this Section 7.",
    paragraph2:
      "7.2   Appspot shall notify you in writing (e.g. by message within the Application/Game or by e-mail) at least four weeks in advance of any changes for necessary reasons, e.g. for reasons relating to the expansion of services or changes to the Applications/Games, amendments to laws or legal rulings or other equivalent reasons that do not affect the main performance duties of the parties. These General Terms and Conditions shall then be deemed approved if the user does not object in writing or in text form within four weeks of receiving this information. The time limit for objection and the consequences of silence shall be indicated separately in the notice.",
    paragraph3:
      "7.3   Changes other than those mentioned in Section 7.2 shall require the user’s consent, which can be requested at the start of the next Application/Game.",
    paragraph4:
      "7.4   If there is an objection in accordance with Section 7.2 or no consent given in accordance with Section 7.3, the user shall retain the right to use the current version of the Application/Game. However, Appspot may make the use of an extended version of the Application/Game subject to approval of the modification of these General Terms and Conditions.",
    paragraph5: "",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
    paragraph9: "",
    paragraph10: "",
    paragraph11: "",
  },

  {
    subtitle: "8.   Applicable law, jurisdiction",
    paragraph1:
      "8.1   Nigerian law shall apply to the exclusion of the UN Convention on Contracts for the International Sale of Goods. If the user is resident in another member state of the AU, this choice of law shall not result in the mandatory consumer protection regulations of his or her home country being rescinded.",
    paragraph2:
      "8.2   For disputes with the user, the statutory place of jurisdiction shall apply, provided the user has a general place of jurisdiction in Nigeria. If the user has moved his or her domicile or habitual place of residence from Nigeria after concluding the contract or if his or her domicile or habitual place of residence is not known at the time the action is filed, Abia shall be the place of jurisdiction.",
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

const TermsOfUsePage = () => {
  const theme = useTheme();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Appshot : Terms of Services</title>
      </head>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <main className="mainFeatured">
          <br />
          <Typography
            variant="h4"
            sx={{
              ml: "22%",
              pb: "15px",
              pt: "10px",
              textAlign: "start",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
              fontSize: "0.875rem",
            }}
          >
            APPSPOT TERMS OF SERVICES
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{
              margin: "auto",

              maxWidth: "75%",
            }}
          >
            {termsOfUseFeatured.map((term) => (
              <TermsOfUseFeatured key={term.subtitle} term={term} />
            ))}
          </Grid>
        </main>
      </Box>
    </>
  );
};

export default TermsOfUsePage;
