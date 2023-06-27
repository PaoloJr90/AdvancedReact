import "./styles/footer.scss";

function Footer({ myFooterInfo }) {
  return (
    <footer>
      <div className="container">
        <p>{myFooterInfo?.title}</p>
      </div>
    </footer>
  );
}

export default Footer;
