import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface FeaturedProps {
  feature: {
    description: string;
    sourceSet: string;
    image: string;
    imageLabel: string;
    subtitle: string;
  };
}

export default function Featured(props: FeaturedProps) {
  const { feature } = props;

  return (
    <>
      <Grid item xs={12} md={6} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex", boxShadow: "none" }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <CardMedia
              component="picture"
             
            >
              <source srcSet={feature.sourceSet} />
              <img src={feature.image} alt={feature.imageLabel} />
            </CardMedia>

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
              {feature.subtitle}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],pt:"5px"
              }}
            >
              {feature.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
