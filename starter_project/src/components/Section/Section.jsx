function Section({ mySectionInfo }) {
  return (
    <section>
      <h2>{mySectionInfo?.title}</h2>
      <p>{mySectionInfo?.description}</p>
    </section>
  );
}

export default Section;
