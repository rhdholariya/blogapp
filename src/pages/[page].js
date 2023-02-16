import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function blogpostDetail() {
    const [blogdetail,setblogdetail] = useState()
    const routers = useRouter()
    const id = routers.query
    console.log(routers.query.page);
    if(routers.query.page !== "undefined"){
    useEffect(()=>{
      
      
        console.log("called");
        fetch(`http://localhost:3000/api/blogdetail/?id=`+ id.page)
        .then(res => res.json())
        .then(data => setblogdetail(data))
        .catch((err)=>console.log(err))
      
      
      },[routers])
    }

  return (
    <div>
       <div className="category">{blogdetail?.posttitle}</div>
       <p class="card-text">{blogdetail?.pagetitle}</p>
    </div>
  );
}