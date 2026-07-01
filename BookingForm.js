function BookingForm() {
  return (
    <div className="booking">

      <h2>Book Your Safari</h2>

      <input
        type="text"
        placeholder="Your Name"
      />

      <input
        type="date"
      />

      <input
        type="number"
        placeholder="Guests"
      />

      <button>
        Book Now
      </button>

    </div>
  );
}

export default BookingForm;