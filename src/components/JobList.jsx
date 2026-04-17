import JobCard from "./JobCard";

function JobList({ filteredJobs, handleEdit, handleDelete}) {
    return (
        <div className="job-list">
            {filteredJobs.length === 0 ? (
                <p className="empty-message">No jobs found.</p>
            ) : (
                filteredJobs.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                ))
            )}
        </div>
    );
}

export default JobList;