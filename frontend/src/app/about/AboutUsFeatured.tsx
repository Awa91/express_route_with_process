import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "@mui/material";

interface AboutUsFeaturedProps {
  about: {
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    url: string;
  };
}

export default function AboutUsFeatured(props: AboutUsFeaturedProps) {
  const { about } = props;

  return (
    <>
      <Grid item xs={12} md={6} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex", boxShadow: "none" }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <Typography
            component="h1"
            variant="h5"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
              pb: "10px",
            }}
            >
              {about.subtitle}
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
              {about.paragraph1}
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
              }}
            >
              {about.paragraph2} <Link variant="body2"  href="services" sx={{color: "#0f76bd"}}>Learn More</Link>
            </Typography>
          </CardContent>
         
        </Card>
        
      </Grid>
    </>
  );
}
