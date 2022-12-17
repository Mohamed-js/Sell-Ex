const base = 'http://computech-management-system.herokuapp.com';
// const base = 'http://127.0.0.1:3000';

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
