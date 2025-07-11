import './Footer.css'
import FooterIcons from './FooterIcons';

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-item">
        <h3 className="footer-item-title"> Support </h3>
        <ul className='footer-item-list'>
          <li className="footer-item-link">Contact</li>
          <li className="footer-item-link"> Legal Notice</li>
          <li className="footer-item-link">Privacy Policy </li>
          <li className="footer-item-link">Genral Terms </li>
          <li className="footer-item-link">Sitemap </li>
        </ul>
      </div>

      <div className="footer-item">
        <h3 className="footer-item-title"> Company </h3>
        <ul  className='footer-item-list'>
          <li className="footer-item-link">About us</li>
          <li className="footer-item-link"> Careers</li>
          <li className="footer-item-link">Blog </li>
          <li className="footer-item-link">Gift Cards </li>
          <li className="footer-item-link">Magzine</li>
          <li className="footer-item-link">Travel guides</li>
        </ul>
      </div>

      <div className="footer-item">
        <h3 className="footer-item-title"> Work with us </h3>
        <ul  className='footer-item-list'>
          <li className="footer-item-link">become a supplier </li>
          <li className="footer-item-link"> Become an Affiliate Partner</li>
        </ul>
        <FooterIcons />
      </div>
    </footer>
  );
}

export default Footer;
