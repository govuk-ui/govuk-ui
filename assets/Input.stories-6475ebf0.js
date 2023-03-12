import{a as e,j as a,F as s}from"./jsx-runtime-68f49b4e.js";import{I as i}from"./Legend-3f30edf0.js";import"./Accordion-12d9884c.js";import"./BackLink-54564ca1.js";import"./BreadcrumbItem-7e03e4ef.js";import"./Button-791dc627.js";import"./CharacterCount-6c285db3.js";import"./Tabs-542ce70e.js";import"./CookieBanner-5f4494f2.js";import"./DateInput-e4c6e0c9.js";import"./Details-7a2689db.js";import"./ErrorMessage-07ea8fac.js";import"./ErrorSummary-d6d61f90.js";import"./FileUpload-b260dab3.js";import"./Footer-aedacc55.js";import"./Header-81057254.js";import{H as r}from"./Hint-47130fa7.js";import"./InsetText-39830db6.js";import{L as t}from"./Label-3d09487c.js";import"./NotificationBanner-b6ddf0d7.js";import"./Pagination-252dd775.js";import"./Panel-9db3f9a0.js";import"./PhaseBanner-b7bf4a2c.js";import"./Radios-79cc87ab.js";import"./Select-d6e3d713.js";import"./SkipLink-0b18f351.js";import"./Textarea-0f1928d4.js";import"./WarningText-7f7d45da.js";import{T as n}from"./Typography-3950099a.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./FormGroup-f91b51d3.js";import"./Fieldset-cd643f71.js";const z={title:"Text input",component:i},B={name:"Text input",args:{name:"event-name",children:[e(t,{children:e(n,{component:"h1",variant:"l",children:"What is the name of the event?"})})]}},C={name:"Text input without heading",args:{name:"event-name",children:[e(t,{children:"What is the name of the event?"})]}},G={name:"Fixed width inputs",render:h=>a(s,{children:[e(i,{name:"width-20",classes:"govuk-input--width-20",children:e(t,{children:"20 character width"})}),e(i,{name:"width-10",classes:"govuk-input--width-10",children:e(t,{children:"10 character width"})}),e(i,{name:"width-5",classes:"govuk-input--width-5",children:e(t,{children:"5 character width"})}),e(i,{name:"width-4",classes:"govuk-input--width-4",children:e(t,{children:"4 character width"})}),e(i,{name:"width-3",classes:"govuk-input--width-3",children:e(t,{children:"3 character width"})}),e(i,{name:"width-2",classes:"govuk-input--width-2",children:e(t,{children:"2 character width"})})]})},J={name:"Fluid width inputs",render:h=>a(s,{children:[e(i,{name:"full",classes:"govuk-!-width-full",children:e(t,{children:"Full width"})}),e(i,{name:"three-quarters",classes:"govuk-!-width-three-quarters",children:e(t,{children:"Three-quarters width"})}),e(i,{name:"two-thirds",classes:"govuk-!-width-two-thirds",children:e(t,{children:"Two-thirds width"})}),e(i,{name:"one-half",classes:"govuk-!-width-one-half",children:e(t,{children:"One-half width"})}),e(i,{name:"one-third",classes:"govuk-!-width-one-third",children:e(t,{children:"One-third width"})}),e(i,{name:"one-quarter",classes:"govuk-!-width-one-quarter",children:e(t,{children:"One-quarter width"})})]})},K={name:"Text input with hint text",args:{name:"event-name",children:[e(t,{children:e(n,{component:"h1",variant:"l",children:"What is the name of the event?"})}),e(r,{children:"The name you’ll use on promotional material"})]}},Q={name:"Text input with hint text",args:{name:"account-number",inputmode:"numeric",spellcheck:!1,children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is your account number?"})}),e(r,{children:"Must be between 6 and 8 digits long"})]}},U={name:"Numeric text input with decimals",args:{name:"weight",classes:"govuk-input--width-5",spellcheck:!1,suffix:"kg",children:[e(t,{children:"Weight, in kilograms"})]}},V={name:"Prefix and suffix",args:{name:"weight",classes:"govuk-input--width-5",spellcheck:!1,prefix:"£",suffix:"per item",children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is the cost per item, in pounds?"})})]}},X={name:"Prefix",args:{name:"cost",classes:"govuk-input--width-5",spellcheck:!1,prefix:"£",children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is the cost in pounds?"})})]}},Y={name:"Suffix",args:{name:"weight",classes:"govuk-input--width-5",spellcheck:!1,suffix:"kg",children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is the weight in kilograms?"})})]}},Z={name:"Autocomplete",args:{name:"postal-code",classes:"govuk-input--width-10",autocomplete:"postal-code",children:[e(t,{children:"Postcode"})]}},$={name:"Spellcheck",args:{name:"name",spellcheck:!1,children:[e(t,{children:"Reference number"})]}},ee={name:"Error message",args:{name:"event-name",errorMessage:"Enter an event name",children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is the name of the event?"})}),e(r,{children:"The name you’ll use on promotional material"})]}},te={name:"Error message on prefix and suffix",args:{name:"cost-per-item-error",errorMessage:"Enter a cost per item, in pounds",prefix:"£",suffix:"per item",classes:"govuk-input--width-5",spellcheck:!1,children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is the cost per item, in pounds?"})})]}},ie=["primary","withoutHeading","fixedWidthInputs","fluidWidthInputs","hintText","number","numberWithDecimals","prefixAndSuffix","prefix","suffix","autocomplete","spellcheck","error","prefixSuffixError"];export{ie as __namedExportsOrder,Z as autocomplete,z as default,ee as error,G as fixedWidthInputs,J as fluidWidthInputs,K as hintText,Q as number,U as numberWithDecimals,X as prefix,V as prefixAndSuffix,te as prefixSuffixError,B as primary,$ as spellcheck,Y as suffix,C as withoutHeading};
//# sourceMappingURL=Input.stories-6475ebf0.js.map
