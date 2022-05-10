/* @flow */

import { getClientID, getLogger, getBuyerCountry, getLocale } from '@paypal/sdk-client/src';

import type { LegalConfigInput, ContentConfig } from './types';
import { buildContent, FPTI_KEY } from './util';

export function Legal (options : LegalConfigInput) : Object {

    return {
        render(container) {

            if (!options.fundingSource) {
                throw new Error(`Expected options.fundingSource`);
            }

            
            const locale = getLocale() || { country: 'DE', lang: 'de' };
            const legalLocale = `${ locale.lang }-${ locale.country }`;
            const buyerCountry = getBuyerCountry() || locale.country;
            
            const contentInput : ContentConfig = {
                ...options,
                legalLocale,
                buyerCountry
            };
        
            const metadata = {
                locale:       getLocale(),
                buyerCountry: getBuyerCountry()
            };

            const el = document.querySelector(container);

            if (!el) {
                throw new Error(`Can not find element: ${ container }`);
            }
            
            el.innerHTML = buildContent(contentInput);
            getLogger().info(JSON.stringify(metadata));
            getLogger().info('PUI Legal Component Loaded').track({
                [FPTI_KEY.CLIENT_ID]: getClientID(),
                [FPTI_KEY.PAGE_TYPE]: options.fundingSource


            });
        }
    };
}

Legal.FUNDING = {
    PAY_UPON_INVOICE: 'PayUponInvoice',
    BOLETO:           'boleto'
};

/* Export Constants for Referencing by the Client*/
Legal.ERROR_CODE = {
    PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED: 'PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED',
    PAYMENT_SOURCE_DECLINED_BY_PROCESSOR:   'PAYMENT_SOURCE_DECLINED_BY_PROCESSOR'
};
