import { type RouteConfig, index } from '@react-router/dev/routes'
import { route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('*', 'routes/catchall.tsx'),
] satisfies RouteConfig
