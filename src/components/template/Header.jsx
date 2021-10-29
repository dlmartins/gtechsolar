export default (props) => (
  <header className="d-none
  d-sm-flex
  flex-column
  background-color: #FFF
  padding: 0px 15px
  overflow: hidden
  white-space: nowrap
  box-shadow: var(--shadow)">
    <h1 className="mt-3 font-size: 1.8em">
      <i className={`fa fa-${props.icon}`}></i> {props.title}
    </h1>
    <p className="lead text-muted">{props.subtitle}</p>
  </header>
);
