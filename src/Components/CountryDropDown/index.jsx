 import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Typography } from "@mui/material";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Slide from '@mui/material/Slide';
import React, { use, useContext, useEffect } from "react";
import { useState } from 'react';
import { MyContext } from "../../App";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const context=useContext(MyContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab,setSelectedTab]=useState(null);
  const [countryList,setCountryList]=useState([]);
  // Debug
  console.log("Context countryList:", context.countryList);
  console.log("Local countryList:", countryList);

  const selectCountry=(index,country)=>{
    setSelectedTab(index);
    setIsOpenModal(false);
    context.setselectedCountry(country);
  }
  useEffect(()=>{
    console.log("useEffect running, context data:", context.countryList);
    setCountryList(context.countryList);
  },[context.countryList]);

  const filterList=(e)=>{
    const keyword=e.target.value.toLowerCase();
    console.log("Search keyword:", keyword);
    console.log("Original data to filter:", context.countryList);
    if(keyword !==''){
      const filterList=context.countryList.filter((item)=>{
        console.log("Checking item:", item);
    
        return item.country.toLowerCase().includes(keyword);
        
      });
      setCountryList(filterList);
      console.log("Filtered results:", filterList);

  
    }else{
      setCountryList(context.countryList);
    }
    
  }
  return (
    <>
      <Button className="countrydrop" onClick={()=>setIsOpenModal(true)}>
        <div className="info flex flex-col ">
          <span className="label">Your Location</span>
          <span className="name">{context.selectedCountry !== ""
    ? (
        context.selectedCountry.length > 10
          ? context.selectedCountry.substring(0, 10) + "..."
          : context.selectedCountry
      )
    : "Select Location"}</span>
          
        </div>
        <span className="ml-auto">
         
          <FaAngleDown></FaAngleDown>
        </span>
      </Button>
      <Dialog slots={{ transition: Transition }} open={isOpenModal} onClose={()=>setIsOpenModal(false)}className="locationModal">
        <Typography variant="h5">Choose Your Location</Typography>
        <Typography variant="body1" component="p">
    Enter your Address and we will specify the offer for your area.
  </Typography>
  <Button className="close_button" onClick={()=>setIsOpenModal(false)}><AiOutlineCloseSquare /></Button>
        <div className="headerSearch  modalSearch ">
          <input type="text" placeholder="Search your area..." onChange={filterList} />
          <Button type="submit">
            <IoSearchSharp></IoSearchSharp>
          </Button>
        </div>
        <ul className="countryList">
          {
            countryList?.length!==0 && countryList?.map((item,index)=>{
              return(
                <li key={index} ><Button onClick={()=>selectCountry(index,item.country)}
                className={`${selectedTab===index?'active':''}`}>{item.country}</Button></li>

              )
            })
          }
           
           
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropDown ;
