import { getValueByKey } from 'easy-soft-utility';

import { actionCore } from 'antd-management-fast-common';

import { fieldData } from '../Common/data';

export function setOnlineAction({
  target,
  handleData,
  successCallback,
  successMessage,
}) {
  actionCore({
    api: 'simple/setOnline',
    params: {
      simpleId: getValueByKey({
        data: handleData,
        key: fieldData.simpleId.name,
      }),
    },
    target,
    handleData,
    successCallback,
    successMessage,
  });
}

export function setOfflineAction({
  target,
  handleData,
  successCallback,
  successMessage,
}) {
  actionCore({
    api: 'simple/setOffline',
    params: {
      simpleId: getValueByKey({
        data: handleData,
        key: fieldData.simpleId.name,
      }),
    },
    target,
    handleData,
    successCallback,
    successMessage,
  });
}

export async function refreshCacheAction({
  target,
  handleData,
  successCallback,
  successMessage = null,
}) {
  actionCore({
    api: 'simple/refreshCache',
    params: {
      simpleId: getValueByKey({
        data: handleData,
        key: fieldData.simpleId.name,
      }),
    },
    target,
    handleData,
    successCallback,
    successMessage,
  });
}
