import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApiUrls } from '../constants/Urls';
import { addLabs, labsFetchData, labsClearData } from '../actions/LabsActions';

import LabsInputField from './LabsInputField';

const labsInputs = [
    { type: 'date', name: 'date', label: 'Date', isRequired: true },
    { type: 'number', name: 'platelets', label: 'Platelets', range: '20-350', infusionCheckbox: 'Received Platelets' },
    { type: 'number', name: 'hemoglobin', label: 'Hemoglobin', range: '13.5-17.5', infusionCheckbox: 'Received Transfusion' },
    { type: 'number', name: 'whitecount', label: 'White Count', range: '2.0-10.0' },
    { type: 'number', name: 'anc', label: 'Abs Neutrophils', range: '1.5-8.0', infusionCheckbox: 'Received Neupogen Shot' },
    { type: 'number', name: 'magnesium', label: 'Magnesium', range: '1.5-2.5', infusionCheckbox: 'Received Infusion' },
    { type: 'number', name: 'potassium', label: 'Potassium', range: '3.6-5.2', infusionCheckbox: 'Received Infusion' },
];

class LabsInputForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if (!this.props.isLoggedIn) {
            return;
        }

        if (this.props.match.params.labsId) {
            this.props.fetchData(ApiUrls.LABS + '/' + this.props.match.params.labsId);
        } else {
            this.props.clearData();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addLabs(ApiUrls.LABS, this.state);
    }

    render() {
        var labsObj = this.props.labs && this.props.labs[0] != undefined ? this.props.labs[0] : {};
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
                                        <LabsInputField {...labsInput}
                                                            key={labsInput.name}
                                                            valueProperty={labsInput.name}
                                                            defaultValue={labsObj[labsInput.name] || ''}
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
    console.log('mapStateToProps labs');
    return {
        labs: state.labs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLabs: (url, state) => dispatch(addLabs(url, state)),
        fetchData: (url) => dispatch(labsFetchData(url)),
        clearData: () => dispatch(labsClearData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabsInputForm);