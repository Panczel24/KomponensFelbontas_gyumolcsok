interface HeaderProps {
  title: string;
  subtitle: string;
};
 
export function Header(props: HeaderProps) {
  return (
    <div className="row">
      <div className="col-sm-12 kartya mb-3">
        <header className="mt-2 mb-1 p-5 bg-primary text-white rounded">
          <h1 id="focim">{props.title}</h1>
          <p className="mb-0">{props.subtitle}</p>
        </header>
      </div>
    </div>
  );
}
 
