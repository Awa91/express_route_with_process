import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface TQASecondMainFeaturedProps {
  main2: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    sourceSet: string;
    image: string;
    imageText: string;
  };
}

export default function TQASecondMainFeatured(
  props: TQASecondMainFeaturedProps
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
        mb: 4,
        backgroundColor: "#144b70",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${main2.image})`,
        alt: `url(${main2.imageText})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.1)",
        }}
      />

      <Grid item md={6}>
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#fff",
              pb:"10px"
            }}
          >
            {main2.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#fff",
              ml:"20%",
              mr:"20%",pb:"10px"

            }}
          >
            {main2.paragraph1}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#fff",
              ml:"20%",
              mr:"20%",pb:"10px"

            }}
          >
            {main2.paragraph2}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",

              color: "#fff",
              textAlign:"start",
              ml:"20%",
              mr:"20%",
              pb:"20px",
              pt:"20px"
            }}
          >
            {main2.paragraph3}
          </Typography>
         
        </Box>
      </Grid>
    </Paper>
  );
}
