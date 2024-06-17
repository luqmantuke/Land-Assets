export function formattedPrice(price) {
    const formatter = new Intl.NumberFormat();
    const productPrice = formatter.format(price);
    return `${productPrice} Tsh`;
  }