import promotion from "../image/aside/promotion.jpg";

import "./styles/aside.scss";

function Aside({ myAsideInfo }) {
  // console.log(myAsideInfo?.img?.description);

  return (
    <aside>
      <h2>{myAsideInfo?.title}</h2>
      <figure>
        <img src={promotion} alt={myAsideInfo?.img?.description} />
        <figcaption>{myAsideInfo?.img?.description}</figcaption>
      </figure>
    </aside>
  );
}

export default Aside;
