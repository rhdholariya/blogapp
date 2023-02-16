import dbConnect from "./mongoose"
import blog from "./blogschema"

export default async function handler (req, res) {
    if(req.method == "GET")
    {
        console.log(req.query.id);
        if(req.query.id !== "undefined"){
            const blogdetail = await blog.findOne({posttitle: req.query.id});
            try{
                res.send(blogdetail)
                console.log("get")
            }catch(err){
                response.status(500).send(err);  
            }
        }
        
    }
}