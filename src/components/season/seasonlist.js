import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSeasons } from '../../actions/seasonactions';
import {
    Card, CardHeader, Row, Container, Col
} from 'reactstrap';
import _ from 'underscore';
import './seasonlist.css';
import MainContainer from '../common/container';

class SeasonList extends Component {
    componentDidMount() {
        this.props.getSeasons();
    }
    onCardClick = (e) => {
        const { router } = this.context;
        router.history.push({    // use push
            pathname: `/winners/${e.target.id}`
        });
    }
    renderSeasonList = () => {
        const seasons = this.props.seasons;
        if (seasons.length === 0 || seasons.Seasons.length === 0)
            return null;

        return _.map(seasons.Seasons, (item, index) => {
            return (
                <Card className="cardmargin" onClick={this.onCardClick} key={index}>
                    <CardHeader className="cardheader" id={item.season}>{item.season}</CardHeader>
                </Card>
            )
        })
    }
    render() {
        return (
            <MainContainer isload={this.props.isLoading}>
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
            </MainContainer>
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
