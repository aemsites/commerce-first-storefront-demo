import e from"./getProp.js";function n(){const n=e(window,"screen.colorDepth")||"",a=!!e(window,"navigator.javaEnabled")&&window.navigator.javaEnabled(),t=e(window,"screen.height")||"",o=e(window,"screen.width")||"",r=e(window,"navigator.userAgent")||"";return{acceptHeader:"*/*",colorDepth:n,language:e(window,"navigator.language")||"en",javaEnabled:a,screenHeight:t,screenWidth:o,userAgent:r,timeZoneOffset:(new Date).getTimezoneOffset()}}export{n as default};
//# sourceMappingURL=browserInfo.js.map
