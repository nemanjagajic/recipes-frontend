import { History } from 'history'

export const navigateAndReload = (history: History, path: string) => {
  history.push(path)
  history.go(0)
}
