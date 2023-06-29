import { Component } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import "./card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Not Specified",
      position: "Not Specified",
      phone: "Not Specified",
      email: "Not Specified",
      photo: "/AdvancedReact/business-cards-react/assets/image/no-photo.png",
      show: true,
      isFavorite: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
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

  render() {
    const starIcon = this.state.isFavorite ? <BsStarFill /> : <BsStar />;
    return (
      this.state.show && (
        <div className="card">
          <div className="card__img">
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
      )
    );
  }
}

export default Card;
