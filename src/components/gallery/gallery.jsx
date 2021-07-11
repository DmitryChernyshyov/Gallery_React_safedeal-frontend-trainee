import  './style.css'
// eslint-disable-next-line
export default props => {
    return(
        <div className="gallery-wraper">
            {props.images.map((image)=>{
                return <img src={image.url} key={image.id} alt="" onClick={()=>props.handleimgclick(image.id)}></img>
            })}
        </div>
    )
}