import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function blogpostDetail() {
    const [blogdetail,setblogdetail] = useState()
    const routers = useRouter()
    const id = routers.query
    console.log(routers.query.page);
    
    useEffect(()=>{
      
      if(routers.query.page !== "undefined"){
        console.log("called");
        fetch(`http://localhost:3000/api/blogdetail/?id=${id.page}`)
        .then(res => res.json())
        .then(data => setblogdetail(data))
        .catch((err)=>console.log(err))
      }
      
      },[routers])
    

  return (
    <>
    {blogdetail && 
    ( <div className="col-lg-6 bg-white p-3 m-auto">
       <h1 className="category">{blogdetail?.posttitle}</h1>
       <img src={`${blogdetail?.thumbnail}`} alt="" width="100%"/>
       <p>{blogdetail?.bodyvalue}</p>
    </div>)
    }
    </>
  );
}