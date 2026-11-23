
def calculate_defect_metrics(defects):
    """
    Calculate basic defect tracking metrics.

    Each defect should be a dictionary containing:
    status and severity.
    """

    total_defects = len(defects)

    open_defects = sum(
        1 for defect in defects
        if defect.get("status", "").lower() == "open"
    )

    resolved_defects = sum(
        1 for defect in defects
        if defect.get("status", "").lower() == "resolved"
    )

    resolution_rate = (
        (resolved_defects / total_defects) * 100
        if total_defects > 0 else 0
    )

    severity_counts = {}

    for defect in defects:
        severity = defect.get("severity", "Unknown")
        severity_counts[severity] = severity_counts.get(severity, 0) + 1

    return {
        "total_defects": total_defects,
        "open_defects": open_defects,
        "resolved_defects": resolved_defects,
        "resolution_rate": round(resolution_rate, 2),
        "severity_counts": severity_counts
    }
