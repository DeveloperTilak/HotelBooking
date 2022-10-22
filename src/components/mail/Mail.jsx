import "./mail.css"
import Button  from "../button/Button";

const Mail = ()=>{
    return(
        <div className="mail">
            <h1>Save time, save money!</h1>
            <p>Sign up and we'll send to you the best deals.</p>
            <div className="mailContainer">
                <input type="text" placeholder="Your Email" />
                <Button button = "Send" />
            </div>


        </div>
    )
};
export default Mail;