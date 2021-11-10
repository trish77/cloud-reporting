import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../../Assets/images/logo-healthstream.png';


function Footer() {
  return (

    <Container className="p-0">
      <div className="row legal">
        <div className="col-md-12">
          <div className="divider"></div>
          <div className="logo">
             <img alt={"healthstream logo"} src={logo} />
          </div>
          <div className="copyright">
            Copyright © 2020 HealthStream, Inc. All Rights Reserved.
          </div>
          <div className="build">
            Build 13.01.28.895.725&nbsp;|&nbsp;AO:62775
          </div>
        </div>
      </div>
    </Container>

    )
}

export default Footer;