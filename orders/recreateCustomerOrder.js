require('dotenv').config()
require('babel-polyfill');

require('@easypost/api/easypost.8-lts.js');

const apiKey = process.env.testkey;
// const apiKey = process.env.prodkey;
const EasyPost = require('@easypost/api');

const api = new EasyPost(apiKey);

//============= copy o.ent JSON from admin and assign it to const o.===============
const o = {
    "object": "Order",
    "public_id": "order_3a45224fc1e546ceaa7d66beabc09cba",
    "user": {
        "id": 404050,
        "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
        "object": "User",
        "parent_id": null,
        "billing_user_id": 404050,
        "name": "Russell Proos",
        "email": "russ@2ship.com",
        "phone_number": "9057618555",
        "balance": "$0.00000",
        "price_per_shipment": "0.01000",
        "disabled": false,
        "disabled_at": null,
        "created_at": "2019-03-15T19:54:38Z",
        "updated_at": "2019-03-18T09:22:37Z",
        "watch": false,
        "source": null,
        "stripe_customer": null,
        "user_flag": {
            "id": 97971
        }
    },
    "user_id": 404050,
    "mode": "test",
    "is_return": false,
    "reference": null,
    "options": {
        "label_format": "PDF",
        "label_size": "4X6",
        "peel_and_return": false,
        "currency": "USD",
        "payment": {
            "type": "SENDER"
        },
        "label_date": null
    },
    "messages": [],
    "created_at": "2019-04-23T07:29:14Z",
    "updated_at": "2019-04-23T07:29:14Z",
    "from_address": {
        "id": "adr_8faa18a799414a26a80fd2affbc360ed",
        "object": "Address",
        "created_at": "2019-04-23T07:29:12Z",
        "updated_at": "2019-04-23T07:29:12Z",
        "name": "Sue O'Hagen",
        "company": "Frankford Candy & Chocolate Co",
        "street1": "9300 Ashton Rd",
        "street2": "",
        "city": "Philadelphia",
        "state": "PA",
        "zip": "19114-3464",
        "country": "US",
        "phone": "2157355200",
        "email": "sdurr@frankfordcandy.com",
        "mode": "test",
        "carrier_facility": null,
        "residential": false,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": []
    },
    "from_address_id": 2913662127,
    "to_address": {
        "id": "adr_9e47e5f24567460392bea784f5b42b37",
        "object": "Address",
        "created_at": "2019-04-23T07:29:12Z",
        "updated_at": "2019-04-23T07:29:15Z",
        "name": "MARK RABENS",
        "company": "USC DISTRIBUTION SERVICES",
        "street1": "3015 ANA STREET",
        "street2": "",
        "city": "RANCHO DOMINGUEZ",
        "state": "CA",
        "zip": "90221-5604",
        "country": "US",
        "phone": "3106091153",
        "email": "MARK.RABENS@EXEL.COM",
        "mode": "test",
        "carrier_facility": null,
        "residential": false,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": [
            {
                "id": 700813287,
                "address_id": 2913662129,
                "name": "zip4",
                "success": true,
                "results": [],
                "created_at": "2019-04-23T07:29:15Z",
                "updated_at": "2019-04-23T07:29:15Z",
                "details": {
                    "elot_sequence": "0046",
                    "elot_sort": "D",
                    "county_fips": "06037",
                    "county_name": "Los Angeles",
                    "residential": false,
                    "congressional_district": "44",
                    "carrier_route": "C009",
                    "zip42": "90221-560415"
                },
                "user_id": 404050
            }
        ]
    },
    "to_address_id": 2913662129,
    "buyer_address": {
        "id": "adr_9e47e5f24567460392bea784f5b42b37",
        "object": "Address",
        "created_at": "2019-04-23T07:29:12Z",
        "updated_at": "2019-04-23T07:29:15Z",
        "name": "MARK RABENS",
        "company": "USC DISTRIBUTION SERVICES",
        "street1": "3015 ANA STREET",
        "street2": "",
        "city": "RANCHO DOMINGUEZ",
        "state": "CA",
        "zip": "90221-5604",
        "country": "US",
        "phone": "3106091153",
        "email": "MARK.RABENS@EXEL.COM",
        "mode": "test",
        "carrier_facility": null,
        "residential": false,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": [
            {
                "id": 700813287,
                "address_id": 2913662129,
                "name": "zip4",
                "success": true,
                "results": [],
                "created_at": "2019-04-23T07:29:15Z",
                "updated_at": "2019-04-23T07:29:15Z",
                "details": {
                    "elot_sequence": "0046",
                    "elot_sort": "D",
                    "county_fips": "06037",
                    "county_name": "Los Angeles",
                    "residential": false,
                    "congressional_district": "44",
                    "carrier_route": "C009",
                    "zip42": "90221-560415"
                },
                "user_id": 404050
            }
        ]
    },
    "buyer_address_id": 2913662129,
    "return_address": {
        "id": "adr_8faa18a799414a26a80fd2affbc360ed",
        "object": "Address",
        "created_at": "2019-04-23T07:29:12Z",
        "updated_at": "2019-04-23T07:29:12Z",
        "name": "Sue O'Hagen",
        "company": "Frankford Candy & Chocolate Co",
        "street1": "9300 Ashton Rd",
        "street2": "",
        "city": "Philadelphia",
        "state": "PA",
        "zip": "19114-3464",
        "country": "US",
        "phone": "2157355200",
        "email": "sdurr@frankfordcandy.com",
        "mode": "test",
        "carrier_facility": null,
        "residential": false,
        "federal_tax_id": null,
        "state_tax_id": null,
        "verifications": []
    },
    "return_address_id": 2913662127,
    "customs_info": null,
    "customs_info_id": null,
    "id": 41641946,
    "shipments": [
        {
            "created_at": "2019-04-23T07:29:14Z",
            "is_return": false,
            "messages": [],
            "mode": "test",
            "options": {
                "currency": "USD",
                "payment": {
                    "type": "SENDER"
                },
                "label_date": null,
                "date_advance": 0
            },
            "reference": null,
            "status": "delivered",
            "tracking_code": "9400136897846022215007",
            "updated_at": "2019-04-23T07:33:17Z",
            "batch_id": null,
            "batch_status": null,
            "batch_message": null,
            "customs_info": null,
            "from_address": {
                "id": "adr_8faa18a799414a26a80fd2affbc360ed",
                "object": "Address",
                "created_at": "2019-04-23T07:29:12Z",
                "updated_at": "2019-04-23T07:29:12Z",
                "name": "Sue O'Hagen",
                "company": "Frankford Candy & Chocolate Co",
                "street1": "9300 Ashton Rd",
                "street2": "",
                "city": "Philadelphia",
                "state": "PA",
                "zip": "19114-3464",
                "country": "US",
                "phone": "2157355200",
                "email": "sdurr@frankfordcandy.com",
                "mode": "test",
                "carrier_facility": null,
                "residential": false,
                "federal_tax_id": null,
                "state_tax_id": null,
                "verifications": {}
            },
            "insurance": null,
            "order_id": "order_3a45224fc1e546ceaa7d66beabc09cba",
            "parcel": {
                "id": "prcl_1b38637b37d24a649578df752ed43ff0",
                "object": "Parcel",
                "created_at": "2019-04-23T07:29:14Z",
                "updated_at": "2019-04-23T07:29:14Z",
                "length": 1,
                "width": 1,
                "height": 1,
                "predefined_package": null,
                "weight": 8,
                "mode": "test"
            },
            "postage_label": {
                "object": "PostageLabel",
                "id": "pl_42b76afce6964613a38d0b960f5f0691",
                "created_at": "2019-04-23T07:29:16Z",
                "updated_at": "2019-04-23T07:29:16Z",
                "date_advance": 0,
                "integrated_form": "none",
                "label_date": "2019-04-23T07:29:16Z",
                "label_resolution": 300,
                "label_size": "4x6",
                "label_type": "default",
                "label_file_type": "image/png",
                "label_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20190423/1c82428ea94f4b459a9d98c806f24600.png",
                "label_pdf_url": null,
                "label_zpl_url": null,
                "label_epl2_url": null,
                "label_file": null
            },
            "refund_status": null,
            "scan_form": null,
            "selected_rate": {
                "id": "rate_6b4938265c9b4956b82fd8bd8165ce75",
                "object": "Rate",
                "created_at": "2019-04-23T07:29:16Z",
                "updated_at": "2019-04-23T07:29:16Z",
                "mode": "test",
                "service": "First",
                "carrier": "USPS",
                "rate": "3.63",
                "currency": "USD",
                "retail_rate": "4.81",
                "retail_currency": "USD",
                "list_rate": "3.63",
                "list_currency": "USD",
                "delivery_days": 3,
                "delivery_date": null,
                "delivery_date_guaranteed": false,
                "est_delivery_days": 3,
                "shipment_id": "shp_88f7c542893d42d0a51aadec36decca3",
                "carrier_account_id": "ca_eb750c32d39c45ec9a540477423b428f"
            },
            "tracker": {
                "id": "trk_3e79d6ffa0244363907d2d63cd59108a",
                "object": "Tracker",
                "mode": "test",
                "tracking_code": "9400136897846022215007",
                "status": "delivered",
                "status_detail": "arrived_at_destination",
                "created_at": "2019-04-23T07:29:17Z",
                "updated_at": "2019-04-23T07:32:17Z",
                "signed_by": "John Tester",
                "weight": null,
                "est_delivery_date": "2019-04-23T07:32:17Z",
                "shipment_id": "shp_88f7c542893d42d0a51aadec36decca3",
                "carrier": "USPS",
                "tracking_details": [
                    {
                        "object": "TrackingDetail",
                        "message": "Pre-Shipment Info Sent to USPS",
                        "description": null,
                        "status": "pre_transit",
                        "status_detail": "status_update",
                        "datetime": "2019-03-23T07:32:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": null,
                            "state": null,
                            "country": null,
                            "zip": null
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Shipping Label Created",
                        "description": null,
                        "status": "pre_transit",
                        "status_detail": "status_update",
                        "datetime": "2019-03-23T20:09:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "HOUSTON",
                            "state": "TX",
                            "country": null,
                            "zip": "77063"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Arrived at USPS Origin Facility",
                        "description": null,
                        "status": "in_transit",
                        "status_detail": "arrived_at_facility",
                        "datetime": "2019-03-24T06:14:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "NORTH HOUSTON",
                            "state": "TX",
                            "country": null,
                            "zip": "77315"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Arrived at USPS Facility",
                        "description": null,
                        "status": "in_transit",
                        "status_detail": "arrived_at_facility",
                        "datetime": "2019-03-25T07:50:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "COLUMBIA",
                            "state": "SC",
                            "country": null,
                            "zip": "29201"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Arrived at Post Office",
                        "description": null,
                        "status": "in_transit",
                        "status_detail": "arrived_at_facility",
                        "datetime": "2019-03-25T10:41:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "CHARLESTON",
                            "state": "SC",
                            "country": null,
                            "zip": "29407"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Sorting Complete",
                        "description": null,
                        "status": "in_transit",
                        "status_detail": "status_update",
                        "datetime": "2019-03-25T16:21:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "CHARLESTON",
                            "state": "SC",
                            "country": null,
                            "zip": "29407"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Out for Delivery",
                        "description": null,
                        "status": "out_for_delivery",
                        "status_detail": "out_for_delivery",
                        "datetime": "2019-03-25T16:31:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "CHARLESTON",
                            "state": "SC",
                            "country": null,
                            "zip": "29407"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Delivered",
                        "description": null,
                        "status": "delivered",
                        "status_detail": "arrived_at_destination",
                        "datetime": "2019-03-25T21:23:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "CHARLESTON",
                            "state": "SC",
                            "country": null,
                            "zip": "29407"
                        }
                    }
                ],
                "carrier_detail": {
                    "object": "CarrierDetail",
                    "service": "First-Class Package Service",
                    "container_type": null,
                    "est_delivery_date_local": null,
                    "est_delivery_time_local": null,
                    "origin_location": "HOUSTON TX, 77001",
                    "origin_tracking_location": {
                        "object": "TrackingLocation",
                        "city": "NORTH HOUSTON",
                        "state": "TX",
                        "country": null,
                        "zip": "77315"
                    },
                    "destination_location": "CHARLESTON SC, 29401",
                    "destination_tracking_location": {
                        "object": "TrackingLocation",
                        "city": "CHARLESTON",
                        "state": "SC",
                        "country": null,
                        "zip": "29407"
                    },
                    "guaranteed_delivery_date": null,
                    "alternate_identifier": null,
                    "initial_delivery_attempt": "2019-03-25T21:23:17Z"
                },
                "finalized": true,
                "is_return": false,
                "public_url": "https://track.easypost.com/djE6dHJrXzNlNzlkNmZmYTAyNDQzNjM5MDdkMmQ2M2NkNTkxMDhh",
                "fees": []
            },
            "to_address": {
                "id": "adr_9e47e5f24567460392bea784f5b42b37",
                "object": "Address",
                "created_at": "2019-04-23T07:29:12Z",
                "updated_at": "2019-04-23T07:29:15Z",
                "name": "MARK RABENS",
                "company": "USC DISTRIBUTION SERVICES",
                "street1": "3015 ANA STREET",
                "street2": "",
                "city": "RANCHO DOMINGUEZ",
                "state": "CA",
                "zip": "90221-5604",
                "country": "US",
                "phone": "3106091153",
                "email": "MARK.RABENS@EXEL.COM",
                "mode": "test",
                "carrier_facility": null,
                "residential": false,
                "federal_tax_id": null,
                "state_tax_id": null,
                "verifications": {
                    "zip4": {
                        "success": true,
                        "errors": [],
                        "details": null
                    }
                }
            },
            "usps_zone": 8,
            "return_address": {
                "id": "adr_8faa18a799414a26a80fd2affbc360ed",
                "object": "Address",
                "created_at": "2019-04-23T07:29:12Z",
                "updated_at": "2019-04-23T07:29:12Z",
                "name": "Sue O'Hagen",
                "company": "Frankford Candy & Chocolate Co",
                "street1": "9300 Ashton Rd",
                "street2": "",
                "city": "Philadelphia",
                "state": "PA",
                "zip": "19114-3464",
                "country": "US",
                "phone": "2157355200",
                "email": "sdurr@frankfordcandy.com",
                "mode": "test",
                "carrier_facility": null,
                "residential": false,
                "federal_tax_id": null,
                "state_tax_id": null,
                "verifications": {}
            },
            "buyer_address": {
                "id": "adr_9e47e5f24567460392bea784f5b42b37",
                "object": "Address",
                "created_at": "2019-04-23T07:29:12Z",
                "updated_at": "2019-04-23T07:29:15Z",
                "name": "MARK RABENS",
                "company": "USC DISTRIBUTION SERVICES",
                "street1": "3015 ANA STREET",
                "street2": "",
                "city": "RANCHO DOMINGUEZ",
                "state": "CA",
                "zip": "90221-5604",
                "country": "US",
                "phone": "3106091153",
                "email": "MARK.RABENS@EXEL.COM",
                "mode": "test",
                "carrier_facility": null,
                "residential": false,
                "federal_tax_id": null,
                "state_tax_id": null,
                "verifications": {
                    "zip4": {
                        "success": true,
                        "errors": [],
                        "details": null
                    }
                }
            },
            "object": "Shipment",
            "_internal": {
                "id": 920210806,
                "public_id": "shp_88f7c542893d42d0a51aadec36decca3",
                "insurance_value_usd": null,
                "user": {
                    "id": 404050,
                    "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                    "object": "User",
                    "parent_id": null,
                    "billing_user_id": 404050,
                    "name": "Russell Proos",
                    "email": "russ@2ship.com",
                    "phone_number": "9057618555",
                    "balance": "$0.00000",
                    "price_per_shipment": "0.01000",
                    "disabled": false,
                    "disabled_at": null,
                    "created_at": "2019-03-15T19:54:38Z",
                    "updated_at": "2019-03-18T09:22:37Z",
                    "watch": false,
                    "source": null,
                    "stripe_customer": null,
                    "user_flag": {
                        "id": 97971
                    }
                },
                "user_id": 404050,
                "batch_id": null,
                "to_address": {
                    "id": "adr_9e47e5f24567460392bea784f5b42b37",
                    "object": "Address",
                    "created_at": "2019-04-23T07:29:12Z",
                    "updated_at": "2019-04-23T07:29:15Z",
                    "name": "MARK RABENS",
                    "company": "USC DISTRIBUTION SERVICES",
                    "street1": "3015 ANA STREET",
                    "street2": "",
                    "city": "RANCHO DOMINGUEZ",
                    "state": "CA",
                    "zip": "90221-5604",
                    "country": "US",
                    "phone": "3106091153",
                    "email": "MARK.RABENS@EXEL.COM",
                    "mode": "test",
                    "carrier_facility": null,
                    "residential": false,
                    "federal_tax_id": null,
                    "state_tax_id": null,
                    "verifications": [
                        {
                            "id": 700813287,
                            "address_id": 2913662129,
                            "name": "zip4",
                            "success": true,
                            "results": [],
                            "created_at": "2019-04-23T07:29:15Z",
                            "updated_at": "2019-04-23T07:29:15Z",
                            "details": {
                                "elot_sequence": "0046",
                                "elot_sort": "D",
                                "county_fips": "06037",
                                "county_name": "Los Angeles",
                                "residential": false,
                                "congressional_district": "44",
                                "carrier_route": "C009",
                                "zip42": "90221-560415"
                            },
                            "user_id": 404050
                        }
                    ],
                    "_internal": {
                        "id": 2913662129,
                        "public_id": "adr_9e47e5f24567460392bea784f5b42b37",
                        "user_id": 404050,
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        }
                    }
                },
                "to_address_id": 2913662129,
                "from_address": {
                    "id": "adr_8faa18a799414a26a80fd2affbc360ed",
                    "object": "Address",
                    "created_at": "2019-04-23T07:29:12Z",
                    "updated_at": "2019-04-23T07:29:12Z",
                    "name": "Sue O'Hagen",
                    "company": "Frankford Candy & Chocolate Co",
                    "street1": "9300 Ashton Rd",
                    "street2": "",
                    "city": "Philadelphia",
                    "state": "PA",
                    "zip": "19114-3464",
                    "country": "US",
                    "phone": "2157355200",
                    "email": "sdurr@frankfordcandy.com",
                    "mode": "test",
                    "carrier_facility": null,
                    "residential": false,
                    "federal_tax_id": null,
                    "state_tax_id": null,
                    "verifications": [],
                    "_internal": {
                        "id": 2913662127,
                        "public_id": "adr_8faa18a799414a26a80fd2affbc360ed",
                        "user_id": 404050,
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        }
                    }
                },
                "from_address_id": 2913662127,
                "return_address": {
                    "id": "adr_8faa18a799414a26a80fd2affbc360ed",
                    "object": "Address",
                    "created_at": "2019-04-23T07:29:12Z",
                    "updated_at": "2019-04-23T07:29:12Z",
                    "name": "Sue O'Hagen",
                    "company": "Frankford Candy & Chocolate Co",
                    "street1": "9300 Ashton Rd",
                    "street2": "",
                    "city": "Philadelphia",
                    "state": "PA",
                    "zip": "19114-3464",
                    "country": "US",
                    "phone": "2157355200",
                    "email": "sdurr@frankfordcandy.com",
                    "mode": "test",
                    "carrier_facility": null,
                    "residential": false,
                    "federal_tax_id": null,
                    "state_tax_id": null,
                    "verifications": [],
                    "_internal": {
                        "id": 2913662127,
                        "public_id": "adr_8faa18a799414a26a80fd2affbc360ed",
                        "user_id": 404050,
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        }
                    }
                },
                "return_address_id": 2913662127,
                "buyer_address": {
                    "id": "adr_9e47e5f24567460392bea784f5b42b37",
                    "object": "Address",
                    "created_at": "2019-04-23T07:29:12Z",
                    "updated_at": "2019-04-23T07:29:15Z",
                    "name": "MARK RABENS",
                    "company": "USC DISTRIBUTION SERVICES",
                    "street1": "3015 ANA STREET",
                    "street2": "",
                    "city": "RANCHO DOMINGUEZ",
                    "state": "CA",
                    "zip": "90221-5604",
                    "country": "US",
                    "phone": "3106091153",
                    "email": "MARK.RABENS@EXEL.COM",
                    "mode": "test",
                    "carrier_facility": null,
                    "residential": false,
                    "federal_tax_id": null,
                    "state_tax_id": null,
                    "verifications": [
                        {
                            "id": 700813287,
                            "address_id": 2913662129,
                            "name": "zip4",
                            "success": true,
                            "results": [],
                            "created_at": "2019-04-23T07:29:15Z",
                            "updated_at": "2019-04-23T07:29:15Z",
                            "details": {
                                "elot_sequence": "0046",
                                "elot_sort": "D",
                                "county_fips": "06037",
                                "county_name": "Los Angeles",
                                "residential": false,
                                "congressional_district": "44",
                                "carrier_route": "C009",
                                "zip42": "90221-560415"
                            },
                            "user_id": 404050
                        }
                    ],
                    "_internal": {
                        "id": 2913662129,
                        "public_id": "adr_9e47e5f24567460392bea784f5b42b37",
                        "user_id": 404050,
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        }
                    }
                },
                "buyer_address_id": 2913662129,
                "selected_rate": "rate_6b4938265c9b4956b82fd8bd8165ce75",
                "rates": [
                    {
                        "id": "rate_bb0eaad4189744739455ccf87c9dc353",
                        "carrier_account_id": 430918,
                        "carrier": "USPS",
                        "service": "Priority",
                        "selected": false,
                        "rate_amount": "8.25"
                    },
                    {
                        "id": "rate_86e5164922244d19ab0798761af5bf95",
                        "carrier_account_id": 430918,
                        "carrier": "USPS",
                        "service": "Express",
                        "selected": false,
                        "rate_amount": "31.08"
                    },
                    {
                        "id": "rate_6b4938265c9b4956b82fd8bd8165ce75",
                        "carrier_account_id": 430918,
                        "carrier": "USPS",
                        "service": "First",
                        "selected": true,
                        "rate_amount": "3.63"
                    },
                    {
                        "id": "rate_153c3e406d754adeb85e61923daffea6",
                        "carrier_account_id": 430918,
                        "carrier": "USPS",
                        "service": "ParcelSelect",
                        "selected": false,
                        "rate_amount": "7.95"
                    }
                ],
                "postage_label": {
                    "id": 335653506,
                    "object": "PostageLabel",
                    "public_id": "pl_42b76afce6964613a38d0b960f5f0691",
                    "mode": "test",
                    "user": {
                        "id": 404050,
                        "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                        "object": "User",
                        "parent_id": null,
                        "billing_user_id": 404050,
                        "name": "Russell Proos",
                        "email": "russ@2ship.com",
                        "phone_number": "9057618555",
                        "balance": "$0.00000",
                        "price_per_shipment": "0.01000",
                        "disabled": false,
                        "disabled_at": null,
                        "created_at": "2019-03-15T19:54:38Z",
                        "updated_at": "2019-03-18T09:22:37Z",
                        "watch": false,
                        "source": null,
                        "stripe_customer": null,
                        "user_flag": {
                            "id": 97971
                        }
                    },
                    "user_id": 404050,
                    "created_at": "2019-04-23T07:29:16Z",
                    "updated_at": "2019-04-23T07:29:16Z",
                    "date_advance": 0,
                    "integrated_form": "none",
                    "label_date": "2019-04-23T07:29:16Z",
                    "label_size": "4x6",
                    "url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20190423/1c82428ea94f4b459a9d98c806f24600.png",
                    "pdf_url": null,
                    "zpl_url": null,
                    "epl2_url": null,
                    "rate_id": "rate_6b4938265c9b4956b82fd8bd8165ce75",
                    "selected_rate": "rate_6b4938265c9b4956b82fd8bd8165ce75"
                },
                "postage_label_id": 335653506,
                "carrier_account": {
                    "id": "ca_eb750c32d39c45ec9a540477423b428f",
                    "object": "CarrierAccount",
                    "type": "UspsAccount",
                    "clone": false,
                    "created_at": "2019-03-15T19:54:39Z",
                    "updated_at": "2019-04-17T07:20:19Z",
                    "description": "USPS Account",
                    "reference": null,
                    "readable": "USPS",
                    "logo": null,
                    "fields": {
                        "credentials": {
                            "company_name": {
                                "visibility": "visible",
                                "label": "Account Holder Name",
                                "value": "Russ Proos"
                            },
                            "address_street": {
                                "visibility": "visible",
                                "label": "Street Address",
                                "value": "2299 Kenmore Avenue"
                            },
                            "address_city": {
                                "visibility": "visible",
                                "label": "City",
                                "value": "Buffalo"
                            },
                            "address_state": {
                                "visibility": "visible",
                                "label": "State",
                                "value": "NY"
                            },
                            "address_zip": {
                                "visibility": "visible",
                                "label": "ZIP Code",
                                "value": "14207"
                            },
                            "phone": {
                                "visibility": "visible",
                                "label": "Phone Number",
                                "value": "9057618555214"
                            },
                            "email": {
                                "visibility": "visible",
                                "label": "Email Address",
                                "value": "russ@2ship.com"
                            },
                            "shipper_id": {
                                "visibility": "visible",
                                "label": "Shipper Identifier (Optional)",
                                "value": ""
                            }
                        }
                    },
                    "credentials": {
                        "company_name": "Russ Proos",
                        "address_street": "2299 Kenmore Avenue",
                        "address_city": "Buffalo",
                        "address_state": "NY",
                        "address_zip": "14207",
                        "phone": "9057618555214",
                        "email": "russ@2ship.com",
                        "shipper_id": ""
                    },
                    "test_credentials": null,
                    "_internal": {
                        "id": 430918,
                        "public_id": "ca_eb750c32d39c45ec9a540477423b428f",
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        },
                        "user_id": 404050,
                        "payment_mode": "aggregation",
                        "shared_tracking_account": false,
                        "default_account": false,
                        "disabled_at": false,
                        "disabled": false
                    }
                },
                "carrier_account_id": 430918,
                "parcel": {
                    "id": "prcl_1b38637b37d24a649578df752ed43ff0",
                    "object": "Parcel",
                    "created_at": "2019-04-23T07:29:14Z",
                    "updated_at": "2019-04-23T07:29:14Z",
                    "length": 1,
                    "width": 1,
                    "height": 1,
                    "predefined_package": null,
                    "weight": 8,
                    "mode": "test",
                    "_internal": {
                        "id": 895782964,
                        "public_id": "prcl_1b38637b37d24a649578df752ed43ff0",
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        },
                        "user_id": 404050
                    }
                },
                "parcel_id": 895782964,
                "insurance_id": null,
                "customs_info": null,
                "customs_info_id": null,
                "scan_form": null,
                "scan_form_id": null,
                "tracker": {
                    "id": "trk_3e79d6ffa0244363907d2d63cd59108a",
                    "object": "Tracker",
                    "mode": "test",
                    "tracking_code": "9400136897846022215007",
                    "status": "delivered",
                    "status_detail": "arrived_at_destination",
                    "created_at": "2019-04-23T07:29:17Z",
                    "updated_at": "2019-04-23T07:32:17Z",
                    "signed_by": "John Tester",
                    "weight": null,
                    "est_delivery_date": "2019-04-23T07:32:17Z",
                    "shipment_id": "shp_88f7c542893d42d0a51aadec36decca3",
                    "carrier": "USPS",
                    "tracking_details": [
                        {
                            "object": "TrackingDetail",
                            "message": "Pre-Shipment Info Sent to USPS",
                            "description": null,
                            "status": "pre_transit",
                            "status_detail": "status_update",
                            "datetime": "2019-03-23T07:32:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": null,
                                "state": null,
                                "country": null,
                                "zip": null
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Shipping Label Created",
                            "description": null,
                            "status": "pre_transit",
                            "status_detail": "status_update",
                            "datetime": "2019-03-23T20:09:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "HOUSTON",
                                "state": "TX",
                                "country": null,
                                "zip": "77063"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Arrived at USPS Origin Facility",
                            "description": null,
                            "status": "in_transit",
                            "status_detail": "arrived_at_facility",
                            "datetime": "2019-03-24T06:14:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "NORTH HOUSTON",
                                "state": "TX",
                                "country": null,
                                "zip": "77315"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Arrived at USPS Facility",
                            "description": null,
                            "status": "in_transit",
                            "status_detail": "arrived_at_facility",
                            "datetime": "2019-03-25T07:50:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "COLUMBIA",
                                "state": "SC",
                                "country": null,
                                "zip": "29201"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Arrived at Post Office",
                            "description": null,
                            "status": "in_transit",
                            "status_detail": "arrived_at_facility",
                            "datetime": "2019-03-25T10:41:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "CHARLESTON",
                                "state": "SC",
                                "country": null,
                                "zip": "29407"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Sorting Complete",
                            "description": null,
                            "status": "in_transit",
                            "status_detail": "status_update",
                            "datetime": "2019-03-25T16:21:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "CHARLESTON",
                                "state": "SC",
                                "country": null,
                                "zip": "29407"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Out for Delivery",
                            "description": null,
                            "status": "out_for_delivery",
                            "status_detail": "out_for_delivery",
                            "datetime": "2019-03-25T16:31:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "CHARLESTON",
                                "state": "SC",
                                "country": null,
                                "zip": "29407"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Delivered",
                            "description": null,
                            "status": "delivered",
                            "status_detail": "arrived_at_destination",
                            "datetime": "2019-03-25T21:23:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "CHARLESTON",
                                "state": "SC",
                                "country": null,
                                "zip": "29407"
                            }
                        }
                    ],
                    "carrier_detail": {
                        "object": "CarrierDetail",
                        "service": "First-Class Package Service",
                        "container_type": null,
                        "est_delivery_date_local": null,
                        "est_delivery_time_local": null,
                        "origin_location": "HOUSTON TX, 77001",
                        "origin_tracking_location": {
                            "object": "TrackingLocation",
                            "city": "NORTH HOUSTON",
                            "state": "TX",
                            "country": null,
                            "zip": "77315"
                        },
                        "destination_location": "CHARLESTON SC, 29401",
                        "destination_tracking_location": {
                            "object": "TrackingLocation",
                            "city": "CHARLESTON",
                            "state": "SC",
                            "country": null,
                            "zip": "29407"
                        },
                        "guaranteed_delivery_date": null,
                        "alternate_identifier": null,
                        "initial_delivery_attempt": "2019-03-25T21:23:17Z"
                    },
                    "finalized": true,
                    "is_return": false,
                    "public_url": "https://track.easypost.com/djE6dHJrXzNlNzlkNmZmYTAyNDQzNjM5MDdkMmQ2M2NkNTkxMDhh",
                    "fees": []
                },
                "tracker_id": "trk_3e79d6ffa0244363907d2d63cd59108a",
                "order_id": 41641946,
                "refund": null,
                "refund_id": null,
                "forms": [],
                "fees": [
                    {
                        "object": "Fee",
                        "type": "LabelFee",
                        "amount": "0.01000",
                        "charged": true,
                        "refunded": false,
                        "_internal": {
                            "id": 769721516,
                            "user": {
                                "id": 404050,
                                "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                                "object": "User",
                                "parent_id": null,
                                "billing_user_id": 404050,
                                "name": "Russell Proos",
                                "email": "russ@2ship.com",
                                "phone_number": "9057618555",
                                "balance": "$0.00000",
                                "price_per_shipment": "0.01000",
                                "disabled": false,
                                "disabled_at": null,
                                "created_at": "2019-03-15T19:54:38Z",
                                "updated_at": "2019-03-18T09:22:37Z",
                                "watch": false,
                                "source": null,
                                "stripe_customer": null,
                                "user_flag": {
                                    "id": 97971
                                }
                            },
                            "user_id": 404050,
                            "payment_log": null,
                            "payment_log_id": null,
                            "created_at": "2019-04-23T07:29:15Z"
                        }
                    },
                    {
                        "object": "Fee",
                        "type": "PostageFee",
                        "amount": "3.63000",
                        "charged": true,
                        "refunded": false,
                        "_internal": {
                            "id": 769721517,
                            "user": {
                                "id": 404050,
                                "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                                "object": "User",
                                "parent_id": null,
                                "billing_user_id": 404050,
                                "name": "Russell Proos",
                                "email": "russ@2ship.com",
                                "phone_number": "9057618555",
                                "balance": "$0.00000",
                                "price_per_shipment": "0.01000",
                                "disabled": false,
                                "disabled_at": null,
                                "created_at": "2019-03-15T19:54:38Z",
                                "updated_at": "2019-03-18T09:22:37Z",
                                "watch": false,
                                "source": null,
                                "stripe_customer": null,
                                "user_flag": {
                                    "id": 97971
                                }
                            },
                            "user_id": 404050,
                            "payment_log": null,
                            "payment_log_id": null,
                            "created_at": "2019-04-23T07:29:15Z"
                        }
                    }
                ]
            },
            "rates": [
                {
                    "object": "Rate",
                    "created_at": "2019-04-23T07:29:14Z",
                    "updated_at": "2019-04-23T07:29:14Z",
                    "mode": "test",
                    "service": "Priority",
                    "carrier": "USPS",
                    "rate": "8.25",
                    "currency": "USD",
                    "retail_rate": "9.30",
                    "retail_currency": "USD",
                    "list_rate": "8.25",
                    "list_currency": "USD",
                    "delivery_days": 2,
                    "delivery_date": null,
                    "delivery_date_guaranteed": false,
                    "est_delivery_days": 2,
                    "shipment_id": "shp_88f7c542893d42d0a51aadec36decca3",
                    "carrier_account_id": "ca_eb750c32d39c45ec9a540477423b428f",
                    "id": "rate_bb0eaad4189744739455ccf87c9dc353"
                },
                {
                    "object": "Rate",
                    "created_at": "2019-04-23T07:29:14Z",
                    "updated_at": "2019-04-23T07:29:14Z",
                    "mode": "test",
                    "service": "Express",
                    "carrier": "USPS",
                    "rate": "31.08",
                    "currency": "USD",
                    "retail_rate": "35.20",
                    "retail_currency": "USD",
                    "list_rate": "31.08",
                    "list_currency": "USD",
                    "delivery_days": null,
                    "delivery_date": null,
                    "delivery_date_guaranteed": false,
                    "est_delivery_days": null,
                    "shipment_id": "shp_88f7c542893d42d0a51aadec36decca3",
                    "carrier_account_id": "ca_eb750c32d39c45ec9a540477423b428f",
                    "id": "rate_86e5164922244d19ab0798761af5bf95"
                },
                {
                    "object": "Rate",
                    "created_at": "2019-04-23T07:29:14Z",
                    "updated_at": "2019-04-23T07:29:14Z",
                    "mode": "test",
                    "service": "First",
                    "carrier": "USPS",
                    "rate": "3.63",
                    "currency": "USD",
                    "retail_rate": "4.81",
                    "retail_currency": "USD",
                    "list_rate": "3.63",
                    "list_currency": "USD",
                    "delivery_days": 3,
                    "delivery_date": null,
                    "delivery_date_guaranteed": false,
                    "est_delivery_days": 3,
                    "shipment_id": "shp_88f7c542893d42d0a51aadec36decca3",
                    "carrier_account_id": "ca_eb750c32d39c45ec9a540477423b428f",
                    "id": "rate_6b4938265c9b4956b82fd8bd8165ce75"
                },
                {
                    "object": "Rate",
                    "created_at": "2019-04-23T07:29:14Z",
                    "updated_at": "2019-04-23T07:29:14Z",
                    "mode": "test",
                    "service": "ParcelSelect",
                    "carrier": "USPS",
                    "rate": "7.95",
                    "currency": "USD",
                    "retail_rate": "7.95",
                    "retail_currency": "USD",
                    "list_rate": "7.95",
                    "list_currency": "USD",
                    "delivery_days": 7,
                    "delivery_date": null,
                    "delivery_date_guaranteed": false,
                    "est_delivery_days": 7,
                    "shipment_id": "shp_88f7c542893d42d0a51aadec36decca3",
                    "carrier_account_id": "ca_eb750c32d39c45ec9a540477423b428f",
                    "id": "rate_153c3e406d754adeb85e61923daffea6"
                }
            ],
            "forms": [],
            "fees": [
                {
                    "object": "Fee",
                    "type": "LabelFee",
                    "amount": "0.01000",
                    "charged": true,
                    "refunded": false
                },
                {
                    "object": "Fee",
                    "type": "PostageFee",
                    "amount": "3.63000",
                    "charged": true,
                    "refunded": false
                }
            ],
            "id": "shp_88f7c542893d42d0a51aadec36decca3"
        },
        {
            "created_at": "2019-04-23T07:29:14Z",
            "is_return": false,
            "messages": [],
            "mode": "test",
            "options": {
                "currency": "USD",
                "payment": {
                    "type": "SENDER"
                },
                "label_date": null,
                "date_advance": 0
            },
            "reference": null,
            "status": "delivered",
            "tracking_code": "9400136897846022215014",
            "updated_at": "2019-04-23T07:33:17Z",
            "batch_id": null,
            "batch_status": null,
            "batch_message": null,
            "customs_info": null,
            "from_address": {
                "id": "adr_8faa18a799414a26a80fd2affbc360ed",
                "object": "Address",
                "created_at": "2019-04-23T07:29:12Z",
                "updated_at": "2019-04-23T07:29:12Z",
                "name": "Sue O'Hagen",
                "company": "Frankford Candy & Chocolate Co",
                "street1": "9300 Ashton Rd",
                "street2": "",
                "city": "Philadelphia",
                "state": "PA",
                "zip": "19114-3464",
                "country": "US",
                "phone": "2157355200",
                "email": "sdurr@frankfordcandy.com",
                "mode": "test",
                "carrier_facility": null,
                "residential": false,
                "federal_tax_id": null,
                "state_tax_id": null,
                "verifications": {}
            },
            "insurance": null,
            "order_id": "order_3a45224fc1e546ceaa7d66beabc09cba",
            "parcel": {
                "id": "prcl_545cccc851884c759c6f87a198daa33c",
                "object": "Parcel",
                "created_at": "2019-04-23T07:29:14Z",
                "updated_at": "2019-04-23T07:29:14Z",
                "length": 1,
                "width": 1,
                "height": 1,
                "predefined_package": null,
                "weight": 8,
                "mode": "test"
            },
            "postage_label": {
                "object": "PostageLabel",
                "id": "pl_a7c45b79276d4e79b66f1374c86d43b7",
                "created_at": "2019-04-23T07:29:16Z",
                "updated_at": "2019-04-23T07:29:16Z",
                "date_advance": 0,
                "integrated_form": "none",
                "label_date": "2019-04-23T07:29:16Z",
                "label_resolution": 300,
                "label_size": "4x6",
                "label_type": "default",
                "label_file_type": "image/png",
                "label_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20190423/264030d386ab456fb5b0bd607ad85938.png",
                "label_pdf_url": null,
                "label_zpl_url": null,
                "label_epl2_url": null,
                "label_file": null
            },
            "refund_status": null,
            "scan_form": null,
            "selected_rate": {
                "id": "rate_4b2e32b9db6c4cfc9be9fbc2c9787e99",
                "object": "Rate",
                "created_at": "2019-04-23T07:29:16Z",
                "updated_at": "2019-04-23T07:29:16Z",
                "mode": "test",
                "service": "First",
                "carrier": "USPS",
                "rate": "3.63",
                "currency": "USD",
                "retail_rate": "4.81",
                "retail_currency": "USD",
                "list_rate": "3.63",
                "list_currency": "USD",
                "delivery_days": 3,
                "delivery_date": null,
                "delivery_date_guaranteed": false,
                "est_delivery_days": 3,
                "shipment_id": "shp_c5b4a5c74b6f4e809c1899d8d10721ea",
                "carrier_account_id": "ca_eb750c32d39c45ec9a540477423b428f"
            },
            "tracker": {
                "id": "trk_5a3599ac2b304c0da21b5869cd63cc7b",
                "object": "Tracker",
                "mode": "test",
                "tracking_code": "9400136897846022215014",
                "status": "delivered",
                "status_detail": "arrived_at_destination",
                "created_at": "2019-04-23T07:29:17Z",
                "updated_at": "2019-04-23T07:32:17Z",
                "signed_by": "John Tester",
                "weight": null,
                "est_delivery_date": "2019-04-23T07:32:17Z",
                "shipment_id": "shp_c5b4a5c74b6f4e809c1899d8d10721ea",
                "carrier": "USPS",
                "tracking_details": [
                    {
                        "object": "TrackingDetail",
                        "message": "Pre-Shipment Info Sent to USPS",
                        "description": null,
                        "status": "pre_transit",
                        "status_detail": "status_update",
                        "datetime": "2019-03-23T07:32:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": null,
                            "state": null,
                            "country": null,
                            "zip": null
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Shipping Label Created",
                        "description": null,
                        "status": "pre_transit",
                        "status_detail": "status_update",
                        "datetime": "2019-03-23T20:09:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "HOUSTON",
                            "state": "TX",
                            "country": null,
                            "zip": "77063"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Arrived at USPS Origin Facility",
                        "description": null,
                        "status": "in_transit",
                        "status_detail": "arrived_at_facility",
                        "datetime": "2019-03-24T06:14:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "NORTH HOUSTON",
                            "state": "TX",
                            "country": null,
                            "zip": "77315"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Arrived at USPS Facility",
                        "description": null,
                        "status": "in_transit",
                        "status_detail": "arrived_at_facility",
                        "datetime": "2019-03-25T07:50:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "COLUMBIA",
                            "state": "SC",
                            "country": null,
                            "zip": "29201"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Arrived at Post Office",
                        "description": null,
                        "status": "in_transit",
                        "status_detail": "arrived_at_facility",
                        "datetime": "2019-03-25T10:41:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "CHARLESTON",
                            "state": "SC",
                            "country": null,
                            "zip": "29407"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Sorting Complete",
                        "description": null,
                        "status": "in_transit",
                        "status_detail": "status_update",
                        "datetime": "2019-03-25T16:21:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "CHARLESTON",
                            "state": "SC",
                            "country": null,
                            "zip": "29407"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Out for Delivery",
                        "description": null,
                        "status": "out_for_delivery",
                        "status_detail": "out_for_delivery",
                        "datetime": "2019-03-25T16:31:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "CHARLESTON",
                            "state": "SC",
                            "country": null,
                            "zip": "29407"
                        }
                    },
                    {
                        "object": "TrackingDetail",
                        "message": "Delivered",
                        "description": null,
                        "status": "delivered",
                        "status_detail": "arrived_at_destination",
                        "datetime": "2019-03-25T21:23:17Z",
                        "source": "USPS",
                        "carrier_code": null,
                        "tracking_location": {
                            "object": "TrackingLocation",
                            "city": "CHARLESTON",
                            "state": "SC",
                            "country": null,
                            "zip": "29407"
                        }
                    }
                ],
                "carrier_detail": {
                    "object": "CarrierDetail",
                    "service": "First-Class Package Service",
                    "container_type": null,
                    "est_delivery_date_local": null,
                    "est_delivery_time_local": null,
                    "origin_location": "HOUSTON TX, 77001",
                    "origin_tracking_location": {
                        "object": "TrackingLocation",
                        "city": "NORTH HOUSTON",
                        "state": "TX",
                        "country": null,
                        "zip": "77315"
                    },
                    "destination_location": "CHARLESTON SC, 29401",
                    "destination_tracking_location": {
                        "object": "TrackingLocation",
                        "city": "CHARLESTON",
                        "state": "SC",
                        "country": null,
                        "zip": "29407"
                    },
                    "guaranteed_delivery_date": null,
                    "alternate_identifier": null,
                    "initial_delivery_attempt": "2019-03-25T21:23:17Z"
                },
                "finalized": true,
                "is_return": false,
                "public_url": "https://track.easypost.com/djE6dHJrXzVhMzU5OWFjMmIzMDRjMGRhMjFiNTg2OWNkNjNjYzdi",
                "fees": []
            },
            "to_address": {
                "id": "adr_9e47e5f24567460392bea784f5b42b37",
                "object": "Address",
                "created_at": "2019-04-23T07:29:12Z",
                "updated_at": "2019-04-23T07:29:15Z",
                "name": "MARK RABENS",
                "company": "USC DISTRIBUTION SERVICES",
                "street1": "3015 ANA STREET",
                "street2": "",
                "city": "RANCHO DOMINGUEZ",
                "state": "CA",
                "zip": "90221-5604",
                "country": "US",
                "phone": "3106091153",
                "email": "MARK.RABENS@EXEL.COM",
                "mode": "test",
                "carrier_facility": null,
                "residential": false,
                "federal_tax_id": null,
                "state_tax_id": null,
                "verifications": {
                    "zip4": {
                        "success": true,
                        "errors": [],
                        "details": null
                    }
                }
            },
            "usps_zone": 8,
            "return_address": {
                "id": "adr_8faa18a799414a26a80fd2affbc360ed",
                "object": "Address",
                "created_at": "2019-04-23T07:29:12Z",
                "updated_at": "2019-04-23T07:29:12Z",
                "name": "Sue O'Hagen",
                "company": "Frankford Candy & Chocolate Co",
                "street1": "9300 Ashton Rd",
                "street2": "",
                "city": "Philadelphia",
                "state": "PA",
                "zip": "19114-3464",
                "country": "US",
                "phone": "2157355200",
                "email": "sdurr@frankfordcandy.com",
                "mode": "test",
                "carrier_facility": null,
                "residential": false,
                "federal_tax_id": null,
                "state_tax_id": null,
                "verifications": {}
            },
            "buyer_address": {
                "id": "adr_9e47e5f24567460392bea784f5b42b37",
                "object": "Address",
                "created_at": "2019-04-23T07:29:12Z",
                "updated_at": "2019-04-23T07:29:15Z",
                "name": "MARK RABENS",
                "company": "USC DISTRIBUTION SERVICES",
                "street1": "3015 ANA STREET",
                "street2": "",
                "city": "RANCHO DOMINGUEZ",
                "state": "CA",
                "zip": "90221-5604",
                "country": "US",
                "phone": "3106091153",
                "email": "MARK.RABENS@EXEL.COM",
                "mode": "test",
                "carrier_facility": null,
                "residential": false,
                "federal_tax_id": null,
                "state_tax_id": null,
                "verifications": {
                    "zip4": {
                        "success": true,
                        "errors": [],
                        "details": null
                    }
                }
            },
            "object": "Shipment",
            "_internal": {
                "id": 920210808,
                "public_id": "shp_c5b4a5c74b6f4e809c1899d8d10721ea",
                "insurance_value_usd": null,
                "user": {
                    "id": 404050,
                    "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                    "object": "User",
                    "parent_id": null,
                    "billing_user_id": 404050,
                    "name": "Russell Proos",
                    "email": "russ@2ship.com",
                    "phone_number": "9057618555",
                    "balance": "$0.00000",
                    "price_per_shipment": "0.01000",
                    "disabled": false,
                    "disabled_at": null,
                    "created_at": "2019-03-15T19:54:38Z",
                    "updated_at": "2019-03-18T09:22:37Z",
                    "watch": false,
                    "source": null,
                    "stripe_customer": null,
                    "user_flag": {
                        "id": 97971
                    }
                },
                "user_id": 404050,
                "batch_id": null,
                "to_address": {
                    "id": "adr_9e47e5f24567460392bea784f5b42b37",
                    "object": "Address",
                    "created_at": "2019-04-23T07:29:12Z",
                    "updated_at": "2019-04-23T07:29:15Z",
                    "name": "MARK RABENS",
                    "company": "USC DISTRIBUTION SERVICES",
                    "street1": "3015 ANA STREET",
                    "street2": "",
                    "city": "RANCHO DOMINGUEZ",
                    "state": "CA",
                    "zip": "90221-5604",
                    "country": "US",
                    "phone": "3106091153",
                    "email": "MARK.RABENS@EXEL.COM",
                    "mode": "test",
                    "carrier_facility": null,
                    "residential": false,
                    "federal_tax_id": null,
                    "state_tax_id": null,
                    "verifications": [
                        {
                            "id": 700813287,
                            "address_id": 2913662129,
                            "name": "zip4",
                            "success": true,
                            "results": [],
                            "created_at": "2019-04-23T07:29:15Z",
                            "updated_at": "2019-04-23T07:29:15Z",
                            "details": {
                                "elot_sequence": "0046",
                                "elot_sort": "D",
                                "county_fips": "06037",
                                "county_name": "Los Angeles",
                                "residential": false,
                                "congressional_district": "44",
                                "carrier_route": "C009",
                                "zip42": "90221-560415"
                            },
                            "user_id": 404050
                        }
                    ],
                    "_internal": {
                        "id": 2913662129,
                        "public_id": "adr_9e47e5f24567460392bea784f5b42b37",
                        "user_id": 404050,
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        }
                    }
                },
                "to_address_id": 2913662129,
                "from_address": {
                    "id": "adr_8faa18a799414a26a80fd2affbc360ed",
                    "object": "Address",
                    "created_at": "2019-04-23T07:29:12Z",
                    "updated_at": "2019-04-23T07:29:12Z",
                    "name": "Sue O'Hagen",
                    "company": "Frankford Candy & Chocolate Co",
                    "street1": "9300 Ashton Rd",
                    "street2": "",
                    "city": "Philadelphia",
                    "state": "PA",
                    "zip": "19114-3464",
                    "country": "US",
                    "phone": "2157355200",
                    "email": "sdurr@frankfordcandy.com",
                    "mode": "test",
                    "carrier_facility": null,
                    "residential": false,
                    "federal_tax_id": null,
                    "state_tax_id": null,
                    "verifications": [],
                    "_internal": {
                        "id": 2913662127,
                        "public_id": "adr_8faa18a799414a26a80fd2affbc360ed",
                        "user_id": 404050,
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        }
                    }
                },
                "from_address_id": 2913662127,
                "return_address": {
                    "id": "adr_8faa18a799414a26a80fd2affbc360ed",
                    "object": "Address",
                    "created_at": "2019-04-23T07:29:12Z",
                    "updated_at": "2019-04-23T07:29:12Z",
                    "name": "Sue O'Hagen",
                    "company": "Frankford Candy & Chocolate Co",
                    "street1": "9300 Ashton Rd",
                    "street2": "",
                    "city": "Philadelphia",
                    "state": "PA",
                    "zip": "19114-3464",
                    "country": "US",
                    "phone": "2157355200",
                    "email": "sdurr@frankfordcandy.com",
                    "mode": "test",
                    "carrier_facility": null,
                    "residential": false,
                    "federal_tax_id": null,
                    "state_tax_id": null,
                    "verifications": [],
                    "_internal": {
                        "id": 2913662127,
                        "public_id": "adr_8faa18a799414a26a80fd2affbc360ed",
                        "user_id": 404050,
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        }
                    }
                },
                "return_address_id": 2913662127,
                "buyer_address": {
                    "id": "adr_9e47e5f24567460392bea784f5b42b37",
                    "object": "Address",
                    "created_at": "2019-04-23T07:29:12Z",
                    "updated_at": "2019-04-23T07:29:15Z",
                    "name": "MARK RABENS",
                    "company": "USC DISTRIBUTION SERVICES",
                    "street1": "3015 ANA STREET",
                    "street2": "",
                    "city": "RANCHO DOMINGUEZ",
                    "state": "CA",
                    "zip": "90221-5604",
                    "country": "US",
                    "phone": "3106091153",
                    "email": "MARK.RABENS@EXEL.COM",
                    "mode": "test",
                    "carrier_facility": null,
                    "residential": false,
                    "federal_tax_id": null,
                    "state_tax_id": null,
                    "verifications": [
                        {
                            "id": 700813287,
                            "address_id": 2913662129,
                            "name": "zip4",
                            "success": true,
                            "results": [],
                            "created_at": "2019-04-23T07:29:15Z",
                            "updated_at": "2019-04-23T07:29:15Z",
                            "details": {
                                "elot_sequence": "0046",
                                "elot_sort": "D",
                                "county_fips": "06037",
                                "county_name": "Los Angeles",
                                "residential": false,
                                "congressional_district": "44",
                                "carrier_route": "C009",
                                "zip42": "90221-560415"
                            },
                            "user_id": 404050
                        }
                    ],
                    "_internal": {
                        "id": 2913662129,
                        "public_id": "adr_9e47e5f24567460392bea784f5b42b37",
                        "user_id": 404050,
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        }
                    }
                },
                "buyer_address_id": 2913662129,
                "selected_rate": "rate_4b2e32b9db6c4cfc9be9fbc2c9787e99",
                "rates": [
                    {
                        "id": "rate_4ff5b655f2ff456183ab2aa2dd35d63d",
                        "carrier_account_id": 430918,
                        "carrier": "USPS",
                        "service": "Priority",
                        "selected": false,
                        "rate_amount": "8.25"
                    },
                    {
                        "id": "rate_fda39dc190bc4be79f2489d531d4b7a6",
                        "carrier_account_id": 430918,
                        "carrier": "USPS",
                        "service": "Express",
                        "selected": false,
                        "rate_amount": "31.08"
                    },
                    {
                        "id": "rate_a4885222a259480898eb2737fb485416",
                        "carrier_account_id": 430918,
                        "carrier": "USPS",
                        "service": "ParcelSelect",
                        "selected": false,
                        "rate_amount": "7.95"
                    },
                    {
                        "id": "rate_4b2e32b9db6c4cfc9be9fbc2c9787e99",
                        "carrier_account_id": 430918,
                        "carrier": "USPS",
                        "service": "First",
                        "selected": true,
                        "rate_amount": "3.63"
                    }
                ],
                "postage_label": {
                    "id": 335653508,
                    "object": "PostageLabel",
                    "public_id": "pl_a7c45b79276d4e79b66f1374c86d43b7",
                    "mode": "test",
                    "user": {
                        "id": 404050,
                        "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                        "object": "User",
                        "parent_id": null,
                        "billing_user_id": 404050,
                        "name": "Russell Proos",
                        "email": "russ@2ship.com",
                        "phone_number": "9057618555",
                        "balance": "$0.00000",
                        "price_per_shipment": "0.01000",
                        "disabled": false,
                        "disabled_at": null,
                        "created_at": "2019-03-15T19:54:38Z",
                        "updated_at": "2019-03-18T09:22:37Z",
                        "watch": false,
                        "source": null,
                        "stripe_customer": null,
                        "user_flag": {
                            "id": 97971
                        }
                    },
                    "user_id": 404050,
                    "created_at": "2019-04-23T07:29:16Z",
                    "updated_at": "2019-04-23T07:29:16Z",
                    "date_advance": 0,
                    "integrated_form": "none",
                    "label_date": "2019-04-23T07:29:16Z",
                    "label_size": "4x6",
                    "url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20190423/264030d386ab456fb5b0bd607ad85938.png",
                    "pdf_url": null,
                    "zpl_url": null,
                    "epl2_url": null,
                    "rate_id": "rate_4b2e32b9db6c4cfc9be9fbc2c9787e99",
                    "selected_rate": "rate_4b2e32b9db6c4cfc9be9fbc2c9787e99"
                },
                "postage_label_id": 335653508,
                "carrier_account": {
                    "id": "ca_eb750c32d39c45ec9a540477423b428f",
                    "object": "CarrierAccount",
                    "type": "UspsAccount",
                    "clone": false,
                    "created_at": "2019-03-15T19:54:39Z",
                    "updated_at": "2019-04-17T07:20:19Z",
                    "description": "USPS Account",
                    "reference": null,
                    "readable": "USPS",
                    "logo": null,
                    "fields": {
                        "credentials": {
                            "company_name": {
                                "visibility": "visible",
                                "label": "Account Holder Name",
                                "value": "Russ Proos"
                            },
                            "address_street": {
                                "visibility": "visible",
                                "label": "Street Address",
                                "value": "2299 Kenmore Avenue"
                            },
                            "address_city": {
                                "visibility": "visible",
                                "label": "City",
                                "value": "Buffalo"
                            },
                            "address_state": {
                                "visibility": "visible",
                                "label": "State",
                                "value": "NY"
                            },
                            "address_zip": {
                                "visibility": "visible",
                                "label": "ZIP Code",
                                "value": "14207"
                            },
                            "phone": {
                                "visibility": "visible",
                                "label": "Phone Number",
                                "value": "9057618555214"
                            },
                            "email": {
                                "visibility": "visible",
                                "label": "Email Address",
                                "value": "russ@2ship.com"
                            },
                            "shipper_id": {
                                "visibility": "visible",
                                "label": "Shipper Identifier (Optional)",
                                "value": ""
                            }
                        }
                    },
                    "credentials": {
                        "company_name": "Russ Proos",
                        "address_street": "2299 Kenmore Avenue",
                        "address_city": "Buffalo",
                        "address_state": "NY",
                        "address_zip": "14207",
                        "phone": "9057618555214",
                        "email": "russ@2ship.com",
                        "shipper_id": ""
                    },
                    "test_credentials": null,
                    "_internal": {
                        "id": 430918,
                        "public_id": "ca_eb750c32d39c45ec9a540477423b428f",
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        },
                        "user_id": 404050,
                        "payment_mode": "aggregation",
                        "shared_tracking_account": false,
                        "default_account": false,
                        "disabled_at": false,
                        "disabled": false
                    }
                },
                "carrier_account_id": 430918,
                "parcel": {
                    "id": "prcl_545cccc851884c759c6f87a198daa33c",
                    "object": "Parcel",
                    "created_at": "2019-04-23T07:29:14Z",
                    "updated_at": "2019-04-23T07:29:14Z",
                    "length": 1,
                    "width": 1,
                    "height": 1,
                    "predefined_package": null,
                    "weight": 8,
                    "mode": "test",
                    "_internal": {
                        "id": 895782965,
                        "public_id": "prcl_545cccc851884c759c6f87a198daa33c",
                        "user": {
                            "id": 404050,
                            "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                            "object": "User",
                            "parent_id": null,
                            "billing_user_id": 404050,
                            "name": "Russell Proos",
                            "email": "russ@2ship.com",
                            "phone_number": "9057618555",
                            "balance": "$0.00000",
                            "price_per_shipment": "0.01000",
                            "disabled": false,
                            "disabled_at": null,
                            "created_at": "2019-03-15T19:54:38Z",
                            "updated_at": "2019-03-18T09:22:37Z",
                            "watch": false,
                            "source": null,
                            "stripe_customer": null,
                            "user_flag": {
                                "id": 97971
                            }
                        },
                        "user_id": 404050
                    }
                },
                "parcel_id": 895782965,
                "insurance_id": null,
                "customs_info": null,
                "customs_info_id": null,
                "scan_form": null,
                "scan_form_id": null,
                "tracker": {
                    "id": "trk_5a3599ac2b304c0da21b5869cd63cc7b",
                    "object": "Tracker",
                    "mode": "test",
                    "tracking_code": "9400136897846022215014",
                    "status": "delivered",
                    "status_detail": "arrived_at_destination",
                    "created_at": "2019-04-23T07:29:17Z",
                    "updated_at": "2019-04-23T07:32:17Z",
                    "signed_by": "John Tester",
                    "weight": null,
                    "est_delivery_date": "2019-04-23T07:32:17Z",
                    "shipment_id": "shp_c5b4a5c74b6f4e809c1899d8d10721ea",
                    "carrier": "USPS",
                    "tracking_details": [
                        {
                            "object": "TrackingDetail",
                            "message": "Pre-Shipment Info Sent to USPS",
                            "description": null,
                            "status": "pre_transit",
                            "status_detail": "status_update",
                            "datetime": "2019-03-23T07:32:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": null,
                                "state": null,
                                "country": null,
                                "zip": null
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Shipping Label Created",
                            "description": null,
                            "status": "pre_transit",
                            "status_detail": "status_update",
                            "datetime": "2019-03-23T20:09:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "HOUSTON",
                                "state": "TX",
                                "country": null,
                                "zip": "77063"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Arrived at USPS Origin Facility",
                            "description": null,
                            "status": "in_transit",
                            "status_detail": "arrived_at_facility",
                            "datetime": "2019-03-24T06:14:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "NORTH HOUSTON",
                                "state": "TX",
                                "country": null,
                                "zip": "77315"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Arrived at USPS Facility",
                            "description": null,
                            "status": "in_transit",
                            "status_detail": "arrived_at_facility",
                            "datetime": "2019-03-25T07:50:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "COLUMBIA",
                                "state": "SC",
                                "country": null,
                                "zip": "29201"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Arrived at Post Office",
                            "description": null,
                            "status": "in_transit",
                            "status_detail": "arrived_at_facility",
                            "datetime": "2019-03-25T10:41:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "CHARLESTON",
                                "state": "SC",
                                "country": null,
                                "zip": "29407"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Sorting Complete",
                            "description": null,
                            "status": "in_transit",
                            "status_detail": "status_update",
                            "datetime": "2019-03-25T16:21:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "CHARLESTON",
                                "state": "SC",
                                "country": null,
                                "zip": "29407"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Out for Delivery",
                            "description": null,
                            "status": "out_for_delivery",
                            "status_detail": "out_for_delivery",
                            "datetime": "2019-03-25T16:31:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "CHARLESTON",
                                "state": "SC",
                                "country": null,
                                "zip": "29407"
                            }
                        },
                        {
                            "object": "TrackingDetail",
                            "message": "Delivered",
                            "description": null,
                            "status": "delivered",
                            "status_detail": "arrived_at_destination",
                            "datetime": "2019-03-25T21:23:17Z",
                            "source": "USPS",
                            "carrier_code": null,
                            "tracking_location": {
                                "object": "TrackingLocation",
                                "city": "CHARLESTON",
                                "state": "SC",
                                "country": null,
                                "zip": "29407"
                            }
                        }
                    ],
                    "carrier_detail": {
                        "object": "CarrierDetail",
                        "service": "First-Class Package Service",
                        "container_type": null,
                        "est_delivery_date_local": null,
                        "est_delivery_time_local": null,
                        "origin_location": "HOUSTON TX, 77001",
                        "origin_tracking_location": {
                            "object": "TrackingLocation",
                            "city": "NORTH HOUSTON",
                            "state": "TX",
                            "country": null,
                            "zip": "77315"
                        },
                        "destination_location": "CHARLESTON SC, 29401",
                        "destination_tracking_location": {
                            "object": "TrackingLocation",
                            "city": "CHARLESTON",
                            "state": "SC",
                            "country": null,
                            "zip": "29407"
                        },
                        "guaranteed_delivery_date": null,
                        "alternate_identifier": null,
                        "initial_delivery_attempt": "2019-03-25T21:23:17Z"
                    },
                    "finalized": true,
                    "is_return": false,
                    "public_url": "https://track.easypost.com/djE6dHJrXzVhMzU5OWFjMmIzMDRjMGRhMjFiNTg2OWNkNjNjYzdi",
                    "fees": []
                },
                "tracker_id": "trk_5a3599ac2b304c0da21b5869cd63cc7b",
                "order_id": 41641946,
                "refund": null,
                "refund_id": null,
                "forms": [],
                "fees": [
                    {
                        "object": "Fee",
                        "type": "LabelFee",
                        "amount": "0.01000",
                        "charged": true,
                        "refunded": false,
                        "_internal": {
                            "id": 769721521,
                            "user": {
                                "id": 404050,
                                "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                                "object": "User",
                                "parent_id": null,
                                "billing_user_id": 404050,
                                "name": "Russell Proos",
                                "email": "russ@2ship.com",
                                "phone_number": "9057618555",
                                "balance": "$0.00000",
                                "price_per_shipment": "0.01000",
                                "disabled": false,
                                "disabled_at": null,
                                "created_at": "2019-03-15T19:54:38Z",
                                "updated_at": "2019-03-18T09:22:37Z",
                                "watch": false,
                                "source": null,
                                "stripe_customer": null,
                                "user_flag": {
                                    "id": 97971
                                }
                            },
                            "user_id": 404050,
                            "payment_log": null,
                            "payment_log_id": null,
                            "created_at": "2019-04-23T07:29:16Z"
                        }
                    },
                    {
                        "object": "Fee",
                        "type": "PostageFee",
                        "amount": "3.63000",
                        "charged": true,
                        "refunded": false,
                        "_internal": {
                            "id": 769721522,
                            "user": {
                                "id": 404050,
                                "public_id": "user_d47e9d3510fa479fbdab9d032de31180",
                                "object": "User",
                                "parent_id": null,
                                "billing_user_id": 404050,
                                "name": "Russell Proos",
                                "email": "russ@2ship.com",
                                "phone_number": "9057618555",
                                "balance": "$0.00000",
                                "price_per_shipment": "0.01000",
                                "disabled": false,
                                "disabled_at": null,
                                "created_at": "2019-03-15T19:54:38Z",
                                "updated_at": "2019-03-18T09:22:37Z",
                                "watch": false,
                                "source": null,
                                "stripe_customer": null,
                                "user_flag": {
                                    "id": 97971
                                }
                            },
                            "user_id": 404050,
                            "payment_log": null,
                            "payment_log_id": null,
                            "created_at": "2019-04-23T07:29:16Z"
                        }
                    }
                ]
            },
            "rates": [
                {
                    "object": "Rate",
                    "created_at": "2019-04-23T07:29:15Z",
                    "updated_at": "2019-04-23T07:29:15Z",
                    "mode": "test",
                    "service": "Priority",
                    "carrier": "USPS",
                    "rate": "8.25",
                    "currency": "USD",
                    "retail_rate": "9.30",
                    "retail_currency": "USD",
                    "list_rate": "8.25",
                    "list_currency": "USD",
                    "delivery_days": 2,
                    "delivery_date": null,
                    "delivery_date_guaranteed": false,
                    "est_delivery_days": 2,
                    "shipment_id": "shp_c5b4a5c74b6f4e809c1899d8d10721ea",
                    "carrier_account_id": "ca_eb750c32d39c45ec9a540477423b428f",
                    "id": "rate_4ff5b655f2ff456183ab2aa2dd35d63d"
                },
                {
                    "object": "Rate",
                    "created_at": "2019-04-23T07:29:15Z",
                    "updated_at": "2019-04-23T07:29:15Z",
                    "mode": "test",
                    "service": "Express",
                    "carrier": "USPS",
                    "rate": "31.08",
                    "currency": "USD",
                    "retail_rate": "35.20",
                    "retail_currency": "USD",
                    "list_rate": "31.08",
                    "list_currency": "USD",
                    "delivery_days": null,
                    "delivery_date": null,
                    "delivery_date_guaranteed": false,
                    "est_delivery_days": null,
                    "shipment_id": "shp_c5b4a5c74b6f4e809c1899d8d10721ea",
                    "carrier_account_id": "ca_eb750c32d39c45ec9a540477423b428f",
                    "id": "rate_fda39dc190bc4be79f2489d531d4b7a6"
                },
                {
                    "object": "Rate",
                    "created_at": "2019-04-23T07:29:15Z",
                    "updated_at": "2019-04-23T07:29:15Z",
                    "mode": "test",
                    "service": "ParcelSelect",
                    "carrier": "USPS",
                    "rate": "7.95",
                    "currency": "USD",
                    "retail_rate": "7.95",
                    "retail_currency": "USD",
                    "list_rate": "7.95",
                    "list_currency": "USD",
                    "delivery_days": 7,
                    "delivery_date": null,
                    "delivery_date_guaranteed": false,
                    "est_delivery_days": 7,
                    "shipment_id": "shp_c5b4a5c74b6f4e809c1899d8d10721ea",
                    "carrier_account_id": "ca_eb750c32d39c45ec9a540477423b428f",
                    "id": "rate_a4885222a259480898eb2737fb485416"
                },
                {
                    "object": "Rate",
                    "created_at": "2019-04-23T07:29:15Z",
                    "updated_at": "2019-04-23T07:29:15Z",
                    "mode": "test",
                    "service": "First",
                    "carrier": "USPS",
                    "rate": "3.63",
                    "currency": "USD",
                    "retail_rate": "4.81",
                    "retail_currency": "USD",
                    "list_rate": "3.63",
                    "list_currency": "USD",
                    "delivery_days": 3,
                    "delivery_date": null,
                    "delivery_date_guaranteed": false,
                    "est_delivery_days": 3,
                    "shipment_id": "shp_c5b4a5c74b6f4e809c1899d8d10721ea",
                    "carrier_account_id": "ca_eb750c32d39c45ec9a540477423b428f",
                    "id": "rate_4b2e32b9db6c4cfc9be9fbc2c9787e99"
                }
            ],
            "forms": [],
            "fees": [
                {
                    "object": "Fee",
                    "type": "LabelFee",
                    "amount": "0.01000",
                    "charged": true,
                    "refunded": false
                },
                {
                    "object": "Fee",
                    "type": "PostageFee",
                    "amount": "3.63000",
                    "charged": true,
                    "refunded": false
                }
            ],
            "id": "shp_c5b4a5c74b6f4e809c1899d8d10721ea"
        }
    ]
}//<<<<< o.ent JSON object goes here like {}
//============= 

const order = new api.Order({
    to_address: o.to_address,
    from_address: o.from_address,
    shipments: [
        new api.Shipment({
            parcel: o.shipments[0].parcel,
            options: {
                label_format: "PDF",
            },
        })
    ],
    carrier_accounts: [process.env.USPS],

})

order.save().then(console.log).catch(console.log);
// api.Order.retrieve(order.id).then(order => {
//     order.buy('USPS', 'Priority').then(console.log).catch(console.error)
// });

