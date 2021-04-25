import { History } from 'history'

export const navigateHomeAndReload = (history: History) => {
  history.push('/')
  history.go(0)
}
