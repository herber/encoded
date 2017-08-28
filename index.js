const encode = (data, type) => new Buffer(data).toString(type || 'base64');
const decode = (data, type, to) => new Buffer(data, type || 'base64').toString(to || 'ascii');

module.exports = {
  encode,
  decode
};
