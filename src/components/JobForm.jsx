function JobForm({
    company,
    setCompany,
    position,
    setPosition,
    status,
    setStatus,
    date,
    setDate,
    notes,
    setNotes,
    handleSubmit,
    editingId,
}) {
    return (
        <form className="job-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)} 
        />

        <input 
          type="text" 
          placeholder="Position title" 
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <input
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea 
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}  
        ></textarea>

        <button type="submit">
          {editingId ? "Update Job" : "Add Job"}
        </button>
      </form>
    );
}

export default JobForm;