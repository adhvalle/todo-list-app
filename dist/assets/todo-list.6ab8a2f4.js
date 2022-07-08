import{r as g,_ as T,a as z,w as b,t as x,o as m,c,b as a,d as v,v as I,e as k,f as D,g as B,n as A,h as K,i as w,j as V,F as U,k as M,l as C,m as h,p as O,q as N,s as L}from"./index.17400a2f.js";const f=g({todoList:[]}),_=()=>f.todoList,y=e=>{f.todoList=e},j=e=>{f.todoList.push(e)},E=e=>{y(f.todoList.map(t=>({...t,completed:e})))};const F={name:"TodoItem",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:model-value","on-change","on-clear"],setup(e,{emit:t}){const d=z(null),o=g({isActive:!1,inputValue:"",isCompleted:!1});b(()=>e.modelValue,()=>{o.inputValue=e.modelValue.title,o.isCompleted=e.modelValue.completed},{immediate:!0});const u=()=>{o.isActive=!1,t("update:model-value",o.inputValue)},p=()=>{o.isActive=!0,A(()=>d.value.focus())},i=r=>{r.keyCode===27&&(o.inputValue=e.modelValue.title,o.isActive=!1),r.keyCode===13&&(o.isActive=!1)};return{...x(o),inputElement:d,onBlur:u,onDbClick:p,onKeyDown:i}}},S={class:"todo-item"},$={class:"todo-item__checkbox"},q=["textContent"];function R(e,t,d,o,u,p){return m(),c("div",S,[a("div",$,[v(a("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>e.isCompleted=i),type:"checkbox","data-test":"todo-item__checkbox",onChange:t[1]||(t[1]=i=>e.$emit("on-change",e.isCompleted))},null,544),[[I,e.isCompleted]])]),a("div",null,[e.isActive?v((m(),c("input",{key:1,"data-test":"todo-item__input",ref:"inputElement","onUpdate:modelValue":t[3]||(t[3]=i=>e.inputValue=i),type:"text",onBlur:t[4]||(t[4]=(...i)=>o.onBlur&&o.onBlur(...i)),onKeydown:t[5]||(t[5]=(...i)=>o.onKeyDown&&o.onKeyDown(...i))},null,544)),[[D,e.inputValue]]):(m(),c("div",{key:0,"data-test":"todo-item__label",textContent:k(e.inputValue),onDblclick:t[2]||(t[2]=(...i)=>o.onDbClick&&o.onDbClick(...i))},null,40,q))]),a("a",{href:"#",class:"todo-item__clear","data-test":"todo-item__clear",onClick:t[6]||(t[6]=B(i=>e.$emit("on-clear"),["prevent"]))}," x ")])}var Y=T(F,[["render",R]]);const G={name:"TodoList",components:{TodoItem:Y},props:{filter:{type:String,default:""}},setup(e){const t=g({todoList:[],mainCheckbox:!1,newTodo:"",todoValue:"",showCompletedButton:!1,counterLabel:K(()=>` ${t.todoList.length===1?"item":"items"} left`)});b(()=>t.todoList,n=>{t.showCompletedButton=n.some(({completed:l})=>l),t.mainCheckbox=n.every(({completed:l})=>l)},{deep:!0}),b(()=>e.filter,()=>{i()});const d=n=>t.todoList.splice(n,1),o=n=>{n.keyCode===13&&t.newTodo&&(j({title:t.newTodo,completed:!1}),t.todoList=_(),t.newTodo="",i())},u=(n,l)=>{t.todoList[l].completed=n,y(t.todoList),i()},p=(n,l)=>{n?t.todoList[l].title=n:t.todoList.splice(l,1),y(t.todoList)},i=()=>{if(!e.filter)return t.todoList=_();t.todoList=_().filter(({completed:n})=>e.filter==="active"?!n:n)},r=()=>{t.todoList=_().filter(({completed:n})=>!n)},s=()=>{E(t.mainCheckbox),t.todoList=_()};return{...x(t),onClear:d,onInputKeyDown:o,onChangeTodoItem:u,onUpdateTodoItem:p,clearCompletedItems:r,onChangeMainCheckbox:s}}},H={class:"todo-list"},J={class:"todo-list__header"},P={key:0,class:"todo-list__footer"},Q={class:"todo-list__nav"},W=L(" All "),X=L(" Active "),Z=L(" Completed ");function tt(e,t,d,o,u,p){const i=w("todo-item"),r=w("router-link");return m(),c("main",H,[a("div",J,[e.todoList.length?v((m(),c("input",{key:0,class:"todo-list__header-checkbox","onUpdate:modelValue":t[0]||(t[0]=s=>e.mainCheckbox=s),type:"checkbox",onChange:t[1]||(t[1]=(...s)=>o.onChangeMainCheckbox&&o.onChangeMainCheckbox(...s))},null,544)),[[I,e.mainCheckbox]]):V("",!0),v(a("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>e.newTodo=s),class:"todo-list__header-input",type:"text",autofocus:"",onKeydown:t[3]||(t[3]=(...s)=>o.onInputKeyDown&&o.onInputKeyDown(...s))},null,544),[[D,e.newTodo]])]),(m(!0),c(U,null,M(e.todoList,(s,n)=>(m(),N(i,{key:n,"model-value":s,type:"text","onUpdate:modelValue":l=>o.onUpdateTodoItem(l,n),onOnChange:l=>o.onChangeTodoItem(l,n),onOnClear:l=>o.onClear(n)},null,8,["model-value","onUpdate:modelValue","onOnChange","onOnClear"]))),128)),e.todoList.length||d.filter?(m(),c("div",P,[a("div",null,[a("strong",null,k(e.todoList.length),1),a("span",null,k(e.counterLabel),1)]),a("nav",Q,[C(r,{to:{name:"home"},class:"todo-list__nav-item"},{default:h(()=>[W]),_:1}),C(r,{to:{name:"active"},class:"todo-list__nav-item"},{default:h(()=>[X]),_:1}),C(r,{to:{name:"completed"},class:"todo-list__nav-item"},{default:h(()=>[Z]),_:1})]),a("div",{class:O(["todo-list__clear",{"todo-list__clear--shown":e.showCompletedButton&&!d.filter}])},[a("a",{href:"#",onClick:t[4]||(t[4]=B((...s)=>o.clearCompletedItems&&o.clearCompletedItems(...s),["prevent"]))},"Clear completed")],2)])):V("",!0)])}var ot=T(G,[["render",tt]]);export{ot as default};
