"use client";
import React, { useState } from "react";
import type { NextPage } from "next";
import { Box, Button, InputAdornment, Stack } from "@mui/material";
import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TabContext } from "@mui/lab";
import OutlinedInput from "@mui/material/OutlinedInput";
import TablePagination from "@mui/material/TablePagination";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { FaqArticlesPanelList } from "@/app/components/admin/cs/FaqList";
import WithAdminLayout from "@/app/components/layout/AdminLayout";
import searchIcon from "../../../../public/assets/images/icon/search_icon.png";
import Image from "next/image";

const FaqArticles: NextPage = (props: any) => {
  const [anchorEl, setAnchorEl] = useState<[] | HTMLElement[]>([]);

  /** APOLLO REQUESTS **/
  /** LIFECYCLES **/
  /** HANDLERS **/

  return (
    // @ts-ignore
    <Box component={"div"} className={"content"}>
      <Box component={"div"} className={"title flex_space"}>
        <Typography variant={"h2"}>FAQ Management</Typography>
        <Button className="btn_add" variant={"contained"} size={"medium"}>
          <AddRoundedIcon sx={{ mr: "8px" }} />
          ADD
        </Button>
      </Box>
      <Box component={"div"} className={"table-wrap"}>
        <Box component={"div"} sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={"value"}>
            <Box component={"div"}>
              <List className={"tab-menu"}>
                <ListItem
                  value="all"
                  className={"all" === "all" ? "li on" : "li"}
                >
                  All (0)
                </ListItem>
                <ListItem
                  value="active"
                  className={"all" === "all" ? "li on" : "li"}
                >
                  Active (0)
                </ListItem>
                <ListItem
                  value="blocked"
                  className={"all" === "all" ? "li on" : "li"}
                >
                  Blocked (0)
                </ListItem>
                <ListItem
                  value="deleted"
                  className={"all" === "all" ? "li on" : "li"}
                >
                  Deleted (0)
                </ListItem>
              </List>
              <Divider />
              <Stack className={"search-area"} sx={{ m: "24px" }}>
                <Select
                  sx={{ width: "160px", mr: "20px" }}
                  value={"searchCategory"}
                >
                  <MenuItem value={"mb_nick"}>mb_nick</MenuItem>
                  <MenuItem value={"mb_id"}>mb_id</MenuItem>
                </Select>

                <OutlinedInput
                  value={"searchInput"}
                  sx={{ width: "100%" }}
                  className={"search"}
                  placeholder="Search user name"
                  endAdornment={
                    <>
                      {true && <CancelRoundedIcon onClick={() => {}} />}
                      <InputAdornment position="end" onClick={() => {}}>
                        <Image
                          src={searchIcon}
                          alt="searchIcon"
                          width={24}
                          height={24}
                        />
                      </InputAdornment>
                    </>
                  }
                />
              </Stack>
              <Divider />
            </Box>
            <FaqArticlesPanelList anchorEl={anchorEl} />

            <TablePagination
              rowsPerPageOptions={[20, 40, 60]}
              component="div"
              count={4}
              rowsPerPage={10}
              page={1}
              onPageChange={() => {}}
              onRowsPerPageChange={() => {}}
            />
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
};

export default WithAdminLayout(FaqArticles);
