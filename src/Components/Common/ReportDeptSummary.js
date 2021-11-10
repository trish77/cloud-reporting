import React from 'react';
import { Table } from 'react-bootstrap';
import logo from '../../Assets/images/logo-healthstream.png';


class ReportDetails extends React.Component {
  render() {
    return (
      <div>
        <div className="item-summary department-summary border-bottom border-2 clearfix">
          <Table>
            <tbody>
            <tr>
              <td>Department Summary</td>
              <td id="tdTotalStudentsSelected">Total Students Selected:</td>
              <td id="totalStudentsSelected">16</td>
              <td><span id="litTotalUnique">Total Unique Completions:</span></td>
              <td id="totalUniqueCompletions">10</td>
            </tr>
            <tr id="rowTotalCoursesSelected">
              <td id="tdtotalCoursessSelected1"></td>
              <td id="tdtotalCoursessSelected">Total Courses Selected:</td>
              <td id="totalCoursessSelected">1</td>
              <td id="tdTotalUniqueCompletionsp"><span id="litTotalUniquePercentage">Total Unique Completions %:</span>
              </td>
              <td id="TotalUniqueCompletionsp">62.50%</td>
            </tr>
            <tr id="rowtotalCourseCompletion">
              <td id="tdTotalCourseCompletions1"></td>
              <td id="tdTotalCourseCompletions2"></td>
              <td id="tdTotalCourseCompletions3"></td>
              <td id="tdTotalCourseCompletions4">Total Course Completions:</td>
              <td id="tdTotalCourseCompletions">10</td>
            </tr>
            </tbody>
          </Table>
        </div>
        <div id="divLegends" className="footnotes">LEGEND<i className=" icon icon-curriculum"></i> = Curriculum</div>
        <footer className="report-footer">
            <div id="divPageFooter">
              <div className="logo">
                <img alt={ "healthstream logo" } src={ logo } />
              </div>
              <div className="copyright">
                Copyright © 2020 HealthStream, Inc. All Rights Reserved.
              </div>
              <div className="build">
                Build 13.01.28.895.725&nbsp;|&nbsp;AO:62775
              </div>
            </div>
          </footer>
      </div>

    )
  }
}

export default ReportDetails