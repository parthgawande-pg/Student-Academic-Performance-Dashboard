import Animal from "./Animal";

function Hero() {
  return (
    <div className="hero">
      <h1>🦁 Welcome To Jungle Safari 🦒</h1>

      <Animal
        image="https://raw.githubusercontent.com/google/material-design-icons/master/illustrations/animals/lion.png"
        className="lion"
      />

      <Animal
        image="https://cdn-icons-png.flaticon.com/512/3069/3069172.png"
        className="elephant"
      />

      <Animal
        image="https://cdn-icons-png.flaticon.com/512/1998/1998610.png"
        className="zebra"
      />
    </div>
  );
}

export default Hero;