function About() {
  return (
    <>
      <div
        style={{ marginTop: '15rem', width: '100%', height: '10px' }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              alt="about"
              src={process.env.PUBLIC_URL + '/img/img1.png'}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              Welcome to Adonis Interior Solutions, where we turn your interior
              design dreams into reality. We are a team of passionate and
              experienced interior designers, dedicated to providing exceptional
              design services that cater to your specific needs. Our team
              consists of designers, architects, and contractors who work
              collaboratively to create beautiful and functional spaces that
              reflect your personal style and preferences. At Adonis Interior
              Solutions, we understand that every client is unique, and we
              approach each project with a fresh perspective and open mind. We
              take the time to understand your vision, lifestyle, and budget,
              and we tailor our services to meet your needs. Whether you're
              looking to revamp a single room or redesign your entire home,
              we're here to help you every step of the way. Our design process
              is both comprehensive and transparent. We start by listening to
              your ideas and goals, and then we develop a customized design plan
              that includes detailed 2D and 3D renderings. From there, we
              oversee the construction process and ensure that everything is
              executed to perfection. We pride ourselves on our attention to
              detail, creativity, and exceptional customer service. Our goal is
              to exceed your expectations and create spaces that inspire and
              delight. If you're ready to transform your home into a work of
              art, get in touch with us today to schedule a consultation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
