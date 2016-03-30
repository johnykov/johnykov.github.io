var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15600",
        "ok": "13651",
        "ko": "1949"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "2",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "36080",
        "ok": "36080",
        "ko": "34924"
    },
    "meanResponseTime": {
        "total": "5470",
        "ok": "4090",
        "ko": "15136"
    },
    "standardDeviation": {
        "total": "7782",
        "ok": "4849",
        "ko": "14603"
    },
    "percentiles1": {
        "total": "2639",
        "ok": "2093",
        "ko": "6731"
    },
    "percentiles2": {
        "total": "8064",
        "ok": "7732",
        "ko": "32504"
    },
    "percentiles3": {
        "total": "28381",
        "ok": "11044",
        "ko": "34172"
    },
    "percentiles4": {
        "total": "34091",
        "ok": "20873",
        "ko": "34493"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5911,
        "percentage": 38
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 356,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7384,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 1949,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "169.652",
        "ok": "148.456",
        "ko": "21.196"
    }
},
contents: {
"req_bootzooka-467f6": {
        type: "REQUEST",
        name: "bootzooka",
path: "bootzooka",
pathFormatted: "req_bootzooka-467f6",
stats: {
    "name": "bootzooka",
    "numberOfRequests": {
        "total": "7800",
        "ok": "6562",
        "ko": "1238"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "2",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "34924",
        "ok": "34581",
        "ko": "34924"
    },
    "meanResponseTime": {
        "total": "5861",
        "ok": "3175",
        "ko": "20094"
    },
    "standardDeviation": {
        "total": "9738",
        "ok": "5303",
        "ko": "14408"
    },
    "percentiles1": {
        "total": "1348",
        "ok": "492",
        "ko": "30885"
    },
    "percentiles2": {
        "total": "6771",
        "ok": "4257",
        "ko": "33187"
    },
    "percentiles3": {
        "total": "32636",
        "ok": "17810",
        "ko": "34242"
    },
    "percentiles4": {
        "total": "34205",
        "ok": "25636",
        "ko": "34592"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3484,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 230,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2848,
        "percentage": 37
    },
    "group4": {
        "name": "failed",
        "count": 1238,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "84.826",
        "ok": "71.363",
        "ko": "13.463"
    }
}
    },"req_registration-56387": {
        type: "REQUEST",
        name: "registration",
path: "registration",
pathFormatted: "req_registration-56387",
stats: {
    "name": "registration",
    "numberOfRequests": {
        "total": "7800",
        "ok": "7089",
        "ko": "711"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "24",
        "ko": "23"
    },
    "maxResponseTime": {
        "total": "36080",
        "ok": "36080",
        "ko": "34548"
    },
    "meanResponseTime": {
        "total": "5080",
        "ok": "4938",
        "ko": "6503"
    },
    "standardDeviation": {
        "total": "5097",
        "ok": "4214",
        "ko": "10284"
    },
    "percentiles1": {
        "total": "5155",
        "ok": "5514",
        "ko": "1897"
    },
    "percentiles2": {
        "total": "8415",
        "ok": "8459",
        "ko": "5213"
    },
    "percentiles3": {
        "total": "10604",
        "ok": "10357",
        "ko": "33288"
    },
    "percentiles4": {
        "total": "30879",
        "ok": "13324",
        "ko": "34097"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2427,
        "percentage": 31
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 126,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4536,
        "percentage": 58
    },
    "group4": {
        "name": "failed",
        "count": 711,
        "percentage": 9
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "84.826",
        "ok": "77.094",
        "ko": "7.732"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
