import Login from '../Login'
import Manage from '../Manage'
import App from '../App'

const routes = [{
  path: "/login",
  exact: true,
  component: Login
}, {
  path: "/manage",
  component: Manage
},
{
  path: '/',
  component: App, 
}
]


export default routes