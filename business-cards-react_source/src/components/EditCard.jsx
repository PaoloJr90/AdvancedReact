import React, { Component } from 'react'
import './popupCard.scss'
import CardsContext from './CardsContext';

class EditCard extends Component {

    constructor(props) {
        super(props);
        const {updateUser} = props;

        this.state = {
            name: updateUser.name,
            position: updateUser.position,
            phone: updateUser.phone,
            email: updateUser.email,
            photo: "/AdvancedReact/business-cards-react/assets/image/no-photo.png",
            isPopupOpen: true,            
            // searchedUsers: updateUser.searchedUsers,
            // setSearchedUsers: updateUser.setSearchedUsers,
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({...this.state, [name]: value})
    }    

    render() {
        return (
          
            <div className="card" style={{zIndex: 9999}}>
            <div className="card__img">
               <img src={this.state.photo} alt="photo"/>
           </div>
       <form style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridGap:'1rem'}}>

           <label name='name'>Name:</label>
           <input name='name' type="text" value={this.state.name} onChange={this.handleChange}/>
           
           <label name='position'>Position:</label>
           <input name='position' type="text" value={this.state.position} onChange={this.handleChange}/>
               
           <label name='phone'>Phone:</label>
           <input name='phone' type="text"  value={this.state.phone} onChange={this.handleChange}/>
           
           <label name='email'>Email: </label>
           <input name='email' type="text"  value={this.state.email} onChange={this.handleChange}/>
           <CardsContext.Consumer>  
            {({searchedUsers, setSearchedUsers}) => (
                <button className="card__btn" onClick={() => {
                    const newUsers = searchedUsers?.map((oldUser) => {
                    if(this.state?.email === oldUser.email) {
                    return this.state;
                    }
                    return oldUser ;          
                    });
                    console.log('newUsers', newUsers)                    
                    setSearchedUsers(newUsers);                
                }}>
                    Update
                </button> 
            )}
           </CardsContext.Consumer>
           <button style={{marginLeft:'10px'}} className="card__btn" 
               onClick={() => {
                   this.setState({
                       ...this.state,
                       isPopupOpen: false,
                   })
                   
               }}
           >
               Cancel
           </button>
       </form>
            </div>
           
        )
    }
}

export default EditCard