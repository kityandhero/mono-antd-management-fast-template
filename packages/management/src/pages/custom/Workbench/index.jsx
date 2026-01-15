import { connect } from 'easy-soft-dva';
import {
  getCurrentOperatorCache,
  getValueByKey,
  showSimpleErrorMessage,
} from 'easy-soft-utility';

import { iconBuilder } from 'antd-management-fast-component';
import {
  DataMultiPageView,
  getCurrentOperator,
} from 'antd-management-fast-framework';

import { PageHeaderContent } from './PageHeaderContent';
import ShortcutPanel from './ShortcutPanel';

const { MultiPage } = DataMultiPageView;

@connect(({ simple, currentOperator, schedulingControl }) => ({
  simple,
  currentOperator,
  schedulingControl,
}))
class Index extends MultiPage {
  resetDataAfterLoad = false;

  showSearchForm = false;

  pageValues = {
    pageNo: 1,
    frontendPageNo: 1,
    pageSize: 8,
  };

  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,
      pageTitle: '工作台',
      listTitle: '新近列表',
      loadApiPath: 'simple/pageList',
      tableScrollX: 1020,
      currentOperator: null,
    };
  }

  doWorkAdjustDidMount = () => {
    const that = this;

    getCurrentOperator({
      successCallback: (data) => {
        that.setState({ currentOperator: data });
      },
    });
  };

  handleMenuClick = ({ key, handleData }) => {
    switch (key) {
      case 'delete': {
        this.delete(handleData);
        break;
      }

      default: {
        showSimpleErrorMessage('can not find matched key');
        break;
      }
    }
  };

  establishPageHeaderTitlePrefix = () => {
    return '标题';
  };

  establishPageHeaderSubTitle = () => {
    return '在这里可以快速开展任务作业';
  };

  establishPageContentLayoutSiderConfig = () => {
    return {
      position: 'right',
    };
  };

  establishListItemDropdownConfig = (record) => {
    return {
      size: 'small',
      text: '摘要',
      placement: 'topRight',
      icon: iconBuilder.form(),
      // eslint-disable-next-line no-unused-vars
      handleButtonClick: ({ handleData }) => {},
      handleData: record,
      handleMenuClick: ({ key, handleData }) => {
        this.handleMenuClick({ key, handleData });
      },
    };
  };

  getColumnWrapper = () => [];

  establishPageHeaderContentComponentConfig = () => {
    const currentOperator = getCurrentOperatorCache();

    const avatar = getValueByKey({
      data: currentOperator,
      key: 'avatar',
    });

    const name = getValueByKey({
      data: currentOperator,
      key: 'name',
      defaultValue: '--',
    });

    return {
      component: <PageHeaderContent avatar={avatar} name={name} />,
    };
  };

  establishSiderTopAreaConfig = () => {
    return (
      <>
        <ShortcutPanel />
      </>
    );
  };
}

export default Index;
