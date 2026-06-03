// Estrazione immediata tra le parentesi graffe nei parametri
export function ProductDisplay({ name, price }) {
  return (
    <div className="product-box">
      <h4>{name}</h4>
      <span>Prezzo: {price}</span>
    </div>
  );
}

export default ProductDisplay