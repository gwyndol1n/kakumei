import React from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';
import { useField, Field } from "formik";

import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../styles.css';
import StatusUpdate from './StatusUpdate';
import statusOptions from '../data/options';

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
		props.handleOptionChange(selection);
		helpers.setValue(selection);
	}
	
	return (
		<>
			<FormText muted>
				{label}
			</FormText>
			<Select
				styles={customStyles}
				options={options}			
				{...field}
				{...props}
				onBlur={() => helpers.setTouched(true)}
				onChange={handleOptionChange}
				isMulti
				// placeholder='Select status(es)...'
				//value={options.filter((item) => {return item.label === field.value})}
			/>
			{meta.touched && meta.error ? (
				<span className='error'>{meta.error.value}</span>
			) : null}
		</>
	)
}

class Initiative extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleOptionChange = this.handleOptionChange.bind(this);

		this.state = {
			name: this.props.name || 'Initiative Name',
			fields: this.props.fields || {},
			subfields: this.props.subfields || {},
			statuses: this.props.statuses || [],
			help_text: this.props.help_text || {},
			index: this.props.index
		};
	}

	// on Status change, set fields/subfields, description, and status in state
	handleOptionChange(selections) {
		const newSelections = {
			fields: Object.assign(...selections.map((selection, i) => {return {[selection.label]: selection.fields}})),
			subfields: Object.assign(...selections.map((selection, i) => {return {[selection.label]: selection.subfields}})),
			help_text: Object.assign(...selections.map((selection, i) => {return {[selection.label]: selection.description.split('\n').map((str, i) => <p key={i}>{str}</p>)}})),
			statuses: selections.map((selection, i) => selection.value).flat(),
		};
		const newFields = {...this.state, ...newSelections};
		this.setState(newFields);

		// set values in Formik form state
		// this.props.setFieldValue(`initiatives.${this.props.index}.fields`, newSelections.fields);
		this.props.setFieldValue(`initiatives.${this.props.index}.subfields`, newSelections.subfields);
		this.props.setFieldValue(`initiatives.${this.props.index}.help_text`, newSelections.help_text);
		this.props.setFieldValue(`initiatives.${this.props.index}.statuses`, selections);
	}

	render() {
		return (
			<Card className='form-container' style={{margin: "2px", width: '30rem'}}>
				<Card.Header>
					<Field className='h3-plaintext-input form-control-plaintext' name={`initiatives.${this.state.index}.name`} />
				</Card.Header>
				<Card.Body>
					<FormGroup>
						<InputGroup>
							<CustomDropdown 
								name={`initiatives.${this.state.index}.statuses`}
								label='Status(es)'
								options={statusOptions}
								handleOptionChange={this.handleOptionChange}
							/>
						</InputGroup>
					</FormGroup>
					{this.state.statuses.length > 0 &&
						<Tabs>
							{
								Object.keys(this.state.fields).map((status, i) => (
									<Tab eventKey={status.toLowerCase()} title={status} key={status}>
										<FormText style={{paddingTop: "20px", display: 'none'}} muted>
											{this.state.help_text[status]}
										</FormText>

										<StatusUpdate 
											fields={this.state.fields[status]}
											subfields={this.state.subfields[status]}
											initiativeIndex={this.state.index} 
											key={status} 
											status={status} 
											setFieldValue={this.props.setFieldValue}
										/>
									</Tab>
								))
							}
						</Tabs>
					}
				</Card.Body>
			</Card>
		)
	}
}

export default Initiative;