/**
 * @author matexia
 * @created 2018/08/21 14:28
 */
export default {
  name: 'global',
  cookie: {
    set (name, value) {
      var Days = 30
      var exp = new Date()
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
      document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
    },
    get (name) {
      var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
      var arr = document.cookie.match(reg)
      if (arr) {
        return unescape(arr[2])
      } else {
        return ''
      }
    },
    del (name) {
      var exp = new Date()
      exp.setTime(exp.getTime() - 1)
      var cval = this.get(name)
      if (cval !== '') {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
      }
    }
  }
}
