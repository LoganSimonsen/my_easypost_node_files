import easypost
easypost.api_key =

# payment_log_report = easypost.Report.create(
#   start_date="2016-10-01",
#   end_date="2016-10-31",
#   type="payment_log"
# )

# refund_report = easypost.Report.create(
#   start_date="2016-10-01",
#   end_date="2016-10-31",
#   type="refund"
# )

report = easypost.Report.create(
    start_date="2018-11-01",
    end_date="2018-11-08",
    type="shipment"
)

# tracker_report = easypost.Report.create(
#   start_date="2016-10-01",
#   end_date="2016-10-31",
#   type="tracker"
# )
# shipment_report = easypost.Report.retrieve(report.id)

print[report]
