import React, {Component} from 'react';
import {fetchFilmsById} from "../../store/actions/filmsActions";
import {connect} from "react-redux";
import './Film.css';
import {Col, Row} from "reactstrap";

class Film extends Component {

    componentDidMount() {
        this.props.fetchFilm(this.props.match.params.id)
    }

    render() {

        return (
            <div className="Film">
                {this.props.film ?
                 <div className="FilmItem">
                     <Row>
                         <Col sm={4}>
                             <div className="FilmItemImage">
                                 <img
                                     width="350px"
                                     src={"http://localhost:9000/uploads/" +
                                     this.props.film.image} alt="image"
                                 />
                             </div>
                         </Col>
                         <Col sm={8}>
                             <div className="FilmItemText">
                                 <h3>
                                     <span>Называния: </span>
                                     <strong>{this.props.film.name}</strong>
                                 </h3>
                                 <p>
                                     <span>Год выпуска: </span>
                                     <strong>{this.props.film.year}</strong>
                                 </p>
                                 <p>
                                     <strong>Описание фильма</strong>
                                 </p>
                                 <p>{this.props.film.description}</p>
                             </div>
                         </Col>
                     </Row>
                </div> : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    film: state.films.film
});

const mapDispatchToProps = dispatch => ({
    fetchFilm: (id) => dispatch(fetchFilmsById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Film);