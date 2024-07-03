'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function Interview() {
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const response = await fetch(`/api/interviews/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch interview');
        }
        const data = await response.json();
        setInterview(data.interview);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!interview) return <div>Interview not found</div>;

  return (
    <div>
      <h1>Interview Details</h1>
      <p>
        {interview.interviewId}
      </p>
      <p>
        {interview.jobTitle}
      </p>
      <p>
        {interview.jobDescription}
      </p>
      <p>
        {interview.jobExperience}
      </p>
      <p>
        {interview.createdAt}
      </p>
      </div>
  );
}