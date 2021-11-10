import React from 'react';
import { ButtonGroup, Container, Dropdown } from 'react-bootstrap';


function Header() {
  return (

    <Container fluid className="p-0">
      <div className="focus focus-pageheader">
        <div className="fph-table">
          <div className="fph-row">
            <div className="fph-cell fph-cell-icon">
              <div className="fph-icon">
                <i className="fa fa-file-text"></i>
              </div>
              <div className="fph-icon-label">
                <span>Report</span>
              </div>
            </div>
            <div className="fph-cell fph-cell-text">
              <div className="fph-primary">
                <h1>
                  <span id="lblReportName">Course Completion Report </span>
                </h1>
              </div>
              <div className="fph-secondary">
                <ul className="meta">
                  <li><span className="meta-label">Report Generated:</span><span className="meta-value">
                    <span id="lblReportDate">October 31, 2021, 6:38 am ET</span>
                </span></li>
                </ul>
              </div>
            </div>
            <div className="fph-cell fph-cell-button">
              <Dropdown as={ButtonGroup} id="divBtnGroup">
                <Dropdown.Toggle  id="printbtn" className="btn btn-focus btn-print"
                   onClick="window.print();return false;">Print</Dropdown.Toggle>
                <Dropdown.Toggle href="#" id="exportlink"
                   className="btn btn-focus btn-export dropdown-toggle">Export <i
                  className="fa fa-caret-down"></i></Dropdown.Toggle>
                <Dropdown.Menu id="selectable" className="dropdown-menu pull-right" role="menu">
                  <Dropdown.Item id="8" href="#">PDF</Dropdown.Item>
                  <Dropdown.Item id="256" href="#">CSV</Dropdown.Item>
                  <Dropdown.Item id="16" href="#">EXCEL></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </Container>
    );
  }

  export default Header;