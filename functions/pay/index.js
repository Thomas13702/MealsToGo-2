module.exports.payRequest = (request, response, stripe) => {
  //   const { token, amount } = request.body;
  //   const charge = stripe.charges.create({
  //     amount,
  //     currency: "usd",
  //     description: "Example charge",
  //     source: token,
  //   });
  //   response.send(charge);
  const body = JSON.parse(request.body);
  console.log(body.token, body.amount, body.name);
  response.send("success");
};
