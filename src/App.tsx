import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import "./assets/scss/main.scss";

import { useBoardStore } from "./stores/useBoardStore";
import { BoardState, BoardStateInterface} from "./types/BoardState";

import {  usePanelStore } from "./stores/usePanelStore";
import Modal from 'react-modal';



import { Board } from './components/Board/Board';
import { ThemeRoller } from './components/ThemeRoller/ThemeRoller';

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { StatesTree } from './components/StatesTree/StatesTree';
import { StatePanel } from './components/StatePanel/StatePanel';



import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



console.clear();

Modal.setAppElement("#root")



function App() {

  const {
    root,
    currentState,
    currentShapes,
  } = useBoardStore();


  const {
    leftPanelSize,
    rightPanelSize,
    setSizes
  } = usePanelStore();



  useEffect(() => {
    console.log('%cApp.tsx::71', 'color: #f00; font-size: 1rem', 'RENDER APP');
  });



  let resizeTimeout: NodeJS.Timeout | null = null;

  const handleResize = (sizes: number[]) => {
    if (resizeTimeout) clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      setSizes({ leftPanelSize: sizes[0], rightPanelSize: sizes[1] });
    }, 300);
  };

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };





  return (
    <div className="App">






      <div className="header">Chessboxing</div>
      <div style={{ height: "100vh", width: "100vw" }}>
        <PanelGroup
          direction="horizontal"
          onLayout={(sizes) =>
            handleResize(sizes)
          }
        >
          <Panel defaultSize={leftPanelSize}>

            <div className="left_panel_container">
              <ThemeRoller/>
              <Board/>
              <pre style={
                {
                  textAlign: "left",
                  fontSize: "0.8rem",
                }
              }>
                {JSON.stringify(currentShapes, null, 2)}
                {JSON.stringify(currentState.getJson(), null, 2)}
              </pre>
            </div>
          </Panel>
          <PanelResizeHandle className="w-2 bg-blue-800"/>
          <Panel defaultSize={rightPanelSize}>
            <div>


              <StatesTree />

              <StatePanel />
            </div>
          </Panel>
        </PanelGroup>
      </div>


    </div>
  );
}

export default App;
