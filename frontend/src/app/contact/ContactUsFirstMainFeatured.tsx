import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface  AboutUsFirstMainFeaturedProps {
  main1: {
    title: string;
    description: string;
  };
}

export default function  AboutUsFirstMainFeatured(props:  AboutUsFirstMainFeaturedProps) {
  const { main1 } = props;

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
        alignContent:"space-around",
       
        
       
      }}
    >
      <Box
        sx={{
          position: "relative",
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
      <Grid container sx={{textAlign:"center",}}>
        <Grid item md={12} >
        <Box
            sx={{
              position: "relative",
              p: { xs: 15, md: 15 },
              pr: { md: 100 },
             
              
             
            }}
          >
          <Typography
            component="h1"
            variant="h6"
            sx={{  color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[600]
                : theme.palette.grey[300],
                 fontSize:"0.875rem",}}            >
              {main1.title}
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ overflow: "hidden", textOverflow: "ellipsis" , fontFamily: "IBM Plex Sans, sans-serif",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],

            }}
                    
          
        >
              {main1.description}
            </Typography>
      </Box>
    </Grid>
  </Grid>
    </Paper>
  );
}
