import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface ServiceThirdMainFeaturedProps {
  main3: {
    title: string;
    description: string;
    sourceSet: string;
    image: string;
    imageText: string;
  };
}

export default function ServiceThirdMainFeatured(
  props: ServiceThirdMainFeaturedProps
) {
  const { main3 } = props;

  return (
    <>
      <Grid item xs={12} md={6} sx={{ mb: "10px", backgroundColor:"#eaddbb" }}>
        <Card sx={{ display: "flex", boxShadow: "none", borderRadius: "0px", backgroundColor:"#eaddbb"}}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <CardMedia
              component="picture"
              sx={{
                ml:"1%",
                display: { xs: "none", sm: "block" },
              }}
            >
              <source srcSet={main3.sourceSet} />
              <img src={main3.image} alt={main3.imageText} />
            </CardMedia>

            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "#c5a042", pb: "10px" }}
            >
              {main3.title}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[600],
              }}
            >
              {main3.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
