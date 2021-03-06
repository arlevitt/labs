import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApiUrls } from '../constants/Urls';
import { labsFetchData, labsAdd, labsUpdate} from '../actions/LabsActions';
import InputFieldUtils from '../utils/InputFieldUtils';

import LabsInputField from './LabsInputField';

export const labsInputs = [
    { type: 'date', name: 'date', label: 'Date', isRequired: true },
    { type: 'number', name: 'platelets', label: 'Platelets', range: '20-350', infusionCheckbox: 'Received Platelets' },
    { type: 'number', name: 'hemoglobin', label: 'Hemoglobin', range: '13.5-17.5', infusionCheckbox: 'Received Transfusion' },
    { type: 'number', name: 'whitecount', label: 'White Count', range: '2.0-10.0' },
    { type: 'number', name: 'anc', label: 'Abs Neutrophils', range: '1.5-8.0', infusionCheckbox: 'Received Neupogen Shot' },
    { type: 'number', name: 'potassium', label: 'Potassium', range: '3.6-5.2', infusionCheckbox: 'Received Infusion' },
    { type: 'number', name: 'magnesium', label: 'Magnesium', range: '1.5-2.5', infusionCheckbox: 'Received Infusion' },
];

class LabsInputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.props.isLoggedIn) {
            return;
        }

        if (this.props.match.params.labsId) {
            this.props.dispatch(labsFetchData(ApiUrls.LABS + '/' + this.props.match.params.labsId));
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.currentLabs) {
            for (var property in newProps.currentLabs) {
                if (newProps.currentLabs.hasOwnProperty(property)) {
                    this.setState({[property]: newProps.currentLabs[property]});
                }
            }
        }
    }

    handleFieldChange(event) {
        console.log('handleFieldChange')
        const name = event.target.name;

        var value = InputFieldUtils.getFieldValue(event);
        this.setState({[name]: value}, function () {
            //console.log(name + ' is now set to: ' + value);
            //alert(name + ' is now set to: ' + value);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.getLabsObj()._id) {
            this.props.dispatch(labsUpdate(ApiUrls.LABS + '/' + this.getLabsObj()._id, this.state));
        } else {
            this.props.dispatch(labsAdd(ApiUrls.LABS, this.state));
        }
    }

    getLabsObj() {
        return this.props.currentLabs || {};
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
                                        <LabsInputField {...labsInput}
                                                            key={labsInput.name}
                                                            value={InputFieldUtils.getFormattedValue(this.state[labsInput.name], labsInput.type)}
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
    console.log('mapStateToProps currentLabs');
    //console.log('state currentLabs: ' + JSON.strngify(state.labsReducer.currentLabs));
    return {
        currentLabs: state.labsReducer.currentLabs
    };
};

export default connect(mapStateToProps)(LabsInputForm);