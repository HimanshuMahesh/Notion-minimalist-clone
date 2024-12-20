import { useEffect,useCallback} from 'react'
import React, { useState } from 'react'
import { Book, FileText, Target, Wand2, Calendar, Globe } from 'lucide-react'

interface FeatureButton {
  id: string
  label: string
  icon: React.ReactNode
  image: string
}

const features: FeatureButton[] = [
  {
    id: 'wikis',
    label: 'Wikis',
    icon: <Book className="w-5 h-5" />,
    image: '/images/wiki.png'
  },
  {
    id: 'docs',
    label: 'Docs',
    icon: <FileText className="w-5 h-5" />,
    image: '/images/docs.png'
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <Target className="w-5 h-5" />,
    image: '/images/projectmg.png'
  },
  {
    id: 'ai',
    label: 'AI',
    icon: <Wand2 className="w-5 h-5" />,
    image: '/images/notionai.png'
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: <Calendar className="w-5 h-5" />,
    image: '/images/calendarnotion.png'
  },
  {
    id: 'sites',
    label: 'Sites',
    icon: <Globe className="w-5 h-5" />,
    image: '/images/sites.png'
  }
]

export function FeatureToggle() {
    const [activeFeature, setActiveFeature] = useState(features[0].id)
    const [isTransitioning, setIsTransitioning] = useState(false)
  
    const handleFeatureClick = useCallback((featureId: string) => {
      if (featureId !== activeFeature && !isTransitioning) {
        setIsTransitioning(true)
        setActiveFeature(featureId)
        setTimeout(() => setIsTransitioning(false), 300) // Reduced transition time for smoother effect
      }
    }, [activeFeature, isTransitioning])
  
    useEffect(() => {
      const interval = setInterval(() => {
        const currentIndex = features.findIndex(f => f.id === activeFeature)
        const nextIndex = (currentIndex + 1) % features.length
        handleFeatureClick(features[nextIndex].id)
      }, 7000) // Change feature every 5 seconds
  
      return () => clearInterval(interval)
    }, [activeFeature, handleFeatureClick])
  
    const currentImage = features.find(f => f.id === activeFeature)?.image
  
    return (
      <div className="w-full">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => handleFeatureClick(feature.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full transition-all
                ${activeFeature === feature.id 
                  ? 'bg-gray-200 text-black' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}
              `}
            >
              {feature.icon}
              <span className="text-sm font-medium">{feature.label}</span>
            </button>
          ))}
        </div>
        <div className="w-full max-w-6xl mx-auto overflow-hidden"> {/* Increased max-width for larger image */}
          <div className="relative w-full aspect-[16/9]">
            <img
              src={currentImage}
              alt={`Notion ${activeFeature} feature`}
              className={`
                absolute top-0 left-0 w-full h-full rounded-lg shadow-lg object-cover
                transition-all duration-300 ease-in-out
                ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
              `}
            />
          </div>
        </div>
      </div>
    )
  }
  
  