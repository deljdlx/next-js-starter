import React, {useState, useEffect} from 'react';


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export const TabDemo: React.FC = () => {




    const [tabIndex, setTaxIndex] = React.useState('1');
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTaxIndex(newValue);
    };



    return (
        <div className="state_panel">



            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={tabIndex}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                        <Tab label="TAB 1" value="1" />
                        <Tab label="TAB 2" value="2" />
                        <Tab label="TAB 3" value="3" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                        <h2>TAB 1</h2>
                        Lorme ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquam aspernatur atque autem
                    </TabPanel>



                    <TabPanel value="2">
                        <h2>TAB 2</h2>
                        Lorme ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquam aspernatur atque autem
                    </TabPanel>



                    <TabPanel value="3">
                        <h2>TAB 3</h2>
                        Lorme ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquam aspernatur atque autem
                    </TabPanel>

                </TabContext>
            </Box>





        </div>
    )
};