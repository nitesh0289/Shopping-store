const jeansProducts = [
  {
    itemId: "10001",
    itemImage: `https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1584477345-best-jeans-9-1584477328.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A`,
    itemTitle: "Denim Jeans",
    itemPrice: "2699.00",
    sizes: ["34", "36", "38"],
    isWished: false,
  },
  {
    itemId: "10002",
    itemImage:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1598898953-best-jeans-for-men-6-1598898919.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A",
    itemTitle: "Urban Classic Jean",
    itemPrice: "2199.00",
    sizes: ["34", "36", "38"],
    isWished: false,
  },
  {
    itemId: "10003",
    itemImage: `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mavi-jeans-1551397594.jpg?crop=1xw:1xh;center,top&resize=480:*`,
    itemTitle: "Slim Denim Jean",
    itemPrice: "2399.00",
    sizes: ["34", "36", "38"],
    isWished: false,
  },
  {
    itemId: "10004",
    itemImage: `https://shoptommy.scene7.com/is/image/ShopTommy/DM04423_911_FNT?wid=547&hei=730&fmt=jpeg&qlt=90%2C0&resMode=trilin&op_usm=0.8%2C1.0%2C6%2C0&iccEmbed=0&cropN=0.125%2C0%2C0.75%2C1&op_sharpen=1`,
    itemTitle: "Skinny Fit Jean",
    itemPrice: "2699.00",
    sizes: ["34", "36", "38"],
    isWished: false,
  },
];

const getJeansXY = () => {
  return jeansProducts;
};

export default getJeansXY;
