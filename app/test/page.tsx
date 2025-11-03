"use client";
import React, { useState, useEffect } from 'react';

type Question = {
  id: string;
  question: string;
  options: string[];
};

type OnboardingData = {
  questions: Question[];
};

export default function Page() {
  const [data, setData] = useState<OnboardingData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOnboarding() {
      try {
        const res = await fetch('/api/onboarding');
        if (!res.ok) {
          throw new Error('Failed to fetch onboarding data');
        }
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || 'Error');
      }
    }
    fetchOnboarding();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Preguntas de Onboarding</h1>
      {data.questions.map((q) => (
        <div key={q.id} style={{ marginBottom: '1rem' }}>
          <h2>{q.question}</h2>
          <ul>
            {q.options.map((opt) => (
              <li key={opt}>{opt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
