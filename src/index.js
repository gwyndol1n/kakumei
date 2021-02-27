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
// import * as Yup from 'yup';

import Initiative from './components/Initiative';

// import { PDFViewer } from '@react-pdf/renderer';
// import PdfDocument from './components/PdfDocument';

// const PDF = props => {
// 	return (
// 		<PDFViewer width="100%">
// 			<PdfDocument {...props}/>
// 		</PDFViewer>
// 	)
// }

class Body extends React.Component {
	constructor(props) {
		super(props);

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
			]
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleOptionChange = this.handleOptionChange.bind(this);

		// this.state = {
		// 	initiatives: [<Initiative key={0} index={0}/>] // TODO: put initProps here too for form values?
		// };
	}

	handleSubmit(values, {setSubmitting}) {
		setTimeout(() => {
			console.log(JSON.stringify(values, null, 2));
			const formattedOutput = {}
			// values.initiatives.map()
			
			setSubmitting(false);
		}, 400);
		// TODO: setState for document here?
	}

	render() {
		return (
			<Container>
				<Formik
					initialValues={this.state}
					onSubmit={this.handleSubmit}
					enableReinitialize={true}
				>
					{formProps => (
					<Form>
						<FieldArray name='initiatives'>
							{(arrayHelpers) => (
								<CardDeck style={{boxShadow: '10px 10px 30px grey', border: '2px groove grey', padding: "10px"}}>
								{formProps.values.initiatives && formProps.values.initiatives.length > 0 ? (
									formProps.values.initiatives.map((initiative, index) => (
										<div key={index}>
											<Initiative 
												{...initiative} 
												setFieldValue={formProps.setFieldValue} 
											/>
											<button type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
											<button type="button" onClick={() => arrayHelpers.push({name: 'Initiative Name', fields: {}, subfields: {}, statuses: [], index: formProps.values.initiatives.length})}>+</button>
										</div>
									))
								) : null}
								</CardDeck>
							)}
						</FieldArray>
						<Button as="input" variant="success" type="submit" value="Submit" />
					</Form>
					)}
				</Formik>
			</Container>
		)
	}
}

/* <Container>
	<Formik
		initialValues={initialValues}
		onSubmit={handleSubmit}
	>
		<Form>
			<Container>
				<CardDeck style={{boxShadow: '10px 10px 30px grey', border: '2px groove grey', padding: "10px"}}>
					<Initiative />
				</CardDeck>
				<Button as="input" variant="success" type="submit" value="Submit" />
			</Container>
		</Form>
	</Formik>
</Container> */

function App() {
	return <Body />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
