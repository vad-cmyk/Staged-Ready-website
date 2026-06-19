'use client';

import { useMemo, useState } from 'react';
import { projects, type Project } from '@/data/projects';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const FILTERS: { key: Project['propertyType'] | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'sale', label: 'For Sale' },
  { key: 'hmo', label: 'HMO' },
  { key: 'serviced', label: 'Serviced Accommodation' },
];

function CaseStudyCard({ project }: { project: Project }) {
  return (
    <div className="reveal" style={{ background: '#FFFFFF', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(74,69,64,0.08)' }}>
      {project.beforeImage && project.afterImage ? (
        <BeforeAfterSlider beforeImage={project.beforeImage} afterImage={project.afterImage} />
      ) : project.afterImage || project.beforeImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.afterImage || project.beforeImage} alt={project.title} style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }} />
      ) : null}
      <div style={{ padding: '1.5rem' }}>
        <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A8844A', border: '1px solid rgba(168,132,74,0.3)', borderRadius: '2px', padding: '0.15rem 0.5rem' }}>
          {project.propertyType === 'sale' ? 'For Sale' : project.propertyType === 'hmo' ? 'HMO' : 'Serviced Accommodation'}
        </span>
        <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 400, color: '#2D2926', margin: '0.75rem 0 0.25rem' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: '#6B6460', marginBottom: '0.75rem' }}>{project.location}</p>
        {(project.stagedIn || project.result) && (
          <p style={{ fontSize: '0.8125rem', color: '#4A4540', fontWeight: 500 }}>
            {project.stagedIn && <>Staged in {project.stagedIn}</>}
            {project.stagedIn && project.result && ' · '}
            {project.result && <>{project.result}</>}
          </p>
        )}
        {project.summary && <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6B6460', marginTop: '0.75rem' }}>{project.summary}</p>}
      </div>
    </div>
  );
}

export default function CaseStudies({ propertyType }: { propertyType?: Project['propertyType'] } = {}) {
  const scoped = propertyType ? projects.filter((p) => p.propertyType === propertyType) : projects;
  const [filter, setFilter] = useState<Project['propertyType'] | 'all'>('all');

  const visible = useMemo(
    () => (filter === 'all' ? scoped : scoped.filter((p) => p.propertyType === filter)),
    [scoped, filter]
  );

  if (scoped.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>Case Studies</p>
        <h2 className="font-display reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#2D2926', marginTop: '0.75rem', transitionDelay: '0.1s' }}>
          Real Results, <em style={{ fontStyle: 'italic' }}>Real Returns</em>
        </h2>
      </div>

      {!propertyType && (
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal" style={{ transitionDelay: '0.2s' }}>
          {FILTERS.map((f) => (
            <button key={f.key} className={`filter-tab${filter === f.key ? ' active' : ''}`} onClick={() => setFilter(f.key)} type="button">
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {visible.map((project) => (
          <CaseStudyCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
