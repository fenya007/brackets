module.exports = function check(str, bracketsConfig) {
  let res = str;
  for (let i = 0; i < bracketsConfig.length; i++) {
    for (let k = 0; k < str.length; k++){
      if (str[k] == bracketsConfig[i][0] && str[k + 1] == bracketsConfig[i][1]) {
        res = str.replace(bracketsConfig[i][0] + bracketsConfig[i][1], '')
      }  
    }
  }
  return res == str ? res == '' : check(res,bracketsConfig)
}
