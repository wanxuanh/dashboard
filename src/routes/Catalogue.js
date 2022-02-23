export default function Catalogue() {
  return (
    <div className="Home">
      <div className="Preview">
        <h1>Image Gallery Preview</h1>
        <img src="https://i.pinimg.com/736x/71/0e/cf/710ecfb14099a06a5e1e6feb36e63cbe--code-for-seo.jpg"></img>
      </div>
      <div className="Details">
        <section>
          <b>Product Name*:</b> <br />
          ADLV Baby Face Short Sleeve T-shirt Black Donuts <br />
          <br />
        </section>
        <section>
          <b>Category*</b> <br />
          <button>Collectibles</button>
          <button>Accessories</button>
          <button>T-shirts</button>
          <div className="Details">
            <br />
            <b>Thumbnail Image*</b> <br />
            <img
              src="https://i.pinimg.com/736x/71/0e/cf/710ecfb14099a06a5e1e6feb36e63cbe--code-for-seo.jpg"
              width="100px"
              height="100px"
            ></img>
            <button>x</button>
          </div>
        </section>
        <br />
        <b>Brand (up to 2)*</b>
        <br />
        <input placeholder="Add a keyword and press Enter"></input> <br />
        E.g Popmart X Kaws X<b>Description*</b>
        <br />
        <input placeholder="Regular fit. 100% cotton"></input> <br />
        <div>
          {" "}
          <br />
          <button>Cancel</button>
          <button>Publish</button>
        </div>
      </div>
    </div>
  );
}
