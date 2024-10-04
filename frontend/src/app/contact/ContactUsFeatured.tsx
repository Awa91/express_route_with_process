import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


interface AboutUsFeaturedProps {
  contact: {
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
   
  };
}

export default function AboutUsFeatured(props: AboutUsFeaturedProps) {
  const { contact } = props;

  return (
    <>
      <Grid item xs={12} md={6} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex", boxShadow: "none" , backgroundColor:"#144b70"}}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <Typography
            component="h1"
            variant="h5"
            sx={{
              color: '#fff',
              pb: "10px",
            }}
            >
              {contact.subtitle}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: '#fff'
              }}
            >
              {contact.paragraph1}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: '#fff'
              }}
            >
              {contact.paragraph2} 
            </Typography>
          </CardContent>
         
        </Card>
        
      </Grid>
    </>
  );
}
