import{r as u,j as a}from"./iframe-CSSioxf6.js";import"./preload-helper-PPVm8Dsz.js";const l=e=>e===" "?"Space":e,o=({value:e,onChange:r})=>{const[n,t]=u.useState(!1);return u.useEffect(()=>{if(!n)return;const i=d=>{d.preventDefault(),r(d.key),t(!1)};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[n,r]),a.jsx("button",{type:"button",onClick:()=>t(!0),className:`
        px-3 py-1 rounded-md text-sm font-medium w-full text-left
        transition border bg-neutral-700 text-gray-100
        hover:bg-neutral-600
        ${n?"border-blue-400 shadow-lg shadow-blue-500/30":"border-neutral-600"}
      `,children:n?"Press a key...":l(e)||"Unassigned"})};o.__docgenInfo={description:`Interactive key binding input component.\r
\r
When clicked, enters "listening" mode and captures\r
the next pressed keyboard key. The selected key\r
is passed to \`onChange\`.\r
\r
Prevents default browser behavior while listening.`,methods:[],displayName:"KeyInput",props:{value:{required:!0,tsType:{name:"string"},description:"Currently assigned key value."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"Callback invoked when a new key is selected."}}};const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,y={title:"Components/KeyInput",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
Interactive key binding input component.

When clicked, the component enters **listening mode** and captures
the next pressed keyboard key. The selected key is passed to \`onChange\`.

- Prevents default browser behavior while listening.
- Automatically exits listening mode after a key is pressed.
- Displays "Unassigned" when no key is set.
        `}}},argTypes:{value:{control:"text",description:"Currently assigned key value",table:{category:"Props"}},onChange:{action:"changed",description:"Callback invoked when a new key is selected",table:{category:"Props"}}}},s={args:{value:"a"},render:e=>{const[{value:r},n]=c();return a.jsx("div",{children:a.jsx(o,{...e,value:r,onChange:t=>{n({value:t}),e.onChange?.(t)}})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'a'
  },
  render: args => {
    const [{
      value
    }, updateArgs] = useArgs<{
      value: string;
    }>();
    return <div>\r
        <KeyInput {...args} value={value} onChange={newKey => {
        updateArgs({
          value: newKey
        });
        args.onChange?.(newKey);
      }} />\r
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const m=["Default"];export{s as Default,m as __namedExportsOrder,y as default};
