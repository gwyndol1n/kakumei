import React from 'react';
import FormText from 'react-bootstrap/FormText';
import TabPane from 'react-bootstrap/TabPane';

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tooltip';

import './StatusUpdate.css';

import { Field, ErrorMessage } from 'formik';

class StatusUpdate extends React.Component {
	constructor(props) {
		super(props);
		this.status = this.props.status;
		this.onInputChange = this.onInputChange.bind(this);

		this.fieldPrefix = `initiatives.${this.props.initiativeIndex}.fields.${this.status}`;
		this.subfieldPrefix = `initiatives.${this.props.initiativeIndex}.subfields.${this.status}`;

		this.wysiwygOptions = {
			toolbar: [
			// [groupName, [list of button]]
				['style', ['bold', 'italic', 'underline', 'clear']],
				// ['font', ['strikethrough', 'superscript', 'subscript']],
				['fontsize', ['fontsize']],
				// ['color', ['color']],
				['para', ['ul', 'ol', 'paragraph']],
				['view', ['undo', 'redo', 'codeview', 'help']]
				// ['height', ['height']]
			],
			// dialogsInBody: true,
			// airMode: true,
			tabDisable: true,
			height: 150,
		};
	}

	// use setFieldValue from props to trigger formik update
	onInputChange(e) {
		const fieldIndex = this.props.fields.findIndex((item) => {return item.id === e.target.name});
		this.props.fields[fieldIndex].value = e.target.value; 
		this.props.setFieldValue(e.target.id.replace(/.\d.value/, ""), this.props.fields);
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
							{
								field.as === 'textarea' ? 
								<ReactSummernote
									onChange={(contents, $editable) => {
										this.onInputChange({
											target: {
												id: `${this.fieldPrefix}.${i}.value`,
												name: field.id,
												value: contents,
												dataset: {label: field.label}
											}
										})
									}}
									options={this.wysiwygOptions}
									data-label={field.label}
								/> : 
								<Field 
									as={field.as} 
									name={field.id} 
									id={`${this.fieldPrefix}.${i}.value`} 
									className='form-control' 
									onChange={this.onInputChange} 
									data-label={field.label}
								/>
							}
							<ErrorMessage name={`${this.fieldPrefix}.${i}`} component={FormText} />
						</div>
					)
				})}

				{Object.values(this.props.subfields).map((subfield, i) => {
					return (
						<div className='tab-item-wrapper' key={subfield.label}>
							<FormText muted className='text-right'>
								{subfield.label}
							</FormText>
							<Field 
								name={subfield.id} 
								id={`${this.subfieldPrefix}.${i}.value`} 
								className='form-control' 
								onChange={this.onInputChange} 
								data-label={subfield.label}
							/>
							<ErrorMessage name={`${this.subfieldPrefix}.${i}.value`} component={FormText} />
						</div>
					)
				})}
			</TabPane>
		)
	}
}

export default StatusUpdate;