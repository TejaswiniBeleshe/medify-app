import React,{useEffect,useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import styles from "./Tab.module.css"
//import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let date = d.getDate();
let year = d.getFullYear();
let daysInMonth = new Date(year,month+1,0).getDate();
console.log(daysInMonth)

let arrDay = ['Sun','Mon','Tues','Wedn','Thur','Fri','Sat'];
let arrMonth= ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let res = [];


export default function Tabcompo({handleBook,ele}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

useEffect(()=>{
let currDay = day;
let dates = date;
for(let i=0;i<7;i++){
  if(i === 0){
    currDay+=1;
    dates+=1;
    res.push('Today');
  }else if(i === 1){
    currDay+=1;
    dates+=1;
    res.push('Tomorrow')
  }
  else{
  
    if(date < daysInMonth){
    
      res.push(`${arrDay[currDay]}, ${dates} ${arrMonth[month]}`)
      dates+=1;
      currDay+=1;
    }else if(dates === daysInMonth){
      dates = 1;
      res.push(`${arrDay[currDay]}, ${dates} ${arrMonth[month]}`)
      currDay+=1;
    }
  }
    if(currDay>=7){
      currDay = 0;
    }   

  }

  },[])

  return (

    <Box sx={{ width: '100%', typography: 'body1',border:"1px solid blue" }} >
      <TabContext value={value}>
      <Box sx={{ maxWidth: { xs: 320, sm:700}, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {/* <Tab label="Item One" value="1"/>
        <Tab label="Item Two" value="2" />
        <Tab label="Item Three" value="3" />
        <Tab label="Item Four" value="4"/>
        <Tab label="Item Five" value="5"/>
        <Tab label="Item Six" value="6"/>
        <Tab label="Item Seven" value="7"/> */}
        {
          res.length?res.map((ele,i)=>{
            return <Tab label={ele} value={i} />
          }):""
        }
      </Tabs>
    </Box>
    {
      res.length?res.map((val,i)=>{
        return <TabPanel value={i}>
            <div className="w-100 d-flex flex-column justify-content-between">
                <div class={`${styles.eachDiv} w-100 d-flex`}>
                    <h6 className='p-2'>morning</h6>
                    <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>11:30 AM</button>
                    {/* <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>11:12</button>
                    <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>11:12</button> */}
                </div>
                <div class={`${styles.eachDiv} w-100 d-flex`}>
                  <h6 className='p-2'>Afternoon</h6>
                  <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>12:00 PM</button>
                    <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>12:30 PM</button>
                    <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>01:30 PM</button>
                    <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>02:00 PM</button>
                    <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>02:30 PM</button>
                </div>
                <div class={`${styles.eachDiv} w-100 d-flex`}>
                <h6 className='p-2'>Evening</h6>
                <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>06:00 PM</button>
                    <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>06:30 PM</button>
                    <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>07:00 PM</button>
                    <button className={styles.timeBtn} onClick={(e)=>handleBook(e,ele)}>07:30 PM</button>
                </div>
            </div>
        </TabPanel>
      }):""
    }
         
         {/* </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item four</TabPanel>
        <TabPanel value="5">Item five</TabPanel>
        <TabPanel value="6">Item six</TabPanel>
        <TabPanel value="7">Item Three</TabPanel> */}
    </TabContext>
    </Box>
  );
}