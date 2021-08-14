import React from 'react';

class TaskBoard extends React.Component {

    constructor(props){
        super(props);
        this.removeBoard = this.removeBoard.bind(this);
    }

    removeBoard(event){
      //  alert('This board will be removed');

        event.preventDefault();
        this.props.deleteBoard(this.props.boardName);

    }

    render() {
        return (<div className="col-4">
                <div> {this.props.boardName}</div>
                <button onClick={this.removeBoard}>-</button>
                </div>
            );
    }
}

export default TaskBoard;