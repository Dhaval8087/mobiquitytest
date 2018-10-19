import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSeasons } from '../../actions/seasonactions';
import {
    Card, Button, CardHeader, CardFooter, CardTitle, CardBody, Row, Container, Label, Col
} from 'reactstrap';
import _ from 'underscore';
import './seasonlist.css';
import Spinner from '../common/spinner';
class SeasonList extends Component {
    componentDidMount() {
        this.props.getSeasons();
    }
    onCardClick = (e) => {
        alert(e.target.id);
    }
    renderSeasonList = () => {
        const seasons = this.props.seasons;
        if (typeof seasons == "undefined" || seasons.Seasons.length === 0)
            return null;

        return _.map(seasons.Seasons, (item) => {
            return (
                <Card className="cardmargin" onClick={this.onCardClick} >
                    <CardHeader className="cardheader" id={item.season}>{item.season}</CardHeader>
                </Card>
            )
        })
    }
    render() {
        return (
            <Spinner isload={this.props.isLoading}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2>F1 world champions</h2>
                        </Col>
                    </Row>
                    <Row md={12}>
                        {this.renderSeasonList()}
                    </Row>
                </Container>
            </Spinner>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        seasons: state.seasonReducer.seasons,
        isLoading: state.seasonReducer.isLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSeasons: bindActionCreators(getSeasons, dispatch)
    }
}
SeasonList.contextTypes = {
    router: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(SeasonList);
