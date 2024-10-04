import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {  Card,  CardContent } from "@mui/material";

interface ServiceFourthMainFeaturedProps {
  main4: {
    title: string;
    description: string;
    
  };
}

export default function ServiceFourthMainFeatured(
  props: ServiceFourthMainFeaturedProps
) {
  const { main4 } = props;

  return (
    
   
        <Grid item xs={12} md={6} sx={{  }}>
         
          <Card
            sx={{
              display: "flex",
              boxShadow: "none",
              backgroundColor: "#144b70",
              
              borderRadius:"0px",
              height:"200px"
            }}
          >
            <CardContent sx={{ flex: 1, overflow: "hidden", }}>
              <Typography component="h1" variant="h5" sx={{ color: "#fff", ml:"10%",  mr:"10%",pb:"10px", pt:"25px"}}>
                {main4.title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{color: "#fff",  ml:"10%", mr:"10%",
                }}
              >
                {main4.description}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
         
       


  );
}
