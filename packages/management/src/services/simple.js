
import { request } from 'easy-soft-utility';

export const pageListDataApiAddress = '/simple/pageList';

export async function pageListData(parameters) {
  return request({
    api: pageListDataApiAddress,
    params: parameters,
  });
}

export const singleListDataApiAddress = '/simple/singleList';

export async function singleListData(parameters) {
  return request({
    api: singleListDataApiAddress,
    params: parameters,
  });
}

export const pageListLogDataApiAddress = '/simple/pageListLog';

export async function pageListLogData(parameters) {
  return request({
    api: pageListLogDataApiAddress,
    params: parameters,
  });
}

export const getDataApiAddress = '/simple/get';

export async function getData(parameters) {
  return request({
    api: getDataApiAddress,
    params: parameters,
  });
}

export const addBasicInfoDataApiAddress = '/simple/addBasicInfo';

export async function addBasicInfoData(parameters) {
  return request({
    api: addBasicInfoDataApiAddress,
    params: parameters,
  });
}

export const updateBasicInfoDataApiAddress = '/simple/updateBasicInfo';

export async function updateBasicInfoData(parameters) {
  return request({
    api: updateBasicInfoDataApiAddress,
    params: parameters,
  });
}

export const setEnableDataApiAddress = '/simple/setEnable';

export async function setEnableData(parameters) {
  return request({
    api: setEnableDataApiAddress,
    params: parameters,
  });
}

export const setDisableDataApiAddress = '/simple/setDisable';

export async function setDisableData(parameters) {
  return request({
    api: setDisableDataApiAddress,
    params: parameters,
  });
}

export const refreshCacheDataApiAddress = '/simple/refreshCache';

export async function refreshCacheData(parameters) {
  return request({
    api: refreshCacheDataApiAddress,
    params: parameters,
  });
}

export const uploadImageDataApiAddress = '/simple/uploadImage';

export async function uploadImageData(parameters) {
  return request({
    api: uploadImageDataApiAddress,
    params: parameters,
  });
}

export const pageListOperateLogDataApiAddress = '/simple/pageListOperateLog';

export async function pageListOperateLogData(parameters) {
  return request({
    api: pageListOperateLogDataApiAddress,
    params: parameters,
  });
}

