import{a as e,j as a,F as s}from"./jsx-runtime-68f49b4e.js";import{I as i}from"./Legend-3f30edf0.js";import"./Accordion-12d9884c.js";import"./BackLink-54564ca1.js";import"./BreadcrumbItem-7e03e4ef.js";import"./Button-791dc627.js";import"./CharacterCount-6c285db3.js";import"./Table-778a5eb5.js";import"./CookieBanner-5f4494f2.js";import"./DateInput-e4c6e0c9.js";import"./Details-7a2689db.js";import"./ErrorMessage-07ea8fac.js";import"./ErrorSummary-d6d61f90.js";import"./FileUpload-b260dab3.js";import"./Footer-aedacc55.js";import"./Header-81057254.js";import{H as r}from"./Hint-47130fa7.js";import"./InsetText-39830db6.js";import{L as t}from"./Label-3d09487c.js";import"./NotificationBanner-b6ddf0d7.js";import"./Pagination-b98a4ff4.js";import"./Panel-9db3f9a0.js";import"./PhaseBanner-b7bf4a2c.js";import"./Radios-79cc87ab.js";import"./Select-d6e3d713.js";import"./SkipLink-0b18f351.js";import"./Tabs-61739ac7.js";import"./Textarea-0f1928d4.js";import"./WarningText-7f7d45da.js";import{T as n}from"./Typography-3950099a.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./FormGroup-f91b51d3.js";import"./Fieldset-cd643f71.js";const B={title:"Text input",component:i},C={name:"Text input",args:{name:"event-name",children:[e(t,{children:e(n,{component:"h1",variant:"l",children:"What is the name of the event?"})})]}},G={name:"Text input without heading",args:{name:"event-name",children:[e(t,{children:"What is the name of the event?"})]}},J={name:"Fixed width inputs",render:h=>a(s,{children:[e(i,{name:"width-20",classes:"govuk-input--width-20",children:e(t,{children:"20 character width"})}),e(i,{name:"width-10",classes:"govuk-input--width-10",children:e(t,{children:"10 character width"})}),e(i,{name:"width-5",classes:"govuk-input--width-5",children:e(t,{children:"5 character width"})}),e(i,{name:"width-4",classes:"govuk-input--width-4",children:e(t,{children:"4 character width"})}),e(i,{name:"width-3",classes:"govuk-input--width-3",children:e(t,{children:"3 character width"})}),e(i,{name:"width-2",classes:"govuk-input--width-2",children:e(t,{children:"2 character width"})})]})},K={name:"Fluid width inputs",render:h=>a(s,{children:[e(i,{name:"full",classes:"govuk-!-width-full",children:e(t,{children:"Full width"})}),e(i,{name:"three-quarters",classes:"govuk-!-width-three-quarters",children:e(t,{children:"Three-quarters width"})}),e(i,{name:"two-thirds",classes:"govuk-!-width-two-thirds",children:e(t,{children:"Two-thirds width"})}),e(i,{name:"one-half",classes:"govuk-!-width-one-half",children:e(t,{children:"One-half width"})}),e(i,{name:"one-third",classes:"govuk-!-width-one-third",children:e(t,{children:"One-third width"})}),e(i,{name:"one-quarter",classes:"govuk-!-width-one-quarter",children:e(t,{children:"One-quarter width"})})]})},Q={name:"Text input with hint text",args:{name:"event-name",children:[e(t,{children:e(n,{component:"h1",variant:"l",children:"What is the name of the event?"})}),e(r,{children:"The name you’ll use on promotional material"})]}},U={name:"Text input with hint text",args:{name:"account-number",inputmode:"numeric",spellcheck:!1,children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is your account number?"})}),e(r,{children:"Must be between 6 and 8 digits long"})]}},V={name:"Numeric text input with decimals",args:{name:"weight",classes:"govuk-input--width-5",spellcheck:!1,suffix:"kg",children:[e(t,{children:"Weight, in kilograms"})]}},X={name:"Prefix and suffix",args:{name:"weight",classes:"govuk-input--width-5",spellcheck:!1,prefix:"£",suffix:"per item",children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is the cost per item, in pounds?"})})]}},Y={name:"Prefix",args:{name:"cost",classes:"govuk-input--width-5",spellcheck:!1,prefix:"£",children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is the cost in pounds?"})})]}},Z={name:"Suffix",args:{name:"weight",classes:"govuk-input--width-5",spellcheck:!1,suffix:"kg",children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is the weight in kilograms?"})})]}},$={name:"Autocomplete",args:{name:"postal-code",classes:"govuk-input--width-10",autocomplete:"postal-code",children:[e(t,{children:"Postcode"})]}},ee={name:"Spellcheck",args:{name:"name",spellcheck:!1,children:[e(t,{children:"Reference number"})]}},te={name:"Error message",args:{name:"event-name",errorMessage:"Enter an event name",children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is the name of the event?"})}),e(r,{children:"The name you’ll use on promotional material"})]}},ie={name:"Error message on prefix and suffix",args:{name:"cost-per-item-error",errorMessage:"Enter a cost per item, in pounds",prefix:"£",suffix:"per item",classes:"govuk-input--width-5",spellcheck:!1,children:[e(t,{children:e(n,{component:"h1",variant:"l",classes:"govuk-label--l",children:"What is the cost per item, in pounds?"})})]}},ne=["primary","withoutHeading","fixedWidthInputs","fluidWidthInputs","hintText","number","numberWithDecimals","prefixAndSuffix","prefix","suffix","autocomplete","spellcheck","error","prefixSuffixError"];export{ne as __namedExportsOrder,$ as autocomplete,B as default,te as error,J as fixedWidthInputs,K as fluidWidthInputs,Q as hintText,U as number,V as numberWithDecimals,Y as prefix,X as prefixAndSuffix,ie as prefixSuffixError,C as primary,ee as spellcheck,Z as suffix,G as withoutHeading};
//# sourceMappingURL=Input.stories-91b5972a.js.map
