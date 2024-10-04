import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface TermsOfUseFeaturedProps {
  term: {
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    paragraph5: string;
    paragraph6: string;
    paragraph7: string;
    paragraph8: string;
  };
}

export default function TermsOfUseFeatured(
  props: TermsOfUseFeaturedProps
) {
  const { term } = props;

  return (
    <>
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex", boxShadow: "none" }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <Typography
              component="h1"
              variant="h5"
              sx={{  color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
              pb: "10px",}}
            >
              {term.subtitle}
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
              {term.paragraph1}
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
              {term.paragraph2}
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
              {term.paragraph3}
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
              {term.paragraph4}
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
              {term.paragraph5}
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
              {term.paragraph6}
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
              {term.paragraph7}
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
              {term.paragraph8}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
