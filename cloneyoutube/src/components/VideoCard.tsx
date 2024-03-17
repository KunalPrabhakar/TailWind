export function VideoCard(props: any) {
  return (
    <div className="mx-4 pt-2">
      <img src={props.coverImg}></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img className={"rounded-full"} src={props.logoImg}></img>
        </div>

        <div className="bottom-rhs col-span-11 pl-2">
          <div className="font-bold">{props.title}</div>
          <div className="col-span-11  text-gray-600 text-base">
            {props.channelname}
          </div>
          <div className="col-span-11 text-gray-600 text-base">
            {props.viewsCount}
          </div>
        </div>
      </div>
    </div>
  );
}
