import React from "react";
import { connect } from "react-redux";
import {deleteCard,fetchUser} from "../actions/cardActions";

class Card extends React.Component {

    // state = {user : ""}

    // componentDidMount() {
    //     let user = this.props.match.params.user
    //     this.setState({user:user})
    // }


    componentDidMount() {
        this.props.fetchUser();
    }

    onButtonClick = () => {
        let {id} = this.props.card;
        this.props.deleteCard(id);
        this.props.history.push("/contact"); // card silindikten sonra contact sayfasına yönlendirilir.
    }

    render() {

        const { users } = this.props;
   
        // const {user} = this.state

        return(
            users.map(user => {
                return(
                <div className="ui raised very padded container segment" style={{marginTop:"80px"}} key={user.id}>
                    <h3 className="ui header">{user.name}</h3>
                    <p>{user.email}</p>
                    <button className="ui primary right floated button" onClick={this.onButtonClick}>
                        Delete
                    </button>
                </div>
                )
            })
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    
    let title = ownProps.match.params.user; //url'den gelen user değerini title'a atandı.
    return {
        card : state.cards.find(card => card.title === title), //redux'daki cards array'indeki title değerleri ile url'den gelen title değerininin eşit olması kontrolü yapıldı.
        users : state.users
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        deleteCard : (id) => {dispatch(deleteCard(id))},
        fetchUser: () => {dispatch(fetchUser())}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card);