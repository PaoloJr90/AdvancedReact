import promotion from "../../image/aside/promotion.jpg";

import "./aside.scss";

function Aside() {
  return (
    <aside>
      <h2>My aside</h2>
      <figure>
        <img src={promotion} alt="facebook promotion" />
        <figcaption>Facebook promotion</figcaption>
      </figure>
    </aside>
  );
}

export default Aside;
