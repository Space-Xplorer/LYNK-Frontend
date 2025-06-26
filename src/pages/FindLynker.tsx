import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Heart, Clock, X } from 'lucide-react';

// // Mock data for Lynkers
// const LYNKERS = [
//   {
//     id: 1,
//     name: 'Alex Johnson',
//     photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
//     rating: 4.9,
//     reviewCount: 127,
//     rate: 25,
//     category: 'Career',
//     tags: ['Startup Advice', 'Tech Career', 'Mentorship'],
//     bio: 'Former Google PM with 10+ years in tech. I help people navigate career transitions and startup challenges.'
//   },
//   {
//     id: 2,
//     name: 'Sophia Chen',
//     photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
//     rating: 4.8,
//     reviewCount: 94,
//     rate: 30,
//     category: 'Emotional Support',
//     tags: ['Relationships', 'Life Transitions', 'Mindfulness'],
//     bio: 'Certified life coach and counselor. I provide a safe space to talk through life challenges and emotional difficulties.'
//   },
//   {
//     id: 3,
//     name: 'Marcus Turner',
//     photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
//     rating: 4.7,
//     reviewCount: 68,
//     rate: 20,
//     category: 'Dating',
//     tags: ['Dating Advice', 'Confidence Building', 'Communication Skills'],
//     bio: 'Dating coach with a background in psychology. I help people build confidence and improve their dating experiences.'
//   },
//   {
//     id: 4,
//     name: 'Emma Rivera',
//     photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
//     rating: 4.9,
//     reviewCount: 116,
//     rate: 35,
//     category: 'Travel',
//     tags: ['NYC Guide', 'Urban Adventures', 'Local Culture'],
//     bio: 'NYC native and travel enthusiast. I show visitors the authentic side of New York beyond the tourist spots.'
//   },
//   {
//     id: 5,
//     name: 'Jason Lee',
//     photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
//     rating: 4.6,
//     reviewCount: 52,
//     rate: 28,
//     category: 'Career',
//     tags: ['Finance', 'Investing', 'Career Change'],
//     bio: 'Former Wall Street analyst turned financial educator. I help people understand investing and make career pivots.'
//   },
//   {
//     id: 6,
//     name: 'Zoe Washington',
//     photo: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
//     rating: 4.8,
//     reviewCount: 89,
//     rate: 32,
//     category: 'Emotional Support',
//     tags: ['Grief Support', 'Life Transitions', 'Stress Management'],
//     bio: 'Trained grief counselor with a compassionate approach. I provide space for processing difficult emotions and life changes.'
//   },
// ];

// Categories for filtering
const CATEGORIES = [
  'All Categories',
  'Career',
  'Dating',
  'Emotional Support',
  'Travel',
  'Friendship',
  'Hobbies',
];

const FindLynker: React.FC = () => {
  const [lynkers, setLynkers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ...your filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  
   useEffect(() => {
    const fetchLynkers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:9000/lynkers');
        if (!response.ok) throw new Error('Failed to fetch Lynkers');
        const data = await response.json();
        setLynkers(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchLynkers();
  }, []);

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;  

  const filteredLynkers = lynkers.filter(lynker => {
    const matchesSearch = searchTerm === '' ||
      lynker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lynker.tags || []).some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lynker.bio || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All Categories' ||
      lynker.category === selectedCategory;

    const matchesPrice = lynker.rate >= priceRange[0] && lynker.rate <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-lynk-light py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Lynker</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover people who offer their time for meaningful experiences, guidance, and connections.
          </p>
          
          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, skills, or keywords..." 
                  className="w-full pl-12 pr-4 py-3 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-lynk-purple"
                />
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="bg-lynk-purple text-white px-4 py-3 rounded-r-lg flex items-center"
              >
                <Filter size={20} className="mr-2" />
                Filters
              </button>
            </div>
            
            {/* Filter Panel */}
            {showFilters && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg p-6 z-20 animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lynk-purple"
                    >
                      {CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hourly Rate: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <div className="flex items-center gap-4">
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full"
                      />
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  {/* Apply/Reset Buttons */}
                  <div className="flex items-end gap-4">
                    <button 
                      onClick={() => {
                        setSelectedCategory('All Categories');
                        setPriceRange([0, 100]);
                      }}
                      className="btn-secondary py-2"
                    >
                      Reset
                    </button>
                    <button 
                      onClick={() => setShowFilters(false)}
                      className="btn-primary py-2"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              {filteredLynkers.length} Lynkers Available
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLynkers.map((lynker) => (
              <div key={lynker._id} className="card hover:shadow-xl transition-all duration-300">
                <div className="relative mb-4">
                  <img 
                    src={lynker.photo} 
                    alt={lynker.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-lynk-purple transition-colors">
                    <Heart size={18} />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-lynk-purple text-white text-sm font-medium py-1 px-3 rounded-full">
                    {lynker.category}
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{lynker.name}</h3>
                      <div className="flex items-center">
                        <Star size={16} className="text-lynk-orange fill-current" />
                        <span className="text-gray-700 text-sm ml-1">{lynker.rating} ({lynker.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lynk-purple font-bold">${lynker.rate}</span>
                      <span className="text-gray-500 text-sm">/hour</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {lynker.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {lynker.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-lynk-light text-lynk-purple text-xs py-1 px-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <button className="flex items-center text-sm text-lynk-purple">
                      <Clock size={16} className="mr-1" />
                      Check Availability
                    </button>
                    <button className="btn-primary py-2 px-4 text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredLynkers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No Lynkers Found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms to find a match.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FindLynker;