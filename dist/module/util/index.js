"use strict";

exports.__esModule = true;
exports.FPTI_KEY = void 0;
exports.buildContent = buildContent;
exports.getBuyerCountryFromFundingSource = getBuyerCountryFromFundingSource;
exports.getLegalLocale = getLegalLocale;

var _src = require("@paypal/sdk-client/src");

var LegalConstants = _interopRequireWildcard(require("../constants"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable eslint-comments/disable-enable-pair */

/* eslint-disable import/namespace */

/* eslint-disable import/no-namespace */
function getBuyerCountryFromFundingSource(fundingSource) {
  var _LegalConstants$fundi;

  const buyerCountry = ((_LegalConstants$fundi = LegalConstants[fundingSource]) == null ? void 0 : _LegalConstants$fundi.BUYER_COUNTRY) || '';
  return buyerCountry;
}

function buildContent(options) {
  var _LegalConstants$optio;

  let content = '';
  const buyerCountry = options.buyerCountry || getBuyerCountryFromFundingSource(options.fundingSource);
  const legalLocale = options.legalLocale || ((_LegalConstants$optio = LegalConstants[options.fundingSource]) == null ? void 0 : _LegalConstants$optio.DEFAULT_LOCALE);
  const paypalPolicyLink = `https://www.paypal.com/${buyerCountry}/webapps/mpp/ua/privacy-full?locale.x=${legalLocale}`;

  if (options.errorCode) {
    var _LegalConstants$optio2, _LegalConstants$optio3, _LegalConstants$optio4, _LegalConstants$optio5, _LegalConstants$optio6, _LegalConstants$optio7, _LegalConstants$optio8;

    content = ((_LegalConstants$optio2 = LegalConstants[options.fundingSource]) == null ? void 0 : (_LegalConstants$optio3 = _LegalConstants$optio2.ERROR_MESSAGES) == null ? void 0 : (_LegalConstants$optio4 = _LegalConstants$optio3[options.errorCode]) == null ? void 0 : _LegalConstants$optio4[options.legalLocale]) || ((_LegalConstants$optio5 = LegalConstants[options.fundingSource]) == null ? void 0 : (_LegalConstants$optio6 = _LegalConstants$optio5.ERROR_MESSAGES) == null ? void 0 : (_LegalConstants$optio7 = _LegalConstants$optio6[options.errorCode]) == null ? void 0 : _LegalConstants$optio7[(_LegalConstants$optio8 = LegalConstants[options.fundingSource]) == null ? void 0 : _LegalConstants$optio8.DEFAULT_LOCALE]);
  } else {
    var _LegalConstants$optio9, _LegalConstants$optio10, _LegalConstants$optio11, _LegalConstants$optio12, _LegalConstants$optio13, _LegalConstants$optio14, _LegalConstants$optio15;

    content = ((_LegalConstants$optio9 = LegalConstants[options.fundingSource]) == null ? void 0 : (_LegalConstants$optio10 = _LegalConstants$optio9.LEGAL_TEXT) == null ? void 0 : (_LegalConstants$optio11 = _LegalConstants$optio10[options.legalLocale]) == null ? void 0 : _LegalConstants$optio11.call(_LegalConstants$optio10, paypalPolicyLink)) || ((_LegalConstants$optio12 = LegalConstants[options.fundingSource]) == null ? void 0 : (_LegalConstants$optio13 = _LegalConstants$optio12.LEGAL_TEXT) == null ? void 0 : (_LegalConstants$optio14 = _LegalConstants$optio13[(_LegalConstants$optio15 = LegalConstants[options.fundingSource]) == null ? void 0 : _LegalConstants$optio15.DEFAULT_LOCALE]) == null ? void 0 : _LegalConstants$optio14.call(_LegalConstants$optio13, paypalPolicyLink));
  }

  return content || '';
}
/**
 * This function defaults the legal text language locale based on
 * payment option and overrides based on the user preferences
 * @param {*} fundingOption
 * @returns
 */


function getLegalLocale() {
  const locale = (0, _src.getLocale)();
  return `${locale.lang}-${locale.country}`;
}

const FPTI_KEY = {
  CLIENT_ID: 'client_id',
  PAGE_TYPE: 'legal_component'
};
exports.FPTI_KEY = FPTI_KEY;