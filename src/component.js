/* @flow */

import { getClientID, getLogger } from "@paypal/sdk-client/src";

import type { LegalConfigInput, ContentConfig } from "./types";
import {
  buildContent,
  FPTI_KEY,
  getBuyerCountryFromFundingSource,
  getLegalLocale,
} from "./util";

export function Legal(options: LegalConfigInput): Object {
  return {
    render(container) {
      if (!options.fundingSource) {
        throw new Error(`Expected options.fundingSource`);
      }

      const legalLocale = getLegalLocale();
      const buyerCountry = getBuyerCountryFromFundingSource(
        options.fundingSource
      );

      const contentInput: ContentConfig = {
        ...options,
        legalLocale,
        buyerCountry,
      };

      const metadata = {
        locale: legalLocale,
        buyerCountry,
      };

      const el = document.querySelector(container);

      if (!el) {
        throw new Error(`Can not find element: ${container}`);
      }

      el.innerHTML = buildContent(contentInput);
      getLogger().info(JSON.stringify(metadata));
      getLogger()
        .info("Legal Component Loaded")
        .track({
          [FPTI_KEY.CLIENT_ID]: getClientID(),
          [FPTI_KEY.PAGE_TYPE]: options.fundingSource,
        });
    },
  };
}

Legal.FUNDING = {
  PAY_UPON_INVOICE: "PayUponInvoice",
  BOLETO: "boleto",
  BOLETOBANCARIO: "boletobancario",
};

/* Export Constants for Referencing by the Client*/
Legal.ERROR_CODE = {
  PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED:
    "PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED",
  PAYMENT_SOURCE_DECLINED_BY_PROCESSOR: "PAYMENT_SOURCE_DECLINED_BY_PROCESSOR",
};
