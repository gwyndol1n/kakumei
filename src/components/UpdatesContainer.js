import React from 'react';

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import StatusUpdate from './StatusUpdate';

import statusOptions from '../data/options';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';

const UpdatesContainer = (props) => {
	const selectedStatuses = [];
	// props.statusUpdates.forEach(status => {
	// 	selectedStatuses.push(statusOptions.filter((item) => {return item.label === status}));
	// });
	
	return (
		<Tabs id='updates-container'>
			{Object.keys(props.fields).map(status => {
				return (
					<Tab eventKey={status} title={status} key={status}>
						<StatusUpdate fields={props.fields[status]} onInputChange={props.onInputChange} key={status}/>
					</Tab>
				);
			})}
		</Tabs>
	)
}

export default UpdatesContainer;