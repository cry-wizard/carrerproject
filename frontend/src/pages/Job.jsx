import { useEffect, useState } from "react";
import API from "../services/api";
import JobCard from "../components/JobCard";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get("/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error("Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <Hero />
      <SearchBar />

      <main className="max-w-7xl mx-auto mt-24 px-6">

        {/* Loading State */}
        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-[350px] bg-white animate-pulse rounded-[2rem] border border-slate-100" />
            ))}
          </div>
        ) : (
          /* The Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && jobs.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">No jobs found. Try adjusting your search filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Jobs;