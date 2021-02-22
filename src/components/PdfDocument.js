import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row'
	},
	section: {
		flexGrow: 1
	}
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
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<View style={styles.section}>
					<Text>{props.text}</Text>
				</View>
			</Page>
		</Document>
	)
}

export default PdfDocument;