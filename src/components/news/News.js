import React,{useState,useEffect} from "react"
import Card from "./Card";
import './News.css'

function News(props){
return (<>
<div className="news">
    {
        props.data.articles.map((value,i)=>(
            <Card targetlink={value.url} heading={value.title} desc={value.description} url={value.urlToImage}></Card>
        ))
    }
</div>
</>
)
}
export default News;