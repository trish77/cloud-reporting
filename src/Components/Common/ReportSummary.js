import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';


class ReportSummary extends React.Component {
  render() {
    return (
      <Container className="p-0">
        <Row>
          <Col>
            <article>
              <section className="report-tables">
                <div className="item-summary department-summary pt-1 mb-3">
                  <Table className="report-totals">
                    <tbody>
                    <tr className="title">
                      <td colSpan="5"><h2>REPORT TOTALS</h2></td>
                    </tr>
                    <tr>
                      <td>Report Summary</td>
                      <td>Total Students Selected:</td>
                      <td><span id="LblTotalStudentsSelected">16</span></td>
                      <td><span id="lblTotalUniqueCompletionSummary">Total Unique Completions:</span></td>
                      <td><span id="LblTotalUniqueCompletionsDetail">10</span></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Total Courses Selected:</td>
                      <td><span id="LblTotalCoursesSelected">1</span></td>
                      <td><span id="lblTotalUniqueCompletionsPercentageSummary">Total Unique Completions %:</span></td>
                      <td><span id="LblTotalUniqueCompletionsPercentage">62.50%</span></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td id="tdTotalSummary">Total Course Completions:</td>
                      <td id="tdTotalSummaryValue"><span id="LblTotalCourseCompletions">10</span></td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </section>
            </article>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ReportSummary