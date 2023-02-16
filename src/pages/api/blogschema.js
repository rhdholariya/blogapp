import mongoose from "mongoose"

const blogschema = mongoose.Schema({
    pagetitle:{
        type:  "string",
        require: true
    },
    posttitle:{
        type:  "string",
        require: true
    },
    metadescription:{
        type:  "string",
        require: true
    },
    urlstructure:{
        type:  "string",
        require: true
    },
    authorname:{
        type:  "string",
        require: true
    },
    selectcategory:{
        type:  "string",
        require: true
    },
    alttext:{
        type:  "string",
        require: true
    },
    Publishdat:{
        type:  "string",
        require: true
    },
    thumbnail:{
        type:  "string",
        require: true
    },
    bodyvalue:{
        type:  "string",
        require: true
    },
    
})

module.exports = mongoose.models.blog || mongoose.model("blog", blogschema)