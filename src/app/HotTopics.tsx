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
  { name: "World", slug: "world", icon: <Globe className="w-full h-full" /> },
  {
    name: "Politics",
    slug: "politics",
    icon: <Briefcase className="w-full h-full" />,
  },
  {
    name: "Science",
    slug: "science",
    icon: <Microscope className="w-full h-full" />,
  },
  { name: "Sports", slug: "sports", icon: <Medal className="w-full h-full" /> },
  {
    name: "Technology",
    slug: "technology",
    icon: <Cpu className="w-full h-full" />,
  },
  { name: "Health", slug: "health", icon: <Heart className="w-full h-full" /> },
  {
    name: "Entertainment",
    slug: "entertainment",
    icon: <Film className="w-full h-full" />,
  },
  { name: "Travel", slug: "travel", icon: <Plane className="w-full h-full" /> },
  {
    name: "Business",
    slug: "business",
    icon: <DollarSign className="w-full h-full" />,
  },
  {
    name: "Fashion",
    slug: "fashion",
    icon: <Shirt className="w-full h-full" />,
  },
  { name: "Food", slug: "food", icon: <Apple className="w-full h-full" /> },
  { name: "Music", slug: "music", icon: <Music className="w-full h-full" /> },
]
