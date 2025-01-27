import { useState } from "react"
import "../Styles/Login.css"
import { useNavigate } from "react-router-dom"

const Heading = ()=>(
    <div className="login-heading-text">
    <div className="heading-text poppins-extrabold"><strike >Long Transaction Hours</strike> </div>
    <div className="heading-text poppins-extrabold">
        <span className="imp-text">30sec Transcation Assurence </span>
    </div>
    </div>
)



const SignUpCard = () =>{ 
    const navigator = useNavigate() ;
    const [passwordErr , setPasswordErr] = useState(false );
    const [Name ,setName] = useState(false) ;
    const [gmail , setgmail] = useState(false) ;
    const [Result , setResult] = useState("" ) ;
    const [FormData, setFormData] = useState({
        name:"" ,
        gmail:"",
        password:"" ,
        confirmpassword:"" 
    }) ;
    const HandleInput = (e)=>{
        const {name , value} = e.target ;
        setFormData((prevFormData)=>({
            ...prevFormData , [name]:value 
        }
        ))
        console.log(FormData[name]) ;
    }
    const HandleSignUp = ()=>{
        console.log(FormData);
        if (FormData.name.length === 0) {
            setName(true);
            return;
        }
        const gmailRegex = /^[a-z0-9]+@gmail\.com$/;
        if (!gmailRegex.test(FormData.gmail)) {
            setgmail(true);
            return;
        }
        console.log("call");
        if (FormData.password.length < 6 || FormData.password !== FormData.confirmpassword) {
            setPasswordErr(true);
            return;
        }
        
        fetch("http://127.0.0.1:5000/api/v1/career/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(FormData)
        })
        .then(response => {
            if (response.ok) {
                return response.json(); 
            } else {
                throw new Error('Error occurred: ' + response.statusText);
            }
        })
        .then(data => {
            setResult("Valid User");
        })
        .catch(error => {
            setResult(error.message);
        });
        
    }
    return(
    <div className="login-main-div">
        <div className="poppins-bold" style={{textAlign:"center"}}>SignUp</div>
        <label htmlFor="name" className="poppins-light">Name</label>
        <input id="name" type="text" name="name" className={Name?"error-pwd":"input-gmail"} onInput={HandleInput} placeholder="Ex.Narasimha Settipalli"> 
        </input>
        <label htmlFor="gmail" className="poppins-light">Gmail</label>
        <input id="gmail" type="text" name="gmail" className={gmail?"error-pwd":"input-gmail"} onInput={HandleInput} placeholder="Ex.narasimhas9490@gmail.com"> 
        </input>
        <label htmlFor="password" className="poppins-light" placeholder="Enter Password" >Password</label>
        <input id="password" type="password" name="password" className={passwordErr ? "error-pwd":"input-pwd"}  onInput={HandleInput} ></input>
        <label htmlFor="confirm-password" className="poppins-light" placeholder="Enter Password"  >Confirm Password</label>
        <input id="confirm-password" name="confirmpassword" type="password"className={
            passwordErr ? "error-pwd":"input-pwd" 
        }  onInput={HandleInput} ></input>
        <button className="join-hands log-btn" onClick={HandleSignUp}>Get My Catalog</button>
        {
            (Result.length != 0 && (<div className="poppins-light">{Result}</div>))
        }
        <div className="poppins-light">Already Have An Account ?</div>
        <button onClick={()=>{
            navigator("/login") ;
        }} className="log-btn own-catalog">Join Hands</button>
    </div>
) 
}

const SignUp = ()=>(
    <div className="login-div">
    <Heading />
    <SignUpCard />
    </div>
)

export default SignUp ;

