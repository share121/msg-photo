import { Context, Schema } from 'koishi'

export const name = 'msg-photo'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
}
