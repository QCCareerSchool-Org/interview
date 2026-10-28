import type { FC } from 'react';

 import { Counter } from './Counter';

const App: FC = () => (
  <>

  <h1>Interview</h1>
  <Counter initialCount={3} />
  </>
)

export default App;
