    import { faBell, faClipboardList, faEllipsis, faHome, faLayerGroup, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons"
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import {  faFontAwesome, faTwitch, faTwitter, } from '@fortawesome/free-brands-svg-icons'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { fas  } from '@fortawesome/free-solid-svg-icons'
    import { faEnvelope , faComment , faRepeat , faHeart , faBarsStaggered,faArrowUpFromBracket,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
    library.add(fas, faFontAwesome);
    


export default function NavBar(props){
return(
    <section className="  w-1/6  h-full ">
            <FontAwesomeIcon className="pt-3 ml-3 text-white text-3xl" icon={faTwitter}/>
            <div className="text-white flex flex-col justify-center ">
                <a className="mt-2 flex justify-start items-center rounded-full hover:bg-gray-600 mr-3 ml-1 w-fit pr-1 px-3 py-2 text-xl hover:font-bold duration-200" href="#">
                    <span>
                        <FontAwesomeIcon  icon={faHome}/>
                    </span>
                    <p className="pl-5 capitalize pr-2">home</p>
                </a>
                <a className="mt-2 flex justify-start items-center rounded-full hover:bg-gray-600 mr-3 ml-1 w-fit pr-1 px-3 py-2 text-xl hover:font-bold duration-200" href="#">
                    <span >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <p className="pl-5 capitalize pr-2 ">explore</p>
                </a>
                <a className="mt-2 flex justify-start items-center rounded-full hover:bg-gray-600 mr-3 ml-1 w-fit pr-1 px-3 py-2 text-xl hover:font-bold duration-200" href="#">
                    <span>
                        <FontAwesomeIcon icon={faBell} />
                    </span>
                    <p className="pl-5 capitalize pr-2">notifications</p>
                </a>
                <a className="mt-2 flex justify-start items-center rounded-full hover:bg-gray-600 mr-3 ml-1 w-fit pr-1 px-3 py-2 text-xl hover:font-bold duration-200" href="#">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                    <p className="pl-5 capitalize pr-2">messages</p>
                </a>
                <a className="mt-2 flex justify-start items-center rounded-full hover:bg-gray-600 mr-3 ml-1 w-fit pr-1 px-3 py-2 text-xl hover:font-bold duration-200" href="#">
                    <span>
                        <FontAwesomeIcon icon={faClipboardList}/>   
                    </span>
                    <p className="pl-5 capitalize pr-2">lists</p>
                </a>
                <a className="mt-2 flex justify-start items-center rounded-full hover:bg-gray-600 mr-3 ml-1 w-fit pr-1 px-3 py-2 text-xl hover:font-bold duration-200" href="#">
                    <span>
                        <FontAwesomeIcon icon={faUserGroup}/>
                    </span>
                    <p className="pl-5 capitalize pr-2">communities</p>  
                </a>
                <a className="mt-2 flex justify-start items-center rounded-full hover:bg-gray-600 mr-3 ml-1 w-fit pr-1 px-3 py-2 text-xl hover:font-bold duration-200" href="#">
                    <span>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </span>
                    <p className="pl-5 capitalize pr-2">verified</p>
                </a>
                <a className="mt-2 flex justify-start items-center rounded-full hover:bg-gray-600 mr-3 ml-1 w-fit pr-1 px-3 py-2 text-xl hover:font-bold duration-200" href="#">
                    <span>
                        <FontAwesomeIcon icon={faUser}/>
                    </span>
                    <p className="pl-5 capitalize pr-2">profile</p>
                </a>
                <a className="mt-2 flex justify-start items-center rounded-full hover:bg-gray-600 mr-3 ml-1 w-fit pr-1 px-3 py-2 text-xl hover:font-bold duration-200" href="#">
                    <span>
                        <FontAwesomeIcon icon={faLayerGroup}/>
                    </span>
                    <p className="pl-5 capitalize pr-2">more</p>
                </a>
            </div>
            <button className="mt-3 py-4 w-full text-white  capitalize font-bold bg-blue-500 rounded-full hover:bg-blue-600 duration-200">post</button>
            <div className=" w-full flex flex-row items-center   mt-10 text-white rounded-full hover:bg-gray-600 py-2  px-2 duration-200">
                <img className=" rounded-full w-10 h-10 mr-3" src={props.user_img} alt="#" />
                <div className=" w-full flex flex-row items-center justify-between  ">
                    <aside>
                        <p className="font-bold">{props.username}</p>
                        <p className=" text-gray-500">{props.tag}</p>
                    </aside>
                    <FontAwesomeIcon icon={faEllipsis}/>
                </div>
                
            </div>
    </section>
)
}
