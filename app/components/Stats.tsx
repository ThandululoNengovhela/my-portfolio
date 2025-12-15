import { FaCalendarAlt, FaProjectDiagram, FaBuilding, FaCode } from 'react-icons/fa'

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  description?: string;
}

const stats: StatItem[] = [
  {
    icon: <FaCalendarAlt className="text-2xl" />,
    value: "5+",
    label: "Years Exp",
    description: "Professional Experience"
  },
  {
    icon: <FaProjectDiagram className="text-2xl" />,
    value: "20+",
    label: "Projects",
    description: "Completed"
  },
  {
    icon: <FaBuilding className="text-2xl" />,
    value: "3",
    label: "Companies",
    description: "Worked With"
  },
  {
    icon: <FaCode className="text-2xl" />,
    value: "Full Stack",
    label: "Specialization",
    description: "Web & Mobile"
  }
]

export default function Stats() {
  return (
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg card-hover hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
              {stat.icon}
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {stat.label}
                </span>
              </div>
              {stat.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}