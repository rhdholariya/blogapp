import mongoose from "mongoose"

const blogschema = mongoose.Schema({
    pagetitle:{
        type:  "string",
    },
    posttitle:{
        type:  "string",
    }
})

module.exports = mongoose.models.blog || mongoose.model("blog", blogschema)