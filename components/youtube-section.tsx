import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, ExternalLink, Play } from "lucide-react"

export function YouTubeSection() {
  // Your actual videos from the channel
  const featuredVideos = [
    {
      id: "YOUR_VIDEO_ID_1", // Replace with actual video ID for "Exploring Sigulda: Castles, Nature, and Hidden Gems"
      title: "Exploring Sigulda: Castles, Nature, and Hidden Gems",
      description: "Join me as I explore the beautiful castles and nature of Sigulda, Latvia",
      duration: "7:53",
      views: "12 views",
      uploadTime: "7 months ago",
    },
    {
      id: "YOUR_VIDEO_ID_2", // Replace with actual video ID for "Jūrmala summer fest 2025"
      title: "Jūrmala summer fest 2025",
      description: "Experience the vibrant summer festival in Jūrmala, Latvia",
      duration: "3:36",
      views: "34 views",
      uploadTime: "3 weeks ago",
    },
    {
      id: "YOUR_VIDEO_ID_3", // Replace with actual video ID for "In the heart of Riga at Uzvaras Park"
      title: "In the heart of Riga at Uzvaras Park, spring...",
      description: "Springtime walk through Uzvaras Park in the heart of Riga",
      duration: "1:51",
      views: "17 views",
      uploadTime: "2 months ago",
    },
    {
      id: "YOUR_VIDEO_ID_4", // Replace with actual video ID for "Ukraine: Unbreakable Spirit"
      title: "Ukraine: Unbreakable Spirit | A Story of Strength, Courage...",
      description: "A powerful story about Ukraine's strength and courage",
      duration: "3:10",
      views: "130 views",
      uploadTime: "3 months ago",
    },
    {
      id: "YOUR_VIDEO_ID_5", // Replace with actual video ID for "silent night in 3 languages"
      title: "silent night in 3 languages",
      description: "Beautiful rendition of Silent Night performed in three different languages",
      duration: "7:01",
      views: "29 views",
      uploadTime: "6 months ago",
    },
    {
      id: "YOUR_VIDEO_ID_6", // Replace with actual video ID for "Golden Oscar statue"
      title: "Golden Oscar statue won by the movie 'Straume'",
      description: "Celebrating the Golden Oscar win for the Latvian movie 'Straume'",
      duration: "2:36",
      views: "60 views",
      uploadTime: "3 months ago",
    },
  ]

  return (
    <section id="youtube" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">YouTube Vlogs</h2>

        {/* Channel Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Youtube className="h-12 w-12 text-red-600" />
              </div>
              <CardTitle className="text-2xl">Latvian_Achayan</CardTitle>
              <p className="text-muted-foreground">Welcome to Latvian Achayan! 🇱🇻🇮🇳</p>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground mt-2">
                <span>76 subscribers</span>
                <span>•</span>
                <span>45 videos</span>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild size="lg">
                <a href="https://www.youtube.com/@Latvian_Achayan" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4 mr-2" />
                  Subscribe to Channel
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured Videos Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.slice(0, 3).map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-muted">
                  {/* Video Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{video.description}</p>
                  <div className="flex justify-between text-xs text-muted-foreground mb-3">
                    <span>{video.views}</span>
                    <span>{video.uploadTime}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                      <Play className="h-3 w-3 mr-2" />
                      Watch Video
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <a href="https://www.youtube.com/@Latvian_Achayan" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View All Videos on YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
