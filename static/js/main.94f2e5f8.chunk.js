(this["webpackJsonpreport-generator"]=this["webpackJsonpreport-generator"]||[]).push([[0],{515:function(e,t,a){},520:function(e,t,a){},538:function(e,t){},540:function(e,t){},581:function(e,t){},582:function(e,t){},819:function(e,t,a){"use strict";a.r(t);var i=a(24),n=a(20),l=a(21),s=a(64),r=a(37),o=a(39),c=a(144),d=a(1),u=a.n(d),b=a(65),h=a.n(b),p=a(406),f=a(195),j=a(407),v=a(56),x=a(73),m=a(121),O=a(44),g=a(103),y=a(192),w=a.n(y),k=a(408),C=a(196),S=a(390),W=a(410),I=a(89),F=a(391),H=a(409),z=(a(515),a(119)),B=a(389),T=a.n(B),_=(a(516),a(517),a(518),a(520),a(3)),U=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).status=i.props.status,i.onInputChange=i.onInputChange.bind(Object(s.a)(i)),i.fieldPrefix="initiatives.".concat(i.props.initiativeIndex,".fields.").concat(i.status),i.subfieldPrefix="initiatives.".concat(i.props.initiativeIndex,".subfields.").concat(i.status),i.wysiwygOptions={toolbar:[["style",["bold","italic","underline","clear"]],["fontsize",["fontsize"]],["para",["ul","ol","paragraph"]],["view",["undo","redo","codeview","help"]]],tabDisable:!0,height:150},i}return Object(l.a)(a,[{key:"onInputChange",value:function(e){if("subfield"===e.target.dataset.fieldType){var t=this.props.subfields.findIndex((function(t){return t.id===e.target.name}));this.props.subfields[t].value=e.target.value,this.props.setFieldValue(e.target.id.replace(/.\d.value/,""),this.props.subfields)}else{var a=this.props.fields.findIndex((function(t){return t.id===e.target.name}));this.props.fields[a].value=e.target.value,this.props.setFieldValue(e.target.id.replace(/.\d.value/,""),this.props.fields)}}},{key:"render",value:function(){var e=this;return Object(_.jsxs)(z.a,{children:[Object.values(this.props.fields).map((function(t,a){return Object(_.jsxs)("div",{className:"tab-item-wrapper",children:[Object(_.jsx)(I.a,{muted:!0,children:t.label}),"textarea"===t.as?Object(_.jsx)(T.a,{onChange:function(i,n){e.onInputChange({target:{id:"".concat(e.fieldPrefix,".").concat(a,".value"),name:t.id,value:i,dataset:{label:t.label}}})},options:e.wysiwygOptions,"data-label":t.label}):Object(_.jsx)(v.b,{as:t.as,name:t.id,id:"".concat(e.fieldPrefix,".").concat(a,".value"),className:"form-control",onChange:e.onInputChange,"data-label":t.label}),Object(_.jsx)(v.a,{name:"".concat(e.fieldPrefix,".").concat(a),component:I.a})]},t.label)})),Object.values(this.props.subfields).map((function(t,a){return Object(_.jsxs)("div",{className:"tab-item-wrapper",children:[Object(_.jsx)(I.a,{muted:!0,className:"text-right",children:t.label}),Object(_.jsx)(v.b,{name:t.id,id:"".concat(e.subfieldPrefix,".").concat(a,".value"),className:"form-control",onChange:e.onInputChange,"data-label":t.label,"data-field-type":"subfield"}),Object(_.jsx)(v.a,{name:"".concat(e.subfieldPrefix,".").concat(a,".value"),component:I.a})]},t.label)}))]})}}]),a}(u.a.Component),N=[{value:"Started",label:"Started",color:"#ff00ff",description:"Used to indicate a new initiative has been started within the \t\ttimeframe of the status update.\nIn the status section, write no more than 2-3 \t\tsentences. If you have had any challenges, or foresee potential blockers, \t\tmake note of them in the \u201cAny challenges?\u201d section.",priority:1,fields:[{id:"title",label:"Title(s)",value:"",as:"input"},{id:"whodunnit",label:"Who",value:"",as:"textarea"},{id:"update_notes",label:"Update",value:"",as:"textarea"},{id:"challenges",label:"Any challenges?",value:"",as:"input"}],subfields:[]},{value:"Continuing",label:"Continuing",color:"#00ff00",priority:2,description:"Used to indicate a previously started initiative is still being worked on, but is progressing \t\tin a healthy manner.\nIn the \u201cProgress\u201d section, you may indicate what the progress of \t\tthe initiative is, such as by listing the number of tickets done.\nSamples are given, but \t\tsome projects will be longer than others, so the week description may change. \t\t\nRegardless, indicate the number week of work in the Status section.",fields:[{id:"title",label:"Title(s)",value:"",as:"input"},{id:"whodunnit",label:"Who",value:"",as:"textarea"},{id:"progress_notes",label:"Progress",value:"",as:"input"},{id:"update_notes",label:"Update",value:"",as:"textarea"}],subfields:[]},{value:"Milestone",label:"Milestone",color:"#00ffff",priority:3,description:"Used to indicate when an initiative has reached a notable point of development. May fall between \u201cContinuing\u201d statuses for an in-progress initiative.",fields:[{id:"title",label:"Title(s)",value:"",as:"input"},{id:"whodunnit",label:"Who",value:"",as:"textarea"},{id:"update_notes",label:"Update",value:"",as:"textarea"}],subfields:[{id:"worth",label:"What is worth celebrating?",value:"",as:"textarea"},{id:"impact",label:"What is the impact of this outcome/deliverable?",value:"",as:"textarea"},{id:"more",label:"How can I find out more about this outcome/deliverable?",value:"",as:"textarea"}]},{value:"Prioritized",label:"Prioritized",color:"#ffff00",priority:4,description:"Used to indicate when an initiative has been moved up in terms of prioritization. \t\tWhy the initiative was prioritized and who authorized the status change is required.",fields:[{id:"title",label:"Title(s)",value:"",as:"input"},{id:"whodunnit",label:"Who",value:"",as:"textarea"},{id:"update_notes",label:"Update",value:"",as:"textarea"},{id:"challenges",label:"Any challenges?",value:"",as:"input"}],subfields:[{id:"when",label:"When was this prioritized?",value:"",as:"input"},{id:"why",label:"Why was this prioritized?",value:"",as:"input"},{id:"who",label:"Who authorized the prioritization and when?",value:"",as:"input"}]},{value:"Deprioritized",label:"Deprioritized",color:"#ff9900",priority:5,description:"Used to indicate when an initiative has been moved down in terms of prioritization. Why \t\tthe initiative was deprioritized and who authorized the status change is required.",fields:[{id:"title",label:"Title(s)",value:"",as:"input"},{id:"whodunnit",label:"Who",value:"",as:"textarea"},{id:"update_notes",label:"Update",value:"",as:"textarea"},{id:"challenges",label:"Any challenges?",value:"",as:"input"}],subfields:[{id:"when",label:"When was this deprioritized?",value:"",as:"textarea"},{id:"why",label:"Why was this deprioritized?",value:"",as:"textarea"},{id:"who",label:"Who authorized the deprioritization and when?",value:"",as:"textarea"}]},{value:"Flagged",label:"Flagged",color:"#b7b7b7",priority:6,description:"Used to indicate when an initiative has encountered a notable delay or hold-up that \t\tshould be noted for future reference, but progress is still being made and thus the \t\tinitiative is not Blocked.",fields:[{id:"title",label:"Title(s)",value:"",as:"input"},{id:"whodunnit",label:"Who",value:"",as:"textarea"},{id:"update_notes",label:"Update",value:"",as:"textarea"},{id:"challenges",label:"Any challenges?",value:"",as:"input"}],subfields:[{id:"when",label:"When was this flagged?",value:"",as:"textarea"},{id:"why",label:"Why was this flagged?",value:"",as:"textarea"}]},{value:"Blocked",label:"Blocked",color:"#ff0000",priority:7,description:"Used to indicate when an initiative has been blocked.",fields:[{id:"title",label:"Title(s)",value:"",as:"input"},{id:"whodunnit",label:"Who",value:"",as:"textarea"},{id:"update_notes",label:"Update",value:"",as:"textarea"}],subfields:[{id:"who",label:"Who is blocking?",value:"",as:"textarea"},{id:"what",label:"What is the block?",value:"",as:"textarea"},{id:"tried",label:"What have you tried?",value:"",as:"textarea"}]},{value:"Emergency Request",label:"Emergency Request",color:"#ea9999",priority:0,description:"Used to indicate when an initiative has been bumped to top priority. This status, if used,\t\tshould always be listed first in the Weekly Status Update.",fields:[{id:"title",label:"Title(s)",value:"",as:"input"},{id:"whodunnit",label:"Who",value:"",as:"textarea"},{id:"update_notes",label:"Update",value:"",as:"textarea"},{id:"challenges",label:"Any challenges?",value:"",as:"input"}],subfields:[{id:"who",label:"Who is requesting?",value:"",as:"textarea"},{id:"when",label:"When is it needed by?",value:"",as:"textarea"}]},{value:"Completed",label:"Completed",color:"#9900ff",priority:8,description:"Initiative is complete.",fields:[{id:"title",label:"Title(s)",value:"",as:"input"},{id:"whodunnit",label:"Who",value:"",as:"textarea"},{id:"update_notes",label:"Update",value:"",as:"textarea"}],subfields:[{id:"impact",label:"What is the impact of this outcome/deliverable?",value:"",as:"textarea"},{id:"who",label:"Who did it?",value:"",as:"textarea"},{id:"notes",label:"Any final notes?",value:"",as:"textarea"},{id:"more",label:"How can I found out more about this outcome/deliverable?",value:"",as:"textarea"}]}],V=function(e){var t=e.options,a=e.label,n=Object(c.a)(e,["options","label"]),l=Object(v.f)(n),s=Object(g.a)(l,3),r=s[0],o=s[1],d=s[2],u={container:function(e){return Object(i.a)(Object(i.a)({},e),{},{width:"100%"})},menu:function(e,t){return Object(i.a)(Object(i.a)({},e),{},{padding:20})},control:function(e){return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:"white"})},option:function(e,t){var a=t.data,n=t.isDisabled,l=t.isFocused,s=t.isSelected,r=w()(a.color);return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:n?null:s?a.color:l?r.alpha(.1).css():null,color:n?"#ccc":s?w.a.contrast(r,"white")>2?"white":"black":a.color,cursor:n?"not-allowed":"default",":active":Object(i.a)(Object(i.a)({},e[":active"]),{},{backgroundColor:!n&&(s?a.color:r.alpha(.3).css())})})},input:function(e){return Object(i.a)(Object(i.a)({},e),{},{width:"100%"})},singleValue:function(e,t){var a=t.data;return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:a.color})},multiValue:function(e,t){var a=t.data,n=w()(a.color);return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:n.alpha(.1).css()})},multiValueLabel:function(e,t){var a=t.data;return Object(i.a)(Object(i.a)({},e),{},{color:a.color})},multiValueRemove:function(e,t){var a=t.data;return Object(i.a)(Object(i.a)({},e),{},{color:a.color,":hover":{backgroundColor:a.color,color:"white"}})}};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(I.a,{muted:!0,children:a}),Object(_.jsx)(k.a,Object(i.a)(Object(i.a)(Object(i.a)({styles:u,options:t},r),n),{},{onBlur:function(){return d.setTouched(!0)},onChange:function(e){n.handleOptionChange(e),d.setValue(e)},isMulti:!0})),o.touched&&o.error?Object(_.jsx)("span",{className:"error",children:o.error.value}):null]})},A=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleOptionChange=i.handleOptionChange.bind(Object(s.a)(i)),i.state={name:i.props.name||"Initiative Name",fields:i.props.fields||{},subfields:i.props.subfields||{},statuses:i.props.statuses||[],help_text:i.props.help_text||{},index:i.props.index},i}return Object(l.a)(a,[{key:"handleOptionChange",value:function(e){var t={fields:Object.assign.apply(Object,Object(O.a)(e.map((function(e,t){return Object(m.a)({},e.label,e.fields)})))),subfields:Object.assign.apply(Object,Object(O.a)(e.map((function(e,t){return Object(m.a)({},e.label,e.subfields)})))),help_text:Object.assign.apply(Object,Object(O.a)(e.map((function(e,t){return Object(m.a)({},e.label,e.description.split("\n").map((function(e,t){return Object(_.jsx)("p",{children:e},t)})))})))),statuses:e.map((function(e,t){return e.value})).flat()},a=Object(i.a)(Object(i.a)({},this.state),t);this.setState(a),this.props.setFieldValue("initiatives.".concat(this.props.index,".subfields"),t.subfields),this.props.setFieldValue("initiatives.".concat(this.props.index,".help_text"),t.help_text),this.props.setFieldValue("initiatives.".concat(this.props.index,".statuses"),e)}},{key:"render",value:function(){var e=this;return Object(_.jsxs)(C.a,{className:"form-container",style:{margin:"2px",width:"30rem"},children:[Object(_.jsx)(C.a.Header,{children:Object(_.jsx)(v.b,{className:"form-control-plaintext h3-plaintext-input",name:"initiatives.".concat(this.state.index,".name")})}),Object(_.jsxs)(C.a.Body,{children:[Object(_.jsx)(W.a,{children:Object(_.jsx)(S.a,{children:Object(_.jsx)(V,{name:"initiatives.".concat(this.state.index,".statuses"),label:"Status(es)",options:N,handleOptionChange:this.handleOptionChange})})}),this.state.statuses.length>0&&Object(_.jsx)(H.a,{children:Object.keys(this.state.fields).map((function(t,a){return Object(_.jsxs)(F.a,{eventKey:t.toLowerCase(),title:t,children:[Object(_.jsx)(I.a,{style:{paddingTop:"20px",display:"none"},muted:!0,children:e.state.help_text[t]}),Object(_.jsx)(U,{fields:e.state.fields[t],subfields:e.state.subfields[t],initiativeIndex:e.state.index,status:t,setFieldValue:e.props.setFieldValue},t)]},t)}))})]})]})}}]),a}(u.a.Component),R=a(12),L=a(404),P=a.n(L),q=a(124),D=(a(804),a(405)),E=a.n(D),M=R.e.create({headingOne:{marginBottom:4,fontFamily:"Helvetica-Bold",lineHeight:1.35,fontSize:14},text:{margin:5,marginBottom:8,fontFamily:"Helvetica",lineHeight:1.45,fontSize:12},list:{marginBottom:8,marginLeft:6},listItem:{marginBottom:4},listItemText:{fontFamily:"Helvetica",lineHeight:1.45,fontSize:12}}),J=function(e){var t=e.children;return Object(_.jsx)(R.g,{children:Object(_.jsx)(R.f,{style:M.headingOne,children:t})})},K=function(e){var t=e.children;e.depth;return Object(_.jsx)(R.g,{style:M.list,children:t})},G=function(e){var t=e.children;return Object(_.jsx)(R.g,{style:M.listItem,children:Object(_.jsxs)(R.f,{style:M.listItemText,children:["\u2022 \xa0",Object(_.jsx)(R.f,{children:t})]})})},Q=function(e){var t=e.children;e.depth;return Object(_.jsx)(R.g,{style:M.list,children:t})},X=function(e){var t=e.children,a=e.index;return Object(_.jsx)(R.g,{style:M.listItem,children:Object(_.jsxs)(R.f,{style:M.listItemText,children:[a+1,". \xa0",Object(_.jsx)(R.f,{children:t})]})})},Y={inline:{BOLD:function(e,t){var a=t.key;return Object(_.jsx)(R.f,{style:{fontFamily:"Helvetica-Bold"},children:e},"bold-".concat(a))},ITALIC:function(e,t){var a=t.key;return Object(_.jsx)(R.f,{style:{fontFamily:"Helvetica-Oblique"},children:e},"italic-".concat(a))},UNDERLINE:function(e,t){var a=t.key;return Object(_.jsx)(R.f,{style:{textDecoration:"underline"},children:e},"underline-".concat(a))}},blocks:{unstyled:function(e,t){var a=t.keys;return e.map((function(e,t){return Object(_.jsx)(R.g,{children:Object(_.jsx)(R.f,{style:M.text,children:e})},a[t])}))},"header-one":function(e,t){var a=t.keys;return e.map((function(e,t){return Object(_.jsx)(J,{children:e},a[t])}))},"unordered-list-item":function(e,t){var a=t.depth,i=t.keys;return Object(_.jsx)(K,{depth:a,children:e.map((function(e,t){return Object(_.jsx)(G,{children:e},i[t])}))},i[i.length-1])},"ordered-list-item":function(e,t){var a=t.depth,i=t.keys;return Object(_.jsx)(Q,{depth:a,children:e.map((function(e,t){return Object(_.jsx)(X,{index:t,children:e},i[t])}))},i.join("|"))}},entities:{LINK:function(e,t,a){var i=a.key;return Object(_.jsx)(R.c,{src:t.url,children:e},i)},FONT:function(e,t,a){var i=a.key;return Object(_.jsx)(R.f,{style:t.style,children:t.text},i)},SPAN:function(e,t,a){var i=a.key;return Object(_.jsx)(R.f,{style:t.style,children:e},i)}}},Z=function(e){var t=e.note,a=Object(q.convertFromHTML)(t),i=q.ContentState.createFromBlockArray(a.contentBlocks),n=q.EditorState.createWithContent(i),l=Object(q.convertToRaw)(n.getCurrentContent());return E()(l,Y,{blockFallback:"unstyled"})},$=R.e.create({page:{paddingTop:35,paddingBottom:65,paddingHorizontal:35,fontFamily:"Helvetica",fontSize:"12pt"},section:{margin:20,padding:20,flexGrow:5},text:{margin:12,fontSize:14,fontFamily:"Helvetica"},body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35}}),ee=R.e.create({table:{display:"table",width:"auto",borderStyle:"solid",borderColor:"#bfbfbf",borderWidth:1,borderRightWidth:0,borderBottomWidth:0},tableRow:{margin:"auto",flexDirection:"row"},tableColHeader:{width:"100%",borderStyle:"solid",borderColor:"#bfbfbf",borderBottomColor:"#000",borderWidth:1,borderLeftWidth:0,borderTopWidth:0,borderBottomWidth:0},tableCol:{width:"100%",borderStyle:"solid",borderColor:"#bfbfbf",borderWidth:1,borderLeftWidth:0,borderTopWidth:0},tableCellHeader:{margin:2,fontSize:12,fontFamily:"Helvetica-Bold"},tableCellSubHeader:{margin:2,fontSize:12,fontFamily:"Helvetica-Bold",textAlign:"right"},tableCell:{margin:5,fontSize:12,textIndent:"25pt"},tableCellSub:{margin:5,fontSize:12,textIndent:"25pt",textAlign:"right"}}),te=function(e){var t=Object(_.jsxs)(R.g,{style:$.text,children:[Object(_.jsx)(R.f,{style:{fontFamily:"Helvetica-Bold"},children:"Weekly Status Update"}),Object(_.jsxs)(R.f,{children:["Week of ",P()().format("L")]})]}),a=Object(_.jsxs)(R.g,{style:$.text,children:[Object(_.jsx)(R.f,{style:{fontFamily:"Helvetica-Bold",textIndent:"25pt",paddingBottom:"10pt"},children:"List of Initiatives:"}),e.initiatives.map((function(e,t){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(R.f,{children:[Object(_.jsxs)(R.f,{style:{fontFamily:"Helvetica-Bold",textIndent:"50pt"},children:[t+1,". "]}),Object(_.jsx)(R.f,{style:{textIndent:"50pt"},children:e.name})]}),Object(_.jsxs)(R.f,{style:{fontFamily:"Helvetica-Oblique",textIndent:"65pt",paddingBottom:"10pt"},children:[1===e.statuses.length?"Status: ":"Statuses: ",e.statuses.map((function(t,a){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(R.f,{style:{backgroundColor:t.color},children:t.value}),e.statuses.indexOf(t)!==e.statuses.length-1?", ":null]})}))]})]})}))]}),i=function(e){return Object(_.jsx)(R.g,{style:ee.tableRow,children:Object(_.jsx)(R.g,{style:ee.tableCol,children:Object(_.jsx)(Z,{note:e})})})},n=e.initiatives.map((function(e,t){return Object.keys(e.fields).map((function(t,a){var n=e.statuses[a],l={backgroundColor:n.color,textIndent:"10pt"};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(R.f,{style:{fontFamily:"Helvetica-Bold",fontSize:14},children:Object(_.jsx)(R.f,{style:l,children:n.value})}),Object(_.jsx)(R.g,{style:{padding:10},children:Object(_.jsxs)(R.g,{style:ee.table,children:[e.fields[t].map((function(e,t){return Object(_.jsxs)(_.Fragment,{children:[(a=e.label,Object(_.jsx)(R.g,{style:ee.tableRow,children:Object(_.jsx)(R.g,{style:ee.tableColHeader,children:Object(_.jsxs)(R.f,{style:ee.tableCellHeader,children:[a,":"]})})})),i(e.value)]});var a})),e.subfields[t].map((function(e,t){return Object(_.jsxs)(_.Fragment,{children:[(a=e.label,Object(_.jsx)(R.g,{style:ee.tableRow,children:Object(_.jsx)(R.g,{style:ee.tableColHeader,children:Object(_.jsx)(R.f,{style:ee.tableCellSubHeader,children:a})})})),i(e.value)]});var a}))]})})]})}))}));return Object(_.jsx)(R.b,{children:Object(_.jsxs)(R.d,{size:"A4",style:$.page,children:[t,a,n]})})},ae=function(e){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(R.a,{document:e.document,children:function(e){var t=e.url;return Object(_.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:"Open in new tab"})}})})},ie=function(e){var t=e.arrayHelpers,a=e.index;Object(c.a)(e,["arrayHelpers","index"]);return Object(_.jsx)(f.a,{className:"float-right",as:"input",type:"button",variant:"warning",value:"Remove",onClick:function(){return t.remove(a)}})},ne=function(e){var t=e.arrayHelpers,a=e.index;Object(c.a)(e,["arrayHelpers","index"]);return Object(_.jsx)(f.a,{as:"input",variant:"info",type:"button",value:"Add",onClick:function(){return t.push({name:"Initiative Name",fields:{},subfields:{},statuses:[],index:a})}})},le=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).validationSchema=x.b((function(e){return x.c().shape({initiatives:x.a().of(x.c().shape({name:x.d().required(),statuses:x.a().of(x.c()).required(),fields:x.c().required(),subfields:x.c()}))})})),i.state={initiatives:[{name:"Initiative Name",fields:{},subfields:{},statuses:[],help_text:{},index:0}],validationSchema:i.validationSchema,download_link:null,iframe:null},i.handleSubmit=i.handleSubmit.bind(Object(s.a)(i)),i}return Object(l.a)(a,[{key:"handleSubmit",value:function(e,t){var a=this,i=t.setSubmitting;setTimeout((function(){console.log(JSON.stringify(e,null,2)),a.setState({download_link:Object(_.jsx)(ae,{document:Object(_.jsx)(te,{initiatives:e.initiatives})})}),i(!1)}),400)}},{key:"render",value:function(){return Object(_.jsxs)(p.a,{children:[Object(_.jsx)(v.e,{initialValues:this.state,onSubmit:this.handleSubmit,enableReinitialize:!0,validationSchema:this.state.validationSchema,children:function(e){return Object(_.jsxs)(v.d,{children:[Object(_.jsx)(v.c,{name:"initiatives",children:function(t){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(j.a,{style:{boxShadow:"10px 10px 30px grey",border:"2px groove grey",padding:"10px"},children:e.values.initiatives&&e.values.initiatives.length>0?e.values.initiatives.map((function(a,n){return Object(_.jsxs)("div",{children:[Object(_.jsx)(A,Object(i.a)(Object(i.a)({},a),{},{setFieldValue:e.setFieldValue})),e.values.initiatives.length>1&&Object(_.jsx)(ie,{arrayHelpers:t,index:n})]},n)})):null}),Object(_.jsx)(ne,{arrayHelpers:t,index:e.values.initiatives.length}),"\xa0"]})}}),Object(_.jsx)(f.a,{as:"input",variant:"success",type:"submit",value:"Submit"})]})}}),this.state.iframe,Object(_.jsx)("div",{style:{paddingTop:10},children:this.state.download_link})]})}}]),a}(u.a.Component);function se(){return Object(_.jsx)(le,{})}var re=document.getElementById("root");h.a.render(Object(_.jsx)(se,{}),re)}},[[819,1,2]]]);
//# sourceMappingURL=main.94f2e5f8.chunk.js.map