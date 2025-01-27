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



const LoginCard = () =>{ 
    const [Result , setResult] = useState("") ;
    const [FormData, setFormData] = useState({
        gmail:"",
        password:""
    }) ;
    const HandleInput = (e)=>{
        const {name , value} = e.target ;
        setFormData((prevFormData)=>({
            ...prevFormData , [name]:value 
        })) ;
        console.log(FormData[name] ) ;
    }
    const HandleSignIn = async ()=>{
        const body = JSON.stringify(FormData);

        fetch("http://127.0.0.1:5000/api/v1/career/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: body,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.text().then((text) => {
                        throw new Error(text);
                    });
                }
            })
            .then((data) => {
                setResult(JSON.stringify(data));
            })
            .catch((error) => {
                setResult(error.message);
                console.error("Error:", error);
            });
        
    }
    const navigate = useNavigate() ;
    return(
    <div className="login-main-div">
        <div className="poppins-bold" style={{textAlign:"center"}}>Login</div>
        <label for="gmail" className="poppins-light">Gmail</label>
        <input id="gmail" type="text" className="input-gmail" name="gmail" placeholder="Ex.narasimhas9490@gmail.com" onInput={HandleInput}> 
        </input>
        <label for="password" className="poppins-light" placeholder="Enter Password" >Password</label>
        <input id="password" type="password" className="input-pwd" name="password" onInput={HandleInput}></input>
        <button className="join-hands log-btn" onClick={HandleSignIn}  >Join Hands</button>
        {
           Result.length != 0 &&  <div className="poppins-light">{Result}</div>
        }
        <div className="poppins-light">Not Have An Account</div>
        <button  className="log-btn own-catalog"
        onClick={()=>{
            navigate("/signup") ;
            window.scrollTo(0,0) ;
        }}>Get My Catalog</button>
    </div>
) 
}

const Login = ()=>(
    <div className="login-div">
    <Heading />
    <LoginCard />
    </div>
)

export default Login ;

