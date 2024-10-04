import Typography from "@mui/material/Typography";
import { Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


interface SandEFourthMainFeaturedProps {
  main4: {
    title: string;
    
    sourceSet: string;
    image: string;
    imageLabel: string;
  };
}

export default function SandEFourthMainFeatured(
  props: SandEFourthMainFeaturedProps
) {
  const { main4 } = props;
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
      backgroundImage: `url(${main4.image})`,
      alt:`url(${main4.imageLabel})`, 
      
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
          {main4.title}
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
