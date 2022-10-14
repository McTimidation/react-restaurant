

function Footer() {
    return (
<footer>
    <div className="bg-dark container-fluid">
      <div className="text-white row">
        <div className="footer_contact col-lg-4">
          <h3>Adress</h3>
          <p>Restaurant 40 Park Ave, Brooklyn <br></br> Ukraine/Nikolaev</p>
        </div>
        <div className="footer_contact col-lg-4">
          <h3>Reservation</h3>
          <p>+380 12 345 678 91 <br></br> Contact@mail.com</p>
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