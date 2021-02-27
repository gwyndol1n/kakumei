import React from 'react';

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import StatusUpdate from './StatusUpdate';

import './UpdatesContainer.css';

const UpdatesContainer = (props) => {
	return (
		<Tabs id='updates-container'>
			{Object.keys(props.fields).map(status => {
				return (
					<Tab eventKey={status.toLowerCase()} title={status} key={status}>
						<StatusUpdate fields={props.fields[status]} onInputChange={props.onInputChange} key={status} initiativeIndex={props.initiativeIndex}/>
					</Tab>
				);
			})}
		</Tabs>
	)
}

export default UpdatesContainer;