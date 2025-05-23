import { logMessage } from "./logManager"

const tasksBlockingClose = new Set()

export const getShouldPreventClose = (): boolean => tasksBlockingClose.size > 0

export const setShouldPreventClose = (action: "add" | "remove", id: string, desc: string): void => {
  logMessage("info", `[back] [shouldPreventClose] [utils/shouldPreventClose.ts] [setShouldPreventClose] [${id}] [${action}] ${desc}`)

  if (action === "add") {
    tasksBlockingClose.add(id)
  } else if (action === "remove") {
    tasksBlockingClose.delete(id)
  }
}
