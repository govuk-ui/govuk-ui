import{j as e,a as n,F as l}from"./jsx-runtime-29545a09.js";import{M as h,C as o}from"./index-7274de15.js";import"./chunk-S4VUQJ4A-a0bac834.js";import{primary as d,noAction as c,visuallyHidden as m,rowNoAction as u,noBorders as p,summaryCards as y,summaryCardsWithActions as f}from"./SummaryList.stories-ccdbdc56.js";import"./Textarea-da411eb3.js";import"./BackLink-db4a3555.js";import"./BreadcrumbItem-4c671eb0.js";import"./Button-e9eb043b.js";import"./CookieBanner-d4f62548.js";import"./Details-b31dbea0.js";import{H as w}from"./Radios-a3c37471.js";import"./Footer-c20a9c5d.js";import"./Header-19efd5f0.js";import"./InsetText-f9c5a393.js";import"./Pagination-e4f0cd70.js";import"./PhaseBanner-85bc883f.js";import"./SkipLink-7ef7355e.js";import"./WarningText-4cfd38cd.js";import{u as s}from"./index-b6bb2acc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-49479615.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d893ea64.js";import"./assert-a1982797.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./react-18-5d423019.js";import"./Typography-359fe8b4.js";import"./FormGroup-201d2661.js";import"./Fieldset-d9d8ba59.js";import"./Container-045493c7.js";import"./Grid-408885ec.js";function $(t={}){const{wrapper:a}=Object.assign({},s(),t.components);return a?e(a,Object.assign({},t,{children:e(r,{})})):r();function r(){const i=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3"},s(),t.components);return n(l,{children:[e(h,{title:"Components/Summary list"}),`
`,e(w,{children:"Components"}),`
`,e(i.h1,{id:"summary-list",children:"Summary list"}),`
`,e(i.p,{children:"Use a summary list to summarise information, for example, a user’s responses at the end of a form."}),`
`,e(o,{of:d}),`
`,e(i.h2,{id:"when-to-use-this-component",children:"When to use this component"}),`
`,e(i.p,{children:"Use a summary list to show information as a list of key facts."}),`
`,e(i.p,{children:"You can use it to display metadata like ‘Last updated’ with a date like ‘22 June 2018’, or to summarise a user’s responses at the end of a form like the check answers pattern."}),`
`,e(i.p,{children:"Summary cards are a variant within this component. You can use summary cards to show multiple summary lists that describe the same type of thing, such as people. You can also add card actions that apply to the entire summary list."}),`
`,e(i.h2,{id:"when-not-to-use-this-component",children:"When not to use this component"}),`
`,n(i.p,{children:["The summary list uses the description list (",e(i.code,{children:"<dl>"}),") HTML element, so only use it to present information that has a key and at least one value."]}),`
`,n(i.p,{children:["Do not use it for tabular data or a simple list of information or tasks, like a task list. For those use a ",e(i.code,{children:"<table>"}),", ",e(i.code,{children:"<ul>"})," or ",e(i.code,{children:"<ol>"}),"."]}),`
`,e(i.h2,{id:"how-it-works",children:"How it works"}),`
`,e(i.p,{children:"Each row of a summary list is made up of a:"}),`
`,n(i.ul,{children:[`
`,e(i.li,{children:`‘key’ that’s a description or label of a piece of information, like
“Name”`}),`
`,e(i.li,{children:`‘value’ which is the piece of information itself, such as “John Smith”
You can show a single or multiple summary lists on a page. If you’re showing multiple summary lists on a page, you can add structure by using headings or summary cards.`}),`
`]}),`
`,e(o,{of:c}),`
`,e(i.h2,{id:"adding-actions-to-each-row",children:"Adding actions to each row"}),`
`,e(i.p,{children:"You can add ‘row actions’ to a summary list. For example, you can help users go back and edit an answer by adding a ‘change’ link."}),`
`,e(i.p,{children:"When navigating visually, the borders above and below each row help to show which row action is tied to which piece of information."}),`
`,e(i.p,{children:"Assistive technology users, including those who use a screen reader, might hear a row action link out of context and might not know what it will do."}),`
`,e(i.p,{children:"To give more context, add visually hidden text to the links. This means a screen reader user will hear the row action and the ‘key’ label for the information it will affect, like ‘Change name’ or ‘Change date of birth’."}),`
`,e(o,{of:m}),`
`,e(i.p,{children:"If you’re showing a mix of rows (where some rows include actions and some do not), add the govuk-summary-list__row--no-actions modifier class to the rows without actions. This is to ensure the bottom border is drawn correctly in some browsers."}),`
`,e(o,{of:u}),`
`,e(i.h2,{id:"removing-the-borders",children:"Removing the borders"}),`
`,e(i.p,{children:"The summary list includes separating borders to help users by joining the information on each row and its action together."}),`
`,e(i.p,{children:"Think carefully before you remove row borders. Borders help many users find and read information that’s laid out in rows, especially users who zoom in on pages or use assistive technologies to magnify their screen."}),`
`,n(i.p,{children:["If your summary list does not have any actions, you can choose to remove the separating borders with the ",e(i.code,{children:"govuk-summary-list--no-border"})," class."]}),`
`,e(o,{of:p}),`
`,n(i.p,{children:["To remove borders on a single row, use the ",e(i.code,{children:"govuk-summary-list__row--no-border"})," class."]}),`
`,e(i.h2,{id:"summary-cards",children:"Summary cards"}),`
`,e(i.p,{children:"If you’re showing multiple summary lists on a page, you can show each list within a summary card. This lets you visually separate each summary list and give each a title and some actions."}),`
`,e(i.p,{children:"Use summary cards when you need to show:"}),`
`,n(i.ul,{children:[`
`,e(i.li,{children:"multiple summary lists that all describe the same type of thing, such as people"}),`
`,e(i.li,{children:"actions that will apply to all the items in a list"}),`
`]}),`
`,e(i.p,{children:"Summary cards are often used in case working systems to help users quickly view a set of information and related actions."}),`
`,e(i.p,{children:"Do not use summary cards if you only need to show a small amount of related information. Use summary lists instead, and structure them with headings if needed."}),`
`,e(i.p,{children:"If you’re showing summary cards at the end of a longer journey, you might want to familiarise the user with them earlier on — such as when the user reviews individual sections."}),`
`,e(i.h3,{id:"card-titles",children:"Card titles"}),`
`,e(i.p,{children:"Use the summary card’s header area to give each summary list a title."}),`
`,e(i.p,{children:"Each title must be unique and help identify what the summary list describes. For example, this could be the name of a specific person, organisation or professional qualification."}),`
`,e(i.p,{children:"Try to keep titles short and relevant. You can use one or two important values in the summary list — such as the first and last name of a person."}),`
`,e(o,{of:y}),`
`,e(i.h3,{id:"adding-card-actions",children:"Adding card actions"}),`
`,e(i.p,{children:"You can add card actions in the header, which will be shown after the summary card’s title."}),`
`,e(i.p,{children:"For example, if you have multiple rows with “change” actions that all take the user to the same place, you can show a single “change” card action instead. This helps avoid repeating the same row action on every row."}),`
`,e(i.p,{children:"Card actions are shown in bold text to make them visually distinct from row actions — and help alert the user that the card action will affect the entire summary card."}),`
`,e(i.p,{children:"Write link text for card actions to tell the user what the card action will do and that it will apply to the entire summary card. It should also be as short as possible, usually 2 words."}),`
`,e(i.p,{children:"Example card actions include:"}),`
`,n(i.ul,{children:[`
`,e(i.li,{children:"Remove tenant"}),`
`,e(i.li,{children:"Edit qualification"}),`
`,e(i.li,{children:"Update issue"}),`
`,e(i.li,{children:"Approve application"}),`
`,e(i.li,{children:"Cancel order"}),`
`,e(i.li,{children:"Keep it short and do not add more than 2 to 3 actions in a header."}),`
`]}),`
`,e(i.p,{children:"If a card action cannot easily be undone or might have serious consequences, consider adding a warning or asking the user for confirmation."}),`
`,e(o,{of:f})]})}}export{$ as default};
//# sourceMappingURL=SummaryList-4c5c5d44.js.map
