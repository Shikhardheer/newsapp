import React,{useState,useEffect} from "react"
import NavItem from "./NavItem";
import './Nav.css'

function Nav(props){
    function changedata1(){
        props.setdata(props.data1)
    }
    function changedata2(){
        props.setdata(props.data2)
    }
    function changedata3(){
        props.setdata(props.data3)
    }
    function changedata4(){
        props.setdata(props.data4)
    }
    function changedata5(){
        props.setdata(props.data5)
        console.log(props.data5,"data")
    }
    return (
        <div className="Nav">
            <div className="text">
                INDIA TODAY
            </div>
            <NavItem callfun={changedata1} Nav={"All"}></NavItem>
            <NavItem callfun={changedata2} Nav={"Apple"}></NavItem>
            <NavItem callfun={changedata3} Nav={"Tesla"}></NavItem>
            <NavItem callfun={changedata4} Nav={"Business"}></NavItem>
            <NavItem callfun={changedata5} Nav={"TechCrunch"}></NavItem>
            <NavItem callfun={changedata1} Nav={"Wall Street"}></NavItem>
        </div>
    )
}
export default Nav;
