function FilterBar({ filterStatus, setFilterStatus }) {
  return (
    <div className="filter-bar">
        <button
            className={filterStatus === "All" ? "active-filter" : ""}
            onClick={() => setFilterStatus("All")}
        >
            All
        </button>

        <button
            className={filterStatus === "Applied" ? "active-filter" : ""}
            onClick={() => setFilterStatus("Applied")} 
        >
            Applied
        </button>

        <button
        className={filterStatus === "Interview" ? "active-filter" : ""}
        onClick={() => setFilterStatus("Interview")}
        >
            Interview
        </button>

        <button
            className={filterStatus === "Offer" ? "active-filter" : ""}
            onClick={() => setFilterStatus("Offer")}
        >
            Offer
        </button>

        <button
            className={filterStatus === "Rejected" ? "active-filter" : ""}
            onClick={() => setFilterStatus("Rejected")}
        >
            Rejected
        </button>
    </div>
  );
}

export default FilterBar;