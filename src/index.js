/* eslint-disable no-multi-str */
import React from "react";
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// Form Stuff
import { Formik, Form, FieldArray, Field } from "formik";
// import Select from 'react-select';
// import chroma from 'chroma-js';
import * as Yup from 'yup';

import Initiative from './components/Initiative';

import { /* PDFDownloadLink, PDFViewer, */ BlobProvider } from '@react-pdf/renderer';
import PdfDocument from './components/PdfDocument';

// const DownloadLink = props => {
// 	return (
// 		<>
// 			<PDFDownloadLink document={props.document} fileName={props.filename}>
// 				{({blob, url, loading, error}) => (loading ? 'Loading document...' : 'Download now!')}
// 			</PDFDownloadLink>
// 		</>
// 	)
// }

// const PdfViewer = props => {
// 	return (
// 		<>
// 			<PDFViewer>
// 				{props.document}
// 			</PDFViewer>
// 		</>
// 	)
// }

const BlobLink = props => {
	return (
		<>
		<BlobProvider document={props.document}>
  			{({ url }) => (
    			<a href={url} target="_blank" rel="noreferrer">Open in new tab</a>
  			)}
		</BlobProvider>
		</>
	)
}

const RemoveButton = ({arrayHelpers, index, ...props}) => (
	<Button 
		className='float-right' 
		as="input" 
		type="button" 
		variant='warning' 
		value='Remove' 
		onClick={() => arrayHelpers.remove(index)} 
	/>
)

const AddButton = ({arrayHelpers, index, ...props}) => (
	<Button 
		as="input" 
		variant="info" 
		type="button" 
		value="Add" 
		onClick={() => arrayHelpers.push({name: 'Initiative Name', fields: {}, subfields: {}, statuses: [], index: index})} 
	/>
)

class Body extends React.Component {
	constructor(props) {
		super(props);

		this.validationSchema = Yup.lazy((values) => {
			return Yup.object().shape({
				initiatives: Yup.array().of(
					Yup.object().shape({
						name: Yup.string().required(),
						statuses: Yup.array().of(Yup.object()).required(),
						fields: Yup.object().required(),
						subfields: Yup.object()
					})
				)
			});
		}) 

		this.state = {
			program_name: '',
			focus_name: '',
			initiatives: [
				{
					name: 'Initiative Name', 
					fields: {},
					subfields: {},
					statuses: [],
					help_text: {},
					index: 0
				}
			],
			validationSchema: this.validationSchema,
			download_link: null,
			iframe: null,
		};
		
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	// prompt user if changes haven't been saved
	onUnload = e => {		
		e.preventDefault();
		e.returnValue = '';
	}

	handleSubmit(values, {setSubmitting, resetForm}) {
		if (!window.confirm("Are you ready to submit?")) {
			return false;
		}
		setTimeout(() => {
			// console.log(JSON.stringify(values, null, 2));
			this.setState({download_link: <BlobLink document={<PdfDocument values={values} />}/>})
			// this.setState({iframe: <PdfViewer document={<PdfDocument initiatives={values.initiatives} />}/>})
			setSubmitting(false);
			resetForm();
		}, 400);
	}

	render() {
		return (
			<Container>
				<Formik
					initialValues={this.state}
					onSubmit={this.handleSubmit}
					// enableReinitialize={true}
					validationSchema={this.state.validationSchema}
				>
					{formProps => (
					<Form>
						{formProps.dirty ? window.addEventListener("beforeunload", this.onUnload) : window.removeEventListener("beforeunload", this.onUnload) }
						<FieldArray name='initiatives'>
							{(arrayHelpers) => (
								<>
								<Row style={{padding: "10px 0px 10px 0px"}}>
									<InputGroup style={{width: "50%", marginRight: 5}}>
										<InputGroup.Prepend>
											<InputGroup.Text>Program Name</InputGroup.Text>
										</InputGroup.Prepend>
										<Field name='program_name' className='form-control' />
									</InputGroup>
									<InputGroup style={{width: "49%"}}>
										<InputGroup.Prepend>
											<InputGroup.Text>Focus Name</InputGroup.Text>
										</InputGroup.Prepend>
										<Field name='focus_name' className='form-control' />
									</InputGroup>
								</Row>
								<CardDeck style={{boxShadow: '10px 10px 30px grey', border: '2px groove grey', padding: "10px"}}>
									{formProps.values.initiatives && formProps.values.initiatives.length > 0 ? (
										formProps.values.initiatives.map((initiative, index) => (
											<div key={index}>
												<Initiative 
													{...initiative} 
													setFieldValue={formProps.setFieldValue} 
												/>
												{formProps.values.initiatives.length > 1 && 
													<RemoveButton arrayHelpers={arrayHelpers} index={index} />
												}
											</div>
										))
									) : null}
								</CardDeck>
								<AddButton arrayHelpers={arrayHelpers} index={formProps.values.initiatives.length} />&nbsp;
								</>
							)}
						</FieldArray>
						<Button as="input" variant="success" type="button" value="Submit" onClick={formProps.submitForm} />
					</Form>
					)}
				</Formik>
				{this.state.iframe}
				<div style={{paddingTop: 15}}>
					{this.state.download_link}
				</div>
			</Container>
		)
	}
}

function App() {
	return <Body />
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
