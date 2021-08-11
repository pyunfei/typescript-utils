// 过滤出函数类型的参数
type ATypes = {
  key1: number,
  key2: () => void,
  key3: Function
}
type FunctionKeys<T extends object> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

type ha = FunctionKeys<ATypes> //"key2" | "key3"


type a = keyof ATypes