import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
  Collapse,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { ExpandMore, ExpandLess, School } from "@mui/icons-material";
import MenuData from "../components/MenuDatas/Datas";

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openMenus, setOpenMenus] = useState([]);

  const handleToggleMenu = (index) => {
    setOpenMenus(
      openMenus.includes(index)
        ? openMenus.filter((i) => i !== index)
        : [...openMenus, index]
    );
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) onClose();
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={onClose}
      sx={{
        width: 300,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 300,
          backgroundColor: "#303f9f",
          color: "white",
        },
      }}
    >
      <Box sx={{ p: 2, textAlign: "center", backgroundColor: "#303f9f" }}>
        <School sx={{ fontSize: 40, color: "white" }} />
        <Typography variant="h6" component="div" sx={{ color: "white", mt: 1 }}>
          School Name
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "white" }} />
      <List>
        {MenuData.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              onClick={() =>
                item.children
                  ? handleToggleMenu(index)
                  : handleNavigation(item.path)
              }
              sx={{
                pl: 3,
                backgroundColor: openMenus.includes(index)
                  ? "#3949ab"
                  : "transparent",
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={{ color: "white" }} />
              {item.children &&
                (openMenus.includes(index) ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <Collapse
              in={openMenus.includes(index)}
              timeout="auto"
              unmountOnExit
            >
              <Box sx={{ ml: 4 }}>
                <List component="div" disablePadding>
                  {item.children &&
                    item.children.map((subItem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        button
                        onClick={() => handleNavigation(subItem.path)}
                        sx={{
                          pl: 4,
                          backgroundColor: openMenus.includes(index)
                            ? "#3949ab"
                            : "transparent",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            width: 7,
                            height: 7,
                            backgroundColor: "white",
                            borderRadius: "50%",
                            marginRight: 2,
                          }}
                        />
                        <ListItemIcon
                          sx={{ color: "white", minWidth: "unset", mr: 1 }}
                        />
                        <ListItemText
                          primary={subItem.label}
                          primaryTypographyProps={{ fontSize: "0.85rem" }}
                          sx={{ color: "white" }}
                        />
                      </ListItem>
                    ))}
                </List>
              </Box>
            </Collapse>
            {["Dashboard", "Admission Management", "Settings"].includes(
              item.label
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
