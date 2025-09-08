import React, { useEffect, useState } from 'react';
import { 
  MapPin, 
  Users, 
  Award, 
  ChevronDown, 
  Menu, 
  X, 
  BookOpen, 
  Star, 
  ArrowRight, 
  Globe,
  Navigation,
  Phone,
  Mail,
  Clock,
  Camera,
  Eye,
  UserPlus,
  Calendar,
  Shield,
  Languages,
  Heart,
  Share2,
  MessageCircle
} from 'lucide-react';
import './LandingPage.css';

const LandingPage = ({ onEnter }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [activeDistrict, setActiveDistrict] = useState('ranchi');
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [activeARLocation, setActiveARLocation] = useState(null);

  const languages = ['English', 'Hindi', 'Santhali', 'Ho', 'Mundari'];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };

  const famousPlaces = [
    {
      id: 1,
      name: 'Netarhat',
      description: 'Known as the "Queen of Chotanagpur", Netarhat is famous for its sunrise and sunset views, dense forests, and pleasant climate.',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Sunrise Point', 'Sunset Point', 'Dense Forests', 'Pleasant Climate'],
      bestTime: 'October to March',
      rating: 4.8,
      district: 'Latehar'
    },
    {
      id: 2,
      name: 'Hundru Falls',
      description: 'A spectacular 320-foot waterfall on the Subarnarekha River, surrounded by lush green forests and rocky terrain.',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['320-foot Waterfall', 'Natural Pool', 'Photography Spot', 'Trekking'],
      bestTime: 'July to February',
      rating: 4.7,
      district: 'Ranchi'
    },
    {
      id: 3,
      name: 'Betla National Park',
      description: 'One of the first national parks in India, home to tigers, elephants, and diverse wildlife in the Palamau district.',
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Tiger Reserve', 'Elephant Safari', 'Wildlife Photography', 'Forest Lodge'],
      bestTime: 'November to June',
      rating: 4.6,
      district: 'Palamau'
    },
    {
      id: 4,
      name: 'Deoghar Temple',
      description: 'Sacred pilgrimage site housing the famous Baidyanath Jyotirlinga, one of the twelve Jyotirlingas in India.',
      image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Baidyanath Jyotirlinga', 'Spiritual Journey', 'Ancient Architecture', 'Religious Festivals'],
      bestTime: 'October to March',
      rating: 4.9,
      district: 'Deoghar'
    },
    {
      id: 5,
      name: 'Patratu Valley',
      description: 'A picturesque valley with pristine lakes, rolling hills, and serene landscapes perfect for nature lovers.',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Patratu Dam', 'Boating', 'Scenic Views', 'Photography'],
      bestTime: 'October to April',
      rating: 4.5,
      district: 'Ramgarh'
    },
    {
      id: 6,
      name: 'Dassam Falls',
      description: 'A magnificent waterfall cascading from a height of 144 feet, creating a mesmerizing natural spectacle.',
      image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['144-foot Waterfall', 'Natural Beauty', 'Photography', 'Picnic Spot'],
      bestTime: 'October to March',
      rating: 4.4,
      district: 'Ranchi'
    }
  ];

  const districts = {
    ranchi: {
      name: 'Ranchi',
      description: 'Capital city with waterfalls and urban attractions',
      places: ['Hundru Falls', 'Dassam Falls', 'Rock Garden', 'Tagore Hill'],
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    deoghar: {
      name: 'Deoghar',
      description: 'Sacred pilgrimage destination',
      places: ['Baidyanath Temple', 'Nandan Pahar', 'Tapovan', 'Satsang Ashram'],
      image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    palamau: {
      name: 'Palamau',
      description: 'Wildlife sanctuary and historical sites',
      places: ['Betla National Park', 'Palamau Fort', 'Kechki', 'Lodh Falls'],
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    latehar: {
      name: 'Latehar',
      description: 'Hill station and scenic beauty',
      places: ['Netarhat', 'Lodh Falls', 'Magnolia Point', 'Upper Ghaghri Falls'],
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  };

  const localGuides = [
    {
      id: 1,
      name: 'Ravi Kumar Munda',
      speciality: 'Wildlife & Tribal Culture',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: '8 years',
      languages: ['Hindi', 'English', 'Santhali', 'Mundari'],
      price: '₹1,200/day',
      location: 'Ranchi',
      verified: true,
      tours: 150,
      description: 'Expert in tribal culture and wildlife photography. Certified by Jharkhand Tourism Board.',
      specializations: ['Wildlife Photography', 'Tribal Villages', 'Forest Trekking', 'Cultural Tours'],
      contact: '+91 98765 43210',
      email: 'ravi.munda@guides.jh.gov.in'
    },
    {
      id: 2,
      name: 'Priya Devi Oraon',
      speciality: 'Cultural Heritage & Handicrafts',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: '6 years',
      languages: ['Hindi', 'English', 'Ho', 'Kurukh'],
      price: '₹1,000/day',
      location: 'Deoghar',
      verified: true,
      tours: 120,
      description: 'Specialist in traditional crafts and religious tourism. Master artisan and cultural ambassador.',
      specializations: ['Handicraft Workshops', 'Temple Tours', 'Cultural Festivals', 'Traditional Cooking'],
      contact: '+91 98765 43211',
      email: 'priya.oraon@guides.jh.gov.in'
    },
    {
      id: 3,
      name: 'Arjun Singh Kharia',
      speciality: 'Adventure Sports & Trekking',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: '5 years',
      languages: ['Hindi', 'English', 'Kharia'],
      price: '₹1,500/day',
      location: 'Netarhat',
      verified: true,
      tours: 95,
      description: 'Adventure enthusiast specializing in mountain trekking and extreme sports.',
      specializations: ['Rock Climbing', 'Waterfall Rappelling', 'Night Trekking', 'Camping'],
      contact: '+91 98765 43212',
      email: 'arjun.kharia@guides.jh.gov.in'
    }
  ];

  const groupTravelOptions = [
    {
      id: 1,
      title: 'Waterfall Expedition Group',
      destination: 'Hundru & Dassam Falls',
      date: '15-17 Dec 2024',
      duration: '3 days',
      currentMembers: 6,
      maxMembers: 12,
      pricePerPerson: '₹3,500',
      organizer: 'Adventure Jharkhand',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400',
      activities: ['Waterfall Photography', 'Trekking', 'Camping'],
      ageGroup: '18-45 years'
    },
    {
      id: 2,
      title: 'Tribal Culture Immersion',
      destination: 'Tribal Villages Tour',
      date: '22-25 Dec 2024',
      duration: '4 days',
      currentMembers: 4,
      maxMembers: 10,
      pricePerPerson: '₹4,200',
      organizer: 'Cultural Connect',
      image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=400',
      activities: ['Village Stay', 'Handicraft Learning', 'Folk Dance'],
      ageGroup: '20-60 years'
    },
    {
      id: 3,
      title: 'Wildlife Safari Adventure',
      destination: 'Betla National Park',
      date: '28-30 Dec 2024',
      duration: '3 days',
      currentMembers: 8,
      maxMembers: 15,
      pricePerPerson: '₹5,500',
      organizer: 'Wild Jharkhand',
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?auto=compress&cs=tinysrgb&w=400',
      activities: ['Tiger Safari', 'Bird Watching', 'Nature Photography'],
      ageGroup: '16-65 years'
    }
  ];

  const arVrLocations = [
    {
      id: 1,
      name: 'Netarhat Sunrise Point',
      description: 'Experience the magical sunrise from Queen of Chotanagpur',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'VR 360°',
      duration: '5 min',
      features: ['360° Panoramic View', 'Sunrise Simulation', 'Audio Guide']
    },
    {
      id: 2,
      name: 'Hundru Falls Virtual Tour',
      description: 'Feel the power of 320-foot waterfall in virtual reality',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'AR Experience',
      duration: '8 min',
      features: ['Water Sound Effects', 'Interactive Elements', 'Photo Capture']
    },
    {
      id: 3,
      name: 'Betla Wildlife Safari',
      description: 'Virtual safari through the tiger reserve',
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'VR Safari',
      duration: '12 min',
      features: ['Wildlife Spotting', 'Educational Content', 'Multiple Routes']
    },
    {
      id: 4,
      name: 'Deoghar Temple Darshan',
      description: 'Virtual pilgrimage to Baidyanath Jyotirlinga',
      image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'AR Temple Tour',
      duration: '10 min',
      features: ['Sacred Chants', 'Historical Information', 'Ritual Guidance']
    }
  ];

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <h2>Jharkhand Tourism</h2>
            </div>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <a href="#home" onClick={() => {setIsMenuOpen(false); scrollToSection('home');}}>Home</a>
              <a href="#destinations" onClick={() => {setIsMenuOpen(false); scrollToSection('destinations');}}>Destinations</a>
              <a href="#districts" onClick={() => {setIsMenuOpen(false); scrollToSection('districts');}}>Districts</a>
              <a href="#guides" onClick={() => {setIsMenuOpen(false); scrollToSection('guides');}}>Guides</a>
              <a href="#group-travel" onClick={() => {setIsMenuOpen(false); scrollToSection('group-travel');}}>Group Travel</a>
              <a href="#ar-vr" onClick={() => {setIsMenuOpen(false); scrollToSection('ar-vr');}}>AR/VR</a>
              <button className="btn btn-outline history-btn" onClick={toggleHistory}>
                <BookOpen size={16} />
                History
              </button>
              <div className="language-selector">
                <button className="language-btn" onClick={toggleLanguageDropdown}>
                  <Globe size={16} />
                  {selectedLanguage}
                  <ChevronDown size={14} />
                </button>
                {showLanguageDropdown && (
                  <div className="language-dropdown">
                    {languages.map((lang) => (
                      <button key={lang} onClick={() => selectLanguage(lang)}>{lang}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section id="home" className="hero-section">
        <div className="video-background">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="hero-video"
          >
            <source src="https://videos.pexels.com/video-files/2499611/2499611-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="container">
            <div className={`hero-text ${isLoaded ? 'fade-in-up' : ''}`}>
              <h1 className="hero-title">
                Discover the <span className="highlight">Land of Forests</span>
              </h1>
              <p className="hero-subtitle">
                Experience Jharkhand's majestic waterfalls, rich tribal heritage, 
                and untouched natural beauty through our smart digital tourism platform
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Destinations</div>
                </div>
                <div className="stat">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Local Guides</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">AI Support</div>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={onEnter}>
                  <MapPin size={18} />
                  Start Journey
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => scrollToSection('destinations')}>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* History Modal */}
      {showHistory && (
        <div className="modal-overlay" onClick={toggleHistory}>
          <div className="history-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleHistory}>×</button>
            <div className="history-content">
              <h2>History of Jharkhand</h2>
              <div className="history-text">
                <p>
                  <strong>Ancient Era:</strong> Jharkhand, meaning "Land of Forests," has been inhabited since the Stone Age. 
                  The region was home to various tribal communities including the Mundas, Santhals, Oraons, and Ho tribes, 
                  who developed rich cultural traditions and sustainable forest management practices.
                </p>
                <p>
                  <strong>Medieval Period:</strong> The area came under various rulers including the Chero dynasty, 
                  Nagvanshi dynasty, and later the Mughal Empire. The tribal communities maintained their distinct 
                  identity and continued their traditional way of life despite external influences.
                </p>
                <p>
                  <strong>British Era:</strong> During British rule, the region was part of Bihar and was known for 
                  its rich mineral resources. The discovery of coal and iron ore led to industrial development, 
                  but also displacement of tribal communities.
                </p>
                <p>
                  <strong>Modern Jharkhand:</strong> After decades of struggle for a separate state, Jharkhand was 
                  carved out of Bihar on November 15, 2000, becoming India's 28th state. The state is rich in 
                  minerals, forests, and cultural diversity, with over 30 tribal communities calling it home.
                </p>
                <p>
                  <strong>Cultural Heritage:</strong> Jharkhand is renowned for its tribal art, music, dance forms 
                  like Chhau and Jhumair, and traditional crafts. The state celebrates numerous festivals including 
                  Sarhul, Karma, and Sohrai, reflecting its deep connection with nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Featured Destinations */}
      <section id="destinations" className="destinations-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Destinations</h2>
            <p>Discover the most enchanting places in the Land of Forests</p>
          </div>
          
          <div className="destinations-grid">
            {famousPlaces.map((place) => (
              <div key={place.id} className="destination-card">
                <div className="card-image">
                  <img src={place.image} alt={place.name} />
                  <div className="card-overlay">
                    <div className="rating">
                      <Star size={16} fill="currentColor" />
                      <span>{place.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{place.name}</h3>
                  <p className="card-description">{place.description}</p>
                  <div className="card-highlights">
                    <h4>Highlights:</h4>
                    <ul>
                      {place.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer">
                    <div className="card-info">
                      <span className="best-time">Best Time: {place.bestTime}</span>
                      <span className="district-tag">{place.district} District</span>
                    </div>
                    <button className="btn btn-outline read-more-btn" onClick={onEnter}>
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Districts */}
      <section id="districts" className="districts-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore by Districts</h2>
            <p>Discover Jharkhand's treasures district by district</p>
          </div>
          
          <div className="districts-navigation">
            {Object.entries(districts).map(([key, district]) => (
              <button
                key={key}
                className={`district-tab ${activeDistrict === key ? 'active' : ''}`}
                onClick={() => setActiveDistrict(key)}
              >
                {district.name}
              </button>
            ))}
          </div>
          
          <div className="district-content">
            <div className="district-info">
              <div className="district-image">
                <img src={districts[activeDistrict].image} alt={districts[activeDistrict].name} />
              </div>
              <div className="district-details">
                <h3>{districts[activeDistrict].name} District</h3>
                <p>{districts[activeDistrict].description}</p>
                <div className="places-list">
                  <h4>Popular Places:</h4>
                  <div className="places-grid">
                    {districts[activeDistrict].places.map((place, index) => (
                      <div key={index} className="place-tag">
                        <MapPin size={14} />
                        {place}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="btn btn-primary district-explore-btn" onClick={onEnter}>
                  <Navigation size={18} />
                  Explore {districts[activeDistrict].name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Local Guides */}
      <section id="guides" className="guides-section">
        <div className="container">
          <div className="section-header">
            <h2>Expert Local Guides</h2>
            <p>Connect with verified local experts who know Jharkhand's hidden gems</p>
          </div>
          
          <div className="guides-grid">
            {localGuides.map((guide) => (
              <div key={guide.id} className="guide-card">
                <div className="guide-header">
                  <div className="guide-image">
                    <img src={guide.image} alt={guide.name} />
                    {guide.verified && (
                      <div className="verification-badge">
                        <Shield size={16} />
                      </div>
                    )}
                  </div>
                  <div className="guide-basic-info">
                    <h3>{guide.name}</h3>
                    <p className="speciality">{guide.speciality}</p>
                    <div className="guide-stats">
                      <div className="stat">
                        <Star size={14} fill="currentColor" />
                        <span>{guide.rating}</span>
                      </div>
                      <div className="stat">
                        <Users size={14} />
                        <span>{guide.tours} tours</span>
                      </div>
                      <div className="stat">
                        <Clock size={14} />
                        <span>{guide.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="guide-details">
                  <p className="guide-description">{guide.description}</p>
                  
                  <div className="specializations">
                    <h4>Specializations:</h4>
                    <div className="spec-tags">
                      {guide.specializations.map((spec, index) => (
                        <span key={index} className="spec-tag">{spec}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="languages">
                    <h4>Languages:</h4>
                    <div className="lang-tags">
                      {guide.languages.map((lang, index) => (
                        <span key={index} className="lang-tag">
                          <Languages size={12} />
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="guide-footer">
                    <div className="price-location">
                      <span className="price">{guide.price}</span>
                      <span className="location">
                        <MapPin size={14} />
                        {guide.location}
                      </span>
                    </div>
                    <div className="guide-actions">
                      <button 
                        className="btn btn-outline"
                        onClick={() => setSelectedGuide(guide)}
                      >
                        View Profile
                      </button>
                      <button className="btn btn-primary">
                        <MessageCircle size={16} />
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Travel Section */}
      <section id="group-travel" className="group-travel-section">
        <div className="container">
          <div className="section-header">
            <h2>Join Group Adventures</h2>
            <p>Connect with fellow travelers and explore Jharkhand together</p>
          </div>
          
          <div className="group-travel-grid">
            {groupTravelOptions.map((group) => (
              <div key={group.id} className="group-card">
                <div className="group-image">
                  <img src={group.image} alt={group.title} />
                  <div className="group-overlay">
                    <div className="members-count">
                      <Users size={16} />
                      <span>{group.currentMembers}/{group.maxMembers}</span>
                    </div>
                  </div>
                </div>
                
                <div className="group-content">
                  <h3>{group.title}</h3>
                  <div className="group-info">
                    <div className="info-item">
                      <MapPin size={16} />
                      <span>{group.destination}</span>
                    </div>
                    <div className="info-item">
                      <Calendar size={16} />
                      <span>{group.date}</span>
                    </div>
                    <div className="info-item">
                      <Clock size={16} />
                      <span>{group.duration}</span>
                    </div>
                  </div>
                  
                  <div className="activities">
                    <h4>Activities:</h4>
                    <div className="activity-tags">
                      {group.activities.map((activity, index) => (
                        <span key={index} className="activity-tag">{activity}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="group-details">
                    <div className="organizer">
                      <strong>Organizer:</strong> {group.organizer}
                    </div>
                    <div className="age-group">
                      <strong>Age Group:</strong> {group.ageGroup}
                    </div>
                  </div>
                  
                  <div className="group-footer">
                    <div className="price">
                      <span className="amount">{group.pricePerPerson}</span>
                      <span className="per-person">per person</span>
                    </div>
                    <button className="btn btn-primary join-btn">
                      <UserPlus size={16} />
                      Join Group
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="create-group-cta">
            <div className="cta-content">
              <h3>Want to create your own group?</h3>
              <p>Start your own adventure and invite others to join</p>
              <button className="btn btn-outline">
                <UserPlus size={18} />
                Create New Group
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AR/VR Section */}
      <section id="ar-vr" className="ar-vr-section">
        <div className="container">
          <div className="section-header">
            <h2>AR/VR Experiences</h2>
            <p>Immerse yourself in Jharkhand's beauty with cutting-edge technology</p>
          </div>
          
          <div className="ar-vr-grid">
            {arVrLocations.map((location) => (
              <div key={location.id} className="ar-vr-card">
                <div className="ar-vr-image">
                  <img src={location.image} alt={location.name} />
                  <div className="ar-vr-overlay">
                    <div className="experience-type">
                      <Eye size={16} />
                      {location.type}
                    </div>
                    <div className="duration">
                      <Clock size={16} />
                      {location.duration}
                    </div>
                  </div>
                </div>
                
                <div className="ar-vr-content">
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  
                  <div className="features">
                    <h4>Features:</h4>
                    <ul>
                      {location.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="ar-vr-actions">
                    <button 
                      className="btn btn-primary experience-btn"
                      onClick={() => setActiveARLocation(location)}
                    >
                      <Camera size={16} />
                      Start Experience
                    </button>
                    <button className="btn btn-outline share-btn">
                      <Share2 size={16} />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="ar-vr-info">
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <Eye size={24} />
                </div>
                <h4>VR Headset Compatible</h4>
                <p>Works with all major VR headsets</p>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <Camera size={24} />
                </div>
                <h4>AR Mobile Ready</h4>
                <p>Use your smartphone for AR experiences</p>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <Globe size={24} />
                </div>
                <h4>360° Immersion</h4>
                <p>Full panoramic virtual tours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Smart Tourism Features</h2>
            <p>Experience Jharkhand with our AI-powered digital platform</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={32} />
              </div>
              <h3>Smart Trip Planning</h3>
              <p>AI-powered personalized itineraries based on your preferences, budget, and travel dates</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Verified Local Guides</h3>
              <p>Connect with blockchain-verified local guides who know the hidden gems of Jharkhand</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Award size={32} />
              </div>
              <h3>Authentic Experiences</h3>
              <p>Immerse yourself in tribal culture, traditional crafts, and sustainable eco-tourism</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Profile Modal */}
      {selectedGuide && (
        <div className="modal-overlay" onClick={() => setSelectedGuide(null)}>
          <div className="guide-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedGuide(null)}>×</button>
            <div className="guide-modal-content">
              <div className="guide-modal-header">
                <div className="guide-modal-image">
                  <img src={selectedGuide.image} alt={selectedGuide.name} />
                  {selectedGuide.verified && (
                    <div className="verification-badge">
                      <Shield size={20} />
                    </div>
                  )}
                </div>
                <div className="guide-modal-info">
                  <h2>{selectedGuide.name}</h2>
                  <p className="speciality">{selectedGuide.speciality}</p>
                  <div className="guide-modal-stats">
                    <div className="stat">
                      <Star size={16} fill="currentColor" />
                      <span>{selectedGuide.rating} Rating</span>
                    </div>
                    <div className="stat">
                      <Users size={16} />
                      <span>{selectedGuide.tours} Tours Completed</span>
                    </div>
                    <div className="stat">
                      <Clock size={16} />
                      <span>{selectedGuide.experience} Experience</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="guide-modal-details">
                <div className="description">
                  <h3>About</h3>
                  <p>{selectedGuide.description}</p>
                </div>
                
                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <div className="contact-items">
                    <div className="contact-item">
                      <Phone size={16} />
                      <span>{selectedGuide.contact}</span>
                    </div>
                    <div className="contact-item">
                      <Mail size={16} />
                      <span>{selectedGuide.email}</span>
                    </div>
                    <div className="contact-item">
                      <MapPin size={16} />
                      <span>{selectedGuide.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button className="btn btn-primary">
                    <MessageCircle size={18} />
                    Send Message
                  </button>
                  <button className="btn btn-outline">
                    <Phone size={18} />
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AR/VR Experience Modal */}
      {activeARLocation && (
        <div className="modal-overlay" onClick={() => setActiveARLocation(null)}>
          <div className="ar-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveARLocation(null)}>×</button>
            <div className="ar-modal-content">
              <div className="ar-viewer">
                <img src={activeARLocation.image} alt={activeARLocation.name} />
                <div className="ar-controls">
                  <button className="ar-control-btn">
                    <Eye size={20} />
                    360° View
                  </button>
                  <button className="ar-control-btn">
                    <Camera size={20} />
                    Capture
                  </button>
                  <button className="ar-control-btn">
                    <Share2 size={20} />
                    Share
                  </button>
                </div>
              </div>
              <div className="ar-info">
                <h3>{activeARLocation.name}</h3>
                <p>{activeARLocation.description}</p>
                <div className="ar-features">
                  {activeARLocation.features.map((feature, index) => (
                    <span key={index} className="ar-feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;