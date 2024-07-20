import {
  Globe,
  Briefcase,
  Heart,
  Plane,
  Film,
  Music,
  DollarSign,
  Cpu,
  Medal,
  Microscope,
  Apple,
  Shirt,
} from "lucide-react"

export const HotTopics = [
  { name: "World", slug: "world", icon: <Globe className="h-6 w-6" /> },
  {
    name: "Politics",
    slug: "politics",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    name: "Science",
    slug: "science",
    icon: <Microscope className="h-6 w-6" />,
  },
  { name: "Sports", slug: "sports", icon: <Medal className="h-6 w-6" /> },
  {
    name: "Technology",
    slug: "technology",
    icon: <Cpu className="h-6 w-6" />,
  },
  { name: "Health", slug: "health", icon: <Heart className="h-6 w-6" /> },
  {
    name: "Entertainment",
    slug: "entertainment",
    icon: <Film className="h-6 w-6" />,
  },
  { name: "Travel", slug: "travel", icon: <Plane className="h-6 w-6" /> },
  {
    name: "Business",
    slug: "business",
    icon: <DollarSign className="h-6 w-6" />,
  },
  { name: "Fashion", slug: "fashion", icon: <Shirt className="h-6 w-6" /> },
  { name: "Food", slug: "food", icon: <Apple className="h-6 w-6" /> },
  { name: "Music", slug: "music", icon: <Music className="h-6 w-6" /> },
]
