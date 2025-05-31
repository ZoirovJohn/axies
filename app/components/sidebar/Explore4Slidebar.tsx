"use client";
import { PropertiesInquiry } from "@/libs/dto/property/property.input";
import {
  IconButton,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PropertyLocation } from "@/libs/enums/property.enum";
import { end } from "@popperjs/core";

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
      }, 600);
    }
  };

  const handleDeselect = (index: number) => {
    if (index >= 5) setSelectedBelowFive(false);
  };

  const propertyLocationSelectHandler = useCallback(
    async (e: any) => {
      try {
        const isChecked = e.target.checked;
        const value = e.target.value;

        let updatedSearch = { ...searchFilter.search };

        if (isChecked) {
          updatedSearch.locationList = [
            ...(searchFilter?.search?.locationList || []),
            value,
          ];

          const extendedList = Object.values(PropertyLocation).slice(5);
          if (extendedList.includes(value)) {
            setShowAll(true);
            setSelectedBelowFive(true);
          }
        } else if (searchFilter?.search?.locationList?.includes(value)) {
          const filtered = searchFilter.search.locationList.filter(
            (item: string) => item !== value
          );

          if (filtered.length > 0) {
            updatedSearch.locationList = filtered;

            const stillSelectedExtended = filtered.some((item) =>
              Object.values(PropertyLocation).slice(5).includes(item)
            );

            if (!stillSelectedExtended) {
              setShowAll(false);
              setSelectedBelowFive(false);
            }
          } else {
            const { locationList, ...rest } = searchFilter.search;
            updatedSearch = rest;
            setShowAll(false);
            setSelectedBelowFive(false);
          }
        }

        const newInput = {
          ...searchFilter,
          search: updatedSearch,
        };

        await router.push(`/explore-4?input=${JSON.stringify(newInput)}`, {
          scroll: false,
        });

        console.log("propertyLocationSelectHandler:", value);
      } catch (err: any) {
        console.log("ERROR, propertyLocationSelectHandler:", err);
      }
    },
    [searchFilter, router]
  );

  const propertyCollectionSelectHandler = useCallback(
    async (e: any) => {
      try {
        const isChecked = e.target.checked;
        const value = e.target.value;

        let updatedSearch = { ...searchFilter.search };

        if (isChecked) {
          updatedSearch.collectionList = [
            ...(searchFilter?.search?.collectionList || []),
            value,
          ];
        } else if (searchFilter?.search?.collectionList?.includes(value)) {
          const filtered = searchFilter.search.collectionList.filter(
            (item: string) => item !== value
          );

          if (filtered.length > 0) {
            updatedSearch.collectionList = filtered;
          } else {
            const { collectionList, ...rest } = searchFilter.search;
            updatedSearch = rest;
          }
        }

        const newInput = {
          ...searchFilter,
          search: updatedSearch,
        };

        await router.push(`/explore-4?input=${JSON.stringify(newInput)}`, {
          scroll: false,
        });

        console.log("propertyCollectionSelectHandler:", e.target.value);
      } catch (err: any) {
        console.log("ERROR, propertyCollectionSelectHandler:", err);
      }
    },
    [searchFilter, router]
  );

  const selectedPriceLabelsRef = useRef<string[]>([]); // local-only tracking

  const propertyPriceSelectHandler = useCallback(
    async (e: any) => {
      try {
        const isChecked = e.target.checked;
        const value = e.target.value;

        const priceMap: Record<string, { start: number; end: number }> = {
          "0.001 – 0.05 ETH": { start: 0.001, end: 0.05 },
          "0.05 – 0.5 ETH": { start: 0.05, end: 0.5 },
          "0.5 – 2 ETH": { start: 0.5, end: 2 },
          "2 – 5+ ETH": { start: 2, end: 5 },
        };

        if (isChecked) {
          selectedPriceLabelsRef.current.push(value);
        } else {
          selectedPriceLabelsRef.current =
            selectedPriceLabelsRef.current.filter((label) => label !== value);
        }

        const selectedLabels = selectedPriceLabelsRef.current;
        const updatedSearch = { ...searchFilter.search };

        if (selectedLabels.length > 0) {
          const selectedRanges = selectedLabels.map((label) => priceMap[label]);
          const starts = selectedRanges.map((r) => r.start);
          const ends = selectedRanges.map((r) => r.end);

          updatedSearch.pricesRange = {
            start: Math.min(...starts),
            end: Math.max(...ends),
          };
        } else {
          updatedSearch.pricesRange = { start: 0.001, end: 500 };
        }

        const newInput = {
          ...searchFilter,
          search: updatedSearch,
        };

        await router.push(`/explore-4?input=${JSON.stringify(newInput)}`, {
          scroll: false,
        });
      } catch (err: any) {
        console.log("ERROR in propertyPriceSelectHandler:", err);
      }
    },
    [searchFilter, router]
  );

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
              backgroundColor: "rgb(81, 66, 252)",
              color: "white",
              padding: "8px 10px 8px 5px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: "30px", height: "30px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
              />
            </svg>
          </button>
        </Stack>
      </Stack>
      {/* Location Filter */}
      <div className="widget widget-category mgbt-24 boder-bt">
        <div
          onClick={() => setStatusCollapse(!getStatusCollapse)}
          className="title-wg-category cursor-pointer flex justify-between items-center"
        >
          <h4 className="title-widget style-2">Location</h4>
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
              {Object.values(PropertyLocation)
                .slice(0, 5)
                .map((address, index) => (
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
                      value={address}
                      onChange={propertyLocationSelectHandler} // ✅ Updated
                    />
                    <span className="btn-checkbox" />
                  </label>
                ))}

              {showAll &&
                Object.values(PropertyLocation)
                  .slice(5)
                  .map((address, index) => (
                    <label
                      key={index + 5}
                      className="block mb-2 transition-opacity duration-300"
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        opacity: showAll ? 1 : 0,
                        transition: "opacity 0.5s ease",
                      }}
                    >
                      {address}
                      <input
                        type="checkbox"
                        value={address}
                        onChange={propertyLocationSelectHandler} // ✅ Updated
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
          <h4 className="title-widget style-2">Collections</h4>
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
              {["ART", "MUSIC", "COLLECTIBLE", "SPORTS"].map((item, index) => (
                <label
                  key={index}
                  className="block mb-2"
                  style={{ display: "block", marginBottom: "10px" }}
                >
                  {item}
                  <input
                    type="checkbox"
                    value={item}
                    onChange={propertyCollectionSelectHandler}
                  />
                  <span className="btn-checkbox" />
                </label>
              ))}
            </form>
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="widget widget-category mgbt-24 boder-bt">
        <div
          onClick={() => setChainsCollapse(!getChainsCollapse)}
          className="title-wg-category cursor-pointer flex justify-between items-center"
        >
          <h4 className="title-widget style-2">Price</h4>
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
              {[
                "0.001 – 0.05 ETH",
                "0.05 – 0.5 ETH",
                "0.5 – 2 ETH",
                "2 – 5+ ETH",
              ].map((price, index) => (
                <label
                  key={index}
                  className="block mb-2"
                  style={{ display: "block", marginBottom: "10px" }}
                >
                  {price}
                  <input
                    type="checkbox"
                    value={price}
                    onChange={propertyPriceSelectHandler}
                    className="mr-2"
                  />
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
