import Login from '../Login'
import Manage from '../Manage'

const routes = [{
  path: "/login",
  exact: true,
  component: Login
}, {
  path: "/manage",
  component: Manage
}
]


export default routes