import type { FC } from 'react';

// import { Counter } from './Counter';
import { Stopwatch } from './Stopwatch';
import { Search } from './Search';

const App: FC = () => (
  <>
  <h1>Interview</h1>
  <h2>Part 1: Counter</h2>
  {/* <Counter initialCount={3} /> */}
  <h2>Part 2: StopWatch</h2>
  <Stopwatch />
  <h2>Part 3: Search</h2>
  <Search />
  </>
)

export default App;
