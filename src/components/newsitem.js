
export default function NewsItem(props) {

    return (
        <>
            <div className="container" >
                <div className="card mt-8">
                    <img className="card-img-top" src={props.imageUrl === null ?  "https://cdn.vox-cdn.com/thumbor/yp7AIEGWC_9j8P-zBTbaUbmLULQ=/85x70:2429x1536/1200x628/filters:focal(1270x800:1271x801)/cdn.vox-cdn.com/uploads/chorus_asset/file/25619505/Setapp_Mobile_Focused_Work.png"
                     : props.imageUrl }
                        style={{ height: "10rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title.slice(0, 34)}</h5>
                        <p className="card-text">{props.description.slice(0, 70)}</p>

                        <a href={props.newsurl} target="_blank"  rel="noreferrer">
                            <button type="button" className="btn btn-sm btn-dark" data-toggle="tooltip"
                                data-placement="top" title={props.description}>
                                Read more
                            </button>
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}