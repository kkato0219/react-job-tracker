import { useEffect, useState } from "react";
import "./App.css";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";

function App() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");

    if (savedJobs) {
      return JSON.parse(savedJobs);
    }

    return [];
  });

  const [editingId, setEditingId] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!company || !position || !date) {
      alert("Please fill in company, position, and date.");
      return;
    }

    if (editingId) {
      const updatedJobs = jobs.map((job) => 
        job.id === editingId
          ? {
              ...job,
              company: company,
              position: position,
              status: status,
              date: date,
              notes: notes,
            }
          : job
      );

      setJobs(updatedJobs);
      setEditingId(null);
    } else {
      const newJob = {
        id: Date.now(),
        company: company,
        position: position,
        status: status,
        date: date,
        notes: notes,
      };

      setJobs([...jobs, newJob]);
    }

    setCompany("");
    setPosition("");
    setStatus("Applied");
    setDate("");
    setNotes("");
  }

  function handleDelete(id) {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  }

  function handleEdit(job) {
    setCompany(job.company);
    setPosition(job.position);
    setStatus(job.status);
    setDate(job.date);
    setNotes(job.notes);
    setEditingId(job.id);
  }

  function handleClearAll() {
    const confirmDelete = confirm("Are you sure you want to delete all jobs?");

    if (confirmDelete) {
      setJobs([]);
    }
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesStatus =
      filterStatus === "All" || job.status === filterStatus;

    const matchesSearch =
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesStatus && matchesSearch;
  });
    

  return (
    <div className="app">
      <h1>Job Tracker App</h1>

      <JobForm 
        company={company}
        setCompany={setCompany}
        position={position}
        setPosition={setPosition}
        status={status}
        setStatus={setStatus}
        date={date}
        setDate={setDate}
        notes={notes}
        setNotes={setNotes}
        handleSubmit={handleSubmit}
        editingId={editingId}
      />

      <input
        type="text"
        placeholder="Search by company or position"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <FilterBar
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      <button className="clear-btn" onClick={handleClearAll}>
        Clear All jobs
      </button>

      <JobList
        filteredJobs={filteredJobs}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;