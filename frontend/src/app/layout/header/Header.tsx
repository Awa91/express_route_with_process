import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { AppBar, Box, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;

  title: string;
}

export default function Header(props: HeaderProps) {
  //Use system preference to set theme mode
  const theme = useTheme();

  const { sections, title } = props;

  //const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    React.useState<null | HTMLElement>(null);
  //const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };
  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  //Mobile menu ID
  const mobileMenuId = "appspot-mobile-menu";
  //Mobile menu
  const renderMobileMenu = (
    <Menu
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        display: "flex",
        fontFamily: "IBM Plex Sans, sans-serif",
        fontSize: "0.875rem",
      }}
    >
      <MenuItem>
        {sections.map((section) => (
          <Link
            color="inherit"
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{
              textDecoration: "none",
              "&:hover": {
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[500],
              },
            }}
          >
            {section.title.match("Services")}
          </Link>
        ))}
      </MenuItem>
      <MenuItem>
        {sections.map((section) => (
          <Link
            color="inherit"
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{
              textDecoration: "none",
              "&:hover": {
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[500],
              },
            }}
          >
            {section.title.match("About")}
          </Link>
        ))}
      </MenuItem>

      <MenuItem>
        {sections.map((section) => (
          <Link
            color="inherit"
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{
              textDecoration: "none",
              "&:hover": {
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[500],
              },
            }}
          >
            {section.title.match("Contact")}
          </Link>
        ))}
      </MenuItem>
     
    </Menu>
  );

  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: theme.palette.mode }}>
        <AppBar
          sx={{ backgroundColor: "background.default", mb: "60px" }}
          className="appspotAppBar"
        >
          <Toolbar className="appspotToolbar">
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[600]
                        : theme.palette.grey[100],
                  }}
                  className="mobileMenu"
                />
              </IconButton>
            </Box>
            {renderMobileMenu}

            <Link
              noWrap
              sx={{
                flex: 1,
                padding: "10px",
                color:"#0f76bd",
                fontSize: "1.05rem",
                textDecoration: "none",
                "&:hover": {
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[900]
                      : theme.palette.grey[500],
                },
              }}
              href="/services"
            >
              {title}
            </Link>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {sections.map((section) => (
                <Link
                  key={section.title}
                  variant="body2"
                  href={section.url}
                  sx={{
                    p: 1,

                    textDecoration: "none",
                    borderRadius: "15px",
                    "&:hover": {
                      color: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[900]
                          : theme.palette.grey[500],
                    },
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[600]
                        : theme.palette.grey[100],
                  }}
                >
                  {section.title}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
