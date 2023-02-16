// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "./mongoose"
import blog from "./blogschema"



export default async function handler(req, res) {
  dbConnect();
  if (req.method == 'POST') {
    const blogpost = await new blog(JSON.parse(req.body))
    blogpost.save()
    await res.status(201).json({ success: true, data: blogpost })
  }
  else if (req.method == 'GET') {
    const blogpost = await blog.find({});

    try {
      res.send(blogpost);
    } catch (error) {
      response.status(500).send(error);
    }

  }
}
