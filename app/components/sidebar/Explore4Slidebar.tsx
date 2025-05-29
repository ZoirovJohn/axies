"use client";
import { PropertiesInquiry } from "@/libs/dto/property/property.input";
import {
  IconButton,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FilterType {
  searchFilter: PropertiesInquiry;
  setSearchFilter: any;
  initialInput: PropertiesInquiry;
}

export default function Explore4Slidebar(props: FilterType): JSX.Element {
  const { searchFilter, setSearchFilter, initialInput } = props;
  const [getStatusCollapse, setStatusCollapse] = useState(true);
  const [getCatCollapse, setCatCollapse] = useState(true);
  const [getChainsCollapse, setChainsCollapse] = useState(true);
  const router = useRouter();

  const addresses = [
    "서울 (Seoul)",
    "부산 (Busan)",
    "인천 (Incheon)",
    "대구 (Daegu)",
    "대전 (Daejeon)",
    "제주 (Jeju)",
    "평택 (Pyeongtaek)",
    "안산 (Ansan)",
    "김포 (Gimpo)",
    "구미 (Gumi)",
    "전주 (Jeonju)",
  ];

  const [showAll, setShowAll] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedBelowFive, setSelectedBelowFive] = useState(false);
  const [mouseLeaving, setMouseLeaving] = useState(false);

  /** HANDLERS **/
  const handleHover = (index: number) => {
    if (index === 4) {
      setTimeout(() => setShowAll(true), 200);
    }
  };

  const handleLeave = () => {
    if (!selectedBelowFive) {
      setMouseLeaving(true);
      setTimeout(() => {
        if (mouseLeaving && !selectedBelowFive) {
          setShowAll(false);
        }
      }, 200);
    }
  };

  const handleSelection = (index: number) => {
    if (index >= 5) setSelectedBelowFive(true);
  };

  const handleDeselect = (index: number) => {
    if (index >= 5) setSelectedBelowFive(false);
  };

  const refreshHandler = async () => {
    try {
      setSearchText("");
      await router.push(
        `/property?input=${encodeURIComponent(JSON.stringify(initialInput))}`,
        { scroll: false }
      );
    } catch (err: any) {
      console.log("ERROR, refreshHandler:", err);
    }
  };

  return (
    <div id="side-bar" className="side-bar style-3">
      {/* 🔍 Find Your Home Search */}
      <Stack className={"find-your-home"} mb={"40px"}>
        <h4 className="title-widget style-2">Find your NFT</h4>
        <Stack
          className={"transition-transform"}
          direction="row"
          alignItems="center"
          spacing={1}
        >
          <OutlinedInput
            value={searchText}
            type="text"
            className="search-input"
            placeholder="What are you looking for?"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setSearchFilter({
                  ...searchFilter,
                  search: { ...searchFilter.search, text: searchText },
                });
              }
            }}
          />
          {/* Submit Button */}
          <button
            type="button"
            onClick={() =>
              setSearchFilter({
                ...searchFilter,
                search: { ...searchFilter.search, text: searchText },
              })
            }
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </Stack>
      </Stack>
      {/* Address Filter */}
      <div className="widget widget-category mgbt-24 boder-bt">
        <div
          onClick={() => setStatusCollapse(!getStatusCollapse)}
          className="title-wg-category cursor-pointer flex justify-between items-center"
        >
          <h4 className="title-widget style-2">Address</h4>
          <i
            className={`icon-fl-down-2 transition-transform ${
              getStatusCollapse ? "rotate-180" : ""
            }`}
          />
        </div>
        {getStatusCollapse && (
          <div
            className="content-wg-category flex flex-col"
            style={{ display: "flex", flexDirection: "column" }}
            onMouseLeave={handleLeave}
          >
            <form>
              {addresses.slice(0, 5).map((address, index) => (
                <label
                  key={index}
                  style={{ display: "block", marginBottom: "10px" }}
                  className="block mb-2"
                  onMouseEnter={() => {
                    setHovering(true);
                    handleHover(index);
                  }}
                  onMouseLeave={() => setHovering(false)}
                >
                  {address}
                  <input
                    type="checkbox"
                    onChange={() => handleSelection(index)}
                  />
                  <span className="btn-checkbox" />
                </label>
              ))}
              {showAll &&
                addresses.slice(5).map((address, index) => (
                  <label
                    key={index + 5}
                    className="block mb-2 transition-opacity duration-300"
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      opacity: showAll ? 1 : 0, // Smooth transition effect
                      transition: "opacity 0.5s ease", // CSS transition for smooth effect
                    }}
                  >
                    {address}
                    <input
                      type="checkbox"
                      onChange={() => handleSelection(index + 5)}
                      onClick={() => handleDeselect(index + 5)}
                    />
                    <span className="btn-checkbox" />
                  </label>
                ))}
            </form>
          </div>
        )}
      </div>

      {/* Categories Filter */}
      <div className="widget widget-category mgbt-24 boder-bt">
        <div
          onClick={() => setCatCollapse(!getCatCollapse)}
          className="title-wg-category cursor-pointer flex justify-between items-center"
        >
          <h4 className="title-widget style-2">Categories</h4>
          <i
            className={`icon-fl-down-2 transition-transform ${
              getCatCollapse ? "rotate-180" : ""
            }`}
          />
        </div>
        {getCatCollapse && (
          <div
            className="content-wg-category flex flex-col"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <form>
              {["Art", "Music", "Collectibles", "Sports"].map((item, index) => (
                <label
                  key={index}
                  className="block mb-2"
                  style={{ display: "block", marginBottom: "10px" }}
                >
                  {item}
                  <input type="checkbox" />
                  <span className="btn-checkbox" />
                </label>
              ))}
            </form>
          </div>
        )}
      </div>

      {/* Chains Filter */}
      <div className="widget widget-category mgbt-24 boder-bt">
        <div
          onClick={() => setChainsCollapse(!getChainsCollapse)}
          className="title-wg-category cursor-pointer flex justify-between items-center"
        >
          <h4 className="title-widget style-2">Chains</h4>
          <i
            className={`icon-fl-down-2 transition-transform ${
              getChainsCollapse ? "rotate-180" : ""
            }`}
          />
        </div>
        {getChainsCollapse && (
          <div
            className="content-wg-category flex flex-col"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <form>
              {["Ethereum", "Polygon", "Klaytn"].map((chain, index) => (
                <label
                  key={index}
                  className="block mb-2"
                  style={{ display: "block", marginBottom: "10px" }}
                >
                  {chain}
                  <input type="checkbox" />
                  <span className="btn-checkbox" />
                </label>
              ))}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
