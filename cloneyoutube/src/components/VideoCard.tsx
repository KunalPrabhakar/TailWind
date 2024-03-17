export function VideoCard(props: any) {
  return (
    <div>
      <img src={props.coverImg}></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img className={"rounded-full w-20 h-20"} src={props.logoImg}></img>
        </div>

        <div className="bottom-rhs col-span-11">
          <div>{props.title}</div>
          <div className="col-span-11  text-gray-600 text-base">
            {props.channelname}
          </div>
          <div className="col-span-11text-gray-600 text-base">
            {props.viewsCount}
          </div>
        </div>
      </div>
    </div>
  );
}
