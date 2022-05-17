module.exports = function setup(reg = '$') {
  if (typeof window[reg] == 'undefined') {
    window[reg] = {}
  }
}
