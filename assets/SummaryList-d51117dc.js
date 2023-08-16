import{j as e,a as i,F as l}from"./jsx-runtime-29545a09.js";import{M as h,C as o}from"./index-a6644abe.js";import"./chunk-S4VUQJ4A-16bd699b.js";import{primary as d,noAction as c,visuallyHidden as m,rowNoAction as u,noBorders as p,summaryCards as y,summaryCardsWithActions as f}from"./SummaryList.stories-b42ae166.js";import{g as w}from"./Typography-f899da69.js";import{u as r}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ea379913.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";function D(a={}){const{wrapper:t}=Object.assign({},r(),a.components);return t?e(t,Object.assign({},a,{children:e(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3"},r(),a.components);return i(l,{children:[e(h,{title:"Components/Summary list"}),`
`,e(w,{children:"Components"}),`
`,e(n.h1,{id:"summary-list",children:"Summary list"}),`
`,e(n.p,{children:"Use a summary list to summarise information, for example, a user’s responses at the end of a form."}),`
`,e(o,{of:d}),`
`,e(n.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(n.p,{children:"Use a summary list to show information as a list of key facts."}),`
`,e(n.p,{children:"You can use it to display metadata like ‘Last updated’ with a date like ‘22 June 2018’, or to summarise a user’s responses at the end of a form like the check answers pattern."}),`
`,e(n.p,{children:"Summary cards are a variant within this component. You can use summary cards to show multiple summary lists that describe the same type of thing, such as people. You can also add card actions that apply to the entire summary list."}),`
`,e(n.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,i(n.p,{children:["The summary list uses the description list (",e(n.code,{children:"<dl>"}),") HTML element, so only use it to present information that has a key and at least one value."]}),`
`,i(n.p,{children:["Do not use it for tabular data or a simple list of information or tasks, like a task list. For those use a ",e(n.code,{children:"<table>"}),", ",e(n.code,{children:"<ul>"})," or ",e(n.code,{children:"<ol>"}),"."]}),`
`,e(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e(n.p,{children:"Each row of a summary list is made up of a:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:`‘key’ that’s a description or label of a piece of information, like
“Name”`}),`
`,e(n.li,{children:`‘value’ which is the piece of information itself, such as “John Smith”
You can show a single or multiple summary lists on a page. If you’re showing multiple summary lists on a page, you can add structure by using headings or summary cards.`}),`
`]}),`
`,e(o,{of:c}),`
`,e(n.h2,{id:"adding-actions-to-each-row",children:"Adding actions to each row"}),`
`,e(n.p,{children:"You can add ‘row actions’ to a summary list. For example, you can help users go back and edit an answer by adding a ‘change’ link."}),`
`,e(n.p,{children:"When navigating visually, the borders above and below each row help to show which row action is tied to which piece of information."}),`
`,e(n.p,{children:"Assistive technology users, including those who use a screen reader, might hear a row action link out of context and might not know what it will do."}),`
`,e(n.p,{children:"To give more context, add visually hidden text to the links. This means a screen reader user will hear the row action and the ‘key’ label for the information it will affect, like ‘Change name’ or ‘Change date of birth’."}),`
`,e(o,{of:m}),`
`,e(n.p,{children:"If you’re showing a mix of rows (where some rows include actions and some do not), add the govuk-summary-list__row--no-actions modifier class to the rows without actions. This is to ensure the bottom border is drawn correctly in some browsers."}),`
`,e(o,{of:u}),`
`,e(n.h2,{id:"removing-the-borders",children:"Removing the borders"}),`
`,e(n.p,{children:"The summary list includes separating borders to help users by joining the information on each row and its action together."}),`
`,e(n.p,{children:"Think carefully before you remove row borders. Borders help many users find and read information that’s laid out in rows, especially users who zoom in on pages or use assistive technologies to magnify their screen."}),`
`,i(n.p,{children:["If your summary list does not have any actions, you can choose to remove the separating borders with the ",e(n.code,{children:"govuk-summary-list--no-border"})," class."]}),`
`,e(o,{of:p}),`
`,i(n.p,{children:["To remove borders on a single row, use the ",e(n.code,{children:"govuk-summary-list__row--no-border"})," class."]}),`
`,e(n.h2,{id:"summary-cards",children:"Summary cards"}),`
`,e(n.p,{children:"If you’re showing multiple summary lists on a page, you can show each list within a summary card. This lets you visually separate each summary list and give each a title and some actions."}),`
`,e(n.p,{children:"Use summary cards when you need to show:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"multiple summary lists that all describe the same type of thing, such as people"}),`
`,e(n.li,{children:"actions that will apply to all the items in a list"}),`
`]}),`
`,e(n.p,{children:"Summary cards are often used in case working systems to help users quickly view a set of information and related actions."}),`
`,e(n.p,{children:"Do not use summary cards if you only need to show a small amount of related information. Use summary lists instead, and structure them with headings if needed."}),`
`,e(n.p,{children:"If you’re showing summary cards at the end of a longer journey, you might want to familiarise the user with them earlier on — such as when the user reviews individual sections."}),`
`,e(n.h3,{id:"card-titles",children:"Card titles"}),`
`,e(n.p,{children:"Use the summary card’s header area to give each summary list a title."}),`
`,e(n.p,{children:"Each title must be unique and help identify what the summary list describes. For example, this could be the name of a specific person, organisation or professional qualification."}),`
`,e(n.p,{children:"Try to keep titles short and relevant. You can use one or two important values in the summary list — such as the first and last name of a person."}),`
`,e(o,{of:y}),`
`,e(n.h3,{id:"adding-card-actions",children:"Adding card actions"}),`
`,e(n.p,{children:"You can add card actions in the header, which will be shown after the summary card’s title."}),`
`,e(n.p,{children:"For example, if you have multiple rows with “change” actions that all take the user to the same place, you can show a single “change” card action instead. This helps avoid repeating the same row action on every row."}),`
`,e(n.p,{children:"Card actions are shown in bold text to make them visually distinct from row actions — and help alert the user that the card action will affect the entire summary card."}),`
`,e(n.p,{children:"Write link text for card actions to tell the user what the card action will do and that it will apply to the entire summary card. It should also be as short as possible, usually 2 words."}),`
`,e(n.p,{children:"Example card actions include:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"Remove tenant"}),`
`,e(n.li,{children:"Edit qualification"}),`
`,e(n.li,{children:"Update issue"}),`
`,e(n.li,{children:"Approve application"}),`
`,e(n.li,{children:"Cancel order"}),`
`,e(n.li,{children:"Keep it short and do not add more than 2 to 3 actions in a header."}),`
`]}),`
`,e(n.p,{children:"If a card action cannot easily be undone or might have serious consequences, consider adding a warning or asking the user for confirmation."}),`
`,e(o,{of:f})]})}}export{D as default};
//# sourceMappingURL=SummaryList-d51117dc.js.map
