var doc = function() {
  this.queryAllUsers = ({id}) => `
    query {
      allUsers{
        id: ${id}
      }
    }
  `
}
exports = module.exports = new doc;
