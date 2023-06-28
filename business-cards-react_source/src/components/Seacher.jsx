import { Component } from "react";

class Searcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchText: "",
          searchedUsers:this.props.searchedUsers,
      }        
    }

    render() {
        return ( 
        <div>
            <input 
                placeholder='Please type name to filter...'
                type='text'
                style={{width: '50%',fontSize: '1.25rem',minHeight: '2.0rem',marginBottom: '1.5rem'}}
                onChange={ event => {
                    this.state.searchText = event.target.value.toLowerCase();
                    const newUsers = this.state.searchedUsers?.filter( user => {
                        const fullName = `${user.name}`
                        if(fullName.toLowerCase().replace(' ','').includes(this.state.searchText.replace(' ',''))) {
                          return true;
                        }
                        return false;
                      });
                    this.props.setSearchedUsers(newUsers)

                }}            
            />
            {/* <button type='button'
                onClick={() => {

                }}
            > Search</button> */}
        </div>
        );
      }

}      

export default Searcher;
