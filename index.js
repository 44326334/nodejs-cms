const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { StaticApp } = require('@keystonejs/app-static');
const { NextApp } = require('@keystonejs/app-next');
require('babel-register')

const Users = require("./lists/users.js")
const Todos = require("./lists/todo.js")

const PROJECT_NAME = "cmsapp";


/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  // onConnect: async keystone => {
  //   await keystone.createItems({
  //     User: [
  //       { name: 'admin', email: 'admin@admin.com', password: 'admin123456', phone: '123456789', isAdmin: true }
  //     ],
  //   });
  // },
});

keystone.createList('User', Users);
keystone.createList('Todo', Todos);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'name',
    secretField: 'password',
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(), 
    new AdminUIApp({ 
      enableDefaultRoute: true, 
      // authStrategy,
      // isAccessAllowed: ({ authentication: { item: user, listKey: list } }) => !!user && !!user.isAdmin,
    }),
    new StaticApp({
      path: '/index',
      src: 'static',
      fallback: 'index.html',
    }),
    new NextApp({
      dir: './'
    })
  ],
};
