import * as UserActionsCreator from './user'
import * as TodoActionsCreator from './todo'

export default {
    ...UserActionsCreator,
    ...TodoActionsCreator
}