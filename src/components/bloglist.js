import Link from "next/link";

export default function Bloglist(props) {
    return (
        <div className="col-lg-4 col-md-6">
            <Link href={`/${props.data.urlstructure}`}>


                <div className="card">
                    <img src={`${props.data.thumbnail}`} alt={`${props.data.alttext}`}/>
                    <div className="card-body">
                        <div className="category">{props.data.selectcategory}</div>
                        <p className="card-text">{props.data.posttitle}</p>
                    </div>
                </div>

            </Link>
        </div>
    );
}