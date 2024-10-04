import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent } from "@mui/material";

interface PDMThirdMainFeaturedProps {
  main3: {
    subtitle: string;
    description: string;
  };
}

export default function PDMThirdMainFeatured(
  props: PDMThirdMainFeaturedProps
) {
  const { main3 } = props;

  return (

    <>
    <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
    <Card sx={{ display: "flex", boxShadow: "none" }}>
     <CardContent sx={{ flex: 1, overflow: "hidden" }}>
    <Typography
    
    variant="h5"
    sx={{
      overflow: "hidden",
      textOverflow: "ellipsis",
     
     color: (theme) =>
     theme.palette.mode === "light"
       ? theme.palette.grey[600]
       : theme.palette.grey[300],
     
    }}
  >
    {main3.subtitle}
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
    {main3.description}
  </Typography>
  </CardContent>
  </Card>
    </Grid>
  </>

  );
}
