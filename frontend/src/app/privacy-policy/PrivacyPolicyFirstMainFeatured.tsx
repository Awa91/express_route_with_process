import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface PrivacyPolicyFirstMainFeaturedProps {
  main1: {
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
  };
}

export default function PrivacyPolicyFirstMainFeatured(
  props: PrivacyPolicyFirstMainFeaturedProps
) {
  const { main1 } = props;

  return (
    <>
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex", boxShadow: "none" }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <Typography
              component="h1"
              variant="h6"
              sx={{  color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300], padding: "15px" }}
            >
              <b>{main1.subtitle}</b>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
              }}
            >
              {main1.paragraph1}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
              }}
            >
              {main1.paragraph2}
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
              }}
            >
              {main1.paragraph3}
            </Typography>
            
              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300],
                }}
              >
                {main1.paragraph4} <b><a href="contact" style={{textDecoration:"none", color: "#DBDB83"}}>here.</a></b>
              </Typography>
            
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
