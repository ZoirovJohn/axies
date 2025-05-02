"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import Collapse to avoid SSR issues
const Collapse = dynamic(() => import("react-collapse"), { ssr: false });

export default function Explore4Slidebar(): JSX.Element {
  const [getStatusCollapse, setStatusCollapse] = useState(true);
  const [getCatCollapse, setCatCollapse] = useState(true);
  const [getChainsCollapse, setChainsCollapse] = useState(true);
  const [getCollectionsCollapse, setCollectionsCollapse] = useState(true);

  // Store the address list
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
  const [hovering, setHovering] = useState(false); // State for hovering
  const [selectedBelowFive, setSelectedBelowFive] = useState(false); // Track if any item below 5 is selected
  const [mouseLeaving, setMouseLeaving] = useState(false); // State to track if the mouse is leaving

  // Function to handle hover over the 5th element
  const handleHover = (index: number) => {
    if (index === 4) {
      setTimeout(() => {
        setShowAll(true); // Show all after a small delay
      }, 200); // Adjust the delay time (in milliseconds) for the effect
    }
  };

  const handleLeave = () => {
    // If the mouse leaves and no item below 5 is selected, close the "show all" section
    if (!selectedBelowFive) {
      setMouseLeaving(true); // Mark the mouse as leaving
      setTimeout(() => {
        if (mouseLeaving && !selectedBelowFive) {
          setShowAll(false); // Hide all after a delay if the mouse has left
        }
      }, 200); // Delay to match the hover effect
    }
  };

  const handleSelection = (index: number) => {
    if (index >= 5) {
      setSelectedBelowFive(true); // Mark as selected when item is below 5
    }
  };

  const handleDeselect = (index: number) => {
    if (index >= 5) {
      setSelectedBelowFive(false); // Mark as deselected when item is below 5 and unchecked
    }
  };

  return (
    <div id="side-bar" className="side-bar style-3">
      {/* Status Filter */}
      <div className="widget widget-category mgbt-24 boder-bt">
        <div
          onClick={() => setStatusCollapse(!getStatusCollapse)}
          className="title-wg-category"
        >
          <h4 className="title-widget style-2">Address</h4>
          <i className="icon-fl-down-2" />
        </div>
        <Collapse isOpened={getStatusCollapse}>
          <div
            className="content-wg-category"
            style={{ display: "flex", flexDirection: "column" }}
            onMouseLeave={handleLeave} // Trigger handleLeave when mouse leaves the container
          >
            <form>
              {addresses.slice(0, 5).map((address, index) => (
                <label
                  key={index}
                  style={{ display: "block", marginBottom: "10px" }}
                  onMouseEnter={() => {
                    setHovering(true); // Set hovering state
                    handleHover(index);
                  }} // Handle hover
                  onMouseLeave={() => {
                    setHovering(false); // Reset hovering state
                  }} // Reset when leaving hover
                >
                  {address}
                  <input
                    type="checkbox"
                    onChange={() => handleSelection(index)} // Select below 5
                  />
                  <span className="btn-checkbox" />
                </label>
              ))}
              {showAll &&
                addresses.slice(5).map((address, index) => (
                  <label
                    key={index + 5}
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
                      onChange={() => handleSelection(index + 5)} // Select below 5
                      onClick={() => handleDeselect(index + 5)} // Deselect if unchecked
                    />
                    <span className="btn-checkbox" />
                  </label>
                ))}
            </form>
          </div>
        </Collapse>
      </div>

      {/* Categories Filter */}
      <div className="widget widget-category mgbt-24 boder-bt">
        <div
          onClick={() => setCatCollapse(!getCatCollapse)}
          className="title-wg-category"
        >
          <h4 className="title-widget style-2">Categories</h4>
          <i className="icon-fl-down-2" />
        </div>
        <Collapse isOpened={getCatCollapse}>
          <div
            className="content-wg-category"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <form>
              {["Art", "Music", "Collectibles", "Sports"].map((item, index) => (
                <label
                  key={index}
                  style={{ display: "block", marginBottom: "10px" }}
                  className={index === 7 ? "mgbt-none" : ""}
                >
                  {item}
                  <input type="checkbox" />
                  <span className="btn-checkbox" />
                </label>
              ))}
            </form>
          </div>
        </Collapse>
      </div>

      {/* Chains Filter */}
      <div className="widget widget-category mgbt-24 boder-bt">
        <div
          onClick={() => setChainsCollapse(!getChainsCollapse)}
          className="title-wg-category"
        >
          <h4 className="title-widget style-2">Chains</h4>
          <i className="icon-fl-down-2" />
        </div>
        <Collapse isOpened={getChainsCollapse}>
          <div
            className="content-wg-category"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <form>
              {["Ethereum", "Polygon", "Klaytn"].map((chain, index) => (
                <label
                  key={index}
                  style={{ display: "block", marginBottom: "10px" }}
                  className={index === 2 ? "mgbt-none" : ""}
                >
                  {chain}
                  <input type="checkbox" />
                  <span className="btn-checkbox" />
                </label>
              ))}
            </form>
          </div>
        </Collapse>
      </div>

       {/* Price */}
    </div>
  );
}
