export default function Header() {
  return (
    <header className="header">
      <div className="container d-flex flex-column align-items-center">
        <img src="images/avatar.png" alt="" className="header__avatar" />
        <h1 className="header__title">NAME</h1>
        <hr className="divider--light" />
        <h1 className="header__slogan">ntue is good</h1>
      </div>
    </header>
  );
}
