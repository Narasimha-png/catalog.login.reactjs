import "../Styles/Project.css" ;
import "../Styles/Header.css" ;
const Bitcoin = ()=>(
    <svg className="bitcoin-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M10 8H14C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12M10 8V12M10 8H8.5M10 8V6.5M14 12H10M14 12C15.1046 12 16 12.8954 16 14C16 15.1046 15.1046 16 14 16H10M10 12V16M10 16H8.5M10 16V17.5M13 8V6.5M13 17.5V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="0.672" strokeLinecap="round" stroke-linejoin="round"></path> </g>
        </svg>
);

const PullReq = ()=>(
    <svg className="pullreq" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round">
        </g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clipRule="evenodd" d="M7 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0V8.83ZM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM17 15.17a3.001 3.001 0 1 0 2 0V10.4A5.4 5.4 0 0 0 13.6 5h-.186l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 1 0 1.414-1.414L13.414 7h.186a3.4 3.4 0 0 1 3.4 3.4v4.77ZM17 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="#000000">
            </path></g></svg>
)

const Project = ()=>(
    <div className="project-item">
            {<Bitcoin />}
            <div>
                <p className="poppins-medium">garden.js</p>
                <a href="https://github.com/catalogfi/garden.js" target="__blank" className="github-link">bridge Bitcoin to EVM and vice versa <span >{<PullReq />}</span> </a>
            </div>
    </div>
)

const Projects = ({showProductNav , setProductNav}) =>(
    <>{
       
    }
    <div 
     className="projects-page">
    <div className="all-projects">
    <div className="poppins-semibold" style={{marginLeft:'10px'}}>Products</div>
    <div className="project-list">
        {<Project />}
        {<Project />}
        {<Project />}
    </div>
    <a href="github.com" style={{marginLeft:'10px'}}>View All Projects</a>
    </div>

    <div 
    
    className="empty-div" onClick={()=>{
        setProductNav(false) ;
    }
        
    }></div>
    </div>
    
    </>
)



export default Projects ;