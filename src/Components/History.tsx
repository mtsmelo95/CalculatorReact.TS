import axios from "axios";
import React, { useEffect, useState } from "react";

interface HistoryProps {
  history: string[];
  onClear: () => void;
}

async function deleteHistory(id: string) {
  try {
    const response = await axios.delete(`http://localhost:8000/history/${id}`);
    const data = await response.data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

const History: React.FC<HistoryProps> = ({ history, onClear }) => {
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [historyName, setHistoryName] = useState<string>("");

  async function postHistory(historyToPost: string[], historyName: string) {
    try {
      const response = await axios.post("http://localhost:8000/history", {
        name: historyName,
        counts: historyToPost,
      });
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setHistoryName("");
    onClear();
  }

  async function getHistory() {
    try {
      const response = await axios.get("http://localhost:8000/history");
      const data = response.data;
      setApiResponse(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="history">
      <h2>History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
      <input
        className="historyName"
        type="text"
        placeholder="History Name"
        value={historyName}
        onChange={(e) => setHistoryName(e.target.value)}
      />
      <button onClick={() => postHistory(history, historyName)}>
        Create History
      </button>
      <button onClick={() => getHistory()}>Recent History</button>
      {apiResponse && (
        <div>
          <h3>History saved:</h3>
          <ul>
            {apiResponse.map((item: any, index: number) => (
              <li key={index}>
                <strong>Name:</strong> {item.name}
                <br />
                <strong>Counts:</strong>
                <ul>
                  {item.counts.map((count: string, countIndex: number) => (
                    <li key={countIndex}>{count}</li>
                  ))}
                </ul>
                <button
                  className="button"
                  onClick={() => {
                    deleteHistory(item.id);
                  }}
                >
                  <svg viewBox="0 0 448 512" className="svgIcon">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default History;
