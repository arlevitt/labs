import React, { Component } from 'react';

class LabsInfusionInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.isInRange = false;
    }

    handleChange(event) {
        this.props.onFieldChange(event, this.props.range);
        this.checkRange(event);
    }

    checkRange(event) {
        if (!this.props.range) {
            return;
        }

        const target = event.target;

        let value = null;
        switch (target.type) {
            case ('number'):
                value = parseFloat(target.value);
                break;
            default:
                value = target.value;
        }

        var parts = this.props.range.split('-');
        var min = parseFloat(parts[0]);
        var max = parseFloat(parts[2]);

        this.isInRange = ((value < min) || (value > max)) ? false : true;
    }

    getRangeClass() {
        var className = 'input-group-addon glyphicon ';
        className += this.isInRange ? 'glyphicon-triangle-top icon-in-range' : 'glyphicon-triangle-bottom icon-out-of-range';
        console.log(this.props.name + ' ' + this.isInRange);
        console.log(className);
        return className;
    }

    render() {
        // if (this.props.name == 'date') {
        //     alert(this.props.name + ' ' + this.props.defaultValue);
        // }

        // if (this.props.defaultValue) {
        //     alert(this.props.defaultValue);
        //     this.props[this.props.valueProperty] = this.props.defaultValue;
        // }

        return <div>
            <div className="form-inline form-group">
                <label className="col-sm-3 control-label">{this.props.label}</label>
                <div className="col-sm-4 input-group">
                    <input  className="form-control"
                            type={this.props.type}
                            name={this.props.name}
                            placeholder={this.props.range ? "Range: " + this.props.range : this.props.label}
                            value={this.props[this.props.valueProperty]}
                            onChange={this.handleChange}
                    />
                    {
                        this.props.type === 'number' ? (
                            <div className={this.getRangeClass()}></div>
                        ) : null
                    }
                </div>
                {
                    this.props.infusionCheckbox ? (
                            <label className="checkbox-inline">
                                <input type="checkbox"
                                       name={'infused_' + this.props.name}
                                       value={this.props['infused_' + this.props.name] || ''}/> {this.props.infusionCheckbox}
                            </label>
                    ) : null
                }
            </div>
        </div>;
    }
}

export default LabsInfusionInput