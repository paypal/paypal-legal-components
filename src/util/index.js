/* @flow */
import type { ContentConfig } from '../types';
import { PayUponInvoice, boleto } from '../constants';

export function buildContent(options : ContentConfig) : string {
    let content = '';
    const paypalPolicyLink = `https://www.paypal.com/${ options.buyerCountry }/webapps/mpp/ua/privacy-full?locale.x=${ options.legalLocale }`;
    switch (options.fundingSource) {
    case 'PayUponInvoice': {
        if (options.errorCode) {
            content =
          PayUponInvoice?.ERROR_MESSAGES?.[options.errorCode]?.[
              options.legalLocale
          ];
        } else {
            content = PayUponInvoice?.LEGAL_TEXT?.[options.legalLocale]?.(
                paypalPolicyLink
            );
        }

        break;
    }
    case 'boleto': {
        content = boleto?.LEGAL_TEXT?.[options.legalLocale]?.(
            paypalPolicyLink
        );
        break;
    }
    default: {
        break;
    }
    }
    return content || '';
}

export const FPTI_KEY = {
    CLIENT_ID: 'client_id',
    PAGE_TYPE: 'pp_placement'
};
