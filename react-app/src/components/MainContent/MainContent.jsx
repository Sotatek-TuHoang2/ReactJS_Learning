import PropTypes from "prop-types";

function MainContent({image, title, desc}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
}

MainContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default function Section({ id, title, data }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <ul>
        {data.map((item, index) => (
          <MainContent key={index} {...item} />
        ))}
      </ul>
    </section>
  )
}