// const base = 'http://computech-management-system.herokuapp.com';
const base = 'https://sellex.onrender.com/';

export const newBill = (bill) => {
  const response = fetch(`${base}/bills`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(bill),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return response;
};

export const newOrder = (order) => {
  const response = fetch(`${base}/orders`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return response;
};