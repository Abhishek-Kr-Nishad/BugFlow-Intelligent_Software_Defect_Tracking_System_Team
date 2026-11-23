
def generate_defect_report(metrics):
    """
    Generate a readable defect analytics report.
    """

    report = f"""
====================================
       BUGFLOW ANALYTICS REPORT
====================================

Total Defects      : {metrics.get("total_defects", 0)}
Open Defects       : {metrics.get("open_defects", 0)}
Resolved Defects   : {metrics.get("resolved_defects", 0)}
Resolution Rate    : {metrics.get("resolution_rate", 0)}%

------------------------------------
DEFECTS BY SEVERITY
------------------------------------
"""

    severity_counts = metrics.get("severity_counts", {})

    if severity_counts:
        for severity, count in severity_counts.items():
            report += f"{severity}: {count}\n"
    else:
        report += "No severity data available.\n"

    report += "===================================="

    return report
