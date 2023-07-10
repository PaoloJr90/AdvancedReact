import { Component } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import "./card.scss";
import EditCard from "./EditCard";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "Not Specified",
      position: "Not Specified",
      phone: "Not Specified",
      email: "Not Specified",
      photo: "/AdvancedReact/business-cards-react/assets/image/no-photo.png",
      show: true,
      isPopupOpen:false,
      isFavorite: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      id: props.id || state.id,
      name: props.name || state.name,
      position: props.position || state.position,
      phone: props.phone || state.phone,
      email: props.email || state.email,
    };
  }

  deleteCard = () => {
    this.setState({ show: false });

    const cards = document.querySelectorAll(".card");
    if (cards.length === 1) {
      document.querySelector(".message").style.display = "inline";
    }
  };

  toggleFavorite = () => {
    this.setState((prevState) => ({
      isFavorite: !prevState.isFavorite,
    }));
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({...this.state, [name]: value})
  }  

  showCard = () => {
    this.setState({ show: true ,isPopupOpen:false, });
  }

  render() {
    const starIcon = this.state.isFavorite ? <BsStarFill /> : <BsStar />;
    return (
      <>
      {this.state.show && (
        <div className="card">
          <div className="card__img"
                onClick={() => {
                  this.setState({...this.state
                    , show: false
                    ,isPopupOpen: true})
                }}             
          >
            <img src={this.state.photo} alt="photo" />
          </div>
          <p className="card__name">{this.state.name}</p>
          <h2 className="card__position">{this.state.position}</h2>
          <a className="card__phone" href={`tel:${this.state.phone}`}>
            {this.state.phone}
          </a>
          <a className="card__mail" href={` mailto: ${this.state.email} `}>
            {this.state.email}
          </a>
          <button className="card__btn" onClick={this.deleteCard}>
            Delete
          </button>
          <a className="card__favorite" onClick={this.toggleFavorite}>
            {starIcon}
          </a>
        </div>
      )}
      {
          this.state.isPopupOpen && <EditCard showCard={this.showCard}/>   
      }  
      </>
    );
  }
}

export default Card;
