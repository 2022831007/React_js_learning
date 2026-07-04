import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import JsUseInReact from './jsUseInReact.jsx'

// import App from './App.jsx'
// import LoopInsideReact from './LoopInsideReact';
// import ConditionRendering from './ConditionRendering';
//  import ConditionRenderTernary from './ConditionRenderTernary';
import ConditionRendLogicalAnd from './ConditionRendLogicalAnd';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <JsUseInReact /> */}
   {/* <LoopInsideReact/> */}
   {/* <ConditionRendering/> */}
   {/* <CoditionRenderSwitch/> */}
   {/* <ConditionRenderTernary/> */}
   <ConditionRendLogicalAnd/>
  </StrictMode>,
)
