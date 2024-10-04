import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface UIandUXDesignFirstMainFeaturedProps {
  main1: {
    title: string;
    phrase1: string;
    phrase2: string;
    phrase3: string;
  };
}

export default function UIandUXDesignFirstMainFeatured(
  props: UIandUXDesignFirstMainFeaturedProps
) {
  const { main1 } = props;
  //Use system preference to set the theme mode

  return (
    <Paper
      sx={{
        position: "relative",
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.background.default
            : theme.palette.grey[300],

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor:"#144b70"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[50]
              : theme.palette.grey[900],
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              gutterBottom
              sx={{
                textAlign: "start",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                fontSize: "0.875rem",
                ml: "25%",
                pb: "15px",
              }}
            >
              {main1.title}
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "IBM Plex Sans, sans-serif",
                ml: "25%",
                textAlign: "initial",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                mr: "30%",
              }}
            >
              {main1.phrase1}
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "IBM Plex Sans, sans-serif",
                ml: "25%",
                textAlign: "initial",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                mr: "30%",
              }}
            >
              {main1.phrase2}
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "IBM Plex Sans, sans-serif",
                ml: "25%",
                textAlign: "initial",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                mr: "30%",
              }}
            >
              {main1.phrase3}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
