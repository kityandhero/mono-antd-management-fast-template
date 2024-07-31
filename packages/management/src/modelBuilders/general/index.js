import { buildModel as buildSimpleModel } from './simple';

export function listModelBuilder() {
  const list = [];

  list.push(buildSimpleModel);

  return list;
}
