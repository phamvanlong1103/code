import { Container, Row, Col, Button, Navbar, Nav, Card, Carousel, Accordion } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('transparent');
  const textColor = bgColor === 'transparent' ? 'white' : 'dark';
  const blocksData = [
    {
      title: 'Content Slide Show',
      description: 'Display post types in a slideshow.',
      icon: '/icons/content-slider.png'
    },

    {
      title: 'Content Slide Show',
      description: 'Display post types in a slideshow.',
      icon: '/icons/content-slider.png'
    },
    {
      title: 'Content Slide Show',
      description: 'Display post types in a slideshow.',
      icon: '/icons/content-slider.png'
    },
    {
      title: 'Posts',
      description: 'Display post types in a custom blog layout.',
      icon: '/icons/post.png'
    },
    {
      title: 'Portfolio',
      description: 'Display a collection of posts in a portfolio.',
      icon: '/icons/portfolio.png'
    },
    {
      title: 'Profile',
      description: 'Showcase personal profiles with social media links.',
      icon: '/icons/profile.png'
    },
    {
      title: 'Testimonials',
      description: 'Define a custom width for your content.',
      icon: '/icons/testimonials.png'
    },
    {
      title: 'Max Width',
      description: 'Define a custom width for your content.',
      icon: '/icons/testimonials.png'
    },
    {
      title: 'Header',
      description: 'Create custom headers for your website.',
      icon: '/icons/max-width.png'
    },
    {
      title: 'Footer',
      description: 'Add classic widgets in the block editor.',
      icon: '/icons/header.png'
    },
    {
      title: 'Alert',
      description: 'Notify visitors of important information.',
      icon: '/icons/post.png'
    },
    {
      title: 'Modal',
      description: 'Display content within a popup window.',
      icon: '/icons/post.png'
    },
    {
      title: 'Icon Box',
      description: 'Display content with an icon — like this!',
      icon: '/icons/post.png'
    },
    {
      title: 'Hero',
      description: 'A featured banner with background media.',
      icon: '/icons/post.png'
    },
    {
      title: 'Callout',
      description: 'Add emphasis to your content to capture attention.',
      icon: '/icons/post.png'
    },
    {
      title: 'Link Container',
      description: 'Make any group of content a clickable link.',
      icon: '/icons/post.png'
    },
    {
      title: 'Copy To Clipboard',
      description: 'Click to copy any content to the clipboard.',
      icon: '/icons/post.png'
    },
    {
      title: 'Featured Content',
      description: 'Display content in a customizable container.',
      icon: '/icons/post.png'
    },
    {
      title: 'Pricing Table',
      description: 'Create beautiful custom pricing tables.',
      icon: '/icons/post.png'
    },
    {
      title: 'Position',
      description: 'Adjust vertical and horizontal positions.',
      icon: '/icons/post.png'
    },
  ];
  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer'
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBgColor('#fff');
      } else {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section
        style={{
          backgroundImage: 'url(/banner.jpg)',
          backgroundSize: 'cover',
          position: 'relative',
          height: '800px'

        }}
      >
        <Navbar expand="lg" className="position-fixed w-100 flex justify-content-between px-5 items-center"
          style={{
            backgroundColor: bgColor,
            transition: 'background-color 0.3s ease',
            height: '80px',
            zIndex: '1000'
          }}>
          <div className="wp-block-site-logo h-full">
            <figure className="mx-auto">
              <img src="https://stax.organicthemes.com/wp-content/uploads/2021/11/stax-logo-white.png" alt="" style={{ width: '160px', marginLeft: "30px", marginTop: "20px" }} srcSet="https://stax.organicthemes.com/wp-content/uploads/2021/11/stax-logo-white.png 800w, https://stax.organicthemes.com/wp-content/uploads/2021/11/stax-logo-white-300x94.png 300w, https://stax.organicthemes.com/wp-content/uploads/2021/11/stax-logo-white-768x241.png 768w" /></figure>
          </div>
          <Nav className="ml-auto flex items-center h-full ">
            <Nav.Link href="#home" className={`text-${textColor}`} style={{ fontSize: '24px' }}>Home</Nav.Link>
            <Nav.Link href="#about" className={`text-${textColor}`} style={{ fontSize: '24px' }}>About</Nav.Link>
            <Nav.Link href="#blocks" className={`text-${textColor}`} style={{ fontSize: '24px' }}>Blocks</Nav.Link>
            <Nav.Link href="#patterns" className={`text-${textColor}`} style={{ fontSize: '24px' }}>Patterns</Nav.Link>
            <Nav.Link href="#templates" className={`text-${textColor}`} style={{ fontSize: '24px' }}>Templates</Nav.Link>
            <Nav.Link href="#shop" className={`text-${textColor}`} style={{ fontSize: '24px' }}>Shop</Nav.Link>
            <Nav.Link href="#contact" className={`text-${textColor}`} style={{ fontSize: '24px' }}>Contact</Nav.Link>
            <Nav.Link
              href="#buy-stax"
              className={`btn text-${textColor}`}
              style={{
                fontSize: '24px',
                border: '2px solid',
                borderColor: bgColor === 'transparent' ? 'white' : 'black',
                padding: '4px 12px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Buy STAX
            </Nav.Link>
            <Nav.Link
              href="#buy-stax"
              className="btn btn-outline-light"
              style={{ fontSize: '24px' }}
            >
              <img
                src="/icon.svg"
                alt="icon"
                style={{ marginLeft: '8px', width: '24px', height: '24px' }}
              />
            </Nav.Link>

          </Nav>
        </Navbar>
        <Container className="text-white" >
          <Row>
            <Col style={{ marginTop: '250px', marginLeft: '-50px' }}>
              <h1 className=" font-bold" style={{ fontSize: '64px' }}>The Future </h1>
              <h1 className=" font-bold mb-4" style={{ fontSize: '64px' }}>of WordPress Is Here.</h1>
              <p className="lead mb-4" style={{ fontSize: '24px', }}>
                STAX is a WordPress block theme for the Full Site Editor. Meaning, <br /> you can change everything about this theme — directly in the editor.
                <br />
                Goodbye clunky page-builder plugins. Hello STAX.
              </p>
              <Button variant="primary" size="lg" className="btn-lg">GET STARTED</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="py-5" style={{
        marginTop: "-100px",
        position: "relative",
        zIndex: "2"
      }}>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <Card className="text-center h-100 border-2" style={{ borderColor: '#8ed1fc', borderRadius: "10px" }}>
              <Card.Body>
                <div className="mb-3">
                  <img
                    src="/blocks-icon.png"
                    alt="Blocks Icon"
                    style={{ width: '40px', height: '40px' }}
                  />
                </div>
                <Card.Title className="mb-2">Blocks</Card.Title>
                <Card.Text>
                  The Organic Blocks plugin includes 20 premium blocks for creating amazing content.
                  Each block is showcased in STAX.
                </Card.Text>
                <Button variant="outline-primary">View Blocks</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <Card className="text-center h-100 border-2" style={{ borderColor: '#8ed1fc', borderRadius: "10px" }}>
              <Card.Body>
                <div className="mb-3">
                  <img
                    src="/patterns-icon.png"
                    alt="Patterns Icon"
                    style={{ width: '40px', height: '40px' }}
                  />
                </div>
                <Card.Title className="mb-2">Patterns</Card.Title>
                <Card.Text>
                  STAX includes a large collection of patterns. A pattern is a group
                  of blocks arranged in a unique layout for a specific purpose.
                </Card.Text>
                <Button variant="outline-primary">View Patterns</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center h-100 border-2" style={{ borderColor: '#8ed1fc', borderRadius: "10px" }}>
              <Card.Body>
                <div className="mb-3">
                  <img
                    src="/templates-icon.png"
                    alt="Templates Icon"
                    style={{ width: '40px', height: '40px' }}
                  />
                </div>
                <Card.Title className="mb-2">Templates</Card.Title>
                <Card.Text>
                  STAX features a variety of useful page templates. A template provides a solid
                  starting place for adding patterns and blocks.
                </Card.Text>
                <Button variant="outline-primary">View Templates</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="py-5 text-white" style={{ backgroundColor: '#495369', width: '85%', margin: 'auto', borderRadius: "20px" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={9} style={{ paddingLeft: '30px' }}>
              <h2 className="mb-3">Block Theme Goodness</h2>
              <p className="mb-0">
                STAX is a block-based WordPress theme. It's an entirely new way of building
                WordPress themes using blocks. There's no messing with code. No rigid layouts.
                You can change everything — directly in the WordPress editor.
              </p>
            </Col>
            <Col md={3} className="text-md-right text-center align-items-center">
              <Button variant="primary" style={{ width: '200px' }}>Learn More</Button>
            </Col>
          </Row>

        </Container>

      </div>
      <Container fluid className="px-0 py-5 mt-5">
        <Row className="align-items-center gx-0">
          <Col md={6}>
            <img
              src="/fse-screenshot.jpg"
              alt="Full-Site Editing"
              className="img-fluid"
              style={{
                width: '100%',
                objectFit: 'cover',
                marginLeft: '-12%',
                scale: '1.2'
              }}
            />
          </Col>
          <Col md={5} style={{ paddingLeft: '5%' }}>
            <p
              style={{
                textTransform: 'uppercase',
                fontSize: '14px',
                color: '#888',
                letterSpacing: '1px',
                fontWeight: 'bold',
                marginBottom: '8px',
              }}
            >
              STAX FEATURES
            </p>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              Full-Site Editing
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              WordPress Full-Site Editing is a new feature that allows users to edit
              their entire website from within the WordPress block editor. This feature
              provides a more intuitive and user-friendly way to design and layout your
              website, allowing you to create and edit pages, posts, and templates all in
              one place. With Full-Site Editing, it's now easier than ever to create a
              website.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5 mt-5" style={{ backgroundColor: '#f9f9f9' }}>
        <Row className="align-items-center">
          <Col md={6} className="px-5">
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                marginBottom: '24px',
                lineHeight: '1.2',
                color: '#000'
              }}
            >
              Totally <br /> Customizable
            </h1>
            <h5
              style={{
                fontSize: '24px',
                fontWeight: '400',
                marginBottom: '24px',
                color: '#333'
              }}
            >
              WordPress just got so much easier with STAX.
            </h5>
            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#555'
              }}
            >
              The WordPress Full-Site Editor provides you with complete control over your entire website design.
              Change global fonts and colors. Customize your header and footer. Modify page templates and layouts.
              Implement block patterns. The possibilities are truly endless.
            </p>
          </Col>
          <Col md={6} className="p-0">
            <img
              src="/customizable.jpg"
              alt="Totally Customizable"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center'
          }}
        >
          Get Stacking
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: '#555',
            marginBottom: '2rem',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '30px auto'
          }}
        >
          The Organic Blocks plugin is an essential addition for any website looking to enhance its design capabilities. With its collection of 20 custom blocks, it provides the flexibility to create a beautiful website that stands out from the rest.
        </p>
        <Row className="row-cols-5">
          {blocksData.map((block, index) => (
            <Col className="mb-4" key={index}>
              <Card
                style={{
                  border: '1px solid #ddd',
                  minHeight: '230px',
                  textAlign: 'center'
                }}
                className="h-100"
              >
                <Card.Body>
                  {block.icon && (
                    <div className="mb-3">
                      <img
                        src={block.icon}
                        alt={block.title}
                        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                      />
                    </div>
                  )}
                  <Card.Title
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {block.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontSize: '16px',
                      color: '#666',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {block.description}
                  </Card.Text>
                  <Button variant="outline-primary">View Example</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div style={{ display: 'flex', gap: '1rem', margin: 'auto', width: '85%', justifyContent: 'center', alignItems: 'center', padding: '2rem 0' }}>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: '#1abc9c',
            color: '#fff',
            border: 'none',
            borderRadius: "10px"
          }}
        >
          Get Organic Blocks
        </button>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: '#fff',
            color: '#666',
            border: '2px solid #666',
            borderRadius: "10px"
          }}
        >
          View Core Blocks
        </button>
      </div>
      <div style={{ backgroundColor: '#4b4c70', padding: '3rem 0' }}>
        <div style={{ width: '85%', margin: 'auto' }}>
          <Row className="align-items-center">
            <Col md={8}>
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/slide1.jpg"
                    alt="Second slide"
                    style={{ objectFit: 'cover', borderRadius: "10px" }}
                  />
                  <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/slide1.jpg"
                    alt="Third slide"
                    style={{ objectFit: 'cover', borderRadius: "10px" }}
                  />
                  <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col md={4}>
              <p
                style={{
                  textTransform: 'uppercase',
                  color: '#69c5c0',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  marginBottom: '0.5rem',
                }}
              >
                Organic Block Example
              </p>
              <h2
                style={{
                  color: '#fff',
                  fontSize: '32px',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                }}
              >
                Content Slideshow
              </h2>
              <p style={{ color: '#ddd', fontSize: '16px', lineHeight: '1.6' }}>
                The Content Slideshow Block displays a slideshow of posts from a selected post type. It's perfect
                for showcasing featured news articles, WooCommerce products, case studies, and much more! The
                slideshow is highly customizable without being overwhelming.
              </p>
              <Button
                style={{
                  backgroundColor: '#1abc9c',
                  border: 'none',
                  fontWeight: 'bold',
                  padding: '0.75rem 1.5rem',
                  textTransform: 'uppercase',
                }}
              >
                Get Organic Blocks
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div style={{ backgroundColor: '#f8fcfc', padding: '3rem 0' }}>
        <Container>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '36px',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            WooCommerce
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: '18px',
              maxWidth: '700px',
              margin: '0 auto',
              marginBottom: '2rem',
              color: '#555',
            }}
          >
            STAX is a block theme designed for WooCommerce. Create a unique and beautiful store that
            stands out from the rest.
          </p>
          <Row className="g-4">
            <Col md={3}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src="/images/product-01.jpg" alt="Earthen Collection" />
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Earthen Collection
                  </Card.Title>
                  <Card.Text style={{ fontSize: '14px', color: '#666' }}>
                    $8.00 – $14.00
                  </Card.Text>
                  <Button variant="outline-secondary" style={{ textTransform: 'uppercase' }}>
                    View Products
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 text-center" style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: '0.5rem',
                    backgroundColor: '#1abc9c',
                    color: '#fff',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  Sale
                </div>
                <Card.Img variant="top" src="/images/product-02.jpg" alt="Crater Mug" />
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Crater Mug
                  </Card.Title>
                  <Card.Text style={{ fontSize: '14px', color: '#666' }}>
                    <del style={{ marginRight: '4px' }}>$8.00</del> $6.00
                  </Card.Text>
                  <Button variant="outline-primary" style={{ textTransform: 'uppercase' }}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src="/images/product-03.jpg"
                  alt="Deep-Tone Tall Vase"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Deep-Tone Tall Vase
                  </Card.Title>
                  <Card.Text style={{ fontSize: '14px', color: '#666' }}>$16.00</Card.Text>
                  <Button variant="outline-primary" style={{ textTransform: 'uppercase' }}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src="/images/product-04.jpg"
                  alt="Two-Tone Short Vase"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Two-Tone Short Vase
                  </Card.Title>
                  <Card.Text style={{ fontSize: '14px', color: '#666' }}>$16.00</Card.Text>
                  <Button variant="outline-primary" style={{ textTransform: 'uppercase' }}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button
              variant="success"
              style={{
                padding: '0.75rem 1.5rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              View Shop
            </Button>
          </div>
        </Container>
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={6}>
              <h2
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}
              >
                I Love STAX,
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#555',
                  marginBottom: '1rem'
                }}
              >
                Thank you. You have the best looking templates I have ever seen, and it was extremely
                fast and easy to build my website. Well worth the money. Thank you again for your
                service.
              </p>
              <p
                style={{
                  fontSize: '14px',
                  fontStyle: 'italic',
                  color: '#999'
                }}
              >
                — Lynn Stalton
              </p>
              <Button
                variant="success"
                style={{
                  marginTop: '1rem',
                  textTransform: 'uppercase',
                  fontWeight: 'bold'
                }}
              >
                More Testimonials
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="/images/testimonial-lady.png"
                alt="Testimonial Lady"
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  objectFit: 'contain'
                }}
              />
            </Col>
          </Row>
        </Container>
        <div style={{ backgroundColor: '#F5FAFA', padding: '3rem 0' }}>
          <Container>
            <h5
              style={{
                textTransform: 'uppercase',
                color: '#69c5c0',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textAlign: 'center',
                marginBottom: '0.5rem'
              }}
            >
              Organic Block Example
            </h5>
            <h2
              style={{
                textAlign: 'center',
                fontSize: '32px',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}
            >
              Portfolio Block
            </h2>
            <p
              style={{
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto',
                marginBottom: '2rem',
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#555'
              }}
            >
              The Portfolio Block displays a portfolio layout from a selected post type. Additionally,
              the block features the option to filter posts by their title or category. It’s an
              excellent tool for artists, designers, and agencies to showcase their work.
            </p>

            <Row className="g-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
              <Col>
                <img
                  src="/images/slide1.jpg"
                  alt="Portfolio 1"
                  style={{ width: '100%', borderRadius: '4px' }}
                />
              </Col>
              <Col>
                <img
                  src="/images/slide1.jpg"
                  alt="Portfolio 2"
                  style={{ width: '100%', borderRadius: '4px' }}
                />
              </Col>
              <Col>
                <img
                  src="/images/slide1.jpg"
                  alt="Portfolio 3"
                  style={{ width: '100%', borderRadius: '4px' }}
                />
              </Col>
              <Col>
                <img
                  src="/images/slide1.jpg"
                  alt="Portfolio 4"
                  style={{ width: '100%', borderRadius: '4px' }}
                />
              </Col>
              <Col>
                <img
                  src="/images/slide1.jpg"
                  alt="Portfolio 5"
                  style={{ width: '100%', borderRadius: '4px' }}
                />
              </Col>
              <Col>
                <img
                  src="/images/slide1.jpg"
                  alt="Portfolio 6"
                  style={{ width: '100%', borderRadius: '4px' }}
                />
              </Col>
            </Row>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Button
                style={{
                  backgroundColor: '#1abc9c',
                  border: 'none',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  padding: '0.75rem 1.5rem'
                }}
              >
                Get Organic Blocks
              </Button>
            </div>
          </Container>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '3rem 0' }}>
          <Container>
            <p
              style={{
                textTransform: 'uppercase',
                color: '#69c5c0',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textAlign: 'center',
                marginBottom: '0.5rem'
              }}
            >
              Organic Block Example
            </p>
            <h2
              style={{
                textAlign: 'center',
                fontSize: '32px',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}
            >
              News From The Blog
            </h2>
            <p
              style={{
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto',
                marginBottom: '2rem',
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#555'
              }}
            >
              This section features an example of the Posts Block, available within the Organic Blocks plugin. It showcases a group of posts from a selected post type in a blog style layout. Create customizable, multi-column blog layouts with ease!
            </p>

            <Row className="g-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
              <Col md={6}>
                <Card className="h-100" style={{ border: 'none' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: '#1abc9c',
                      color: '#fff',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase'
                    }}
                  >
                    Featured
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/slide1.jpg"
                    alt="How to Sell Services"
                    style={{ borderRadius: '4px' }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      How To Sell Services As Products Online
                    </Card.Title>
                    <Card.Text style={{ fontSize: '14px', color: '#555' }}>
                      A short excerpt describing the post or article content...
                    </Card.Text>
                    <Button
                      variant="success"
                      style={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                      }}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="h-100" style={{ border: 'none' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: '#1abc9c',
                      color: '#fff',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase'
                    }}
                  >
                    Featured
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/slide1.jpg"
                    alt="Our New Office Downtown"
                    style={{ borderRadius: '4px' }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      Our New Office Downtown
                    </Card.Title>
                    <Card.Text style={{ fontSize: '14px', color: '#555' }}>
                      A short excerpt describing the post or article content...
                    </Card.Text>
                    <Button
                      variant="success"
                      style={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                      }}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="h-100" style={{ border: 'none' }}>
                  <Card.Img
                    variant="top"
                    src="/images/slide1.jpg"
                    alt="Refreshing Our Brand"
                    style={{ borderRadius: '4px' }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      Refreshing Our Brand
                    </Card.Title>
                    <Card.Text style={{ fontSize: '14px', color: '#555' }}>
                      A short excerpt describing the post or article content...
                    </Card.Text>
                    <Button
                      variant="success"
                      style={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                      }}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="h-100" style={{ border: 'none' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: '#1abc9c',
                      color: '#fff',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase'
                    }}
                  >
                    Featured
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/slide1.jpg"
                    alt="Agency Launches A New VR Experience"
                    style={{ borderRadius: '4px' }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      Agency Launches A New VR Experience
                    </Card.Title>
                    <Card.Text style={{ fontSize: '14px', color: '#555' }}>
                      A short excerpt describing the post or article content...
                    </Card.Text>
                    <Button
                      variant="success"
                      style={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                      }}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container className="py-5">
        <h2
          style={{
            textAlign: 'center',
            fontSize: '32px',
            marginBottom: '0.5rem',
            fontWeight: 'bold'
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#555',
            marginBottom: '2rem'
          }}
        >
          Questions about the STAX theme or our Organic Blocks plugin? Well, we've got answers.
        </p>

        {/* Hàng 1 */}
        <Row className="mb-4">
          <Col md={6} className="mb-3 mb-md-0">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ textTransform: 'uppercase' }}>
                  How Much Does STAX Cost?
                </Accordion.Header>
                <Accordion.Body>
                  STAX is priced at ...
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ textTransform: 'uppercase' }}>
                  Why choose the STAX theme?
                </Accordion.Header>
                <Accordion.Body>
                  Because ...
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        {/* Hàng 2 */}
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ textTransform: 'uppercase' }}>
                  What is WordPress Full Site Editing?
                </Accordion.Header>
                <Accordion.Body>
                  WordPress Full Site Editing allows ...
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ textTransform: 'uppercase' }}>
                  What sets STAX apart from page-builder plugins?
                </Accordion.Header>
                <Accordion.Body>
                  STAX is different because ...
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <footer style={{ backgroundColor: '#3e4058', color: '#fff', padding: '3rem 0' }}>
        <Container>
          <Row className="mb-4">
            <Col md={3} className="mb-4 mb-md-0">
              <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>ABOUT STAX</h5>
              <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '1.8' }}>
                <li><a href="#block-based" style={{ color: '#69c5c0', textDecoration: 'none' }}>Block-Based Theme</a></li>
                <li><a href="#fse" style={{ color: '#69c5c0', textDecoration: 'none' }}>Full-Site Editing</a></li>
                <li><a href="#templates" style={{ color: '#69c5c0', textDecoration: 'none' }}>Page Templates</a></li>
                <li><a href="#patterns" style={{ color: '#69c5c0', textDecoration: 'none' }}>Patterns</a></li>
                <li><a href="#pricing" style={{ color: '#69c5c0', textDecoration: 'none' }}>Pricing</a></li>
              </ul>
            </Col>

            <Col md={3} className="mb-4 mb-md-0">
              <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>ORGANIC BLOCKS</h5>
              <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '1.8' }}>
                <li><a href="#block-collection" style={{ color: '#69c5c0', textDecoration: 'none' }}>Block Collection</a></li>
                <li><a href="#why-blocks" style={{ color: '#69c5c0', textDecoration: 'none' }}>Why Blocks?</a></li>
                <li><a href="#fse-resources" style={{ color: '#69c5c0', textDecoration: 'none' }}>FSE Resources</a></li>
                <li><a href="#contact" style={{ color: '#69c5c0', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </Col>

            <Col md={3} className="mb-4 mb-md-0">
              <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>ORGANIC THEMES</h5>
              <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '1.8' }}>
                <li><a href="#about-us" style={{ color: '#69c5c0', textDecoration: 'none' }}>About Us</a></li>
                <li><a href="#contact" style={{ color: '#69c5c0', textDecoration: 'none' }}>Contact</a></li>
                <li><a href="#products" style={{ color: '#69c5c0', textDecoration: 'none' }}>Products</a></li>
                <li><a href="#services" style={{ color: '#69c5c0', textDecoration: 'none' }}>Services</a></li>
                <li><a href="#news" style={{ color: '#69c5c0', textDecoration: 'none' }}>News</a></li>
              </ul>
            </Col>

            <Col md={3}>
              <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>OUR MISSION</h5>
              <p style={{ lineHeight: '1.6', color: '#ddd' }}>
                Organic Themes innovates products, brands, and processes. We take the complicated, and
                create it simple and accessible. Ultimately, our goal is to provide a truly empowering
                product built with the basics and free themselves from the stress of the complex world.
              </p>
              <Button
                variant="outline-light"
                style={{ textTransform: 'uppercase', fontWeight: 'bold', borderWidth: '2px' }}
              >
                Read Our Story
              </Button>
            </Col>
          </Row>

          <Row>
            <Col className="text-center" style={{ borderTop: '1px solid #555', paddingTop: '1rem' }}>
              <p style={{ margin: 0, color: '#ccc' }}>
                Copyright © 2023. All rights reserved
                {' '}|{' '}
                Theme: <a href="#stax" style={{ color: '#69c5c0', textDecoration: 'none' }}>STAX</a> by <a href="#organic-themes" style={{ color: '#69c5c0', textDecoration: 'none' }}>Organic Themes</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
