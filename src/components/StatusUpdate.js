import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import TabPane from 'react-bootstrap/TabPane';

const StatusUpdate = (props) => {	
	function handleChange(e) {
		props.onInputChange(e.target.value)
	}

	return (
		<TabPane style={{padding: "10px"}}>
			{Object.values(props.fields).map((fields, i) => {
				return (
					<div className='tab-item-wrapper' key={fields.label}>
						<FormText muted>
							{fields.label}
						</FormText>
						<FormControl as={fields.as} id={fields.id} defaultValue={fields.value} onChange={handleChange} />
					</div>
				)
			})}
		</TabPane>
	)
}

export default StatusUpdate;