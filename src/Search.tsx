import { useEffect, useState, type FC } from 'react';

const ALL_LANGUAGES = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C',
  'C++',
  'C#',
  'Go',
  'Rust',
  'Ruby',
  'PHP',
  'Swift',
  'Kotlin',
  'Scala',
  'Haskell',
  'Elixir',
  'Erlang',
  'Clojure',
  'Perl',
  'Lua',
];

/** Stand-in for a network call, with randomized latency to simulate a real API. */
function search(query: string): Promise<string[]> {
  const delay = 100 + Math.random() * 900;
  return new Promise(resolve => {
    setTimeout(() => {
      const matches = ALL_LANGUAGES.filter(language =>
        language.toLowerCase().includes(query.toLowerCase()),
      );
      resolve(matches);
    }, delay);
  });
}

/**
 * The `Search` component below is supposed to display, as the user types,
 * the list of programming languages whose name contains the current search
 * text. Only results matching the *current* text box contents should ever
 * be shown.
 *
 * It doesn't behave that way — type a few characters in quick succession
 * (e.g. clear the box, then type "c" followed quickly by "cs") and the
 * list will sometimes flash results for a query you've already changed
 * away from. Diagnose the bug and fix the component so that it matches
 * the behavior described above.
 *
 * The layout and styling are not being judged.
 */
export const Search: FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    search(query).then(setResults);
  }, [query]);

  const visibleResults = query ? results : [];

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search languages…" />
      {visibleResults.length && (
        <ul>
          {visibleResults.map(result => <li key={result}>{result}</li>)}
        </ul>
      )}
    </div>
  );
};
