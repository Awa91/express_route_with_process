import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

interface  MobileAppDevFifthMainFeaturedProps {
  main5: {
    title: string;
    sourceSet: string;
    image: string;
    imageLabel: string;
    url:string;
    
  };
}

export default function  MobileAppDevFifthMainFeatured(
  props:  MobileAppDevFifthMainFeaturedProps
) {
  const { main5 } = props;
  //instantiate useNavigate object
let navigate = useNavigate();
 
 

  return (
    <Paper
    sx={{
      position: "relative",
      color: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.background.default
          : theme.palette.grey[300],
          backgroundColor: "#9fc8e4",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${main5.image})`,
      alt:`url(${main5.imageLabel})`, 
      
    }}
  >
    
      <Box
        sx={{
          position: "relative",
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
          textAlign:"center", height:"300px"
          
        }}
      >
        <Typography
          variant="h4"
          sx={{ pb: "35px",}}
        >
          {main5.title}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/contact")}
          sx={{
            color: "#fff",
            backgroundColor: "#436f8d",
            borderRadius: "2px",
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[500]
                  : theme.palette.grey[600],
            },
           
          }}
        >
   Contact us and get a free quote
        </Button>
      </Box>
    
  </Paper>
  );

}

