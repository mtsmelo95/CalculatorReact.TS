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

      <button onClick={() => postHistory(history, historyName)}>Create History</button>
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
                  className="deleteButton"
                  onClick={() => {
                    console.log(item);
                    deleteHistory(item.id);
                  }}
                >
                  Delete
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
