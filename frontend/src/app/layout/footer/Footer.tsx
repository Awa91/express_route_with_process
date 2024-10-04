
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

interface FooterProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
}
export default function Footer(props: FooterProps) {
  const { sections } = props;
  return (
    <Box
      component="footer"
      sx={{
        p: 3,
        mt: 9,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} sx={{ alignContent: "center", mt: "50px" }}>
          
              {sections.map((section) => (
                <>
                  <Link
                    href={section.url}
                    
                    sx={{
                      color: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[600]
                          : theme.palette.grey[100],
                          textDecoration:"none",
                          "&:hover": {
                            color: (theme) =>
                              theme.palette.mode === "light"
                                ? theme.palette.grey[700]
                                : theme.palette.grey[500],
                          },
                          
                    }}
                  >
                    {section.title}&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
                  </Link>
                </>
              ))}
           
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant="body2"
          
            align="center"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[100],
            }}
          >
            {"Copyright © "}
            {new Date().getFullYear()} Appspot Digital Solutions
            {"."}All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

