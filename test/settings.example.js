export default {
  url: 'ldap://0.0.0.0:1389',
  base: 'dc=users,dc=localhost',
  bind: {
    dn: 'cn=root',
    password: 'secret',
  },
};
