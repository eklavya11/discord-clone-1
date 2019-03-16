import { gql } from 'apollo-boost'
import * as fragments from '../../fragments'

export default gql`
  query UserServers($userId: ID!) {
    userServers(userId: $userId) {
      ...Server
    }
  }
  ${fragments.server}
`
