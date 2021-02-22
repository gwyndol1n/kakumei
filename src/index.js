/* eslint-disable no-multi-str */
import React from "react";
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import CardDeck from 'react-bootstrap/CardDeck';

// Form Stuff
import { Formik, Form } from "formik";
// import Select from 'react-select';
// import chroma from 'chroma-js';
// import * as Yup from 'yup';

import { PDFViewer } from '@react-pdf/renderer';

import Initiative from './components/Initiative';
import PdfDocument from './components/PdfDocument';

const PDF = props => {
	return (
		<PDFViewer width="100%">
			<PdfDocument {...props}/>
		</PDFViewer>
	)
}

const Body = props => {
	function handleSubmit (values, {setSubmitting}) {
		setTimeout(() => {
			console.log(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
		// TODO: setState for document here?
	}

	const initialValues = {
		program_name: 'Program Name',
		focus_name: 'Focus Name',
		initiatives: [
			{}
		],
		name: "Initiative Name",
		status: '', //statusOptions.filter((item) => {return item.value === 'Started'}),
		title: "Mode Analysis",
		whodunnit: "Person 1, Person 2",
		update_notes: "No updates",
		progress_notes: "No progress",
		challenges: "No challenges"
	};

	return (
		<Container>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				<Form>
					<Container>
						{/* <CardDeck style={{boxShadow: '10px 10px 30px grey', border: '2px groove grey', padding: "10px"}}>  */}
							<Initiative />
						{/* </CardDeck> */}
						<Button as="input" variant="success" type="submit" value="Submit" />
					</Container>
				</Form>
			</Formik>
		</Container>
	)
}

function App() {
	return <Body />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
