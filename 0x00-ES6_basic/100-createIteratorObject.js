export default function createIteratorObject(report) {
  const result = [];
  const getReportValues = report.allEmployees;
  for (const values of Object.values(getReportValues)) {
    result.oush(...values);
  }
  return result;
}
