import { isLocal, isBrowser } from "./constants"
export * from "./constants"

export const timer = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const logEvent = (event: string, params: { [key: string]: any }) => {
	if (process.env.NODE_ENV !== "development" && !isLocal) {
		if (isBrowser && window.splitbee !== undefined) {
			window.splitbee.track(event, params)
		}
	}
}
