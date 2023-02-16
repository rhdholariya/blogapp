import dynamic from 'next/dynamic'
import { useState } from 'react'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]


export default function AddPost() {
  const [bodydata, setBodydata] = useState({})

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  
  const getData = (e) => {
    if(e.target.name == "thumbnail"){
      console.log("called");
      const file = e.target.files[0];
      convertToBase64(file)
      .then((e)=>{
        setBodydata((prev)=>({ ...prev, thumbnail: e}))
      })
      // console.log(base64);
      
    }
    else{
      setBodydata((prev)=>({ ...prev, [e.target.name]: e.target.value}))
    }
    
  }

  const handledata = (e) => {
    e.preventDefault()
    console.log(bodydata);
    fetch('http://localhost:3000/api/blogpost',{
        method:'POST',
        body : JSON.stringify(bodydata)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <div className='container'>
      <div className='col-lg-6 m-auto'>
        <form method="post" onSubmit={handledata}>
          <div>
            <label>Post Title</label>
            <input type="text" onChange={getData} name="posttitle" />
          </div>
          <div>
            <label>Page Title</label>
            <input type="text" onChange={getData} name="pagetitle" />
          </div>
          <div>
            <label>Meta Description</label>
            <input type="text" onChange={getData} name="metadescription" />
          </div>
          <div>
            <label>URL structure</label>
            <input type="text" onChange={getData} name="urlstructure" />
          </div>
          <div>
            <label>Author name</label>
            <input type="text" onChange={getData} name="authorname" />
          </div>
          <div>
            <label>Select Category</label>
            <input type="text" onChange={getData} name="selectcategory" />
          </div>
          <div>
            <label>alt text</label>
            <input type="text" onChange={getData} name="alttext" />
          </div>
          <div>
            <label>Publish Date</label>
            <input type="date" onChange={getData} name="Publishdate" />
          </div>
          <div>
            <label>thumbnail</label>
            <input type="file" onChange={getData} name="thumbnail" />
          </div>
          <QuillNoSSRWrapper 
            modules={modules} 
            formats={formats} 
            value={bodydata.bodyvalue}
            onChange={(value) => setBodydata((prev)=>({ ...prev, bodyvalue: value}))} 
          />
          <button className='mt-3'>click me</button>
        </form>

      </div>
    </div>
  );
}