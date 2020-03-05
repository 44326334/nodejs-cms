// const URL = 'http://localhost:3000/admin/api'
const domain = 'http://localhost';
const port = '3000';
const route = 'admin/api';

export default {
  url: 'http://localhost:3000/admin/api',
  queryAllUsers: ({ query }) => `
    allUsers {
      ${query}
    }
  `
}