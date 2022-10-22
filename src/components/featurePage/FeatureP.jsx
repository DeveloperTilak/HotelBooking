import "./featureP.css"

const FeatureP = (props)=>{
    return(
        <div className="fpItem">
            <img className="fpImg" src= {props.img} alt="img" />
                <span className="fpName">{props.fpName}</span>
                <span className="fpCity"> {props.city}</span>
                <span className="fpPrice">{props.price}</span>

            <div className="fpRating">
                <button className="fpRating1">{props.fpRating1}</button>
                <span className="fpRating2">{props.fpRating2}</span>
            </div>
        </div>
    )
};

export default FeatureP;
