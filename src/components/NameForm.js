import React from 'react';


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.WAComplianceYes = this.WAComplianceYes.bind(this);
    }

    handleChange(event) {
        console.log(this);
        //console.log( this.props.name + ":"+ event.target.value);
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.props.addBoard(this.state.value);
    }

    WAComplianceYes(event) {
        event.preventDefault();

        let practitionerForm = document.createElement('form')

    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} className="name-form">
                <div>{this.props.cat}</div>
                <div>{this.props.dog}</div>
                <label>
                    Type name of the Board :
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div className="CPDform">
                <form>
                    <h2>Do you need WA Compliance Reporting?</h2>
                <input type="button" className="newForm" value="Yes" onChange={this.WAComplianceYes} />
                <input type="button" className="newForm" value="No" />
                </form>
            </div>
            </div>
        );
    }
}

export default NameForm;