import Mock from 'mockjs';
import {
  dateFormat,
} from '@/extend/filters/';

const userList = [];
for (let i = 0; i < 2; i++) {
  userList.push(Mock.mock({
    id: '@increment',
    name: Mock.mock('@cname'),
    username: Mock.mock('@last'),
    ueditor: `<h3>${Mock.mock('@cname')}<h3>`,
    grade: [0, 1],
    state: 0,
    date: dateFormat(new Date()),
  }));
}
export const userTableData = {
  total: 11,
  pageSize: 10,
  tableData: userList,
};


const roleList = [];
for (let i = 0; i < 2; i++) {
  roleList.push(Mock.mock({
    id: '@increment',
    name: Mock.mock('@cname'),
    date: dateFormat(new Date()),
    check: [1, 3, 5],
  }));
}
export const roleTableData = {
  total: 11,
  pageSize: 10,
  tableData: roleList,
};