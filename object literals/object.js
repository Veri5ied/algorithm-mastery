function addressMaker(address) {
  const newAddress = {
    city: address.city,
    state: address.state,
    country: "United States",
  };
}

addressMaker({ city: "Autin", state: "Texas" });
