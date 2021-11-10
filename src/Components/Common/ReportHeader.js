import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


function ReportHeader() {
  return (
    <Container className="p-0">
      <Row>
        <Col>
            <h6 className="banner">Showing top&nbsp;
              <span id="lblConstantCount">1000 </span>
              of&nbsp;
              <span id="lblTotalCount"> 1294</span>&nbsp;
              records.
              <br />
                Please export to Excel or CSV to view all data.
            </h6>
            <article className="page-break">
              <header>
                <div id="divPageHeader" className="additional-info mb-3">
                  <h4>xTrinity Employee</h4>
                  <h1>Course Completion Report</h1>
                  <div className="info-header-text-block">
                    <strong>Completion Date Range:</strong> Oct 1, 2020 through Oct 31, 2020
                  </div>
                  <div className="info-header-text-block">
                    <strong>Data as of:</strong> Oct 31, 2021, 1:00 am ET</div>
                  <div className="info-header-text-block">
                    <strong>Report Generated:</strong>Oct 31, 2021, 6:38 am ET</div>
                  <br />
                  <div className="additional-data"></div>
                </div>
              </header>
              <h3 style={{fontSize: "16px"}}><strong>Note: Report Totals is calculated based on all 1,284 records</strong></h3>
            </article>
        </Col>
      </Row>
    </Container>
  )
}

export default ReportHeader;