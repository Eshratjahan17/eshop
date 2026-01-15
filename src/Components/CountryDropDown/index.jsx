import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Typography } from "@mui/material";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Slide from '@mui/material/Slide';
import React from "react";
import { useState } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button className="countrydrop" onClick={()=>setIsOpenModal(true)}>
        <div className="info flex flex-col ">
          <span className="label">Your Location</span>
          <span className="name">Bangladesh</span>
          
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
          <input type="text" placeholder="Search your area..." />
          <Button type="submit">
            <IoSearchSharp></IoSearchSharp>
          </Button>
        </div>
        <ul className="countryList">
            <li><Button onClick={()=>setIsOpenModal(false)}>Bangladesh</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Pakistan </Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Nepal</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Bangladesh</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Pakistan </Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Nepal</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Bangladesh</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Pakistan </Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Nepal</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Bangladesh</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Pakistan </Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Sri Lanka</Button></li>
            <li><Button onClick={()=>setIsOpenModal(false)}>Nepal</Button></li>
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropDown;
