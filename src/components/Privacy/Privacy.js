import "./Privacy.css";
import logo from "../../assets/images/Logo (1).png";
export default function Privacy() {
  return (
    <div className="privacy-all">
      <img src={logo} />
      <div className="section">
        <h3>About Tikmool</h3>
        <p>Welcome to Tikmool
          At Tikmool, we believe in the power of choice, convenience, and quality. Established in 2024, we have quickly grown to become one of Saudi Arabia’s leading online marketplaces, offering an unparalleled shopping experience for our customers.
          Our Mission
          Our mission is to provide an exceptional shopping experience by delivering quality products and excellent customer service. We aim to make shopping easier and more accessible by offering a wide range of products at competitive prices, all from the comfort of your home.</p>
      </div>
      <div className="section">
        <h3>About Tikmool</h3>
        <p>Vast Product Selection: We offer a diverse range of products across various categories, including electronics, fashion, home essentials, beauty products, and more. Our platform hosts numerous reputable brands, ensuring you find exactly what you need.
          Unbeatable Prices: We strive to provide the best prices on the market. Our regular discounts, promotions, and special offers make it possible for you to save more while getting more.
          Fast and Reliable Delivery: With our efficient logistics network, we ensure that your orders are delivered to your doorstep quickly and reliably. We offer various delivery options to suit your needs.
          Excellent Customer Service: Our dedicated customer support team is always here to assist you. From helping you choose the right product to addressing any issues you may encounter, we are committed to ensuring your satisfaction.
          Secure Shopping: We prioritize your security by implementing advanced encryption technologies to protect your personal and payment information. Shop with confidence, knowing your data is safe with us.</p>
      </div>
      <div className="under">
        <div className="left">
          <h3>Our Mission</h3>
          <p>Our mission is to provide an exceptional shopping experience by delivering quality products and excellent customer service. We aim to make shopping easier and more accessible by offering a wide range of products at competitive prices, all from the comfort of your home.</p>

        </div>
        <div className="right">
          <h3>Our Vision</h3>
          <p>We envision a future where online shopping is seamless, enjoyable, and accessible to everyone. We are committed to continuously improving our platform, expanding our product range, and enhancing our services to meet and exceed your expectations.</p>
        </div>
      </div>
    </div>
  );
}