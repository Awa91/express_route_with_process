import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";



interface ServiceSecondMainFeaturedProps {
  main2 : {
    description: string;
    image: string;
    sourceSet: string;
    imageText: string;

  };
}

export default function ServiceSecondMainFeatured(props: ServiceSecondMainFeaturedProps) {
  const {main2 } = props;
  
  

  return (
    <Paper
    
      sx={{
        position: "relative",
        
            mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${main2.image})`,
        height:"300%",
        color:"#fff",
        backgroundColor: "#144b70",
        
      }}
    >
      {/* Increase the priority of the hero background image  
*/}
      {
        <img
          style={{ display: "none" }}
          src={main2.image}
          alt={main2.imageText}
          
        
        />
      }
     

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
              variant="h5"
              
              paragraph
              sx={{ overflow: "hidden", textOverflow: "ellipsis",  
              color:"fff",
              textAlign:"center",
              pt:"0px",
              ml:"28%"
              
              }}
            >
              {main2.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
