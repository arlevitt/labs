import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApiUrls } from '../constants/Urls';
import { addLabs } from '../actions/LabsActions';


import LabsInfusionInput from './LabsInfusionInput';

const labsInputs = [
    { type: 'date', name: 'date', label: 'Date', defaultValue: new Date().toISOString().substring(0, 10) },
    { type: 'number', name: 'platelets', label: 'Platelets', range: '20-350', infusionCheckbox: 'Received Platelets' },
    { type: 'number', name: 'hemoglobin', label: 'Hemoglobin', range: '8.0-17.5', infusionCheckbox: 'Received Transfusion' },
    { type: 'number', name: 'whitecount', label: 'White Count', range: '2.0-10.0' },
    { type: 'number', name: 'anc', label: 'Abs Neutrophils', range: '1.5-8.0', infusionCheckbox: 'Received Neupogen Shot' },
    { type: 'number', name: 'magnesium', label: 'Magnesium', range: '1.5-2.5', infusionCheckbox: 'Received Infusion' },
    { type: 'number', name: 'potassium', label: 'Potassium', range: '3.6-5.2', infusionCheckbox: 'Received Infusion' },
];

class Labs extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(event, range) {
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
        this.props.addLabs(ApiUrls.LABS, this.state);
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
                        <form id="labs-form" className="form-horizontal" onSubmit={this.handleSubmit}>
                            {
                                labsInputs.map(labsInput => {
                                    return (
                                        <LabsInfusionInput  key={labsInput.name}
                                                            type={labsInput.type}
                                                            name={labsInput.name}
                                                            label={labsInput.label}
                                                            valueProperty={labsInput.name}
                                                            range={labsInput.range}
                                                            defaultValue={labsInput.defaultValue}
                                                            infusionCheckbox={labsInput.infusionCheckbox}
                                                            onFieldChange={this.handleFieldChange}
                                        />
                                    );
                                })
                            }

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

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLabs: (url, state) => dispatch(addLabs(url, state))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Labs);