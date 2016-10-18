/**
 * Created by DT274 on 2016/10/18.
 */
import React, { Component, PropTypes } from 'react';
import NoteList from './NoteList';

export default class Notes extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        notes: PropTypes.array.isRequired
    }

    render(){
        return (
            <div>
                <p>对{this.props.username}评论：</p>
                <NoteList notes={this.props.notes}/>
            </div>
        )
    }
}