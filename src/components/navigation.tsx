export default function NavigatorComponent(
  {
    to,
    icon,
    name,
  }:{
    to: string,
    icon: string,
    name: string,
  }
){
  return(
    <a className="flex flex-col" href={to}>
      <div>
        {icon}
      </div>
      <div>
        {name}
      </div>
    </a>
  );
}