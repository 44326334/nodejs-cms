const { Text, Checkbox, DateTime, Password } = require('@keystonejs/fields');
const moment = require('moment')

module.exports = {
  access: {
    read: ({ authentication: { item } }) => {
      // if (item.isAdmin) {
      //   return {};
      // }
      return {
        state_not: 'deactivated',
      };
    },
  },
  fields: {
    name: {
      type: Text,
      isRequired: true,
      label: '用户名'
    },
    password: {
      type: Password,
      label: '密码'
    },
    phone: {
      type: Text,
      isRequired: true,
      label: '手机号'
    },
    email: {
      type: Text,
      isRequired: true,
      label: '电子邮箱'
    },
    creatTime: {
      type: DateTime,
      format: 'YYYY/MM/DD hh:mm:ss',
      yearRangeFrom: '2017',
      yearRangeTo: '2030',
      isRequired: false,
      yearPickerType: 'auto',
      label: '创建时间',
      defaultValue: moment(new Date()).format('YYYY/MM/DD hh:mm:ss')
    },
    isAdmin: { 
      type: Checkbox,
      isRequired: true,
      defaultValue: false,
      label: '是否管理员',
    },
    description: {
      type: Text,
      isRequired: false,
      label: '描述'
    },
    isComplete: {
      type: Checkbox,
      defaultValue: false,
    },
  },
  label: '用户列表',
  adminConfig: {
    defaultColumns: 'name, password, phone, email, creatTime, isAdmin, description',
    defaultPageSize: 50,
    defaultSort: 'name',
    maximumPageSize: 100,
  },
  labelField: 'id',
  labelResolver: item => `${item.id.slice(-5)}`,
};