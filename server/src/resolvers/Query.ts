import { getUserId } from '../utils'

export const Query = {
  me: (_parent, _args, ctx) => {
    return ctx.db.user({ id: getUserId(ctx) })
  },
  testAllShowings: (_, __, ctx) => ctx.db.showings()
}
