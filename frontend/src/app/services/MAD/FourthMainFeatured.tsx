import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia } from "@mui/material";


interface MobileAppDevFourthMainFeaturedProps {
  main4: {
    title: string;
    description: string;
    sourceSet: string;
    image: string;
    imageLabel: string;
  };
}

export default function MobileAppDevFourthMainFeatured(
  props: MobileAppDevFourthMainFeaturedProps
) {
  const { main4 } = props;

  return (
    <>
    <Grid item md={6}  sx={{textAlign:"center"}}>
        <Card
          sx={{ display: "flex", boxShadow: "none", borderRadius: "0px" }}
        >
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <CardMedia
              component="picture"
              sx={{
                ml: "10%",
                display: { xs: "none", sm: "block" },
              }}
            >
              <source srcSet={main4.sourceSet} />
              <img src={main4.image} alt={main4.imageLabel} />
            </CardMedia>
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "#293721", pb: "10px" , }}
            >
              {main4.title}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[500]
                    : theme.palette.grey[600],
                    ml:"30%",
                    mr:"30%"
              }}
            >
              {main4.description}
            </Typography>
          </CardContent>
        </Card>
     
    </Grid>
  
</>
    
  );
}
