const str = { 'ab_cd': 1, 'bc_de': [{ 'cb_ef': 1 }] }
const o = {
  order_id: 11,
  ori_aa: '22',
  pro_list: [
    {
      pdsa_aa: '2',
      sdasd_ssd: [{
        wewe_aa: 2
      }]
    }
  ]
}
const replaceStr = (target) => {
  if (typeof target !== 'object' || !target) return target
  if (Array.isArray(target)) return target.map(item => replaceStr(item))

  let newData = {}
  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      let Key = key.replace(/_([a-z])/g, res => res[1].toUpperCase())
      newData[Key] = replaceStr(target[key])
    }
  }
  return newData
}

console.log(JSON.stringify(replaceStr(o)));

const a = { a: 1, b: 'll', c: { d: '123', o: { p: null, o: '12' } }, d: null, e: undefined }
const has = (target, key) => {
  const [one, two] = key.split('.')
  if (typeof target !== "object") return '叼毛'
  if (!two) {
    for (const k in target) {
      if (target[one] === null || target[one] === undefined) return false
      if (typeof target[k] === 'object') return has(target[k], one)
      return Object.prototype.hasOwnProperty.call(target, one)
    }
  } else {
    for (const k in target) {
      if (one === k) {
        return Object.prototype.hasOwnProperty.call(target[k], two)
      }
    }
  }
}
console.log(has(a, 'a'))
console.log(has(a, 'c.d'))
console.log(has(a, 'c.o.p'))
console.log(has(a, 'c.o.o'))
console.log(has(a, 'e'))
