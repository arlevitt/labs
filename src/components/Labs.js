import React, { Component } from 'react';

import LabsInfusionInput from './LabsInfusionInput';

class Labs extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(event) {
        const target = event.target;
        const name = target.name;
        let value = null;
        switch (target.type) {
            case ('checkbox'):
                value = target.checked;
                break;
            case ('number'):
                value = parseFloat(target.value);
                break;
            default:
                value = target.value;
        }


        this.setState({[name]: value}, function () {
            //alert(name + ' is now set to: ' + this.state.platelets);
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        // checks if login is successful
            // if (true) {
            //     this.props.onSubmit(true);
            // }
    }
    render() {
        return (
            <div id="login-form" className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 "></div>
                    <div className="col-sm-6">
                        <div className="col-sm-2 control-label"></div>
                        <div className="col-sm-10">
                            <h1>Clinic Labs Input</h1>
                        </div>
                        <form className="form-horizontal" onSubmit={this.handleSubmit}>
                            <LabsInfusionInput  type="date"
                                                name="date"
                                                label="Date"
                                                valueProperty={this.state.date || new Date().toISOString().substring(0, 10)}
                                                onFieldChange={this.handleFieldChange}/>

                            <LabsInfusionInput  type="number"
                                                name="platelets"
                                                label="Platelets"
                                                valueProperty={this.state.platelets}
                                                onFieldChange={this.handleFieldChange}
                                                showInfusionCheckbox={'Received Platelets'} />

                            <LabsInfusionInput  type="number"
                                                name="hemoglobin"
                                                label="Hemoglobin"
                                                valueProperty={this.state.hemoglobin}
                                                onFieldChange={this.handleFieldChange}
                                                showInfusionCheckbox={'Received Transfusion'} />

                            <LabsInfusionInput  type="number"
                                                name="whitecount"
                                                label="White Count"
                                                valueProperty={this.state.whitecount}
                                                onFieldChange={this.handleFieldChange} />

                            <LabsInfusionInput  type="number"
                                                name="anc"
                                                label="Abs Neutrophils"
                                                valueProperty={this.state.anc}
                                                onFieldChange={this.handleFieldChange}
                                                showInfusionCheckbox={'Neupogen Shot'} />

                            <LabsInfusionInput  type="number"
                                                name="magnesium"
                                                label="Magnesium"
                                                valueProperty={this.state.magnesium}
                                                onFieldChange={this.handleFieldChange}
                                                showInfusionCheckbox={'Received Infusion'} />

                            <LabsInfusionInput  type="number"
                                                name="potassium"
                                                label="Potassium"
                                                valueProperty={this.state.potassium}
                                                onFieldChange={this.handleFieldChange}
                                                showInfusionCheckbox={'Received Infusion'}/>

                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-7 text-center">
                                    <button type="submit" className="btn btn-primary">Submit Results</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        )
    }
};

export default Labs;
//export default connect(mapStateToProps, mapDispatchToProps)(Article);