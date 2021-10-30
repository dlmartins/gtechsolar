import style from './Header.module.css'

export default function Header(props) {
  return (
    <header className={style.header}>
      <div className="d-none d-sm-flex flex-column">
        <h1 className="mt-3 font-size: 1.8em">
          <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
      </div>
    </header>
  )
}
