import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface PrivacyPolicyFeaturedProps {
  policy: {
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    paragraph5: string;
    paragraph6: string;
    paragraph7: string;
    paragraph8: string;
    paragraph9: string;
    paragraph10: string;
    paragraph11: string;
  };
}

export default function PrivacyPolicyFeatured(
  props: PrivacyPolicyFeaturedProps
) {
  const { policy } = props;

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
              <b>{policy.subtitle}</b>
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
              {policy.paragraph1}
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
              {policy.paragraph2}
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
              {policy.paragraph3}
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
                {policy.paragraph4}
              </Typography>{" "}

            

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
              {policy.paragraph5}
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
              {policy.paragraph6}
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
              {policy.paragraph7}
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
              {policy.paragraph8}
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
              {policy.paragraph9}
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
              {policy.paragraph10}
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
              {policy.paragraph11}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
