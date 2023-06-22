import promotion from "../../image/aside/promotion.jpg";

import "./aside.scss";

function Aside({ data }) {
  const { myAsideInfo } = data;

  console.log(myAsideInfo?.img?.description);

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
