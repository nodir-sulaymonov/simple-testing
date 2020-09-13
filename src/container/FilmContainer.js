import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import {connect} from 'react-redux';

import * as allList from "../action/listFilm";


class FilmContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            opening_crawl: '',
            name: '',
            email: '',
            message: '',
            error: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let p = new Promise((resolve) => {
            console.log(resolve)
            setTimeout(resolve, 1000)

        })
        p.then(() => {
            // eslint-disable-next-line no-useless-concat
            alert('Спасибо за отзыв\n' + 'Name: ' + this.state.name + '\n' + 'Email: ' + this.state.email + '\n' + 'Message: ' + this.state.message)
            this.setState({
                email: '',
                name: '',
                message: ''
            });

        })
    }

    handleClick = (title, opening_crawl) => {
        this.setState({
            title: title,
            opening_crawl: opening_crawl
        })
    }

    componentDidMount() {
        this.props.fetchFilmsList();
    }

    render() {
        console.log(this.props.lists.results);
        return (
            <div className="section_blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 left__side">
                            <ul className="ul_list">
                                {this.props.lists.results ? (this.props.lists.results.map((todo, index) =>
                                    <div key={index}>
                                        <li onClick={() => this.handleClick(todo.title, todo.opening_crawl)}>
                                            {todo.title}
                                        </li>
                                    </div>
                                )) : <div></div>}
                            </ul>
                        </div>
                        <div className="col-lg-8 right__side">
                            <h1>{this.state.title}</h1>
                            <p>{this.state.opening_crawl}</p>
                        </div>
                    </div>


                    <div className="form-block">
                        <form onSubmit={this.handleSubmit}>
                            <div className="position-relative form-group">
                                <input name="name"
                                       type="text"
                                       className="text-field form-control mb-3 bg_grey border-2 py-3"
                                       placeholder="Name"
                                       value={this.state.name}
                                       onChange={this.handleChange}
                                       required="required"/>
                            </div>
                            <div className="position-relative form-group">
                                <input name="email"
                                       type="email"
                                       className="text-field form-control mb-3 bg_grey border-2 py-1"
                                       placeholder="Email" value={this.state.email}
                                       onChange={this.handleChange}
                                       required="required"/>
                            </div>
                            <div className="position-relative form-group">
                                <textarea name="message"
                                          type="text"
                                          className="text-field form-control mb-3 bg_grey border-2 py-1"
                                          placeholder="Message" value={this.state.message}
                                          onChange={this.handleChange}
                                          required="required"/>
                            </div>
                            <p className="text-center mb-0">
                                <input type="submit"
                                       className="btn btn-primary px-5 text-uppercase py-3 f_12_14 border-0 d-inline-block"
                                       value="Submit Now"/></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lists: state.films.allList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilmsList: () => dispatch(allList.fetchFilmsList()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer);
