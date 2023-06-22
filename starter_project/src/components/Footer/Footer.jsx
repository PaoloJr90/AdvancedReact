import "./footer.scss";

function Footer({ data }) {
  const { myFooterInfo } = data;

  return (
    <footer>
      <div className="container">
        <p>{myFooterInfo?.title}</p>
      </div>
    </footer>
  );
}

export default Footer;
