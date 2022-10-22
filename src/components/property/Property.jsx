import "./property.css"

const Property = (props)=>{
    return(
        <div className="propertyItem">
            <img className="propertyImg" src={props.img} alt="img" />
            <div className="pTitles">
                <h1 className="pTitle1">{props.pTitle1}</h1>
                <h2 className="pTitle2"> {props.pTitle2}</h2>
            </div>
        </div>
    )
}

export default Property;