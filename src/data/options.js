/* eslint-disable no-multi-str */
const statusOptions = [
	{
		value: 'Started', 
		label: 'Started',
		color: '#ff00ff',
		description: 'Used to indicate a new initiative has been started within the \
		timeframe of the status update.\nIn the status section, write no more than 2-3 \
		sentences. If you have had any challenges, or foresee potential blockers, \
		make note of them in the “Any challenges?” section.',
		priority: 1,
		fields: [
			{id: 'title', label: 'Title(s)', value: null, as: 'input'},
			{id: 'whodunnit', label: 'Who', value: null, as: 'textarea'},
			{id: 'update_notes', label: 'Update', value: null, as: 'textarea'},
			{id: 'challenges', label: 'Any challenges?', value: null, as: 'input'},
		],
		subfields: []
	},
	{
		value: 'Continuing',
		label: 'Continuing',
		color: '#00ff00',
		priority: 2,
		description: 'Used to indicate a previously started initiative is still being worked on, but is progressing \
		in a healthy manner.\nIn the “Progress” section, you may indicate what the progress of \
		the initiative is, such as by listing the number of tickets done.\nSamples are given, but \
		some projects will be longer than others, so the week description may change. \
		\nRegardless, indicate the number week of work in the Status section.',
		fields: [
			{id: 'title', label: 'Title(s)', value: null, as: "input"},
			{id: 'whodunnit', label: 'Who', value: null, as: "textarea"},
			{id: 'progress_notes', label: 'Progress', value: null, as: "input"},
			{id: 'update_notes', label: 'Update', value: null, as: "textarea"},
		],
		subfields: []
	},
	{
		value: 'Milestone',
		label: 'Milestone',
		color: '#00ffff',
		priority: 3,
		description: 'Used to indicate when an initiative has reached a notable point of development. May fall between “Continuing” statuses for an in-progress initiative.',
		fields: [
			{id: 'title', label: 'Title(s)', value: null, as: "input"},
			{id: 'whodunnit', label: 'Who', value: null, as: "textarea"},
			{id: 'update_notes', label: 'Update', value: null, as: "textarea"},
		],
		// TODO: convert to key-value pairs
		subfields: [
			{id: 'worth', label: 'What is worth celebrating?', value: null, as: 'textarea'},
			{id: 'impact', label: 'What is the impact of this outcome/deliverable?', value: null, as: 'textarea'},
			{id: 'more', label: 'How can I find out more about this outcome/deliverable?', value: null, as: 'textarea'},
		]
	}, 
	{
		value: 'Prioritized',
		label: 'Prioritized',
		color: "#ffff00",
		priority: 4,
		description: 'Used to indicate when an initiative has been moved up in terms of prioritization. \
		Why the initiative was prioritized and who authorized the status change is required.',
		fields: [
			{id: 'title', label: 'Title(s)', value: null, as: 'input'},
			{id: 'whodunnit', label: 'Who', value: null, as: 'textarea'},
			{id: 'update_notes', label: 'Update', value: null, as: 'textarea'},
			{id: 'challenges', label: 'Any challenges?', value: null, as: 'input'},
		],
		subfields: [
			{id: 'when', label: 'When was this prioritized?', value: null, as: 'input'},
			{id: 'why', label: 'Why was this prioritized?', value: null, as: 'input'},
			{id: 'who', label: 'Who authorized the prioritization and when?', value: null, as: 'input'}
		],
	}, 
	{
		value: 'Deprioritized',
		label: 'Deprioritized',
		color: '#ff9900',
		priority: 5,
		description: 'Used to indicate when an initiative has been moved down in terms of prioritization. Why \
		the initiative was deprioritized and who authorized the status change is required.',
		fields: [
			{id: 'title', label: 'Title(s)', value: null, as: 'input'},
			{id: 'whodunnit', label: 'Who', value: null, as: 'textarea'},
			{id: 'update_notes', label: 'Update', value: null, as: 'textarea'},
			{id: 'challenges', label: 'Any challenges?', value: null, as: 'input'},
		],
		subfields: [
			{id: 'when', label: 'When was this deprioritized?', value: null, as: 'textarea'},
			{id: 'why', label: 'Why was this deprioritized?', value: null, as: 'textarea'},
			{id: 'who', label: 'Who authorized the deprioritization and when?', value: null, as: 'textarea'},
		],
	}, 
	{
		value: 'Flagged',
		label: 'Flagged',
		color: '#b7b7b7',
		priority: 6,
		description: 'Used to indicate when an initiative has encountered a notable delay or hold-up that \
		should be noted for future reference, but progress is still being made and thus the \
		initiative is not Blocked.',
		fields: [
			{id: 'title', label: 'Title(s)', value: null, as: 'input'},
			{id: 'whodunnit', label: 'Who', value: null, as: 'textarea'},
			{id: 'update_notes', label: 'Update', value: null, as: 'textarea'},
			{id: 'challenges', label: 'Any challenges?', value: null, as: 'input'},
		],
		subfields: [
			{id: 'when', label: 'When was this flagged?', value: null, as: 'textarea'},
			{id: 'why', label: 'Why was this flagged?', value: null, as: 'textarea'},
		],
	}, 
	{
		value: 'Blocked',
		label: 'Blocked',
		color: '#ff0000',
		priority: 7,
		description: 'Used to indicate when an initiative has been blocked.',
		fields: [
			{id: 'title', label: 'Title(s)', value: null, as: 'input'},
			{id: 'whodunnit', label: 'Who', value: null, as: 'textarea'},
			{id: 'update_notes', label: 'Update', value: null, as: 'textarea'},
		],
		subfields: [
			{id: 'who', label: 'Who is blocking?', value: null, as: 'textarea'},
			{id: 'what', label: 'What is the block?', value: null, as: 'textarea'},
			{id: 'tried', label: 'What have you tried?', value: null, as: 'textarea'},
		],
	}, 
	{
		value: 'Emergency Request',
		label: 'Emergency Request',
		color: '#ea9999',
		priority: 0,
		description: 'Used to indicate when an initiative has been bumped to top priority. This status, if used,\
		should always be listed first in the Weekly Status Update.',
		fields: [
			{id: 'title', label: 'Title(s)', value: null, as: 'input'},
			{id: 'whodunnit', label: 'Who', value: null, as: 'textarea'},
			{id: 'update_notes', label: 'Update', value: null, as: 'textarea'},
			{id: 'challenges', label: 'Any challenges?', value: null, as: 'input'},
		],
		subfields: [
			{id: 'who', label: 'Who is requesting?', value: null, as: 'textarea'},
			{id: 'when', label: 'When is it needed by?', value: null, as: 'textarea'},
		],
	}, 
	{
		value: 'Completed',
		label: 'Completed',
		color: '#9900ff',
		priority: 8,
		fields: [
			{id: 'title', label: 'Title(s)', value: null, as: 'input'},
			{id: 'whodunnit', label: 'Who', value: null, as: 'textarea'},
			{id: 'update_notes', label: 'Update', value: null, as: 'textarea'},
		],
		subfields: [
			{id: 'impact', label: 'What is the impact of this outcome/deliverable?', value: null, as: 'textarea'},
			{id: 'who', label: 'Who did it?', value: null, as: 'textarea'},
			{id: 'notes', label: 'Any final notes?', value: null, as: 'textarea'},
			{id: 'more', label: 'How can I found out more about this outcome/deliverable?', value: null, as: 'textarea'},
		],
	},
];

export default statusOptions;