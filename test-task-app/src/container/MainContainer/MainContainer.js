import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import './MainContainer.css';
import {fetchFilms} from "../../store/actions/filmsActions";

class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchFilms()
    }

    onClickFilmHandler = id => {
      this.props.history.push('/films/' + id);
    };

    render() {
        console.log(this.props.films);

        const films = this.props.films ? this.props.films.map(film => {
           return (
               <div
                   key={film._id}
                   className="FilmsItem"
                   onClick={() => this.onClickFilmHandler(film._id)}
               >
                   <div className="filmsItemImage">
                       <img src={"http://localhost:9000/uploads/" + film.image} alt="image"/>
                   </div>
                   <div className="FilmsItemText">
                       <h2>{film.name}</h2>
                   </div>
               </div>
           )
        }) : null;

        return (
            <Fragment>
                <h1 className="FilmsTitle">Фантастика</h1>
                <hr/>
                <div className="Films">
                    {films}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    films: state.films.films
});

const mapDispatchToProps = dispatch => ({
    fetchFilms: () => dispatch(fetchFilms())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);