import{jsx as e,jsxs as a}from"@dropins/tools/preact-jsx-runtime.js";import{Card as n,Skeleton as i,SkeletonRow as r,CartItemSkeleton as t}from"@dropins/tools/components.js";import"./OrderCancel.js";import{classes as o}from"@dropins/tools/lib.js";const z=({testId:s,withCard:d=!0})=>{const l=a(i,{"data-testid":s??"skeletonLoader",children:[e(r,{variant:"heading",size:"xlarge",fullWidth:!1,lines:1}),e(r,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1}),e(r,{variant:"heading",size:"xlarge",fullWidth:!0,lines:1})]});return d?l:e(n,{variant:"secondary",className:o(["order-order-loaders","order-order-loaders--card-loader"]),children:l})},g=s=>e(n,{variant:"secondary",...s,children:a(i,{"data-testid":"order-details-skeleton",children:[e(r,{variant:"heading",size:"medium",fullWidth:!0}),e(r,{size:"medium"}),e(r,{variant:"empty",size:"medium"}),e(r,{size:"xlarge"}),e(r,{size:"xlarge"}),e(r,{size:"xlarge"}),e(r,{size:"xlarge"})]})}),f=()=>a(i,{"data-testid":"order-product-list-skeleton",style:{gridTemplateColumns:"1fr"},children:[e(r,{variant:"heading",fullWidth:!0,size:"medium"}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{})]}),v=()=>a(i,{"data-testid":"order-cost-summary-content-skeleton",className:"order-cost-summary-content",children:[e(r,{variant:"heading",size:"small"}),e(r,{variant:"empty",size:"small"}),e(r,{variant:"empty",size:"small"}),e(r,{variant:"empty",size:"small"}),e(r,{variant:"heading",size:"small",fullWidth:!0,lines:3})]});export{z as C,g as D,v as O,f as a};
