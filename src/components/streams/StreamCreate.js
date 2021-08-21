import React, { Component } from 'react'
import { connect } from "react-redux";
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

export class StreamCreate extends Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }
    render() {
        // console.log(this.props);
        return (
            <div className='ui content'>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createStream })(StreamCreate)