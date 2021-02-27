import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import TabPane from 'react-bootstrap/TabPane';

import { Field } from 'formik';

class StatusUpdate extends React.Component {
	constructor(props) {
		super(props);
		this.status = this.props.status;
		this.onInputChange = this.onInputChange.bind(this);

		this.fieldPrefix = `initiatives.${this.props.initiativeIndex}.fields.${this.status}`;
	}

	// use setFieldValue from props to trigger formik update
	onInputChange(e) {
		this.props.setFieldValue(e.target.id.replace(".value", ""), {id: e.target.name, value: e.target.value, label: e.target.dataset.label});
	}

	render() {
		return (
			<TabPane>
				{Object.values(this.props.fields).map((field, i) => {
					return (
						<div className='tab-item-wrapper' key={field.label}>
							<FormText muted>
								{field.label}
							</FormText>
							<Field 
								as={field.as} 
								name={field.id} 
								id={`${this.fieldPrefix}.${i}.value`} 
								className='form-control' 
								onChange={this.onInputChange} 
								data-label={field.label}
							/>
						</div>
					)
				})}
			</TabPane>
		)
	}
}

export default StatusUpdate;