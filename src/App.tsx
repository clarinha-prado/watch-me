import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import { MoviesProvider } from './contexts/MoviesContext';

export function App() {

  return (
    <MoviesProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />

        <Content />
      </div>
    </MoviesProvider>
  )
}