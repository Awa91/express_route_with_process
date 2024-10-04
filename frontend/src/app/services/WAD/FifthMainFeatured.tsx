import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent } from "@mui/material";

interface WebAppDevFifthMainFeaturedProps {
  main5: {
    subtitle: string;
    description: string;
  };
}

export default function WebAppDevFifthMainFeatured(
  props: WebAppDevFifthMainFeaturedProps
) {
  const { main5 } = props;

  return (
    <>
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
      <Card sx={{ display: "flex", boxShadow: "none" }}>
     <CardContent sx={{ flex: 1, overflow: "hidden" }}>
    <Typography
      component="h1"
      variant="h5"
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
       textAlign:"initial",
       color: (theme) =>
       theme.palette.mode === "light"
         ? theme.palette.grey[600]
         : theme.palette.grey[300],
       
      }}
    >
      {main5.subtitle}
    </Typography>
    <Typography
      variant="body1"
      paragraph
      sx={{
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[500]
            : theme.palette.grey[300],
            pt:"25px"
      }}
    >
      {main5.description}
    </Typography>
    </CardContent>
    </Card>
      </Grid>
    </>
  );
}
