import React , {Component} from 'react'
import './Voting.css'
class Voting extends Component{
    state={
        count:0
        
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div className='p'>
                <h2><center>Voting</center></h2>
                <br/>

                <div className='pp'>
                    <div className='ss'>
                            
                   <lable>C</lable>
                    <button onClick={this.handleIncrement}>Vote</button> {this.state.count}
                       </div>
                       <br/>

                       
                          <div className='ss'>
                   <lable>C++</lable>
                    <button onClick={this.handleIncrement}>Vote</button> {this.state.count}
                       </div>
                       <br/>


                       <div className='ss'>
                   <lable>Java</lable>
                    <button onClick={this.handleIncrement}>Vote</button> {this.state.count}
                       </div>
                       <br/>

                       <div className='ss'>
                   <lable>Python</lable>
                    <button onClick={this.handleIncrement}>Vote</button> {this.state.count}
                       </div>
                       <br/>
                       </div>
            </div>
        )
    }
}
export default Voting;