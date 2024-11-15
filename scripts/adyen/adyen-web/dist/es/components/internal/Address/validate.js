import{countrySpecificFormatters as t}from"./validate.formats.js";import{ERROR_FIELD_REQUIRED as r,ERROR_INVALID_FORMAT_EXPECTS as e}from"../../../core/Errors/constants.js";import{isEmpty as a}from"../../../utils/validator-utils.js";const n=t=>({pattern:new RegExp(`\\d{${t}}`)}),o=(r,n,o)=>{if(n){if(a(r))return null;o.postalCode.errorMessage={translationKey:e,translationObject:{values:{format:t[n]?.postalCode.format||null}}};const d=s[n]?.pattern;return d?d.test(r):!!r}return!a(r)||null},s={AT:n(4),AU:n(4),BE:{pattern:/(?:(?:[1-9])(?:\d{3}))/},BG:n(4),BR:{pattern:/^\d{5}-?\d{3}$/},CA:{pattern:/(?:[ABCEGHJ-NPRSTVXY]\d[A-Z][ -]?\d[A-Z]\d)/},CH:{pattern:/[1-9]\d{3}/},CY:n(4),CZ:{pattern:/\d{3}\s?\d{2}/},DE:n(5),DK:n(4),EE:n(5),ES:{pattern:/(?:0[1-9]|[1-4]\d|5[0-2])\d{3}/},FI:n(5),FR:n(5),GB:{pattern:/^([A-Za-z][A-Ha-hK-Yk-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/},GE:n(4),GR:{pattern:/^\d{3}\s{0,1}\d{2}$/},HR:{pattern:/^([1-5])[0-9]{4}$/},HU:n(4),IE:{pattern:/(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}/},IS:n(3),IT:n(5),LI:n(4),LT:{pattern:/^(LT-\d{5}|\d{4,5})$/},LU:n(4),LV:{pattern:/^(LV-)[0-9]{4}$/},MC:{pattern:/^980\d{2}$/},MT:{pattern:/^[A-Za-z]{3}\d{4}$/},MY:n(5),NL:{pattern:/(?:NL-)?(?:[1-9]\d{3} ?(?:[A-EGHJ-NPRTVWXZ][A-EGHJ-NPRSTVWXZ]|S[BCEGHJ-NPRTVWXZ]))/},NO:n(4),PL:{pattern:/^\d{2}[-]{0,1}\d{3}$/},PT:{pattern:/^([1-9]\d{3})([- ]?(\d{3})? *)$/},RO:n(6),SI:n(4),SE:n(5),SG:n(6),SK:n(5),US:n(5)},d=t=>{const e={postalCode:{modes:["blur"],validate:r=>o(r,t,e),errorMessage:r}};return e},l=t=>{const e={postalCode:{modes:["blur"],validate:(t,r)=>{const a=r.state.data.country;return o(t,a,e)},errorMessage:r},houseNumberOrName:{validate:(r,e)=>{const n=e.state?.data?.country;return n&&t.countryHasOptionalField(n,"houseNumberOrName")||!a(r)||null},modes:["blur"],errorMessage:r},default:{validate:t=>!a(t)||null,modes:["blur"],errorMessage:r}};return e};export{l as getAddressValidationRules,d as getPartialAddressValidationRules,o as validatePostalCode};
//# sourceMappingURL=validate.js.map
