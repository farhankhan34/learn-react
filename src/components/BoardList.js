import React from 'react';
import TaskBoard from './TaskBoard';
import NameForm from "./NameForm";


class BoardList extends React.Component {

    constructor(props){
        super(props);
        this.state =  { boardItems : ['Thinking of doing','Will Do next','Working on it','Done wright','Done long time ago']};
        this.addBoard = this.addBoard.bind(this);
        this.deleteBoard = this.deleteBoard.bind(this);
    }

    // This function add a Board into the board list
    addBoard($boardName){
        //alert('Add a board!');

        let temp = this.state.boardItems;
        //temp.push("Another Entry");
        temp.push($boardName);
        this.setState({boardItems: temp });

    }

    deleteBoard($boardName){
        //alert($boardName + " will be deleted")
        //console.log( this.state.boardItems);

        let temp = this.state.boardItems;
        
        let index = temp.indexOf($boardName);

        temp.splice(index, 1);
        this.setState(temp);

        //console.log( this.state.boardItems);

    }

    render() {

       // This map create a child board for each item in the list
        const listItems = this.state.boardItems.map(
            (boardName) =>
                <TaskBoard boardName={boardName} deleteBoard={this.deleteBoard}/>
        );

       


        return (
            <div className="board-list">
                <div className="flex-row">
                    {listItems}
                </div>
                <button onClick={this.addBoard} id="add-board" type="button">+</button>
                <hr/>
                <NameForm addBoard={this.addBoard} dog="ryan" cat="Billi"/>
            </div>
            );
    }
}

export default BoardList;