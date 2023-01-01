// adding some other types from within libraries as a convenience
export type { FinalExecutionOutcome } from '@near-wallet-selector/core';
// this is done to avoid importing near-api-js more than once
// which leads to a strange, but known issue
// https://docs.near.org/tools/near-api-js/faq#class-x-is-missing-in-schema-publickey
export { Account, connect as connectToNear, KeyPair, providers } from 'near-api-js';
export { InMemoryKeyStore, KeyStore } from 'near-api-js/lib/key_stores';

export * from './account';
export * from './constants';
export * from './wallet';
