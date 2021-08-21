import React, { Component } from 'react'
import Modal from '../Modal'
import createBrowserHistory from '../../history'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'
import { Link } from 'react-router-dom'

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    renderActions() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment >
                <button
                    onClick={() => this.props.deleteStream(id)}
                    className='ui button negative'> Delete </button>
                <Link to='/' button className='ui button'>Cancel</Link>
            </React.Fragment>
        )
    }
    renderContent() {
        if (!this.props.stream) {
            return ' are you sure you want to delete the streams'
        }
        return `are you sure you want to delete the streams with title:  ${this.props.stream.title}`
    }
    render() {
        return (
            <Modal
                title='Delete streams'
                content={this.renderContent()}
                action={this.renderActions()}
                onDismiss={() => createBrowserHistory.push('/')}
            />
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)

