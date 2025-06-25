"use client";
import Link from "next/link";
import Navigation from "./Navigation";
import Mode from "./Mode";
import useDarkModeCheck from "@/hooks/useDarkModeCheck";
import { useRouter, usePathname } from "next/navigation";
import useStickyMenu from "@/hooks/useStickyMenu";
import AdminBar from "./AdminBar";
import Search1 from "./Search1";
import Search2 from "./Search2";
import WalletConnectButton from "../button/WalletConnectButton";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Stack, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import { useCallback, useEffect, useState } from "react";
import { CaretDown } from "phosphor-react";

export default function Header(): JSX.Element {
  const path = usePathname();
  const { t, i18n } = useTranslation("common");
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [lang, setLang] = useState<string | null>("kr"); // Default to Korean
  const drop = Boolean(anchorEl2);
  const router = useRouter();
  const pathname = usePathname();

  // is dark hook
  const isDark = useDarkModeCheck();

  // sticky menu
  const isSticky1 = useStickyMenu(200);
  const isSticky2 = useStickyMenu(250);

  useEffect(() => {
    // Check localStorage first, if not available use the current i18n language
    const saved = localStorage.getItem("locale");
    if (saved) {
      setLang(saved);
      i18n.changeLanguage(saved);
    } else {
      // If no localStorage preference, use the default (kr) and save it
      localStorage.setItem("locale", "kr");
      i18n.changeLanguage("kr");
    }
  }, [i18n]);

  // HANDLERS

  const langClick = (e: any) => {
    setAnchorEl2(e.currentTarget);
  };

  const langClose = () => {
    setAnchorEl2(null);
  };

  const langChoice = useCallback(
    async (e: any) => {
      const selectedLang = e.target.id;
      setLang(selectedLang);
      localStorage.setItem("locale", selectedLang);
      setAnchorEl2(null);
      await i18n.changeLanguage(selectedLang);
    },
    [i18n]
  );

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      top: "109px",
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 160,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  return (
    <>
      <header
        id="header_main"
        className={
          path !== "/home-8"
            ? `header_1 js-header style  ${
                path === "/text-type" ||
                path === "/text-scroll" ||
                path === "/home-5" ||
                path === "/home-6" ||
                path === "/home-7" ||
                path === "/home-8"
                  ? "header_2 style2"
                  : ""
              } ${isSticky1 ? "is-fixed" : ""} ${isSticky2 ? "is-small" : ""}`
            : `header_1 header_2 style2 style3 js-header position-fixed`
        }
      >
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-md-12">
              <div id="site-header-inner">
                <div className="wrap-box flex">
                  <div id="site-logo" className="clearfix">
                    <div id="site-logo-inner">
                      <Link href="/" rel="home" className="main-logo">
                        <Image
                          id="logo_header"
                          src={`/assets/images/logo/${
                            isDark ? "logo_dark" : "logo"
                          }.png`}
                          alt="nft-gaming"
                          width={133}
                          height={56}
                        />
                      </Link>
                    </div>
                  </div>
                  <div
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu"
                    aria-controls="menu"
                    className="mobile-button "
                  >
                    <span />
                  </div>

                  <Navigation />

                  <div className="flat-search-btn flex">
                    <AdminBar />
                    <div className={"lan-box"} style={{ marginLeft: "8px" }}>
                      {/* {user?._id && (
            <NotificationsOutlinedIcon className={"notification-icon"} />
          )} */}
                      <Button
                        disableRipple
                        className="btn-lang"
                        onClick={langClick}
                        endIcon={
                          <CaretDown size={14} color="#616161" weight="fill" />
                        }
                      >
                        <Box component={"div"} className={"flag"}>
                          {lang !== null ? (
                            <img
                              src={`/assets/images/flag/lang${lang}.png`}
                              alt={"languageFlag"}
                            />
                          ) : (
                            <img
                              src={`/assets/images/flag/langkr.png`}
                              alt={"koreanFlag"}
                            />
                          )}
                        </Box>
                      </Button>

                      <StyledMenu
                        anchorEl={anchorEl2}
                        open={drop}
                        onClose={langClose}
                        sx={{ position: "absolute" }}
                      >
                        <MenuItem disableRipple onClick={langChoice} id="en">
                          <img
                            className="img-flag"
                            src={"/assets/images/flag/langen.png"}
                            onClick={langChoice}
                            id="en"
                            alt={"usaFlag"}
                          />
                          English
                        </MenuItem>
                        <MenuItem disableRipple onClick={langChoice} id="kr">
                          <img
                            className="img-flag"
                            src={"/assets/images/flag/langkr.png"}
                            onClick={langChoice}
                            id="kr"
                            alt={"koreanFlag"}
                          />
                          한국어
                        </MenuItem>
                        <MenuItem disableRipple onClick={langChoice} id="ru">
                          <img
                            className="img-flag"
                            src={"/assets/images/flag/langru.png"}
                            onClick={langChoice}
                            id="ru"
                            alt={"russiaFlag"}
                          />
                          Русский
                        </MenuItem>
                        <MenuItem disableRipple onClick={langChoice} id="uz">
                          <img
                            className="img-flag"
                            src={"/assets/images/flag/languz.png"}
                            onClick={langChoice}
                            id="uz"
                            alt={"uzbekFlag"}
                          />
                          Uzbek
                        </MenuItem>
                      </StyledMenu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Mode />
      </header>
    </>
  );
}
