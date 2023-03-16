import { useState, useMemo } from 'react';

const initialFriends = [
  'Emma Johnson',
  'Oliver Brown',
  'Ava Davis',
  'William Garcia',
  'Sophia Wilson',
  'Ethan Martin',
  'Isabella Anderson',
  'Michael Thompson',
  'Mia Lee',
  'Alexander White',
  'Charlotte Harris',
  'Daniel Clark',
  'Amelia Rodriguez',
  'Matthew Jackson',
];

export const Friends = () => {
  const [count, setCount] = useState(0);
  const [friends] = useState(initialFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = useMemo(() => {
    return friends.filter(friend =>
      friend.toLocaleLowerCase().includes(filter)
    );
  }, [filter, friends]);

  return (
    <div>
      <button onClick={() => setCount(state => state + 1)}>{count}</button>
      <hr />
      <input
        type="text"
        onChange={e => setFilter(e.target.value)}
        value={filter}
      />
      <ul>
        {visibleFriends.map((friend, idx) => {
          return <li key={idx}>{friend}</li>;
        })}
      </ul>
    </div>
  );
};
