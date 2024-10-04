// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import { Card, CardContent } from "@mui/material";

// interface UIandUXDesignSecondMainFeaturedProps {
//   main2: {
//     subtitle: string;
//     description: string;
//   };
// }

// export default function UIandUXDesignSecondMainFeatured(
//   props: UIandUXDesignSecondMainFeaturedProps
// ) {
//   const { main2 } = props;

//   return (
//     <>
//     <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
//     <Card sx={{ display: "flex", boxShadow: "none" }}>
//      <CardContent sx={{ flex: 1, overflow: "hidden" }}>
//     <Typography
//     component="h1"
//     variant="h5"
//     sx={{
//       overflow: "hidden",
//       textOverflow: "ellipsis",
//      textAlign:"initial",
//      color: (theme) =>
//      theme.palette.mode === "light"
//        ? theme.palette.grey[600]
//        : theme.palette.grey[300],
     
//     }}
//   >
//     {main2.subtitle}
//   </Typography>
//   <Typography
//     variant="body1"
//     paragraph
//     sx={{
//       color: (theme) =>
//         theme.palette.mode === "light"
//           ? theme.palette.grey[600]
//           : theme.palette.grey[300],
//     }}
//   >
//     {main2.description}
//   </Typography>
//   </CardContent>
//   </Card>
//     </Grid>
//   </>


//   );
// }

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface UIandUXDesignSecondMainFeaturedProps {
  main2: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
     line6: string;
    line7: string;
    line8: string;
    line9: string;
    sourceSet: string;
    image: string;
    imageText: string;
  };
}

export default function UIandUXDesignSecondMainFeatured(
  props: UIandUXDesignSecondMainFeaturedProps
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
           
          }}
        >
          <Typography
            variant="h4"
           
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
            
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              pt:"2%",
              
              color: "#fff", ml:"26.5%"
            }}
          >
            {main2.line2}
          </Typography>
          <Typography
            variant="body1"
            
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              
              color: "#fff", ml:"26.5%", maxWidth:"50%"
            }}
          >
            {main2.line3}
          </Typography>
          <Typography
            variant="h5"
            
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
             
              color: "#fff", pt:"2%",ml:"26.5%"
            }}
          >
            {main2.line4}
          </Typography>
          <Typography
            variant="body1"
           
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              
              color: "#fff", ml:"26.5%", maxWidth:"50%"
            }}
          >
            {main2.line5}
          </Typography>

           <Typography
            variant="h5"
           
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              pt:"2%",
              color: "#fff", ml:"26.5%"
            }}
          >
            {main2.line6}
          </Typography>
           <Typography
            variant="body1"
           
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              
              color: "#fff", ml:"26.5%", maxWidth:"50%"
            }}
          >
            {main2.line7}
          </Typography>
           <Typography
            variant="h5"
           
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              pt:"2%",
              color: "#fff", ml:"26.5%"
            }}
          >
            {main2.line8}
          </Typography>
           <Typography
            variant="body1"
           
            paragraph
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
             
              color: "#fff", ml:"26.5%", maxWidth:"50%"
            }}
          >
            {main2.line9}
          </Typography>
        </Box>
      </Grid>
    </Paper>
  );
}

 