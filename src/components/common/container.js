import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import PropTypes from 'prop-types';
import ErrorBoundary from '../common/errorboundary';
import Loader from 'react-loader-spinner'
export default class MainContainer extends Component {
    onAttributeClick = () => {
        this.context.router.history.push('/');
    }
    render() {
        return (
            <ErrorBoundary>
                <Navbar color="gray" fixed={'top'} expand="md">
                    <NavbarBrand>F1 Race App</NavbarBrand>
                    <Nav navbar>
                        <NavItem onClick={this.onAttributeClick} className="logocls">Seasons</NavItem>
                    </Nav>
                </Navbar>
                <div className="navchild">
                    {this.props.isload ? <Loader
                        type="Watch"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    /> : this.props.children}

                </div>
            </ErrorBoundary>
        )
    }
}
MainContainer.contextTypes = {
    router: PropTypes.object.isRequired,
};
