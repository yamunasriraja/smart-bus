import { useState } from "react";
import "./ReportIssuePage.css";
import { db } from "./firebase";
import { ref, push } from "firebase/database";

function ReportIssuePage() {

  const [issueType, setIssueType] = useState("");
  const [message, setMessage] = useState("");
  const [busNo, setBusNo] = useState("");

  const handleSubmit = () => {

    if (!issueType) {
      alert("Please select issue type");
      return;
    }

    const issueData = {
      issueType,
      message,
      busNo,
      time: new Date().toLocaleString()
    };

   const issueRef = ref(db, "issues");

  push(issueRef, issueData);

    alert("Issue reported successfully");

    setIssueType("");
    setMessage("");
    setBusNo("");
  };

  return (

    <div className="report-container">

      <h2>Report Issue</h2>

      <select
        value={issueType}
        onChange={(e) => setIssueType(e.target.value)}
      >
        <option value="">Select Issue</option>
        <option>Bus Delay</option>
        <option>Bus Overcrowded</option>
        <option>Driver Behaviour</option>
        <option>App Problem</option>
      </select>

      <input
        type="text"
        placeholder="Bus Number (optional)"
        value={busNo}
        onChange={(e) => setBusNo(e.target.value)}
      />

      <textarea
        placeholder="Describe the issue"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit Report
      </button>

    </div>
  );
}

export default ReportIssuePage;