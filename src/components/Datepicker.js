import React, { useEffect, useState } from "react";
import "./Datepicker.css";

const dropdownData = ["Landslide"];

export default function Datepicker() {
  const [date, setDate] = useState();
  const [dropdownValue, setDropdownValue] = useState(undefined);
  const handleCLick = (e) => {
    setDropdownValue(e.target.value);
    console.log(dropdownValue);
  };

  return (
    <>
      <div className="container " style={{ height: "700px", width: "100%" }}>
        <div className="row ">
          <div className="col-3 ms-0" style={{ height: "600px" }}>
            <div className="dropdown mb-5 mt-4">
              <label style={{ margin: "6px" }} for="start_date">
                Product:
              </label>

              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {dropdownValue}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {dropdownData.map((val, index) => {
                  return (
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={handleCLick}
                        value={val}
                      >
                        {val}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            {dropdownValue !== undefined && (
              <form method="post" action="/">
                <label style={{ margin: "6px" }} for="start_date">
                  Select Date:
                </label>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
              </form>
            )}
          </div>
          <div className="col-9 border-start border-primary">
            <h2>Map</h2>
            <p>
              {dropdownValue !== undefined && (
                <div class="embed-container">
                  <iframe
                    width="500"
                    height="400"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="Terrain: Multi-directional Hillshade-Copy-Copy_2"
                    src="//indie8a06c302236.maps.arcgis.com/apps/Embed/index.html?webmap=c8e28d95140a40439cda0c7f272a5905&extent=57.6095,18.3211,109.421,41.119&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&basemap_gallery=true&disable_scroll=true&theme=light"
                  ></iframe>
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
