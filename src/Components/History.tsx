import React from 'react';

interface HistoryProps {
  history: string[];
  onClear: () => void;
}

const History: React.FC<HistoryProps> = ({ history, onClear }) => (
  <div className="history">
    <h2>History</h2>
    <ul>
      {history.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <button onClick={onClear}>Clear History</button>
  </div>
);

export default History;
