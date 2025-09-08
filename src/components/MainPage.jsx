import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  MessageCircle, 
  Search, 
  Filter,
  Heart,
  Camera,
  Navigation,
  Phone,
  Mail,
  Clock,
  Award
} from 'lucide-react';
import './MainPage.css';

const MainPage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: 1,
      name: 'Netarhat',
      description: 'Queen of Chotanagpur with stunning sunrises and dense forests',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      price: '₹2,500',
      duration: '2-3 days',
      category: 'Hill Station',
      highlights: ['Sunrise Point', 'Dense Forests', 'Tribal Villages']
    },
    {
      id: 2,
      name: 'Hundru Falls',
      description: 'Spectacular 320-foot waterfall surrounded by lush greenery',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      price: '₹1,200',
      duration: '1 day',
      category: 'Waterfall',
      highlights: ['Photography', 'Trekking', 'Natural Pool']
    },
    {
      id: 3,
      name: 'Betla National Park',
      description: 'Home to tigers, elephants and rich biodiversity',
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      price: '₹3,500',
      duration: '2-4 days',
      category: 'Wildlife',
      highlights: ['Safari Tours', 'Wildlife Photography', 'Forest Lodge']
    },
    {
      id: 4,
      name: 'Deoghar Temple',
      description: 'Sacred pilgrimage site with ancient Shiva temple',
      image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      price: '₹1,800',
      duration: '1-2 days',
      category: 'Religious',
      highlights: ['Ancient Temple', 'Spiritual Journey', 'Cultural Heritage']
    },
    {
      id: 5,
      name: 'Patratu Valley',
      description: 'Serene valley with pristine lakes and scenic beauty',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      price: '₹2,000',
      duration: '1-2 days',
      category: 'Nature',
      highlights: ['Boating', 'Scenic Views', 'Photography']
    },
    {
      id: 6,
      name: 'Tribal Village Experience',
      description: 'Immerse in authentic tribal culture and traditions',
      image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      price: '₹2,800',
      duration: '2-3 days',
      category: 'Cultural',
      highlights: ['Traditional Crafts', 'Folk Dance', 'Local Cuisine']
    }
  ];

  const guides = [
    {
      id: 1,
      name: 'Ravi Kumar',
      speciality: 'Wildlife & Trekking',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      experience: '8 years',
      languages: ['Hindi', 'English', 'Santhali'],
      price: '₹800/day'
    },
    {
      id: 2,
      name: 'Priya Devi',
      speciality: 'Cultural Tours',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      experience: '6 years',
      languages: ['Hindi', 'English', 'Ho'],
      price: '₹700/day'
    },
    {
      id: 3,
      name: 'Arjun Singh',
      speciality: 'Adventure Sports',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200',
      experience: '5 years',
      languages: ['Hindi', 'English'],
      price: '₹900/day'
    }
  ];

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  const TabContent = () => {
    switch(activeTab) {
      case 'discover':
        return (
          <div className="discover-content">
            <div className="search-section">
              <div className="search-bar">
                <Search size={20} />
                <input 
                  type="text" 
                  placeholder="Search destinations, activities, or experiences..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="filter-btn">
                  <Filter size={18} />
                </button>
              </div>
            </div>
            
            <div className="destinations-grid">
              {destinations.map((destination) => (
                <div key={destination.id} className="destination-card" onClick={() => handleDestinationClick(destination)}>
                  <div className="card-image">
                    <img src={destination.image} alt={destination.name} />
                    <div className="card-overlay">
                      <button className="favorite-btn">
                        <Heart size={18} />
                      </button>
                      <div className="category-tag">{destination.category}</div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3>{destination.name}</h3>
                      <div className="rating">
                        <Star size={14} fill="currentColor" />
                        <span>{destination.rating}</span>
                      </div>
                    </div>
                    <p className="card-description">{destination.description}</p>
                    <div className="card-info">
                      <div className="info-item">
                        <Clock size={14} />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="info-item">
                        <span className="price">{destination.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'guides':
        return (
          <div className="guides-content">
            <div className="section-header">
              <h2>Verified Local Guides</h2>
              <p>Connect with experienced guides who know Jharkhand like the back of their hand</p>
            </div>
            
            <div className="guides-grid">
              {guides.map((guide) => (
                <div key={guide.id} className="guide-card">
                  <div className="guide-image">
                    <img src={guide.image} alt={guide.name} />
                    <div className="verification-badge">
                      <Award size={16} />
                    </div>
                  </div>
                  <div className="guide-info">
                    <h3>{guide.name}</h3>
                    <p className="speciality">{guide.speciality}</p>
                    <div className="guide-stats">
                      <div className="stat">
                        <Star size={14} fill="currentColor" />
                        <span>{guide.rating}</span>
                      </div>
                      <div className="stat">
                        <span>{guide.experience} exp</span>
                      </div>
                    </div>
                    <div className="languages">
                      {guide.languages.map((lang, index) => (
                        <span key={index} className="language-tag">{lang}</span>
                      ))}
                    </div>
                    <div className="guide-footer">
                      <span className="price">{guide.price}</span>
                      <button className="btn btn-primary">Book Guide</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'plan':
        return (
          <div className="plan-content">
            <div className="section-header">
              <h2>AI Trip Planner</h2>
              <p>Let our AI create the perfect itinerary based on your preferences</p>
            </div>
            
            <div className="planner-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Destination Interests</label>
                  <div className="checkbox-group">
                    <label><input type="checkbox" /> Waterfalls</label>
                    <label><input type="checkbox" /> Wildlife</label>
                    <label><input type="checkbox" /> Cultural Sites</label>
                    <label><input type="checkbox" /> Hill Stations</label>
                    <label><input type="checkbox" /> Tribal Villages</label>
                    <label><input type="checkbox" /> Religious Sites</label>
                  </div>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Travel Dates</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <select>
                    <option>1-2 days</option>
                    <option>3-5 days</option>
                    <option>1 week</option>
                    <option>2+ weeks</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Budget Range</label>
                  <select>
                    <option>₹5,000 - ₹10,000</option>
                    <option>₹10,000 - ₹25,000</option>
                    <option>₹25,000 - ₹50,000</option>
                    <option>₹50,000+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Group Size</label>
                  <select>
                    <option>Solo</option>
                    <option>2-3 people</option>
                    <option>4-6 people</option>
                    <option>7+ people</option>
                  </select>
                </div>
              </div>
              
              <button className="btn btn-primary plan-btn">Generate AI Itinerary</button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="main-page">
      {/* Header */}
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>
            <div className="logo">
              <h1>Jharkhand Tourism</h1>
            </div>
            <div className="header-actions">
              <button className="chat-btn">
                <MessageCircle size={20} />
                <span>AI Chat</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="tab-navigation">
        <div className="container">
          <div className="tab-list">
            <button 
              className={`tab-btn ${activeTab === 'discover' ? 'active' : ''}`}
              onClick={() => setActiveTab('discover')}
            >
              <MapPin size={18} />
              <span>Discover</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'guides' ? 'active' : ''}`}
              onClick={() => setActiveTab('guides')}
            >
              <Users size={18} />
              <span>Guides</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'plan' ? 'active' : ''}`}
              onClick={() => setActiveTab('plan')}
            >
              <Calendar size={18} />
              <span>Plan Trip</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <TabContent />
        </div>
      </main>

      {/* Destination Modal */}
      {selectedDestination && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="destination-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <div className="modal-image">
              <img src={selectedDestination.image} alt={selectedDestination.name} />
            </div>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{selectedDestination.name}</h2>
                <div className="rating">
                  <Star size={16} fill="currentColor" />
                  <span>{selectedDestination.rating}</span>
                </div>
              </div>
              <p className="modal-description">{selectedDestination.description}</p>
              
              <div className="highlights">
                <h3>Highlights</h3>
                <ul>
                  {selectedDestination.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-info">
                <div className="info-grid">
                  <div className="info-item">
                    <Clock size={18} />
                    <span>Duration: {selectedDestination.duration}</span>
                  </div>
                  <div className="info-item">
                    <span>Starting from {selectedDestination.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="modal-actions">
                <button className="btn btn-secondary">
                  <Navigation size={18} />
                  Get Directions
                </button>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;