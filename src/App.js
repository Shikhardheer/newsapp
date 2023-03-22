import './App.css';
import News from './components/news/News';
import React,{useState,useEffect} from 'react';
import Nav from './components/navbar/Nav';
var apikey="c82366754f6542b1b11c3b75dc31f6ac"
function App() {
  var [data1,setdata1] = useState("")
  var [data2,setdata2] = useState("")
  var [data3,setdata3] = useState("")
  var [data4,setdata4] = useState("")
  var [data5,setdata5] = useState("")
  var [data,setdata] = useState([])
  async function callapi(link,setdata){
    var data = await fetch(link);
    data = await data.json();
    setdata(data);
    console.log(data,"data")
  }
  useEffect(()=>{
    console.log("inside")
    async function api(){
      await callapi(`https://newsapi.org/v2/everything?q=apple&from=2023-03-21&to=2023-03-21&sortBy=popularity&apiKey=${apikey}`,setdata1)
      await callapi(`https://newsapi.org/v2/everything?q=tesla&from=2023-02-22&sortBy=publishedAt&apiKey=${apikey}`,setdata2)
      await callapi(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apikey}`,setdata3)
      await callapi(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apikey}`,setdata4)
      await callapi(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apikey}`,setdata5)
    }
    api()
      console.log(data1)
  },[])
  useEffect(()=>{
    setdata(data1)
    console.log(data1,"data 1")
  },[data1])
  return (
    <div className="App">
      <Nav data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} setdata={setdata}></Nav>
      <News data={data1}/>
    </div>
  );
}

export default App;
