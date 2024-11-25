import{h as R}from"./network-error.js";import{f as e,h as E}from"./fetch-graphql.js";import{R as _,P as T,a as o,G as s,O as c,t as u}from"./transform-order-details.js";const h=`
query GET_CUSTOMER_ORDERS_RETURN {
 customer {
  returns {
    page_info {
      page_size
      total_pages
      current_page
    }
    ...OrderReturns
  }
 }
}
${_}
${T}
${o}
${s}
${c}
${u}
`,G=async(e=10)=>await E(n,{method:"GET",cache:"force-cache",variables:{pageSize:e}}).then(r=>{var t,a;return(t=r.errors)!=null&&t.length?_(r.errors):h((a=r==null?void 0:r.data)==null?void 0:a.customer.returns)}).catch(R);export{G as g};
