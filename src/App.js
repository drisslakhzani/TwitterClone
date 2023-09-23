import { useState } from 'react';
import './App.css';
import data from "./components/data/data"
import NavBar from './components/NavBar';
import TWeetForm from './components/TweetForm.jsx'
// import Tweet from "./components/Tweet"
// import TweetList from "./components/TweetList"
// import { useState } from 'react';

function App() {
  
  let tweets=data.map((a)=>(
        <section className='w-2/5'>
              <TWeetForm key={a.id} username={a.fullname} tag={a.tagname} description={a.description} img={a.desc_img} comments={a.comments} retweets={a.retweets} likes={a.likes} stats={a.stats} user_img={a.user_img} />
              
        </section>
          
  ))
  return (

    <div className="bg-black w-screen h-screen flex flex-row mx-24  ">
        <NavBar user_img={data[0].user_img} username={data[0].fullname} tag={data[0].tagname}/>
        
        {tweets}
        

             {/* <TweetList />
    //         <Tweet /> */}
    </div>
  )
};

export default App;
