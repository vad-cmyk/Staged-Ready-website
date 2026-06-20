import CaseStudies from '@/components/CaseStudies';
import { projects, type Project } from '@/data/projects';

export default function PortfolioStrip({ propertyType }: { propertyType: Project['propertyType'] }) {
  const hasData = projects.some((p) => p.propertyType === propertyType);
  if (!hasData) return null;

  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: '#F8F5F1' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <CaseStudies propertyType={propertyType} />
      </div>
    </section>
  );
}
