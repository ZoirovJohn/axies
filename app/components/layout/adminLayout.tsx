import React, { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "../../../apollo/store";
import { REACT_APP_API_URL } from "../../config";
import { getJwtToken, logOut, updateUserInfo } from "@/app/(auth)";
import { MemberType } from "@/libs/enums/member.enum";
import AdminMenuList from "../admin/AdminMenuList";
import projectLogo from "../../../public/assets/images/logo/logo2.png"; // Ensure this path is correct

const drawerWidth = 280;

const withAdminLayout = <P extends object>(
  Component: ComponentType<
    P & {
      setSnackbar: React.Dispatch<
        React.SetStateAction<{
          open: boolean;
          message: string;
          severity: string;
        }>
      >;
      setTitle: React.Dispatch<React.SetStateAction<string>>;
    }
  >
) => {
  return (props: P) => {
    const router = useRouter();
    const user = useReactiveVar(userVar);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [snackbar, setSnackbar] = useState({
      open: false,
      message: "",
      severity: "success",
    });
    const [title, setTitle] = useState("Admin");

    useEffect(() => {
      const jwt = getJwtToken();
      if (jwt) updateUserInfo(jwt);
    }, []);

    useEffect(() => {
      if (user && user.memberType !== MemberType.ADMIN) {
        router.push("/");
      }
    }, [user, router]);

    if (!user || user.memberType !== MemberType.ADMIN) return null;

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const logoutHandler = () => {
      logOut();
      router.push("/");
    };

    return (
      <main id="pc-wrap" className="admin">
        <Box sx={{ display: "flex" }}>
          <AppBar
            position="fixed"
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
              boxShadow: "rgb(100 116 139 / 12%) 0px 1px 4px",
              background: "none",
            }}
          >
            <Toolbar>
              <Tooltip title="User settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    src={
                      user?.memberImage
                        ? `${REACT_APP_API_URL}/${user.memberImage}`
                        : "/img/profile/defaultUser.svg"
                    }
                    alt={user?.memberNick || "Admin User"}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Box sx={{ width: "200px" }} onClick={handleCloseUserMenu}>
                  <Stack sx={{ px: 2, my: 1 }}>
                    <Typography variant="h6">{user?.memberNick}</Typography>
                    <Typography variant="subtitle1" color="#757575">
                      {user?.memberPhone}
                    </Typography>
                  </Stack>
                  <Divider />
                  <MenuItem onClick={logoutHandler}>
                    <Typography>Logout</Typography>
                  </MenuItem>
                </Box>
              </Menu>
            </Toolbar>
          </AppBar>

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
            className="aside"
          >
            <Toolbar sx={{ flexDirection: "column", alignItems: "flex-start" }}>
              <Stack className="logo-box" sx={{ mb: 2 }}>
                <img src={projectLogo.src} alt="logo" />
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  bgcolor: "transparent",
                  borderRadius: 1,
                  px: 3,
                  py: 1,
                  mb: 2,
                }}
              >
                <Avatar
                  src={
                    user?.memberImage
                      ? `${REACT_APP_API_URL}/${user.memberImage}`
                      : "/img/profile/defaultUser.svg"
                  }
                />
                <Typography variant="body2" ml={1}>
                  {user?.memberNick} <br /> {user?.memberPhone}
                </Typography>
              </Stack>
            </Toolbar>
            <Divider />
            <AdminMenuList />
          </Drawer>

          <Box component={"div"} id="bunker" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
            <Component
              {...props}
              setSnackbar={setSnackbar}
              setTitle={setTitle}
            />
          </Box>
        </Box>
      </main>
    );
  };
};

export default withAdminLayout;
