/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React,{ Component } from 'react';
import Axios from "axios";
class Questionuploadbox extends React.Component{
    constructor(props){
        super()
        this.state={
            posts:[]
        }

        if(this.state.cource==="GATE" && this.state.branch==="ECE"){
            Axios.get("http://localhost:3002/ece").then((response) => {
                this.setState({
                  posts:response.data
                })
              });
        }
        else{
            Axios.get("http://localhost:3002/eee").then((response) => {
                this.setState({
                  posts:response.data
                })
              });
        }
    }

  
    render(){
        const text=this.state.posts.map((n)=>n.question)
        console.log(text)
      
        return(

                <div>
                    <h1>{this.props.cource}</h1>
                    <h1>{this.props.branch}</h1>
                    <h1>{this.props.option}</h1>


                    <div>
                       {   this.state.posts.map((n)=> (

                        <div style={{flex:1,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <h1>{n.question}</h1>
                        <h1>{n.option1}</h1>
                        <h1>{n.option2}</h1>
                        <h1>{n.option3}</h1>
                        <h1>{n.option4}</h1>
                        <h1>{n.rightanswer}</h1>
                        </div>

                            
                       ))}
                    </div>

                    <div style={{flex:1,flexDirection:'row',marginTop:'25%'}}>
                        <input style={{width:'50%'}} placeholder="Enter Question"/>
                        <input  style={{width:'50%'}}  placeholder="Enter Option-1"/>
                        <input  style={{width:'50%'}}  placeholder="Enter Option-2"/>
                        <input  style={{width:'50%'}}  placeholder="Enter Option-3"/>
                        <input  style={{width:'50%'}}  placeholder="Enter Option-4"/>
                        <input  style={{width:'50%',marginBottom:'5%'}}  placeholder="Enter Rightansewr"/>
                        
                        <button >Upload to Database</button>
                    </div>
                </div>

        )
    }
}
export default Questionuploadbox;