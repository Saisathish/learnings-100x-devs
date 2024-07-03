import DATA from "../mockdata/videodata.json"
import VideoCard from "./VideoCard"

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {DATA.map((video) => <div>
        <VideoCard
          title={video.title}
          author={video.author}
          views={video.views}
          timestamp={video.timestamp}
          thumbnil={video.thumbnil}
          image={video.image}
        />
      </div>)}
    </div>
  )
}

export default VideoGrid