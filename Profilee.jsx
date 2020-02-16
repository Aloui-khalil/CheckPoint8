import React from 'react'

class Profilee extends React.Component
{

state  = {
    nom: "Sarra",
    src: "./First.png",
    p:"This is Sarra's paragraph."
}


    render()
    {
        return(
            <div>
            <div>
            <button onClick={()=>this.setState({nom:'Sarra',src: "./First.png",p:"This is Sarra's paragraph."})}>Sarra</button>
            <button onClick={()=>this.setState({nom:'Jack',src: "./Second.png",p:"This is Jack's paragraph."})}>Jack</button>
            <button onClick={()=>this.setState({nom:'Daniel',src: "./Third.png",p:"This is Daniel's paragraph."})}>Daniel</button>
            </div>
        <div>
            <h1>{this.state.nom} </h1>
            <img src={this.state.src}/>
            <p>{this.state.p}</p>
        </div>
        </div>
        )
    }
}

export default Profilee

