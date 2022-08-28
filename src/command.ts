import { subjectFactory } from "@taterer/rx-entity"

interface PushHistory {
  url: string
}

export const [pushHistory$, pushHistory] = subjectFactory<PushHistory>()

interface ReplaceHistory {
  url: string
}

export const [replaceHistory$, replaceHistory] = subjectFactory<ReplaceHistory>()
