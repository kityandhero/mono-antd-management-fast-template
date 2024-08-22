// 此文件将会从模板库自动更新，请勿改动此文件内容，如需增加或调整，请在tools.custom.jsx中进行。

import { Divider, Space } from 'antd';
import React from 'react';

import { getModelRemoteData } from 'easy-soft-dva';
import {
  checkStringIsNullOrWhiteSpace,
  datetimeFormat,
  formatDatetime,
  getValueByKey,
  isArray,
  isEmptyArray,
  isEmptyObject,
  isNull,
} from 'easy-soft-utility';

import { cardConfig } from 'antd-management-fast-common';
import { buildButton, iconBuilder } from 'antd-management-fast-component';

import { keyValueEditModeCollection } from '../../customConfig';

export function getSexName(value) {
  let result = '未知';

  switch (`${value}`) {
    case '1': {
      result = '男';
      break;
    }

    case '2': {
      result = '女';
      break;
    }

    default: {
      break;
    }
  }

  return result;
}

export function getLogo() {
  const { data } = {
    data: {},
    ...getModelRemoteData('currentAccount'),
  };

  const { platform } = {
    platform: { logo: '' },
    ...data,
  };

  const { logo } = {
    logo: '',
    ...platform,
  };

  return logo;
}

export function getTitle() {
  const { data } = {
    data: {},
    ...getModelRemoteData('currentAccount'),
  };

  const { platform } = {
    platform: { logo: '' },
    ...data,
  };

  const { shortName } = {
    shortName: '',
    ...platform,
  };

  if (checkStringIsNullOrWhiteSpace(shortName)) {
    return '';
  }

  return shortName;
}

export function buildKeyTag(key) {
  return `${key}Tag`;
}

export function buildKeyValueNote({ label, name, helper = '' }) {
  return {
    label: label,
    name: `${name}Note`,
    helper: helper,
  };
}

export function buildKeyValueTag({ label, name, helper = '' }) {
  return {
    label: label,
    name: `${name}Tag`,
    helper: helper,
  };
}

export function buildKeyValueInstruction({ label, name, helper = '' }) {
  return {
    label: label,
    name: `${name}Instruction`,
    helper: helper,
  };
}

function appendFiledHelper({ data, fieldData: f }) {
  let { helper } = {
    helper: '',
    ...f,
  };

  if (checkStringIsNullOrWhiteSpace(helper)) {
    const o = buildKeyValueInstruction(f);

    const { name } = {
      name: '',
      ...o,
    };

    const v = getValueByKey({
      data: data,
      key: name,
    });

    if (!checkStringIsNullOrWhiteSpace(v)) {
      helper = v;
    }
  }

  return { ...f, helper };
}

export function buildInputDisplay({
  handleData,
  fieldData: f,
  hidden = false,
  inputIcon = iconBuilder.read(),
  value = '',
  editMode = keyValueEditModeCollection.string,
}) {
  return {
    lg: 24,
    type: cardConfig.contentItemType.onlyShowInput,
    icon: inputIcon || iconBuilder.read(),
    fieldData: appendFiledHelper({
      data: handleData,
      fieldData: f,
    }),
    value:
      value ||
      getValueByKey({
        data: handleData,
        key: f.name,
        convertBuilder: (v) => {
          let result = v;
          switch (editMode) {
            case keyValueEditModeCollection.time: {
              result = formatDatetime({
                data: v,
                format: datetimeFormat.hourMinute,
                defaultValue: '--',
              });
              break;
            }

            default: {
              result = v;
              break;
            }
          }

          return result;
        },
      }),
    hidden,
  };
}

export function buildInputItem({
  firstLoadSuccess,
  handleData,
  fieldData: f,
  hidden = false,
  inputIcon = iconBuilder.read(),
  icon = iconBuilder.form(),
  text = '更改配置',
  value = '',
  editMode = keyValueEditModeCollection.string,
  // eslint-disable-next-line no-unused-vars
  handleClick: handleClickSimple = ({ fieldData, editMode }) => {},
  extra = null,
}) {
  const extraExist = !(isNull(extra) || isEmptyObject(extra));

  let extraButton = null;

  if (extraExist) {
    const { extraText, extraIcon, extraAction } = {
      extraText: '',
      extraIcon: iconBuilder.form(),
      // eslint-disable-next-line no-unused-vars
      extraAction: ({ fieldData, editMode }) => {},
      ...extra,
    };

    extraButton = buildButton({
      style: {
        border: '0px solid #d9d9d9',
        backgroundColor: '#fafafa',
        height: '30px',
        paddingLeft: '0',
        paddingRight: '0',
      },
      icon: extraIcon,
      text: extraText,
      disabled: !firstLoadSuccess,
      handleClick: () => {
        extraAction({
          fieldData: appendFiledHelper({
            data: handleData,
            fieldData: f,
          }),
          editMode,
        });
      },
    });
  }

  return {
    lg: 24,
    type: cardConfig.contentItemType.onlyShowInput,
    icon: inputIcon || iconBuilder.read(),
    fieldData: appendFiledHelper({
      data: handleData,
      fieldData: f,
    }),
    value:
      value ||
      getValueByKey({
        data: handleData,
        key: f.name,
        convertBuilder: (v) => {
          let result = v;
          switch (editMode) {
            case keyValueEditModeCollection.time: {
              result = formatDatetime({
                data: v,
                format: datetimeFormat.hourMinute,
                defaultValue: '--',
              });
              break;
            }

            default: {
              result = v;
              break;
            }
          }

          return result;
        },
      }),
    hidden,
    innerProps: {
      addonAfter: (
        <Space split={<Divider type="vertical" />}>
          {buildButton({
            style: {
              border: '0px solid #d9d9d9',
              backgroundColor: '#fafafa',
              height: '30px',
              paddingLeft: '0',
              paddingRight: '0',
            },
            icon: icon,
            text: text,
            disabled: !firstLoadSuccess,
            handleClick: () => {
              handleClickSimple({
                fieldData: appendFiledHelper({
                  data: handleData,
                  fieldData: f,
                }),
                editMode,
              });
            },
          })}

          {extraButton}
        </Space>
      ),
    },
  };
}

// arr是原数组，N是想分成多少个
export function splitToGroup(array, size) {
  let result = [];

  for (let index = 0; index < array.length; index += size) {
    result.push(array.slice(index, index + size));
  }

  return result;
}

export function buildFormInitialValues(listFormStorage) {
  const data = {};

  if (isArray(listFormStorage) && !isEmptyArray(listFormStorage)) {
    for (const o of listFormStorage) {
      try {
        data[o.name] = JSON.parse(o.value);
      } catch {
        data[o.name] = o.value;
      }
    }
  }

  return data;
}
