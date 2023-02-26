export const newBill = (bill) => {
  const response = fetch(`/bills`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(bill),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return response;
};

export const newOrder = (order) => {
  const response = fetch(`/orders`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return response;
};
