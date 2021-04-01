import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';

// HTML parser element
import RichText from './RichText';

// 'Helvetica',
// 'Helvetica-Bold',
// 'Helvetica-Oblique',
// 'Helvetica-BoldOblique'

const styles = StyleSheet.create({
	page: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
		// flexDirection: 'row',
		fontFamily: 'Helvetica',
		fontSize: '12pt'
	},
	section: {
		margin: 20,
		padding: 20,
		flexGrow: 5,
	},
	text: {
		margin: 12,
		fontSize: 14,
		fontFamily: 'Helvetica',
	},
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
});

// https://github.com/diegomura/react-pdf/issues/487
const tableStyles = StyleSheet.create({
	table: { 
		display: "table", 
		width: "auto", 
		borderStyle: "solid", 
		borderColor: '#bfbfbf',
		borderWidth: 1, 
		borderRightWidth: 0, 
		borderBottomWidth: 0 
	  }, 
	  tableRow: { 
		margin: "auto", 
		flexDirection: "row",
	  }, 
	  tableColHeader: { 
		width: "100%", 
		borderStyle: "solid", 
		borderColor: '#bfbfbf',
		borderBottomColor: '#000',
		borderWidth: 1, 
		borderLeftWidth: 0, 
		borderTopWidth: 0,
		borderBottomWidth: 0,
	  },   
	  tableCol: { 
		width: "100%", 
		borderStyle: "solid", 
		borderColor: '#bfbfbf',
		borderWidth: 1, 
		borderLeftWidth: 0, 
		borderTopWidth: 0,			
	  }, 
	  tableCellHeader: {
		margin: 2, 
		fontSize: 12,
		fontFamily: 'Helvetica-Bold'
	  },
	  tableCellSubHeader: {
		margin: 2,
		fontSize: 12,
		fontFamily: 'Helvetica-Bold',
		textAlign: 'right',
	  },
	  tableCell: { 
		margin: 5,
		fontSize: 12,
		textIndent: '25pt',
	  },
	  tableCellSub: {
		margin: 5,
		fontSize: 12,
		textIndent: '25pt',
		textAlign: 'right'
	  }
});

const PdfDocument = props => {
	const initiativeListIndent = '25pt';
	const initiativeListBottomPadding = '10pt';
	const doubleTabSpacingPt = '65pt'

	const header = <View style={styles.text}>
		<Text style={{fontFamily: 'Helvetica-Bold'}}>Weekly Status Update</Text>
		<Text>Week of {moment().format('L')}</Text>
		{/* TODO: first monday of the week */}
		{/* TODO: how is this determined? */}
		{/* <Text style={{fontFamily: 'Helvetica-Oblique'}}>Due: Thursday, Month, DD</Text> */}
	</View>

	const initiativeList = <View style={styles.text}>
		<Text style={{fontFamily: 'Helvetica-Bold', textIndent: initiativeListIndent, paddingBottom: initiativeListBottomPadding}}>List of Initiatives:</Text>
		{props.initiatives.map((initiative, i) => (
			<>
			<Text>
				<Text style={{fontFamily: 'Helvetica-Bold', textIndent: '50pt'}}>{i + 1}. </Text>
				<Text style={{textIndent: '50pt'}}>{initiative.name}</Text>
			</Text>
			<Text style={{fontFamily: 'Helvetica-Oblique', textIndent: doubleTabSpacingPt, paddingBottom: '10pt'}}>
				{initiative.statuses.length === 1 ? 'Status: ' : 'Statuses: '}
				{initiative.statuses.map((status, i) => (
					<>
					<Text style={{backgroundColor: status.color}}>{status.value}</Text>
					{initiative.statuses.indexOf(status) !== initiative.statuses.length - 1 ? ', ' : null }
					</>
				))}
			</Text>
			</>
		))}
	</View>

	// custom styled element for full span "header" row
	const tableHeaderRow = (text) => <View style={tableStyles.tableRow}>
		<View style={tableStyles.tableColHeader}>
			<Text style={tableStyles.tableCellHeader}>{text}:</Text>
		</View>
	</View>

	const tableHeaderSubRow = (text) => <View style={tableStyles.tableRow}>
		<View style={tableStyles.tableColHeader}>
			<Text style={tableStyles.tableCellSubHeader}>{text}</Text>
		</View>
	</View>

	// custom styled element for full span "cell" row
	const tableCellRow = (text) => <View style={tableStyles.tableRow}>
		<View style={tableStyles.tableCol}>
			<RichText note={text} />
		</View>
	</View>

	// iterate thru each initiative, creating a table of inputs and their values, grouped by status
	const initiativeTable = props.initiatives.map((initiative, i) => {
		return Object.keys(initiative.fields).map((status, j) => {
			const statusObject = initiative.statuses[j];
			const headerStyle = {
				backgroundColor: statusObject.color, 
				textIndent: '10pt',
			};
			
			return (
				<>
					<Text style={{fontFamily: "Helvetica-Bold", fontSize: 14}}>
						<Text style={headerStyle}>{statusObject.value}</Text>
					</Text>
					<View style={{padding: 10}}>
						<View style={tableStyles.table}>
							{initiative.fields[status].map((field, k) => {
								return <>
									{tableHeaderRow(field.label)}
									{tableCellRow(field.value)}
								</>
							})}
							{initiative.subfields[status].map((field, k) => {
								return <>
									{tableHeaderSubRow(field.label)}
									{tableCellRow(field.value)}
								</>
							})}
						</View>
					</View>
				</>
			)
		})
	})
	
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				{header}
				{initiativeList}
				{initiativeTable}
			</Page>
		</Document>
	)
}

export default PdfDocument;