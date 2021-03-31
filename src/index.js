/* eslint-disable no-multi-str */
import React from "react";
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';

// Form Stuff
import { Formik, Form, FieldArray } from "formik";
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
		// {"initiatives": [
		// 	{
		// 	  "name": "Initiative Name",
		// 	  "fields": {
		// 		"Started": [
		// 		  {
		// 			"id": "title",
		// 			"value": "asdf",
		// 			"label": "Title(s)"
		// 		  },
		// 		  {
		// 			"id": "whodunnit",
		// 			"value": "<p>fff</p>",
		// 			"label": "Who"
		// 		  },
		// 		  {
		// 			"id": "update_notes",
		// 			"value": "<p>ffsdf</p>",
		// 			"label": "Update"
		// 		  },
		// 		  {
		// 			"id": "challenges",
		// 			"value": "asdfasdf",
		// 			"label": "Any challenges?"
		// 		  }
		// 		]
		// 	  },
		// 	  "subfields": {
		// 		"Started": []
		// 	  },
		// 	}
		// ]}
		// this.validationSchema = Yup.object().shape({
		// 	initiatives: Yup.array().of(
		// 		Yup.object().shape({
		// 			name: Yup.string().required(),
		// 			fields: Yup.object(),
		// 			subfields: Yup.object()
		// 		})
		// 	)
		// });

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

	handleSubmit(values, {setSubmitting}) {
		setTimeout(() => {
			console.log(JSON.stringify(values, null, 2));
			this.setState({download_link: <BlobLink document={<PdfDocument initiatives={values.initiatives} />}/>})
			// this.setState({iframe: <PdfViewer document={<PdfDocument initiatives={values.initiatives} />}/>})
			setSubmitting(false);
		}, 400);
	}

	render() {
		return (
			<Container>
				<Formik
					initialValues={this.state}
					onSubmit={this.handleSubmit}
					enableReinitialize={true}
					validationSchema={this.state.validationSchema}
				>
					{formProps => (
					<Form>
						<FieldArray name='initiatives'>
							{(arrayHelpers) => (
								<>
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
						<Button as="input" variant="success" type="submit" value="Submit" />
					</Form>
					)}
				</Formik>
				{this.state.iframe}
				<div style={{paddingTop: 10}}>
					{this.state.download_link}
				</div>
			</Container>
		)
	}
}

function App() {
	return <Body />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
