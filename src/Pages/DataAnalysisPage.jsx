import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import "../Style/DataAnalysis.css";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import MarketOverview from "../Charts/Chart Components/MarketOverview";

const DataAnalysisPage = () => {
  const [selectedLogo, setSelectedLogo] = useState("vw");

  const changeToAudi = () => {
    setSelectedLogo("audi");
  };
  const changeToVw = () => {
    setSelectedLogo("vw");
  };

  const NavbarContainer = styled("div")(({ theme }) => ({
    boxShadow:
      theme.palette.mode === "light"
        ? "-3px -3px 8px #bcbcbc, 3px 3px 8px #ffffff"
        : "-2px -2px 8px #000000, 2px 2px 8px #000000",
    borderRadius: "20px",
    padding: "20px",
    backgroundColor: theme.palette.background.paper,
  }));

  // const VisuallyHiddenInput = styled("input")({
  //   clip: "rect(0 0 0 0)",
  //   clipPath: "inset(50%)",
  //   height: 1,
  //   overflow: "hidden",
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   whiteSpace: "nowrap",
  //   width: 1,
  // });

  // const { tableData, columns, duplicates, shape, handleFileUpload } =
  //   usePandas();

  // const fileUploadFunction = async (event) => {
  //   try {
  //     await handleFileUpload(event);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div className="data-analysis">
      <NavbarContainer className="data-analysis-top-navbar heading">
        <span>Market Overview</span>
      </NavbarContainer>
      <NavbarContainer className="data-analysis-top-navbar logos">
        <div>
          <img
            onClick={changeToAudi}
            className={selectedLogo === "audi" && "data-selected-logo"}
            src="audi-logo.png"
            alt="Audi Logo"
          />
          <img
            onClick={changeToVw}
            className={selectedLogo === "vw" && "data-selected-logo"}
            src="vw-logo.png"
            alt="VW Logo"
          />
        </div>
      </NavbarContainer>
      <MarketOverview />
      <div className="right-side-data-analysis">
        <div className="data-tabs">
          <span className="data-analysis-header">Data Analysis</span>
          <div className="horizontal-line"></div>
          <Button>
            <BarChartIcon />
            Basic Overview
          </Button>
          <Button>
            <QueryStatsIcon />
            Market Overview
          </Button>
          <Button>
            <PriceChangeIcon />
            Price Influencers
          </Button>
          <Button>
            <AssignmentIcon />
            Specifications and Features
          </Button>
          <Button>
            <TableChartIcon />
            Read Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisPage;
