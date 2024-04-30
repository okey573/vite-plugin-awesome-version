export default function (date = new Date()) {
  const padding = (v, f = 2) => {
    const val = '0000' + v
    return val.substr(0 - f)
  }
  const Y = padding(date.getFullYear(), 4)
  const M = padding(date.getMonth() + 1)
  const D = padding(date.getDate())
  const hh = padding(date.getHours())
  const mm = padding(date.getMinutes())
  const ss = padding(date.getSeconds())
  return `${Y}${M}${D}d${hh}${mm}${ss}t`
}
