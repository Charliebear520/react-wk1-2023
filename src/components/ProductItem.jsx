export default function ProductItem({ product }) {
  return (
    <div>
      <section className="image__layout " key={product.id}>
        <div className="row">
          <div className="image ">
            <a href="" className="image__link">
              <img
                className="image__style"
                src={product.image}
                alt={product.name}
              />
            </a>
            <p className="image_title">{product.name}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
