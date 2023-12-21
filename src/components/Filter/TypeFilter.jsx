import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import "./typefilter.css";
import { links } from "../../assets/image-links";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

function TypeFilter({ selectedFilter, setSelectedFilter }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="type-filter">
      <Box
        sx={{ maxWidth: { xs: 1024, sm: 1024 }, bgcolor: "background.paper" }}
        className="filter-box"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {links.map((item, index) => (
            <Tab
              key={index}
              className={`links-box ${
                index == selectedFilter && "selected-box"
              }`}
              onClick={() => {
                console.log("Selected Key : ", index);
                setSelectedFilter(index);
              }}
              icon={
                <>
                  <img
                    src={item.imgSrc}
                    alt={item.label}
                    className="links-img"
                  />
                  <p
                    className={`links-label ${
                      index == selectedFilter && "selected-label"
                    }`}
                  >
                    {item.label}
                  </p>
                </>
              }
            />
          ))}
        </Tabs>
      </Box>
      <div className="filters">
        <TuneRoundedIcon />
        <p>Filters</p>
      </div>
    </div>
  );
}

export default TypeFilter;
