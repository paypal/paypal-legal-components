"use strict";

exports.__esModule = true;
exports.Legal = Legal;

var _src = require("@paypal/sdk-client/src");

var _util = require("./util");

function Legal(options) {
  return {
    render(container) {
      if (!options.fundingSource) {
        throw new Error(`Expected options.fundingSource`);
      }

      const legalLocale = (0, _util.getLegalLocale)();
      const buyerCountry = (0, _util.getBuyerCountryFromFundingSource)(options.fundingSource);
      const contentInput = { ...options,
        legalLocale,
        buyerCountry
      };
      const metadata = {
        locale: legalLocale,
        buyerCountry
      };
      const el = document.querySelector(container);

      if (!el) {
        throw new Error(`Can not find element: ${container}`);
      }

      el.innerHTML = (0, _util.buildContent)(contentInput);
      (0, _src.getLogger)().info(JSON.stringify(metadata));
      (0, _src.getLogger)().info('Legal Component Loaded').track({
        [_util.FPTI_KEY.CLIENT_ID]: (0, _src.getClientID)(),
        [_util.FPTI_KEY.PAGE_TYPE]: options.fundingSource
      });
    }

  };
}

Legal.FUNDING = {
  PAY_UPON_INVOICE: 'PayUponInvoice',
  BOLETO: 'boleto',
  BOLETOBANCARIO: 'boletobancario'
};
/* Export Constants for Referencing by the Client*/

Legal.ERROR_CODE = {
  PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED: 'PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED',
  PAYMENT_SOURCE_DECLINED_BY_PROCESSOR: 'PAYMENT_SOURCE_DECLINED_BY_PROCESSOR'
};