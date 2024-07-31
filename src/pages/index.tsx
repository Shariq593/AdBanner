import { useState, useEffect } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import { Banner } from '../../types/banner';

const Home = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if banners data exists in localStorage
    const localData = localStorage.getItem('banners');
    if (localData) {
      setBanners(JSON.parse(localData));
      setLoading(false);
    } else {
      // Fetch data from JSON file if not in localStorage
      fetch('/adBanners.json')
        .then(response => response.json())
        .then(data => {
          setBanners(data);
          localStorage.setItem('banners', JSON.stringify(data)); // Save to localStorage
        })
        .catch(err => setError('Failed to fetch banners'))
        .finally(() => setLoading(false));
    }
  }, []);

  const handleEdit = (id: number) => {
    const banner = banners.find(b => b.id === id);
    setSelectedBanner(banner || null);
  };

  const handleSave = (updatedBanner: Banner) => {
    const updatedBanners = banners.map(b => (b.id === updatedBanner.id ? updatedBanner : b));
    setBanners(updatedBanners);
    localStorage.setItem('banners', JSON.stringify(updatedBanners)); // Update localStorage
    setSelectedBanner(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-black ">
      <h1 className='text-5xl p-8 text-white '>Booking Banner</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 bg-white p-6 rounded-lg lg:grid-cols-2 gap-4 mb-4">
        {banners.map(banner => (
          <BannerImageComp
            key={banner.id} 
            {...banner}
            onEdit={handleEdit}
          />
        ))}
      </div>
      {selectedBanner && (
        <EditBannerTemplateBs
          banner={selectedBanner}
          onSave={handleSave}
          onClose={() => setSelectedBanner(null)}
        />
      )}
    </div>
  );
};

export default Home;
