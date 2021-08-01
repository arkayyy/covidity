import React,{useEffect, useState} from 'react'
import Lottie from 'react-lottie'
import {fetchPosts} from '../redux/index'
import {connect} from 'react-redux'
import {useCookies} from 'react-cookie'
import loadingAnimation from '../images/loadingAnimation.json'
import errorAnimation from '../images/errorAnimation.json'
import './styles/Forum.css'

import {likePost} from '../redux/index'


function ForumPosts({posts,getPosts,noOfLikes,doLikePost}) {
  const [cookies, setCookies]=useCookies(["user"])
  const [noOfLikes1,setNoOfLikes]=useState(null)
  const [noOfComments1,setNoOfComments]=useState(null)
  var today=new Date()
    const style_survey_text={ color:"#23374D", fontFamily:"Krona One, sans-serif", fontSize:"14px"}
    const animOptions={
        loop: true,
        autoplay: true,
      animationData: loadingAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

    const errAnimOptions={
        loop: true,
        autoplay: true,
      animationData: errorAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

    useEffect(()=>{
      getPosts()
    },[])


    return (
        <div style={{display:"flex",flexDirection:"column",width:"60%"}}>


      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"}}><span style={{ color:"#23374D", fontFamily:"Krona One, sans-serif", fontSize:"2rem",marginTop:"10px"}}>SHARE YOUR THOUGHTS</span><a href=""><img onClick={()=>{window.location.replace('/forum')}} src="refresh-icon.png" style={{width:"50px"}}/></a></div>
        
        <div>

        <div className="forum__body1" style={{flexDirection:"row",top:"0",borderRadius:"10px",display:"flex",  alignItems:"center" ,flexWrap:"wrap",flex:"0.7",margin:"20px",minWidth:"40%",maxHeight:"80vh",overflowY:"scroll",overflowX:"hidden"}} >
        {posts.loading?(<Lottie 
                        options={animOptions}
                        height={400}
                        width={400}
                    />):(posts.error?(<><Lottie options={errAnimOptions} height={400} width={400}/></>):(<></>))}
           
       { posts && posts.posts && posts.posts.map((elem)=>
        
        <div className="card" style={{width:"30%",flexWrap:"wrap",alignItems:"center", justifyContent:"center", margin:"10px", marginColor: "#85C3FF", flexDirection:"column"}}>
             <div className="box">
            <div className="content" style={{...style_survey_text,width:"100%"}}>
            <div className="title" style={{fontSize:"1.1rem", height:"100px",width:"100%"}}>
                <p style={{margin:"10px"}}>{(elem.title).slice(0,20)+"..."}</p>
            </div>
            <div className="post_body"style={{color:"85C3FF", padding:"10px"}}>
                {elem.body} 
            </div>
<div className="bon1" style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
            <div className="like" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} >
            <a style={{cursor:"pointer"}}><img src="love.png" alt="" style={{width:"33px"}} onClick={()=>{doLikePost(elem._id,cookies.usernameCovidity,today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()+' '+today.getHours()+':'+today.getMinutes()+today.getSeconds())}} /></a>
            <p style={{marginTop:"11px",margin:"10px"}}>{elem.likes.length}</p>
            </div>
            <div style={{margin:"10px"}}>||</div>
            <div className="comment" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <a style={{cursor:"pointer"}}><img src="chat.png" alt="" style={{width:"45px"}}/></a>
              <p style={{marginTop:"15px",margin:"10px"}}>{elem.comments.length}</p>
            </div>

</div>
            </div>

             </div>
        </div>)}

        


           </div>

           </div>

           </div>
    )
}

const mapStateToProps=(state)=>{
  return{
      posts: state.fetchedPosts,
      noOfLikes: state.noOfLikes
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      getPosts: ()=>dispatch(fetchPosts()),
      doLikePost:(likedBy,dateTime)=>dispatch(likePost(likedBy,dateTime))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForumPosts)

