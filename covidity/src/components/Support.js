import React from 'react'
import Header from './Header'
import './styles/fonts.css'
import './styles/support.css'

function Support() {

    const style_cards={height:"200px",width:"300px",margin:"20px"}
    return (
        <div>
            <Header/>

            <div className="support__body" style={{}}>
                
                <div className="support__body__cards" style={{display:"flex",flexWrap:'wrap',justifyContent:"space-evenly",marginBottom:"40px"}}>
                    
                <a href="support_oxygen_tank" style={{textDecoration:"none"}}>  
                    <div className="support__body__cards_1" style={{display:"flex",flexDirection:"row",height:"250px",width:"450px",margin:"40px",marginBottom:"0px",backgroundColor:"#3490dc",borderRadius:"10px", }}>
                        <span style={{fontFamily:"Krona One, sans-serif", color:"white", fontSize:"40px",margin:"40px", marginRight:"0px"}}>OXYGEN TANKS</span>
                    <img src="oxygen-tank.png" alt="" style={{height:"70%", maxWidth:"40%", marginLeft:"-30px", marginTop:"50px" }}/>
                    </div>
                </a>

                

                <a href="support_blood" style={{textDecoration:"none"}}>  
                    <div className="support__body__cards_1" style={{display:"flex",flexDirection:"row",height:"250px",width:"450px",margin:"40px",marginBottom:"0px",backgroundColor:"#3490dc",borderRadius:"10px", overflow:"hidden" }}>
                        <span style={{fontFamily:"Krona One, sans-serif", color:"white", fontSize:"40px",margin:"40px", marginRight:"0px"}}>BLOOD/ PLASMA</span>
                    <img src="blood-test.png" alt="" style={{height:"65%", maxWidth:"40%", marginLeft:"35px", marginTop:"50px" }}/>
                    </div>
                </a>

                
                    
                    <a href="support_medical" style={{textDecoration:"none"}}> 
                    <div className="support__body__cards_2" style={{display:"flex",flexDirection:"row",height:"250px",width:"450px",margin:"40px",marginBottom:"0px",backgroundColor:"#3490dc",borderRadius:"10px",  overflow:"hidden" }}>
                        <span style={{fontFamily:"Krona One, sans-serif", color:"white", fontSize:"40px",margin:"40px", marginRight:"0px"}}>MEDICAL SUPPLIES</span>
                    <img src="pills.png" alt="" style={{height:"70%", width:"800px", marginLeft:"-20px", marginTop:"50px"}}/>
                    </div>
                
                    </a>

                    <a href="support_food" style={{textDecoration:"none"}}>  
                    <div className="support__body__cards_1" style={{display:"flex",flexDirection:"row",height:"250px",width:"450px",margin:"40px",marginBottom:"0px",backgroundColor:"#3490dc",borderRadius:"10px", }}>
                        <span style={{fontFamily:"Krona One, sans-serif", color:"white", fontSize:"40px",margin:"40px", marginRight:"0px"}}>FOOD</span>
                    <img src="fast-food.png" alt="" style={{height:"70%", maxWidth:"40%", marginLeft:"30px", marginTop:"50px" }}/>
                    </div>
                    </a>

                    <a href="support_gadgets" style={{textDecoration:"none"}}>  
                    <div className="support__body__cards_1" style={{display:"flex",flexDirection:"row",height:"250px",width:"450px",margin:"40px",marginBottom:"0px",backgroundColor:"#3490dc",borderRadius:"10px",overflow:"hidden" }}>
                        <span style={{fontFamily:"Krona One, sans-serif", color:"white", fontSize:"40px",margin:"40px", marginRight:"0px"}}>GADGETS</span>
                    <img src="smart-watch.png" alt="" style={{height:"70%", maxWidth:"40%", marginLeft:"10px", marginTop:"50px" }}/>
                    </div>
                    </a>

                    <a href="support_funds" style={{textDecoration:"none"}}>  
                    <div className="support__body__cards_1" style={{display:"flex",flexDirection:"row",height:"250px",width:"450px",margin:"40px",marginBottom:"0px",backgroundColor:"#3490dc",borderRadius:"10px", }}>
                        <span style={{fontFamily:"Krona One, sans-serif", color:"white", fontSize:"40px",margin:"40px", marginRight:"0px"}}>FUNDS</span>
                    <img src="donation.png" alt="" style={{height:"60%", maxWidth:"40%", marginLeft:"30px", marginTop:"50px" }}/>
                    </div>
                    </a>

                    <a href="support_emergency" style={{textDecoration:"none"}}> 
                    <div className="support__body__cards_3" style={{display:"flex",flexDirection:"column",height:"250px",width:"450px",margin:"40px",marginBottom:"0px",backgroundColor:"#3490dc",borderRadius:"10px",  overflow:"hidden" }}>
                        <span style={{fontFamily:"Krona One, sans-serif", color:"white", fontSize:"40px",margin:"40px", marginRight:"0px", marginBottom:"0px"}}>EMERGENCY</span>
                    <img src="ambulance.png" alt="" style={{maxWidth:"37%", marginLeft:"150px"}}/>
                    </div>
                    </a>
                    
                    <a href="support_contacts" style={{textDecoration:"none"}}> 
                    <div className="support__body__cards_4" style={{display:"flex",flexDirection:"row",height:"250px",width:"450px",margin:"40px",marginBottom:"0px",backgroundColor:"#3490dc",borderRadius:"10px",  overflow:"hidden" }}>
                        <span style={{fontFamily:"Krona One, sans-serif", color:"white", fontSize:"40px",margin:"40px", marginRight:"0px"}}>HELPLINE NUMBERS</span>
                    <img src="support.png" alt="" style={{height:"60%", maxWidth:"70%", marginLeft:"-5px", marginTop:"100px"}}/>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Support
