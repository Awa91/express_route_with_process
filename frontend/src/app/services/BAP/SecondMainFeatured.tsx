import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


interface AnalysisAndPlanningSecondMainFeaturedProps {
  main2: {
    title: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
    line6: string;
    sourceSet: string;
    image: string;
    imageText: string;
  };
}

export default function AnalysisAndPlanningSecondMainFeatured(
  props: AnalysisAndPlanningSecondMainFeaturedProps
) {
  const { main2 } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.background.default
            : theme.palette.grey[300],
            backgroundColor: "#144b70",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${main2.image})`,
        srcSet:`url(${main2.sourceSet})`,
        alt:`url(${main2.imageText})`,    }}
    >
  

      <Grid item>
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center",color: "#fff" , pb:"35px"}}>
            {main2.title}
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "center",
              color: "#fff",
              
            }}
          >
            {main2.line1}
          </Typography>

          <Typography
            variant="h5"
            color="inherit"
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "center",
              color: "#fff"
            }}
          >
            {main2.line2}
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "center",
              color: "#fff"
            }}
          >
            {main2.line3}
          </Typography>

          <Typography
            variant="h5"
            color="inherit"
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "center",
              color: "#fff"
            }}
          >
            {main2.line4}
          </Typography>

          <Typography
            variant="h5"
            color="inherit"
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "center",
              color: "#fff"
            }}
          >
            {main2.line5}
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "center",
              color: "#fff"
            }}
          >
            {main2.line6}
          </Typography>
        </Box>
      </Grid>
    </Paper>
  );
}
