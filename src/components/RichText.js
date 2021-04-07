// https://levelup.gitconnected.com/elegant-pdfs-from-user-generated-content-in-react-656b79533fee
import React from 'react';

import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';
// import htmlToDraft from 'html-to-draftjs';
import { StyleSheet, View, Text, Link } from '@react-pdf/renderer';
import redraft from 'redraft';

const styles = StyleSheet.create({
	headingOne: {
		marginBottom: 4,
		fontFamily: "Helvetica-Bold",
		lineHeight: 1.35,
		fontSize: 14,
	},
	text: {
		margin: 5,
		marginBottom: 8,
		fontFamily: 'Helvetica',
		lineHeight: 1.45,
		fontSize: 12,
	},
	list: {
		marginBottom: 8,
		marginLeft: 6,
	},
	listItem: {
		marginBottom: 4,
	},
	listItemText: {
		fontFamily: 'Helvetica',
		lineHeight: 1.45,
		fontSize: 12,
	}
});

const HeadingOne = ({ children }) => {
	return (
		<View>
			<Text style={styles.headingOne}>{children}</Text>
		</View>
	);
};

const UnorderedList = ({ children, depth }) => {
	return <View style={styles.list}>{children}</View>;
};

const UnorderedListItem = ({ children }) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.listItemText}>
				• &nbsp;<Text>{children}</Text>
			</Text>
		</View>
	);
};

const OrderedList = ({ children, depth }) => {
	return <View style={styles.list}>{children}</View>;
};

const OrderedListItem = ({ children, index }) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.listItemText}>
				{index + 1}. &nbsp;<Text>{children}</Text>
			</Text>
		</View>
	);
};

const renderers = {
	inline: {
		// The key passed here is just an index based on rendering order inside a block
		BOLD: (children, { key }) => {
			return (
				<Text key={`bold-${key}`} style={{fontFamily: 'Helvetica-Bold'}}>
					{children}
				</Text>
			);
		},
		ITALIC: (children, { key }) => {
			return (
				<Text key={`italic-${key}`} style={{fontFamily: 'Helvetica-Oblique'}}>
					{children}
				</Text>
			);
		},
		UNDERLINE: (children, { key }) => {
			return (
				<Text key={`underline-${key}`} style={{textDecoration: 'underline'}}>
					{children}
				</Text>
			);
		},
	},
	blocks: {
		unstyled: (children, { keys }) => {
			return children.map((child, index) => {
				return (
					<View key={keys[index]}>
						<Text style={styles.text}>{child}</Text>
					</View>
				)
			});
		},
		'header-one': (children, { keys }) => {
			return children.map((child, index) => {
				return <HeadingOne key={keys[index]}>{child}</HeadingOne>;
			});
		},
		'unordered-list-item': (children, { depth, keys }) => {
			return (
				<UnorderedList key={keys[keys.length - 1]} depth={depth}>
					{children.map((child, index) => (
						<UnorderedListItem key={keys[index]}>{child}</UnorderedListItem>
					))}
				</UnorderedList>
			);
		},
		'ordered-list-item': (children, { depth, keys }) => {
			return (
				<OrderedList key={keys.join('|')} depth={depth}>
					{children.map((child, index) => (
						<OrderedListItem key={keys[index]} index={index}>
							{child}
						</OrderedListItem>
					))}
				</OrderedList>
			);
		}
	},
	entities: {
		// key is the entity key value from raw
		LINK: (children, data, { key }) => (
			<Link key={key} src={data.url}>
				{children}
			</Link>
		),
		FONT: (children, data, { key }) => (
			<Text key={key} style={data.style}>
				{data.text}
			</Text>
		),
		SPAN: (children, data, { key }) => (
			<Text key={key} style={data.style}>
				{children}
			</Text>
		)
	},
}

const RichText = ({ note }) => {
	// const blocksFromHTML = htmlToDraft(note, (nodeName, node) => {
	// 	console.log(note, nodeName);
	// 	if (nodeName === 'font' && node.color !== undefined) {
	// 		return {
	// 			type: "FONT",
	// 			mutability: "MUTABLE",
	// 			data: {
	// 				style: {backgroundColor: node.color},
	// 				text: node.firstElementChild ? node.firstElementChild.textContent : node.textContent,
	// 				textStyle: node.firstElementChild ? {textDecorationColor: node.firstElementChild.style.backgroundColor} : {}
	// 			}
	// 		};
	// 	}
	// 	if (nodeName === 'b') {
	// 		return {
	// 			type: "BOLD",
	// 			mutability: "MUTABLE",
	// 			data: {}
	// 		}
	// 	}
	// });

	const blocksFromHTML = convertFromHTML(note);
	
	const initialState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks);

	const editorState = EditorState.createWithContent(initialState);
	const rawContent = convertToRaw(editorState.getCurrentContent());
	return redraft(rawContent, renderers, { blockFallback: 'unstyled'});
}

export default RichText;