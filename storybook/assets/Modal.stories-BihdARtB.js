import{j as e,r as b}from"./iframe-CSSioxf6.js";import{r as y}from"./index-CL5p6Zwc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9NeNkIe.js";const g=({open:o,onClose:r,children:n})=>{if(!o)return null;const t=document.getElementById("modal-root");if(!t)throw new Error("Modal root is missing");return y.createPortal(e.jsx("div",{className:"fixed inset-0 flex items-center justify-center animate-fadeIn","data-modal-root":!0,onClick:l=>{l.target===l.currentTarget&&r&&r()},children:n}),t)},x={none:"backdrop-blur-0",sm:"backdrop-blur-sm",md:"backdrop-blur-md",lg:"backdrop-blur-lg",xl:"backdrop-blur-xl"},f={0:"bg-black/0",10:"bg-black/10",20:"bg-black/20",30:"bg-black/30",40:"bg-black/40",50:"bg-black/50",60:"bg-black/60",70:"bg-black/70",80:"bg-black/80",90:"bg-black/90",100:"bg-black/100"},c=({blur:o="md",opacity:r=70,onClick:n,clickBehavior:t="close"})=>e.jsx("div",{onClick:l=>{t==="close"&&n&&n(),l.stopPropagation()},className:`
        absolute inset-0
        ${x[o]}
        ${f[r]??"bg-black/70"}
        animate-fadeIn
      `});c.__docgenInfo={description:`Modal backdrop overlay component.\r
\r
Provides configurable blur and opacity.\r
Uses predefined Tailwind-safe class mappings.\r
Can optionally trigger close behavior when clicked.`,methods:[],displayName:"ModalBackdrop",props:{blur:{required:!1,tsType:{name:"union",raw:"keyof typeof blurMap",elements:[{name:"literal",value:"none"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"}]},description:`Backdrop blur intensity.\r
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},opacity:{required:!1,tsType:{name:"number"},description:`Background opacity (0–100).\r
\r
Supported values:\r
0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100\r
\r
Values outside this range fall back to 70.\r
\r
@default 70`,defaultValue:{value:"70",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler."},clickBehavior:{required:!1,tsType:{name:"union",raw:"'close' | 'ignore'",elements:[{name:"literal",value:"'close'"},{name:"literal",value:"'ignore'"}]},description:`Controls whether clicking the backdrop triggers close behavior.\r
@default 'close'`,defaultValue:{value:"'close'",computed:!1}}}};const i=({children:o})=>e.jsx("div",{className:`\r
        relative z-10\r
        bg-neutral-800 text-gray-100 p-6 rounded-lg\r
        border border-neutral-700 shadow-2xl\r
        w-full max-w-lg animate-scaleIn\r
      `,children:o});i.__docgenInfo={description:`Main modal container panel.\r
\r
Provides layout, border, animation, and styling.`,methods:[],displayName:"ModalPanel",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Panel content."}}};const p=({children:o})=>e.jsx("h1",{className:"text-2xl font-bold mb-4",children:o});p.__docgenInfo={description:`Modal header section.\r
\r
Typically, displays the modal title.`,methods:[],displayName:"ModalHeader",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Header content (typically title)."}}};const u=({children:o})=>e.jsx("div",{className:"text-gray-300",children:o});u.__docgenInfo={description:"Modal content body wrapper.",methods:[],displayName:"ModalBody",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Body content."}}};const m=({children:o})=>e.jsx("div",{className:"mt-6 flex flex-wrap gap-3",children:o});m.__docgenInfo={description:`Modal footer section.\r
\r
Typically, contains action buttons.`,methods:[],displayName:"ModalFooter",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Footer content (typically buttons)."}}};const a=g;a.Backdrop=c;a.Panel=i;a.Header=p;a.Body=u;a.Footer=m;const B={title:"Components/Modal",component:a,subcomponents:{Backdrop:c,Panel:i,Header:p,Body:u,Footer:m},tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
The **Modal** component is a compound component that provides a flexible,
composable API for building dialogs and overlays.
        `}}},argTypes:{open:{control:!1,table:{category:"Props"}},onClose:{control:!1,action:"onClose",description:"Callback invoked when the modal is closed",table:{category:"Props"}},headerText:{control:"text",description:"Modal header text",table:{category:"Text"}},bodyText:{control:"text",description:"Modal body text",table:{category:"Text"}},confirmText:{control:"text",description:"Confirm button text",table:{category:"Text"}},cancelText:{control:"text",description:"Cancel button text",table:{category:"Text"}}}},s={parameters:{docs:{description:{story:`
Basic modal usage using the compound component API.

Click **Open Modal** to see a fully structured dialog including
Header, Body, and Footer sections.
        `}}},args:{headerText:"Example Modal",bodyText:"This is a basic modal using the compound component API.",cancelText:"Cancel",confirmText:"Confirm"},render:o=>{const[r,n]=b.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded",children:"Open Modal"}),e.jsxs(a,{...o,open:r,children:[e.jsx(a.Backdrop,{onClick:()=>{o.onClose?.(),n(!1)}}),e.jsxs(a.Panel,{children:[e.jsx(a.Header,{children:o.headerText}),e.jsx(a.Body,{children:o.bodyText}),e.jsxs(a.Footer,{children:[e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded",children:o.cancelText}),e.jsx("button",{onClick:()=>n(!1),className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded",children:o.confirmText})]})]})]})]})}},d={parameters:{docs:{description:{story:`
Demonstrates customization of the **Modal.Backdrop** component.

Use controls to adjust:
- Blur intensity
- Opacity level

Useful for tuning visual emphasis and layering.
        `}}},args:{blur:"xl",opacity:80,headerText:"Heavy Backdrop",bodyText:"Backdrop props are editable via controls.",cancelText:"Cancel",confirmText:"Confirm"},argTypes:{blur:{control:"select",options:["none","sm","md","lg","xl"],description:"Backdrop blur intensity",table:{category:"Backdrop Props"}},opacity:{control:{type:"select"},options:[0,10,20,30,40,50,60,70,80,90,100],description:"Backdrop opacity (0–100)",table:{category:"Backdrop Props"}}},render:o=>{const[r,n]=b.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded",children:"Open Modal"}),e.jsxs(a,{open:r,children:[e.jsx(a.Backdrop,{...o,onClick:()=>{o.onClose?.(),n(!1)}}),e.jsxs(a.Panel,{children:[e.jsx(a.Header,{children:o.headerText}),e.jsx(a.Body,{children:o.bodyText})]})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Basic modal usage using the compound component API.

Click **Open Modal** to see a fully structured dialog including
Header, Body, and Footer sections.
        \`
      }
    }
  },
  args: {
    headerText: 'Example Modal',
    bodyText: 'This is a basic modal using the compound component API.',
    cancelText: 'Cancel',
    confirmText: 'Confirm'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">\r
          Open Modal\r
        </button>\r
\r
        <Modal {...args} open={open}>\r
          <Modal.Backdrop onClick={() => {
          args.onClose?.();
          setOpen(false);
        }} />\r
          <Modal.Panel>\r
            <Modal.Header>{args.headerText}</Modal.Header>\r
            <Modal.Body>{args.bodyText}</Modal.Body>\r
            <Modal.Footer>\r
              <button onClick={() => setOpen(false)} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded">\r
                {args.cancelText}\r
              </button>\r
              <button onClick={() => setOpen(false)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">\r
                {args.confirmText}\r
              </button>\r
            </Modal.Footer>\r
          </Modal.Panel>\r
        </Modal>\r
      </>;
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates customization of the **Modal.Backdrop** component.

Use controls to adjust:
- Blur intensity
- Opacity level

Useful for tuning visual emphasis and layering.
        \`
      }
    }
  },
  args: {
    blur: 'xl',
    opacity: 80,
    headerText: 'Heavy Backdrop',
    bodyText: 'Backdrop props are editable via controls.',
    cancelText: 'Cancel',
    confirmText: 'Confirm'
  },
  argTypes: {
    blur: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Backdrop blur intensity',
      table: {
        category: 'Backdrop Props'
      }
    },
    opacity: {
      control: {
        type: 'select'
      },
      options: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      description: 'Backdrop opacity (0–100)',
      table: {
        category: 'Backdrop Props'
      }
    }
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">\r
          Open Modal\r
        </button>\r
\r
        <Modal open={open}>\r
          <Modal.Backdrop {...args} onClick={() => {
          args.onClose?.();
          setOpen(false);
        }} />\r
          <Modal.Panel>\r
            <Modal.Header>{args.headerText}</Modal.Header>\r
            <Modal.Body>{args.bodyText}</Modal.Body>\r
          </Modal.Panel>\r
        </Modal>\r
      </>;
  }
}`,...d.parameters?.docs?.source}}};const v=["Default","BackdropVariants"];export{d as BackdropVariants,s as Default,v as __namedExportsOrder,B as default};
