import{CREDITCARD_HOLDER_NAME_INVALID as _,CREDITCARD_TAX_NUMBER_INVALID as e,BOLETO_SOCIAL_SECURITY_NUMBER_INVALID as t,ERROR_FIELD_REQUIRED as E,ERROR_INVALID_FORMAT_EXPECTS as o}from"../Errors/constants.js";const r="v3/analytics",n=1e4,I=3e3,N="log",T="error",a="info",S="action",O="submit",c="selected",i="rendered",A="displayed",R="input",d="download",s="validationError",L="focus",l="unfocus",p="configured",D="qr_download_button",u="instant_payment_button",C="featured_issuer",f="list",G="list_search",m="ApiError",M="SdkError",P="Network";var F,H;!function(_){_.ACTION_IS_MISSING_PAYMENT_DATA="700",_.ACTION_IS_MISSING_TOKEN="701",_.TOKEN_IS_MISSING_THREEDSMETHODURL="702",_.TOKEN_IS_MISSING_OTHER_PROPS="703",_.TOKEN_DECODE_OR_PARSING_FAILED="704",_.THREEDS2_TIMEOUT="705",_.TOKEN_IS_MISSING_ACSURL="800",_.NO_TRANSSTATUS="801",_.NO_DETAILS_FOR_FRICTIONLESS_OR_REFUSED="802",_.NO_COMPONENT_FOR_ACTION="803",_.NO_ACTION_FOR_CHALLENGE="804",_.CHALLENGE_RESOLVED_WITHOUT_RESULT_PROP="805"}(F||(F={})),function(_){_.FINGERPRINT_DATA_SENT="fingerprintDataSentWeb",_.FINGERPRINT_IFRAME_LOADED="fingerprintIframeLoaded",_.FINGERPRINT_COMPLETED="fingerprintCompleted",_.CHALLENGE_DATA_SENT="challengeDataSentWeb",_.CHALLENGE_IFRAME_LOADED="challengeIframeLoaded",_.CHALLENGE_COMPLETED="challengeCompleted"}(H||(H={}));const h={[_]:"925",[e]:"942",[t]:"926",[`${E}.country`]:"930",[`${E}.street`]:"931",[`${E}.house_number_or_name`]:"932",[`${E}.postal_code`]:"933",[`${E}.city`]:"935",[`${E}.state_or_province`]:"936",[`${o}.postal_code`]:"934"},g=["cart","minicart","pdp","checkout"],U=["applicationInfo","checkoutAttemptId"],$="fetch-checkoutAttemptId-failed";export{U as ALLOWED_ANALYTICS_DATA,S as ANALYTICS_ACTION_STR,m as ANALYTICS_API_ERROR,p as ANALYTICS_CONFIGURED_STR,A as ANALYTICS_DISPLAYED_STR,d as ANALYTICS_DOWNLOAD_STR,T as ANALYTICS_EVENT_ERROR,a as ANALYTICS_EVENT_INFO,N as ANALYTICS_EVENT_LOG,g as ANALYTICS_EXPRESS_PAGES_ARRAY,C as ANALYTICS_FEATURED_ISSUER,L as ANALYTICS_FOCUS_STR,n as ANALYTICS_INFO_TIMER_INTERVAL,R as ANALYTICS_INPUT_STR,u as ANALYTICS_INSTANT_PAYMENT_BUTTON,f as ANALYTICS_LIST,G as ANALYTICS_LIST_SEARCH,P as ANALYTICS_NETWORK_ERROR,r as ANALYTICS_PATH,D as ANALYTICS_QR_CODE_DOWNLOAD,i as ANALYTICS_RENDERED_STR,M as ANALYTICS_SDK_ERROR,I as ANALYTICS_SEARCH_DEBOUNCE_TIME,c as ANALYTICS_SELECTED_STR,O as ANALYTICS_SUBMIT_STR,l as ANALYTICS_UNFOCUS_STR,s as ANALYTICS_VALIDATION_ERROR_STR,F as Analytics3DS2Errors,H as Analytics3DS2Events,$ as NO_CHECKOUT_ATTEMPT_ID,h as errorCodeMapping};
//# sourceMappingURL=constants.js.map
