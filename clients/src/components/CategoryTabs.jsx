import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { UserContext } from '../context/UserContext.js';
import CategoryDashboard from './CategoryDashboard';

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CategoryTabs() {
  const { offering, seeking, interests} = useContext(UserContext)
  const [tabIndex, setTabIndex] = useState(0);
  const categories = ["Interests", "Seeking", "Offering"]

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 6 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabIndex} onChange={handleChange} >
            {categories.map((cat, index) => (
                <Tab label={cat} {...a11yProps(index)} />
            ))}
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <CategoryDashboard category="Interests" 
                           preSelected={["Wissenschaft", "Technologie"]} 
                          users={interests}/>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <CategoryDashboard category="Seeking" 
                            preSelected={["Kontakt zu Schulen", "Kontakt zu Schüler:innen"]} 
                            users={seeking}/>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <CategoryDashboard category="Offering" 
                            preSelected={["Kontakt zu Schulen", "Kontakt zu Schüler:innen"]} 
                            users={offering}/>
      </TabPanel>
    </Box>
  );
}
