import { connect } from 'easy-soft-dva';
import { getValueByKey } from 'easy-soft-utility';

import { switchControlAssist } from 'antd-management-fast-framework';

import { BasePageListDrawer } from '../../OperationLog/BasePageListDrawer';
import { fieldData } from '../Common/data';

// 显隐控制标记, 必须设置, 标记需要全局唯一
const visibleFlag = '67bb039e80aa4e49a4ca92839dbfae77';

@connect(({ simple, schedulingControl }) => ({
  simple,
  schedulingControl,
}))
class OperateLogDrawer extends BasePageListDrawer {
  static open() {
    switchControlAssist.open(visibleFlag);
  }

  constructor(properties) {
    super(properties, visibleFlag);

    this.state = {
      ...this.state,
      loadApiPath: 'simple/pageListOperateLog',
      simpleId: null,
    };
  }

  supplementLoadRequestParams = (o) => {
    const { externalData } = this.props;

    const d = o;

    d[fieldData.simpleId.name] = getValueByKey({
      data: externalData,
      key: fieldData.simpleId.name,
      defaultValue: '',
    });

    return d;
  };
}

export { OperateLogDrawer };
