import React, { useState } from "react";
import { Loader } from "@react-three/drei";
import "./App.css";
import { Scene } from "./Scene";
import VidyaIcon from "@mui/icons-material/AutoAwesome";
import PatternIcon from "@mui/icons-material/Texture";
import WavesIcon from "@mui/icons-material/Waves";

import { CameraFiles } from "./CameraFiles";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, ToggleButton, Tooltip } from "@mui/material";

const cameraFiles = CameraFiles();
const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#000000",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: `"Courier","Arial", monospace`,
  },
  card: {
    backgroundColor: "#c5ccb6 !important",
  },
});

const App = () => {
  var photoData = shuffle(cameraFiles);

  // var photoData = shuffle(cameraFiles).slice(0, 100);

  const [allPhotos] = useState(photoData);
  const [selectedPhoto, setSelectedPhoto] = useState(allPhotos[Math.floor(Math.random() * allPhotos.length)]);

  const getRandomPhoto = () => {
    console.log("click");
    setSelectedPhoto(allPhotos[Math.floor(Math.random() * allPhotos.length)]);
  };

  const [isSariMode, setSariMode] = useState(false);

  const toggleMode = () => {
    setSariMode(!isSariMode);
    console.log(isSariMode);
  };

  return (
    <>
      <div className="App" style={{ height: "100vh", width: "100vw" }}>
        <ThemeProvider theme={theme}>
          {/* <div
            style={{
              color: "white",
              position: "absolute",
              top: "0.5em",
              left: "0em",
              zIndex: "10000",
            }}
          >
            <Tooltip title="prairie patterns: some simple patterns made from plants of the prairie">
              <Button>
                <GrassIcon />
              </Button>
            </Tooltip>
          </div> */}

          <div
            style={{
              position: "absolute",
              bottom: "0.5em",
              right: "0em",
              zIndex: "10000",
            }}
          >
            <Tooltip title="made by vidya giri">
              <Button target="_blank" rel="noreferrer" href="https://vidyagiri.com">
                <VidyaIcon />
              </Button>
            </Tooltip>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "0.5em",
              left: "0em",
              zIndex: "10000",
            }}
          >
            <Tooltip title="new prairie pattern">
              <Button onClick={getRandomPhoto}>
                <PatternIcon />
              </Button>
            </Tooltip>
          </div>

          <div
            style={{
              position: "absolute",
              top: "0.5em",
              right: "0.5em",
              zIndex: "10000",
            }}
          >
            <Tooltip title="toggle view">
              <ToggleButton
                // color={"primary"}
                size={"small"}
                value={isSariMode}
                selected={isSariMode}
                onClick={toggleMode}
                aria-label="toggle pattern view"
              >
                <WavesIcon />
              </ToggleButton>
            </Tooltip>
          </div>

          <Scene
            isSariMode={isSariMode}
            allPhotos={allPhotos}
            selectedPhoto={selectedPhoto}
            onClick={getRandomPhoto}
            // visiblePhotos={visiblePhotos}
          />
          <Loader />
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
