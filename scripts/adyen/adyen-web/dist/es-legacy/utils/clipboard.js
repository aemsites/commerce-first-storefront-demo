function e(e){const n=function(e){const n=document.createElement("textArea");return n.readOnly=!0,n.value=e,document.body.appendChild(n),n}(e);if(window.navigator.userAgent.match(/ipad|iphone/i)){const e=document.createRange();e.selectNodeContents(n);const t=window.getSelection();t.removeAllRanges(),t.addRange(e),n.setSelectionRange(0,999999)}else n.select();document.execCommand("copy"),document.body.removeChild(n)}export{e as copyToClipboard,e as default};
//# sourceMappingURL=clipboard.js.map