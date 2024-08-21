import {
  buildModel as buildCurrentAccountModel,
  currentAccountTypeCollection,
} from './currentAccount';
import { buildModel as buildSimpleModel, simpleTypeCollection } from './simple';

export const modelTypeCollection = {
  simpleTypeCollection,
  currentAccountTypeCollection,
};

export function listModelBuilder() {
  const list = [];

  list.push(buildSimpleModel, buildCurrentAccountModel);

  return list;
}
