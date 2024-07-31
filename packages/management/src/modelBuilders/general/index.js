import { buildModel as buildCurrentAccountModel } from './currentAccount';
import { buildModel as buildSimpleModel } from './simple';

export function listModelBuilder() {
  const list = [];

  list.push(buildSimpleModel, buildCurrentAccountModel);

  return list;
}
