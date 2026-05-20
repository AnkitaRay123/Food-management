import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MidnightMap.css';

const timeSlots = [
  { 
    id: 0, 
    time: "11:00 PM", 
    activeNodes: [
      { id: '1', top: '15%', left: '25%', name: 'Central Burgers', velocity: 'Medium' },
      { id: '2', top: '40%', left: '70%', name: 'Eastside Fries', velocity: 'High' },
      { id: '3', top: '25%', left: '45%', name: 'Chain Terminal A', velocity: 'Low' },
      { id: '4', top: '80%', left: '60%', name: 'Chain Terminal B', velocity: 'Medium' }
    ], 
    dominantFood: 'Burger & Fries', 
    image: '/media/pexels-nicholas-te-957250855-34574547.jpg', 
    desc: 'Evening leftovers and standard late-night chain activity.' 
  },
  { 
    id: 1, 
    time: "12:00 AM", 
    activeNodes: [
      { id: '5', top: '35%', left: '20%', name: 'Sector 4 Patisserie', velocity: 'High' },
      { id: '6', top: '10%', left: '65%', name: 'The Sugar Hub', velocity: 'Max' },
      { id: '7', top: '75%', left: '80%', name: 'South Dessert Co.', velocity: 'Medium' },
      { id: '8', top: '50%', left: '50%', name: 'Metro Sweets', velocity: 'High' }
    ], 
    dominantFood: 'Rich Desserts', 
    image: '/media/pexels-shashi-ganjhu-21951397-19418741.jpg', 
    desc: 'Post-dinner sweet cravings peaking across northern sectors.' 
  },
  { 
    id: 2, 
    time: "01:00 AM", 
    activeNodes: [
      { id: '9', top: '20%', left: '80%', name: 'Ice Cream Parlor 1', velocity: 'High' },
      { id: '10', top: '65%', left: '35%', name: 'Gelato Sub-station', velocity: 'Medium' },
      { id: '11', top: '85%', left: '15%', name: 'Coolers & Co', velocity: 'Max' },
      { id: '12', top: '45%', left: '90%', name: 'Night Freeze', velocity: 'Low' }
    ], 
    dominantFood: 'Ice Cream', 
    image: '/media/pexels-ali-dashti-506667798-22809626.jpg', 
    desc: 'Midnight coolers driving heavy localized foot traffic.' 
  },
  { 
    id: 3, 
    time: "02:00 AM", 
    activeNodes: [
      { id: '13', top: '10%', left: '10%', name: 'Biryani Central Node', velocity: 'Max' },
      { id: '14', top: '30%', left: '50%', name: 'Spice Route Kitchen', velocity: 'High' },
      { id: '15', top: '55%', left: '20%', name: 'Night Market Hub A', velocity: 'Max' },
      { id: '16', top: '70%', left: '75%', name: 'Night Market Hub B', velocity: 'High' },
      { id: '17', top: '20%', left: '85%', name: 'East Biryani Drop', velocity: 'Medium' },
      { id: '18', top: '90%', left: '45%', name: 'Highway Spices', velocity: 'High' },
      { id: '19', top: '40%', left: '35%', name: 'Local Flavor Matrix', velocity: 'Max' }
    ], 
    dominantFood: 'Spiced Chicken Biryani', 
    image: '/media/pexels-jagan-sai-632000456-17497626.jpg', 
    desc: 'Peak night-economy saturation. Heavy carb clusters dominating local kitchens.' 
  },
  { 
    id: 4, 
    time: "03:00 AM", 
    activeNodes: [
      { id: '20', top: '30%', left: '50%', name: 'Spice Route Kitchen', velocity: 'Medium' },
      { id: '21', top: '55%', left: '20%', name: 'Night Market Hub A', velocity: 'Low' },
      { id: '22', top: '90%', left: '45%', name: 'Highway Spices', velocity: 'High' }
    ], 
    dominantFood: 'Spiced Chicken Biryani', 
    image: '/media/pexels-jagan-sai-632000456-17497626.jpg', 
    desc: 'Night shift workers and late-party traffic sustaining remaining open nodes.' 
  },
  { 
    id: 5, 
    time: "04:00 AM", 
    activeNodes: [
      { id: '23', top: '60%', left: '85%', name: 'Ghost Kitchen Alpha', velocity: 'Medium' },
      { id: '24', top: '15%', left: '40%', name: 'Morning Prep Station', velocity: 'High' }
    ], 
    dominantFood: 'Traditional Thali Prep', 
    image: '/media/pexels-ryshy-s-2149956588-35539324.jpg', 
    desc: 'Ghost kitchens prepping early morning alkaline meal bases.' 
  },
];

export default function MidnightMap() {
  const [timeIndex, setTimeIndex] = useState(3); // Start at 2:00 AM peak
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeData = timeSlots[timeIndex];

  return (
    <div className="mm-page">
      <Navbar />

      <header className="mm-hero">
        <video 
          className="mm-hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/media/5820008-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="mm-hero-overlay"></div>
        
        <div className="container mm-hero-content">
          <span className="mm-badge">Live Topography</span>
          <h1>Midnight Availability</h1>
          <p>Navigating the night economy. Engage the timeline to trace localized dark kitchen activations.</p>
        </div>
      </header>

      <section className="mm-dashboard section">
        <div className="container">
          
          {/* Time Filter Interface */}
          <div className="mm-timeline-container">
            <input 
              type="range" 
              min="0" 
              max="5" 
              step="1" 
              value={timeIndex}
              onChange={(e) => setTimeIndex(Number(e.target.value))}
              className="mm-slider"
            />
            <div className="mm-timeline-labels">
              {timeSlots.map((slot, idx) => (
                <span 
                  key={idx} 
                  className={`mm-label ${idx === timeIndex ? 'active' : ''}`}
                  onClick={() => setTimeIndex(idx)}
                >
                  {slot.time}
                </span>
              ))}
            </div>
          </div>

          <div className="mm-core-grid">
            
            {/* The Map Interface */}
            <div className="mm-map-card">
              <div className="mm-map-header">
                <h3>Sector 7 Grid Mapping</h3>
                <span className="live-status"><span className="pulse-dot"></span> Tracking</span>
              </div>
              
              <div className="mm-realistic-map">
                {/* SVG City Roads Background */}
                <svg className="city-svg-bg" viewBox="0 0 800 600" preserveAspectRatio="none">
                  {/* Outer Border */}
                  <rect width="100%" height="100%" fill="none" stroke="rgba(0, 210, 255, 0.1)" strokeWidth="2" />
                  
                  {/* Rivers / Breaks */}
                  <path d="M 0,200 Q 300,250 800,100" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="40" />
                  <path d="M 0,500 Q 400,450 800,550" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="30" />

                  {/* Main Highways */}
                  <path d="M 150,0 L 150,600" fill="none" stroke="rgba(0, 210, 255, 0.15)" strokeWidth="6" />
                  <path d="M 600,0 L 600,600" fill="none" stroke="rgba(0, 210, 255, 0.15)" strokeWidth="6" />
                  <path d="M 0,350 L 800,350" fill="none" stroke="rgba(0, 210, 255, 0.15)" strokeWidth="8" />
                  
                  {/* Secondary Streets */}
                  <path d="M 50,0 L 50,600" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
                  <path d="M 250,0 L 250,600" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
                  <path d="M 350,0 L 350,600" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
                  <path d="M 450,0 L 450,600" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
                  <path d="M 700,0 L 700,600" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />

                  <path d="M 0,100 L 800,100" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
                  <path d="M 0,250 L 800,250" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
                  <path d="M 0,450 L 800,450" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
                </svg>

                {/* Animated Pins Overlays */}
                <AnimatePresence>
                  {activeData.activeNodes.map((node) => (
                    <motion.div 
                      key={node.id}
                      className="map-pin"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                      style={{ top: node.top, left: node.left }}
                    >
                      <div className="pin-core"></div>
                      <div className="pin-pulse"></div>

                      <div className="pin-tooltip">
                        <strong>{node.name}</strong>
                        <span>Velocity: {node.velocity}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Profile Sidebar */}
            <div className="mm-profile-card">
              <span className="mm-meta">Cluster Analysis</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mm-profile-content"
                >
                  <h2 className="mm-time-display">{activeData.time}</h2>
                  
                  <div className="mm-active-metric">
                    <span className="metric-value">{activeData.activeNodes.length}</span>
                    <span className="metric-label">Active Kitchens</span>
                  </div>

                  <div className="mm-profile-image-container">
                    <img src={activeData.image} alt={activeData.dominantFood} />
                    <div className="mm-image-overlay">
                      <span>Highest Demand</span>
                    </div>
                  </div>

                  <h3 className="mm-food-title">{activeData.dominantFood}</h3>
                  <p className="mm-food-desc">{activeData.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
