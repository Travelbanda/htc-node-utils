
type RollbackFunc = () => void
// type Rollback = (fn: RollbackFunc) => void
// type Transaction<T> = (rb: Rollback) => T

// export const transaction = <T>(tr: Transaction<T>) => {
//   const stack: RollbackFunc[] = []
//   const rollback: Rollback = (fn) => stack.push(fn)
//   try {
//     return tr(rollback)
//   } catch (e) {
//     if (stack) {
//       for (let i = stack.length - 1; i >= 0; --i) {
//         stack[i]()
//       }
//     }
//     throw e
//   }
// }

export class Tx {

  // tslint:disable-next-line:no-empty
  static logRewindErrors = (_e: Error, _reason: Error) => { }

  private stack: RollbackFunc[] = []

  rollback(rb: RollbackFunc) {
    this.stack.push(rb)
  }

  async exec<T>(fn: () => T) {
    try {
      return fn()
    } catch (e) {
      await this.rewind(e)
      throw e
    }
  }

  private async rewind(reason: Error) {
    try {
      // tslint:disable-next-line:no-conditional-assignment
      for (let i = this.stack.length - 1; i >= 0; --i) {
        await this.stack[i]()
      }
    } catch (e) {
      Tx.logRewindErrors(e, reason)
    }
  }

}

export const transaction = async <T, P>(fn: () => T, rollback: (e: Error) => P) => {
  try {
    return await fn()
  } catch (e) {
    await rollback(e)
    throw e
  }
}
