function addressMaker(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country: "United States",
  };
  console.log(newAddress);
}

addressMaker({ city: "Autin", state: "Texas" });
