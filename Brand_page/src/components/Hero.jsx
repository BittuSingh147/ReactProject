const HeroSection = () => {
  return (
    <main className="Hero Container">
      <div className="Content">
        <h1>Your Feet Deserve The Best</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES. 
        </p>
        <div className="Hero-Button">
        <button>Shop Now</button>
        <button className="Secondry-btn">Category</button>
        </div>

        <div className="Shopping">
          <p>Also Available on</p>

          <div className="brand-icons">
          <img src="/images/amazon.png" alt="Amazon"></img>
          <img src="/images/flipkart.png" alt="Flipkart"></img>
          </div>
        </div>
      </div>
      <div className="image">
      <img src="/images/shoe_image.png" alt="logo"></img>
      </div>
    </main>
  );
};
export default HeroSection;
