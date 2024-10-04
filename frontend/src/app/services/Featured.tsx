import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface ServiceFeaturedProps {
  service: {
    description: string;
    subtitle: string;
    url: string;
    image: string;
    sourceSet: string;
    imageLabel: string;
  
  };
}

export default function ServicesFeatured(props: ServiceFeaturedProps) {
  const { service } = props;

  return (
    <>
      <Grid item xs={12} md={6} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex", boxShadow: "none",   }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <CardMedia
              component="picture"
              sx={{
              height:"233",
              width:"350",
              maxHeight:{xs:233,md:167 },
              maxWidth:{xs:350, md:250}
              }}
            >
              <source srcSet={service.sourceSet} />
              <img
                src={service.image}
                alt={service.imageLabel}
              
              />

            </CardMedia>

            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                pb: "20px",pt:"20px",
              }}
            >
              {service.subtitle}
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
              {service.description}
            </Typography>
            <a style={{ color: "#0f76bd" }} href={service.url}>
              Learn more
            </a>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
