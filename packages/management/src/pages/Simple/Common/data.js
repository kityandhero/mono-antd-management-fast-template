import { formNameCollection } from '../../../customConfig';

const fieldExtraData = {};

export const fieldData = {
  ...formNameCollection,
  simpleId: {
    label: '数据标识',
    name: 'simpleId',
    helper: '',
  },
  title: {
    label: '标题',
    name: 'title',
    helper: '',
  },
  name: {
    label: '名称',
    name: 'name',
    helper: '',
  },
  sort: {
    label: '排序值',
    name: 'sort',
    helper: '',
  },
  description: {
    label: '简介描述 ',
    name: 'description',
    helper: '',
  },
  ...fieldExtraData,
};

/**
 * 状态值集合
 */
export const statusCollection = {
  /**
   * 下线
   * value : 0
   */
  offline: 0,

  /**
   * 上线
   * value : 10
   */
  online: 10,
};
