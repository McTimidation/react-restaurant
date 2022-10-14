

function Footer() {
    return (
<footer>
    <div className="bg-dark container-fluid">
      <div className="text-white row">
        <div className="footer_contact col-lg-4">
          <h3>Address</h3>
          <p>348 E Main St, Lexington, KY</p>
        </div>
        <div className="footer_contact col-lg-4">
          <h3>Reservation</h3>
          <p>(502) 741-2817<br></br> Contact@mail.com</p>
        </div>
        <div className="footer_contact col-lg-4">
          <h3>Open hours</h3>
          <p>Monday - Friday: 10 AM - 11 <br></br> Saturday - Sunday: 9 AM - 1 PM</p>
        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer;