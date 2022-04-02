import React , {Component} from 'react'

class Change extends Component{
    state={
        name:'Welcome'
       }
       handleChangeName =  () =>
        {
         if(this.State.name == 'Welcome')
         {
            this.setState({name:'Hello World'})
         }
         else
         {
            this.setState({name:'Welcome'})
         }

        }
        
    render(){
        return(
            <div>
                
                {this.state.name}
                <button onClick={this.handleChangeName}>Change</button>
                

                 
            </div>
        )
    }
}
export default Change;