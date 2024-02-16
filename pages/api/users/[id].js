const handler = async (req, res) => {
  await db.connect();
  const user = await user.findById(req.query.id);
  await db.disconnect;
  res.send(product);
};

export default handler;
