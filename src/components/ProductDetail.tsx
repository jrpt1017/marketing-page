import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProductDetail = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%'
      }}
    // display="flex"
    >
      <Typography variant="h3">
        Audio-Technica ATH-MSR7
      </Typography>
      <Typography variant="body1">
        2017 Best Headphones of the Year Award Winner
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 10 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="DESCRIPTION" {...a11yProps(0)} />
          <Tab label="DETAILS" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginTop: 10,
          }}
        >
          $59.99
        </Typography>

        {/* Select a color */}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Typography variant="caption">COLORS</Typography>
          <Select
            // value={age}
            // onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="black">Black</MenuItem>
            <MenuItem value="brown">Brown</MenuItem>
          </Select>
        </FormControl>

        {/* Add to cart button */}
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
      >
        <Typography>
          Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Mauris sit amet massa vitae.
          Vel fringilla est ullamcorper eget nulla facilisi etiam. Donec pretium vulputate sapien nec
          sagittis aliquam malesuada. Eget mi proin sed libero. Amet consectetur adipiscing elit duis tristique sollicitudin.
          Pretium vulputate sapien nec sagittis. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.
          Amet facilisis magna etiam tempor orci eu lobortis elementum. Eu turpis egestas pretium aenean pharetra magna ac placerat
          vestibulum. Viverra accumsan in nisl nisi scelerisque eu.
          Egestas purus viverra accumsan in.
        </Typography>
      </TabPanel>
    </Box >
  );
};

export default ProductDetail;