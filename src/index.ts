import { takeUntil } from "rxjs";
import { BASE_URL } from "./config";
import { pushHistory, pushHistory$, replaceHistory, replaceHistory$ } from "./command";

export function subscribeToHistory (destruction$) {
  pushHistory$
  .pipe(
    takeUntil(destruction$)
  )
  .subscribe(pushHistory => {
    history.pushState({}, '', `${BASE_URL}${pushHistory.url}`)
  })
  replaceHistory$
  .pipe(
    takeUntil(destruction$)
  )
  .subscribe(replaceHistory => {
    history.replaceState({}, '', `${BASE_URL}${replaceHistory.url}`)
  })
}

export { pushHistory, replaceHistory }
