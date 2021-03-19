import React from 'react';
import { PDFDownloadLink, PDFViewer, Document, Page, Text, View, StyleSheet, Outline, Canvas } from '@react-pdf/renderer';
import moment from 'moment';

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
		// backgroundColor: '#E4E4E4',
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

const PdfDownloadLink = props => {
	return (
		<>
			<PDFDownloadLink document={props.document || <PdfDocument />} fileName="today.pdf">
				{({blob, url, loading, error}) => (loading ? 'Loading document...' : 'Download now!')}
			</PDFDownloadLink>
		</>
	)
}

const PdfDocument = props => {
	const singleTabSpacing = 25;
	const initiativeListIndent = '25pt';
	const initiativeListBottomPadding = '10pt';
	const doubleTabSpacing = 65;
	const doubleTabSpacingPt = '65pt'
	const header = <View style={styles.text}>
		<Text style={{fontFamily: 'Helvetica-Bold'}}>Weekly Status Update</Text>
		<Text>Week of {moment().format('L')}</Text>
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
			<Text style={{fontFamily: 'Helvetica-Oblique', textIndent: doubleTabSpacingPt}}>
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
			flexDirection: "row" 
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
			margin: "auto", 
			margin: 2, 
			fontSize: 14,
			// fontWeight: 500,
			fontFamily: 'Helvetica-Bold'
		  },  
		  tableCell: { 
			margin: "auto", 
			margin: 5, 
			fontSize: 12,
			textIndent: '25pt',
		  }
	});

	const tableHeaderRow = (text) => <View style={tableStyles.tableRow}>
		<View style={tableStyles.tableColHeader}>
			<Text style={tableStyles.tableCellHeader}>{text}</Text>
		</View>
	</View>

	const tableCellRow = (text) => <View style={tableStyles.tableRow}>
		<View style={tableStyles.tableCol}>
			<Text style={tableStyles.tableCell}>{text}</Text>
		</View>
	</View>

	const initiativeTable = props.initiatives.map((initiative, i) => {
		return Object.keys(initiative.fields).map((status, j) => {
			const statusObject = initiative.statuses[j];

			return (
				<>
					<Text style={{fontFamily: "Helvetica-Bold"}}>
						<Text style={{backgroundColor: statusObject.color}}>{statusObject.value}</Text>
					</Text>
					<View style={{padding: 10}}>
						<View style={tableStyles.table}>
							{initiative.fields[status].map((field, k) => {
								return <>
									{tableHeaderRow(field.label)}
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