/* @flow */
type FundingSource = "PayUponInvoice" | "boletobancario";
type ErrorCode =
  | "PAYMENT_SOURCE_INFO_CANNOT_BE_VERIFIED"
  | "PAYMENT_SOURCE_DECLINED_BY_PROCESSOR";

export type ContentConfig = {|
  legalLocale: string,
  buyerCountry: string,
  fundingSource: FundingSource,
  errorCode?: ErrorCode,
|};

export type LegalConfigInput = {|
  fundingSource: FundingSource,
  errorCode?: ErrorCode,
|};

export type LegalServerConfigType = {|
  assetsUrl: string,
|};

export type LegalGlobalType = {|
  serverConfig: LegalServerConfigType,
|};

declare var __legal__: LegalGlobalType;
