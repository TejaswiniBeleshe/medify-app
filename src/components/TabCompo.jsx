import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
//import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function Tabcompo({check}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" value="1"/>
        <Tab label="Item Two" value="2" />
        <Tab label="Item Three" value="3" />
        <Tab label="Item Four" value="4"/>
        <Tab label="Item Five" value="5"/>
        <Tab label="Item Six" value="6"/>
        <Tab label="Item Seven" value="7"/>
      </Tabs>
    </Box>
         <TabPanel value="1">Item One <h1>Hello how are u</h1></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item four</TabPanel>
        <TabPanel value="5">Item five</TabPanel>
        <TabPanel value="6">Item six</TabPanel>
        <TabPanel value="7">Item Three</TabPanel>
    </TabContext>
    </Box>
  );
}