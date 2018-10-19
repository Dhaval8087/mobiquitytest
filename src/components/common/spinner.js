import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

export default class Spinner extends Component {
    render() {
        return (
            <div>
                {this.props.isload ? <div className="spinner"><Loader
                    type="Watch"
                    color="#00BFFF"
                    height="100"
                    width="100"
                /></div> : this.props.children}
            </div>
        )
    }
}
