function VideoCard(props: any) {
  return (
    <div className="p-3 cursor-pointer">
      <img src={props.image} alt="photo" className="rounded-xl" />
      <div className="grid grid-cols-12">
        <div className="col-span-2 pt-2">
          <img className="rounded-full w-12 h-12" src={props.thumbnil} alt="photo" />
        </div>
        <div className="col-span-10 pl-2">
          <div>
            {props.title}
          </div>
          <div className=" text-gray-500 text-base">
            {props.author}
          </div>
          <div className=" text-gray-500 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard