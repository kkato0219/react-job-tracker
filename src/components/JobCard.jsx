function JobCard({ job, handleEdit, handleDelete }) {
    function getStatusClass(status) {
        if (status === "Applied") return "status applied";
        if (status === "Interview") return "status interview";
        if (status === "Offer") return "status offer";
        if (status === "Rejected") return "status rejected";
        return "status";
    }

    return (
        <div className="job-card">
            <h2>{job.company}</h2>
            <p><strong>Position:</strong> {job.position}</p>
            <p>
                <strong>Status:</strong>{" "}
                <span className={getStatusClass(job.status)}>{job.status}</span>
            </p>           
            <p><strong>Date:</strong> {job.date}</p>
            <p><strong>Notes:</strong> {job.notes}</p>

            <div className="job-actions">
                <button onClick={() => handleEdit(job)} className="edit-btn">
                    Edit
                </button>
                <button onClick={() => handleDelete(job.id)} className="delete-btn">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default JobCard;