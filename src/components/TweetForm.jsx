import React,{useEffect, useState} from "react";
import Button from '@mui/material/Button';
// import Image from './images/comm-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFontAwesome, faFacebookSquare,faLinkedin,faTwitterSquare,faGithubSquare,faStackOverflow  } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas  } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope , faComment , faRepeat , faHeart , faBarsStaggered,faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faFontAwesome);



// for users to post tweets.

function TweetForm(props){  
    return(
        <section className="text-gray-500 pt-3  flex px-3 ">
            <img className="rounded-full w-10 h-10 mr-3" src={props.user_img} alt="#" />
            <div className="w-full flex-col items-center justify-center  ">
                <div className="flex flex-row">
                    <h3 className="pr-4 pl-1 text-white font-bold">{props.username}</h3>   {/*profile name*/}
                    <span className="flex" ><p>{props.tag}</p><p className="pl-3">. 23h</p></span>
                </div>
                
                <span className="text-white pt-2 ">{props.description}</span>
                    <img className="flex justify-center  border-white hover:shadow-white    pt-2" src={props.img} alt="#" />
                    <div>  {/* this is for the comment section*/}

                    </div>
                    <div className="text-white-700 text-sm flex my-1  justify-between  ">
                        <span className=" flex items-center w-16 px-3 py-2  justify-space hover:text-white duration-300">
                            <a  className="flex w-10 justify-between items-center- " href="#">
                                    <FontAwesomeIcon icon={faComment} />
                                    <p className="ml-1.5">{props.comments}</p>
                                
                            </a>
                            
                        </span>
                        <span className="flex items-center w-16 px-3 py-2  justify-space hover:text-white duration-300">
                            <a className="flex flex-row items-center justify-between " href="#">
                                
                                    <FontAwesomeIcon icon={faRepeat} />
                                    <p className="ml-1.5">
                                    {props.retweets}
                                </p>
                                
                            </a>
                        </span>
                        <span className="flex items-center w-16 px-3 py-2  justify-space hover:text-white duration-300">
                            <a className="flex items-center " href="#">
                                <FontAwesomeIcon icon={faHeart} />
                                    <p className="ml-1.5">{props.likes >= 10000 ? `${(props.likes / 1000).toFixed(1)}K` : props.likes}
                                </p>
                                
                            </a>
                            
                        </span>
                        <span className="flex items-center w-16 px-3 py-2  justify-space hover:text-white duration-300">
                            <a  className="flex items-center "href="#">
                                <FontAwesomeIcon icon={faBarsStaggered} rotation={270} />
                                    <p className="ml-1.5">{props.stats >= 10000 ? props.stats>=1000000?`${(props.stats / 1000000).toFixed(1)}M`:`${(props.stats / 1000).toFixed(1)}K` : props.stats}</p>
                                </a>
                        </span>
                        <span className=" items-center w-4 ml-6 mr-1 pr-5 pl-0.5 py-2  hover:text-white duration-300">
                            <a className="flex items-center " href="https://www.google.com"><FontAwesomeIcon icon={faArrowUpFromBracket} /></a>
                        </span>
                    </div>
                    
            </div>
            <hr class="my-4 px-full border-t border-gray-700"/>
        </section>
    )
};

export default TweetForm

