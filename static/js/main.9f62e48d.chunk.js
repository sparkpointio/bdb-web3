(this["webpackJsonpweb3-playground"]=this["webpackJsonpweb3-playground"]||[]).push([[0],{214:function(e,t,n){},216:function(e,t,n){},229:function(e,t){},238:function(e,t){},256:function(e,t){},258:function(e,t){},274:function(e,t){},275:function(e,t){},340:function(e,t){},342:function(e,t){},374:function(e,t){},376:function(e,t){},377:function(e,t){},382:function(e,t){},384:function(e,t){},390:function(e,t){},392:function(e,t){},405:function(e,t){},417:function(e,t){},420:function(e,t){},425:function(e,t){},433:function(e,t){},507:function(e,t,n){"use strict";n.r(t);var c=n(50),s=n.n(c),o=n(202),r=n.n(o),i=(n(213),n(214),n(21)),d=n.n(i),a=n(106),l=n(73),b=n(107),u=n(206),j=n.p+"static/media/logo.b9546dff.svg",h=n.p+"static/media/web3jslogo.f2bc2894.png",w=(n(216),n(108)),m=n.n(w),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!window.ethereum&&!e)throw new Error("no ethereum provider detected");return new m.a(e?new m.a.providers.HttpProvider(e):window.ethereum)},x=n(1);var O=function(){var e=Object(c.useState)({web3:null,selectedAddress:"",fromAddress:"[from address]",toAddress:"",amountToSendInEther:"",valueInWei:"",valueInEther:"",address:"",contractAddress:"",contractABI:""}),t=Object(u.a)(e,2),n=t[0],s=t[1];function o(e,t){s((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(l.a)({},e,t))}))}function r(e){var t=e.target;o(t.name,t.value)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("main",{children:[Object(x.jsxs)("div",{className:"py-5 text-center",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{className:"mx-auto mb-4",src:j,alt:"",width:"72",height:"57"}),Object(x.jsx)("img",{className:"mx-auto mb-4",src:h,alt:"",width:"72",height:"57"})]}),Object(x.jsx)("h2",{children:"Web3js Playground"}),Object(x.jsx)("p",{className:"lead",children:"Some of functions you will encounter throughout the course, please open browser console for the results"})]}),Object(x.jsx)("div",{className:"row g-5",children:Object(x.jsxs)("div",{className:"col-md-12",children:[Object(x.jsx)("h4",{className:"mb-3",children:"Functions"}),Object(x.jsx)("div",{children:Object(x.jsxs)("code",{children:["[web3 initialization]",Object(x.jsx)("br",{}),"window.web3 = configureWeb3();",Object(x.jsx)("button",{className:"submit btn btn-flat btn-primary float-end "+(n.web3?"disabled":""),type:"button",onClick:Object(a.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.web3=f(),console.log("Web3 object created, type window.web3 in the console"),console.log("==========================================================================="),o("web3",window.web3);case 4:case"end":return e.stop()}}),e)}))),children:"Run"})]})}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:Object(x.jsxs)("code",{children:["[requesting accounts]",Object(x.jsx)("br",{}),"window.web3.eth.requestAccounts()",Object(x.jsx)("button",{className:"submit btn btn-flat btn-primary float-end",type:"submit",disabled:!n.web3,onClick:Object(a.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.web3.eth.requestAccounts();case 2:window.connectedAccounts=e.sent,console.log("Accounts retrieved, type 'connectedAccounts' in the console"),console.log("===========================================================================");case 5:case"end":return e.stop()}}),e)}))),children:"Run"})]})}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:Object(x.jsxs)("code",{children:["[Shows the currently selected address]",Object(x.jsx)("br",{}),"window.web3.eth.currentProvider.selectedAddress",Object(x.jsx)("button",{className:"submit btn btn-flat btn-primary float-end",type:"button",onClick:function(){window.selectedAddress=window.web3.eth.currentProvider.selectedAddress,console.log(window.selectedAddress),o("selectedAddress",window.selectedAddress),o("fromAddress",window.selectedAddress),console.log("Type 'selectedAddress' in the console"),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:Object(x.jsx)("form",{children:Object(x.jsxs)("code",{children:["[get the eth balance]",Object(x.jsx)("br",{}),"window.web3.eth.balanceOf('",Object(x.jsx)("input",{onChange:r,type:"text",className:"",name:"address",value:n.address,required:!0,placeholder:"address"}),"')",Object(x.jsx)("button",{className:"submit btn btn-flat btn-primary float-end "+(n.address?"":"disabled"),type:"button",onClick:function(){window.web3.eth.getBalance(n.address).then(console.log),console.log("This is the balance in wei form, to convert to "),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})})}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:Object(x.jsx)("form",{children:Object(x.jsxs)("code",{children:["[converts wei to ether for it to makes sense in the real world, always pass values as strings or BN objects]",Object(x.jsx)("br",{}),"window.web3.utils.fromWei('",Object(x.jsx)("input",{onChange:r,type:"text",className:"",name:"valueInWei",value:n.valueInWei,required:!0,placeholder:"value in wei"}),"')",Object(x.jsx)("button",{className:"submit btn btn-flat btn-primary float-end "+(n.valueInWei?"":"disabled"),type:"button",onClick:function(){console.log("This is the value in ether"),console.log(window.web3.utils.fromWei(n.valueInWei)),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})})}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:Object(x.jsx)("form",{children:Object(x.jsxs)("code",{children:["[converts ether to wei for it to makes sense in the blockchain]",Object(x.jsx)("br",{}),"window.web3.utils.toWei('",Object(x.jsx)("input",{onChange:r,type:"text",className:"",name:"valueInEther",value:n.valueInEther,required:!0,placeholder:"value in ether"}),"')",Object(x.jsx)("button",{className:"submit btn btn-flat btn-primary float-end "+(n.valueInEther?"":"disabled"),type:"button",onClick:function(){console.log("This is the value in wei"),console.log(window.web3.utils.toWei(n.valueInEther)),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})})}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:Object(x.jsxs)("code",{children:["[All the utilities from web3 object]",Object(x.jsx)("br",{}),"web3.utils",Object(x.jsx)("button",{className:"submit btn btn-flat btn-primary float-end",type:"button",onClick:function(){console.log(window.web3.utils),console.log("Type web3.utils in the console"),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})}),Object(x.jsx)("hr",{}),Object(x.jsx)("form",{children:Object(x.jsxs)("code",{children:["[initializing a smart contract]",Object(x.jsx)("br",{}),"window.contract = new web3.eth.Contract( '",Object(x.jsx)("textarea",{name:"contractABI",className:"align-middle",rows:1,onChange:r,placeholder:"contract ABI",value:n.contractABI}),"', '",Object(x.jsx)("input",{onChange:r,type:"text",className:"",name:"contractAddress",value:n.contractAddress,required:!0,placeholder:"contract address"}),"' )",Object(x.jsx)("button",{className:"submit btn btn-flat btn-primary float-end "+(n.contractABI&&n.contractAddress?"":"disabled"),type:"button",onClick:function(){var e=JSON.parse(n.contractABI),t=new window.web3.eth.Contract(e,n.contractAddress);window.contract=t,console.log(t),console.log("Contract object has been created, type 'contract' in the console to access"),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})}),Object(x.jsx)("hr",{}),Object(x.jsx)("form",{children:Object(x.jsxs)("code",{children:["[sending a transaction from metamask, click run on window.web3.eth.currentProvider.selectedAddress first, it will set the fromAddress]",Object(x.jsx)("br",{}),"window.web3.eth.sendTransaction( '",n.fromAddress,"', '",Object(x.jsx)("input",{onChange:r,type:"text",className:"",name:"toAddress",value:n.toAddress,required:!0,placeholder:"enter recipient address"}),"', '",Object(x.jsx)("input",{onChange:r,type:"text",className:"",name:"amountToSendInEther",value:n.amountToSendInEther,required:!0,placeholder:"enter amount to send in ether"}),"' ,                                    )",Object(x.jsx)("button",{className:"submit btn btn-flat btn-primary float-end "+(n.fromAddress&&n.toAddress&&n.amountToSendInEther?"":"disabled"),type:"button",onClick:function(){window.web3.eth.sendTransaction({from:n.fromAddress,to:n.toAddress,value:window.web3.utils.toWei(n.amountToSendInEther)}).then(console.log),console.log("Contract object has been created, type 'contract' in the console to access"),console.log("===========================================================================")},disabled:!n.web3,children:"Run"})]})}),Object(x.jsx)("hr",{})]})})]})})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,511)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),o(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root")),p()}},[[507,1,2]]]);
//# sourceMappingURL=main.9f62e48d.chunk.js.map