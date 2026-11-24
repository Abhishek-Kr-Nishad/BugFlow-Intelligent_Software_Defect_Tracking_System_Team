from analytics.reports import generate_defect_report


def test_generate_defect_report():
    metrics = {
        "total_defects": 3,
        "open_defects": 2,
        "resolved_defects": 1,
        "resolution_rate": 33.33,
        "severity_counts": {
            "High": 1,
            "Medium": 1,
            "Low": 1
        }
    }

    report = generate_defect_report(metrics)

    assert "BUGFLOW ANALYTICS REPORT" in report
    assert "Total Defects" in report
    assert "High: 1" in report

def test_calculate_defect_metrics():
    from analytics.metrics import calculate_defect_metrics

    defects = [
        {"status": "open", "severity": "High"},
        {"status": "resolved", "severity": "Medium"},
        {"status": "open", "severity": "Low"}
    ]

    metrics = calculate_defect_metrics(defects)

    assert metrics["total_defects"] == 3
    assert metrics["open_defects"] == 2
    assert metrics["resolved_defects"] == 1
    assert metrics["resolution_rate"] == 33.33
