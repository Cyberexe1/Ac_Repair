import { Helmet } from 'react-helmet-async';

interface PageTitleProps {
  title: string;
  description?: string;
  path?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description, path }) => {
  const baseUrl = 'https://ac-repair-dusky.vercel.app/';
  const fullUrl = path ? `${baseUrl}${path}` : baseUrl;
  
  return (
    <Helmet>
      <title>{title} - Modern Mechanical A.C. Repair</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={`${title} - Modern Mechanical A.C. Repair`} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content="/repair.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={`${title} - Modern Mechanical A.C. Repair`} />
      {description && <meta property="twitter:description" content={description} />}
      <meta property="twitter:image" content="/repair.png" />
    </Helmet>
  );
};

export default PageTitle;