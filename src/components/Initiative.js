/* eslint-disable no-multi-str */
import React from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';
import { ErrorMessage, useField } from "formik";

import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';

import statusOptions from '../data/options';

import '../styles.css';
import UpdatesContainer from './UpdatesContainer';

const CustomDropdown = ({ options, label, ...props }) => {
	const [field, meta, helpers] = useField(props);
	
	// react-select custom styling functions
	const customStyles = {
		container: provided => ({
			...provided,
			width: "100%",
		}),

		menu: (provided, state) => ({
			...provided,
			padding: 20,
		}),
	
		control: styles => ({ ...styles, backgroundColor: 'white' }),

		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			const color = chroma(data.color);
			return {
				...styles,
				backgroundColor: isDisabled
					? null
					: isSelected
					? data.color
					: isFocused
					? color.alpha(0.1).css()
					: null,
				color: isDisabled
					? '#ccc'
					: isSelected
					? chroma.contrast(color, 'white') > 2
						? 'white'
						: 'black'
					: data.color,
				cursor: isDisabled ? 'not-allowed' : 'default',
	
				':active': {
					...styles[':active'],
					backgroundColor:
						!isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
				},
			};
		},

		input: styles => ({ ...styles, width: '100%'}),
		singleValue: (styles, { data }) => ({...styles, backgroundColor: data.color}),
		multiValue: (styles, { data }) => {
			const color = chroma(data.color);
			return {
				...styles,
				backgroundColor: color.alpha(0.1).css(),
			};
		},
		multiValueLabel: (styles, { data }) => ({
			...styles,
			color: data.color,
		}),
		multiValueRemove: (styles, { data }) => ({
			...styles,
			color: data.color,
			':hover': {
				backgroundColor: data.color,
				color: 'white',
			},
		}),
	}

	// wrapper function for setState where formik's setValue is called
	function handleOptionChange(selection) {
		helpers.setValue(selection);
		props.handleOptionChange(selection);
	}
	
	return (
		<>
			<label htmlFor={props.id}>{label}</label>
			<Select
				styles={customStyles}
				options={options}			
				{...field}
				{...props}
				onBlur={() => helpers.setTouched(true)}
				onChange={handleOptionChange}
				isMulti
				//value={options.filter((item) => {return item.label === field.value})}
			/>
			{meta.touched && meta.error ? (
				<span className='error'>{meta.error.value}</span>
			) : null}
		</>
	)
}

// Basic Formik TextInput element, using 'meta' for errors/touched
const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props); // hook up to formik
	// <label htmlFor={props.id || props.name}>{label}</label>
	return (
	  <>
		<FormControl type='text' {...field} {...props} />
		{meta.touched && meta.error ? (
		  <ErrorMessage name={props.id|| props.name} />
		) : null}
	  </>
	);
};

const TextArea = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<FormControl as='textarea' {...field} {...props}/>
			{meta.touched && meta.error ? (
		  		<ErrorMessage name={props.id|| props.name} />
			) : null}
		</>
	)
}

const InitiativeFormGroup = ({name, label, ...props}) => {
	const component = props.type === 'textarea' ? <TextArea name={name} {...props}/> : <TextInput name={name} {...props} />;

	return (
		<FormGroup controlId={"initiative." + name}>
			<FormText muted>
				{label}
			</FormText>
			{component}
		</FormGroup>
	)
}

const InitiativeFormGroupPrepend = ({name, label, ...props}) => {
	const component = props.componentType === 'textarea' ? <TextArea name={name} {...props}/> : <TextInput name={name} {...props} />;
	return (
		<FormGroup controlId={"initiative." + name}>
			<InputGroup> 
				<InputGroup.Prepend>
					<InputGroup.Text>{label}</InputGroup.Text>
				</InputGroup.Prepend>
				{component}
			</InputGroup>
		</FormGroup>
	)
}

class Initiative extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Initiative Title',
			fields: [
				
			], // holds text fields and their values
			subfields: [
				
			],
			help_text: [

			],
			has_subinitiatives: false,
			statuses: [
				'Started'
			],
			subinitiatives: [
				// objects for sub-initiatives
			],
		};

		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleOptionChange(selections) {
		// take selections and map their appropriate variables to current state, flattening out after
		const newSelections = {
			fields: Object.assign(...selections.map((selection, i) => {return {[selection.label]: selection.fields}})),
			subfields: Object.assign(...selections.map((selection, i) => {return {[selection.label]: selection.subfields}})),
			help_text: Object.assign(selections.map((selection, i) => {return {[selection.label]: selection.description.split('\n').map(str => <p>{str}</p>)}})),
			statuses: selections.map((selection, i) => selection.value).flat()
		};
		const newFields = {...this.state, ...newSelections};
		this.setState(newFields);
		console.log(JSON.stringify(newFields, null, 2));
	}

	handleInputChange(value) {
		// debugger;
		alert(value.toString());
	}

	render() {
		return (
			<Card className='form-container' style={{margin: "2px", width: '30rem'}}>
				<Card.Header>
					<FormControl plaintext className='h3-plaintext-input' defaultValue={this.state.title}/>
				</Card.Header>
				<Card.Body>
					<InitiativeFormGroupPrepend label='Name' name='name' />
					<FormGroup controlId="initiativeStatus">
						<InputGroup>
							<CustomDropdown 
								name='status'
								options={statusOptions}
								handleOptionChange={this.handleOptionChange}
							/>
						</InputGroup>
					</FormGroup>
					{/* <FormText style={{paddingTop: "5px"}} muted>
						{this.state.help_text}
					</FormText> */}
					{/* {this.state.fields.map((field, i) => {
						return <>
							{field.label === 'Update' ?
								<InitiativeFormGroup label={field.label} name={field.id} type='textarea' rows={3}/>
							:
								<InitiativeFormGroupPrepend label={field.label} name={field.id} />
							}
							{field.label === 'Update' ? 
								this.state.subfields.map((subfield, i) => {
									return <InitiativeFormGroup id={subfield.id} label={subfield.label} name={`subfields.${subfield.id}`} />
								}) : null
							}
						</>
					})} */}
					{Object.keys(this.state.fields).length > 0 && <UpdatesContainer fields={this.state.fields} onInputChange={this.handleInputChange} /> }
				</Card.Body>
			</Card>
		)
	}
}

export default Initiative;