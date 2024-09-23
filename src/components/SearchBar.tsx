import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CompareArrows, PersonOutline } from "@mui/icons-material";

export default function SearchBar() {
  const [trip, setTrip] = useState("");
  const [passenger, setPassenger] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTrip(event.target.value);
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
      <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-row md:flex-row">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-standard-label">
              <CompareArrows /> Round trip{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={trip}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div className="pt-6 md:pt-0 md:pl-6">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 18 }}>
              <InputLabel id="demo-simple-select-standard-label">
                <PersonOutline />{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={passenger}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>1</em>
                </MenuItem>
                <MenuItem value={1}>2</MenuItem>
                <MenuItem value={2}>3</MenuItem>
                <MenuItem value={3}>4</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="pt-6 md:pt-0 md:pl-6">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Economy
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={passenger}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="Economy">
                  <em>Economy</em>
                </MenuItem>
                {/* <MenuItem value={"Economoy"}>Economy</MenuItem> */}
                <MenuItem value={"Premium Economy"}>Premium Economy</MenuItem>
                <MenuItem value={"Business"}>Business</MenuItem>
                <MenuItem value={"First"}>First</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
            <div className="flex border rounded bg-gray-300 items-center p-2 ">
              <svg
                className="fill-current text-gray-800 mr-2 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className="heroicon-ui"
                  d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter text here..."
                className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex border rounded bg-gray-300 items-center p-2 ">
              <svg
                className="fill-current text-gray-800 mr-2 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter text here..."
                className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
            <div className="flex border rounded bg-gray-300 items-center p-2 ">
              <svg
                className="fill-current text-gray-800 mr-2 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className="heroicon-ui"
                  d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter text here..."
                className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex border rounded bg-gray-300 items-center p-2 ">
              <svg
                className="fill-current text-gray-800 mr-2 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className="heroicon-ui"
                  d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter text here..."
                className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="p-2 border w-1/4 rounded-md bg-gray-800 text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
