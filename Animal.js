function Animal({ image, className }) {
  return (
    <img
      src={image}
      alt="animal"
      className={className}
    />
  );
}

export default Animal;