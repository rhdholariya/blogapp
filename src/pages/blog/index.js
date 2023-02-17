import Bloglist from "@/components/bloglist";
import { useEffect, useState } from "react";

export default function blog() {
    const [bloglist , setbloglist] = useState([])
    let data;
     useEffect(()=>{
       data =  fetch('https://veenom.in/api/blogpost')
        .then(res => res.json())
        .then(data => {
            setbloglist(data)
            console.log(Array.isArray(data));
            console.log(data);
        })
        .catch((err)=>console.log(err))
     },[data])

  return (
    <div className="container">
      <div className="row">
       {bloglist.map((e,index)=>{
         return(
           <Bloglist data={e} key={index}/>
         )
       })}
    </div>
    </div>
  );
}
