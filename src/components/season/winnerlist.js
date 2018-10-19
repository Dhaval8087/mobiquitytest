import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getWinners, getChampion } from '../../actions/seasonactions';
import { Container, Table, Row,Col } from 'reactstrap';
import Spinner from '../common/spinner'
import _ from 'underscore';
class WinnerList extends Component {
    componentDidMount() {
        const season = this.props.match.params.season;
        if (typeof season != "undefined") {
            this.props.getWinners(season);
            this.props.getChampion(season);
        }
    }
    loadWinners = () => {
        const winners = this.props.winners;
        if (typeof winners == "undefined" || winners.length === 0)
            return null;

        return _.map(winners, (item, index) => {
            let driverInfo = item.Results[0].Driver;
            let constructorInfo = item.Results[0].Constructor;
            let results = item.Results[0];
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.raceName}</td>
                    <td>{driverInfo.number}</td>
                    <td>{driverInfo.givenName} &nbsp; {driverInfo.familyName}</td>
                    <td>{constructorInfo.name}</td>
                    <td>{results.laps}</td>
                    <td>{results.grid}</td>
                    <td>{item.time}</td>
                    <td>{results.status}</td>
                    <td>{results.points}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <Spinner isload={this.props.isLoading}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2>Winner List of {this.props.match.params.season}</h2>
                        </Col>
                    </Row>

                    <Table striped responsive size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Race Name</th>
                                <th>No</th>
                                <th>Driver</th>
                                <th>Constructor</th>
                                <th>Laps</th>
                                <th>Grid</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.loadWinners()}
                        </tbody>
                    </Table>
                </Container>
            </Spinner>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        winners: state.seasonReducer.winners,
        isLoading: state.seasonReducer.isLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getWinners: bindActionCreators(getWinners, dispatch),
        getChampion: bindActionCreators(getChampion, dispatch)
    }
}
WinnerList.contextTypes = {
    router: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(WinnerList);
