const stateNameFont = "sans-serif"
const stateDataFont = "verdana"

const vw = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 1000
)
const isSafari =
  navigator.vendor &&
  navigator.vendor.indexOf("Apple") > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf("CriOS") == -1 &&
  navigator.userAgent.indexOf("FxiOS") == -1

const date = new Date()
const month = date.toLocaleString("default", { month: "long" })
const day = date.getDate()
const year = date.getFullYear()

const todaysDate = `${month} ${day}, ${year}`

let data = [
  [
    {
      dateInfo: { month: "April", day: 2, year: 2020 },
      date: "April 2, 2020",
      state: "New York",
      cases: 93053,
      todayCases: 0,
      deaths: 2538,
      todayDeaths: 0,
      active: 83081
    },
    {
      state: "New Jersey",
      cases: 25590,
      todayCases: 0,
      deaths: 537,
      todayDeaths: 0,
      active: 25053
    },
    {
      state: "California",
      cases: 11027,
      todayCases: 189,
      deaths: 239,
      todayDeaths: 5,
      active: 9938
    },
    {
      state: "Michigan",
      cases: 10791,
      todayCases: 0,
      deaths: 417,
      todayDeaths: 0,
      active: 10369
    },
    {
      state: "Louisiana",
      cases: 9150,
      todayCases: 0,
      deaths: 310,
      todayDeaths: 0,
      active: 8820
    },
    {
      state: "Florida",
      cases: 9008,
      todayCases: 0,
      deaths: 144,
      todayDeaths: 0,
      active: 8864
    },
    {
      state: "Massachusetts",
      cases: 8966,
      todayCases: 0,
      deaths: 154,
      todayDeaths: 0,
      active: 8802
    },
    {
      state: "Illinois",
      cases: 7695,
      todayCases: 0,
      deaths: 157,
      todayDeaths: 0,
      active: 7536
    },
    {
      state: "Pennsylvania",
      cases: 7264,
      todayCases: 0,
      deaths: 90,
      todayDeaths: 0,
      active: 7136
    },
    {
      state: "Washington",
      cases: 6585,
      todayCases: 0,
      deaths: 272,
      todayDeaths: 0,
      active: 5750
    },
    {
      state: "Georgia",
      cases: 5348,
      todayCases: 0,
      deaths: 163,
      todayDeaths: 0,
      active: 5185
    },
    {
      state: "Texas",
      cases: 4823,
      todayCases: 0,
      deaths: 77,
      todayDeaths: 0,
      active: 4639
    },
    {
      state: "Connecticut",
      cases: 3824,
      todayCases: 0,
      deaths: 112,
      todayDeaths: 0,
      active: 3712
    },
    {
      state: "Colorado",
      cases: 3728,
      todayCases: 0,
      deaths: 97,
      todayDeaths: 0,
      active: 3631
    },
    {
      state: "Tennessee",
      cases: 3194,
      todayCases: 0,
      deaths: 32,
      todayDeaths: 0,
      active: 2942
    },
    {
      state: "Indiana",
      cases: 3039,
      todayCases: 0,
      deaths: 78,
      todayDeaths: 0,
      active: 2961
    },
    {
      state: "Ohio",
      cases: 2902,
      todayCases: 0,
      deaths: 81,
      todayDeaths: 0,
      active: 2821
    },
    {
      state: "Maryland",
      cases: 2331,
      todayCases: 0,
      deaths: 36,
      todayDeaths: 0,
      active: 2214
    },
    {
      state: "North Carolina",
      cases: 2023,
      todayCases: 0,
      deaths: 18,
      todayDeaths: 0,
      active: 1985
    },
    {
      state: "Missouri",
      cases: 1834,
      todayCases: 0,
      deaths: 19,
      todayDeaths: 0,
      active: 1813
    },
    {
      state: "Wisconsin",
      cases: 1730,
      todayCases: 0,
      deaths: 38,
      todayDeaths: 0,
      active: 1690
    },
    {
      state: "Virginia",
      cases: 1706,
      todayCases: 0,
      deaths: 41,
      todayDeaths: 0,
      active: 1663
    },
    {
      state: "Arizona",
      cases: 1598,
      todayCases: 0,
      deaths: 32,
      todayDeaths: 0,
      active: 1563
    },
    {
      state: "South Carolina",
      cases: 1554,
      todayCases: 0,
      deaths: 31,
      todayDeaths: 0,
      active: 1523
    },
    {
      state: "Nevada",
      cases: 1458,
      todayCases: 0,
      deaths: 38,
      todayDeaths: 0,
      active: 1420
    },
    {
      state: "Alabama",
      cases: 1261,
      todayCases: 0,
      deaths: 32,
      todayDeaths: 0,
      active: 1229
    },
    {
      state: "Mississippi",
      cases: 1177,
      todayCases: 0,
      deaths: 26,
      todayDeaths: 0,
      active: 1151
    },
    {
      state: "Utah",
      cases: 1074,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      active: 1067
    },
    {
      state: "Idaho",
      cases: 891,
      todayCases: 0,
      deaths: 9,
      todayDeaths: 0,
      active: 882
    },
    {
      state: "Oklahoma",
      cases: 879,
      todayCases: 0,
      deaths: 34,
      todayDeaths: 0,
      active: 844
    },
    {
      state: "Oregon",
      cases: 826,
      todayCases: 0,
      deaths: 21,
      todayDeaths: 0,
      active: 805
    },
    {
      state: "Kentucky",
      cases: 770,
      todayCases: 0,
      deaths: 31,
      todayDeaths: 0,
      active: 675
    },
    {
      state: "Minnesota",
      cases: 742,
      todayCases: 0,
      deaths: 18,
      todayDeaths: 0,
      active: 436
    },
    {
      state: "Arkansas",
      cases: 683,
      todayCases: 0,
      deaths: 12,
      todayDeaths: 0,
      active: 621
    },
    {
      state: "Rhode Island",
      cases: 657,
      todayCases: 0,
      deaths: 12,
      todayDeaths: 0,
      active: 645
    },
    {
      state: "District Of Columbia",
      cases: 653,
      todayCases: 0,
      deaths: 12,
      todayDeaths: 0,
      active: 468
    },
    {
      state: "Iowa",
      cases: 614,
      todayCases: 0,
      deaths: 11,
      todayDeaths: 0,
      active: 585
    },
    {
      state: "Kansas",
      cases: 552,
      todayCases: 0,
      deaths: 13,
      todayDeaths: 0,
      active: 539
    },
    {
      state: "New Hampshire",
      cases: 479,
      todayCases: 0,
      deaths: 5,
      todayDeaths: 0,
      active: 383
    },
    {
      state: "New Mexico",
      cases: 403,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      active: 396
    },
    {
      state: "Delaware",
      cases: 393,
      todayCases: 0,
      deaths: 12,
      todayDeaths: 0,
      active: 332
    },
    {
      state: "Maine",
      cases: 376,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      active: 275
    },
    {
      state: "Vermont",
      cases: 338,
      todayCases: 0,
      deaths: 17,
      todayDeaths: 0,
      active: 321
    },
    {
      state: "Hawaii",
      cases: 285,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 226
    },
    {
      state: "Nebraska",
      cases: 246,
      todayCases: 0,
      deaths: 5,
      todayDeaths: 0,
      active: 241
    },
    {
      state: "Montana",
      cases: 241,
      todayCases: 14,
      deaths: 6,
      todayDeaths: 0,
      active: 235
    },
    {
      state: "West Virginia",
      cases: 217,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 215
    },
    {
      state: "South Dakota",
      cases: 165,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 106
    },
    {
      state: "North Dakota",
      cases: 159,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 0,
      active: 113
    },
    {
      state: "Wyoming",
      cases: 150,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 124
    },
    {
      state: "Alaska",
      cases: 143,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 0,
      active: 140
    },
    {
      state: "Guam",
      cases: 82,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 0,
      active: 72
    },
    {
      state: "Northern Mariana Islands",
      cases: 8,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 7
    },
    {
      state: "Puerto Rico",
      cases: 316,
      todayCases: 0,
      deaths: 12,
      todayDeaths: 0,
      active: 300
    },
    {
      state: "United States Virgin Islands",
      cases: 30,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 9
    },
    {
      state: "Wuhan Repatriated",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 3
    },
    {
      state: "Diamond Princess Cruise",
      cases: 46,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 46
    }
  ],
  [
    {
      dateInfo: { month: "March", day: 31, year: 2020 },
      date: "March 31, 2020",
      state: "New York",
      cases: 75795,
      todayCases: 8470,
      deaths: 1550,
      todayDeaths: 208,
      active: 69270
    },
    {
      state: "New Jersey",
      cases: 16636,
      todayCases: 0,
      deaths: 198,
      todayDeaths: 0,
      active: 16438
    },
    {
      state: "California",
      cases: 7453,
      todayCases: 205,
      deaths: 149,
      todayDeaths: 4,
      active: 7244
    },
    {
      state: "Michigan",
      cases: 6498,
      todayCases: 0,
      deaths: 184,
      todayDeaths: 0,
      active: 6309
    },
    {
      state: "Florida",
      cases: 6338,
      todayCases: 634,
      deaths: 77,
      todayDeaths: 6,
      active: 6261
    },
    {
      state: "Massachusetts",
      cases: 5752,
      todayCases: 0,
      deaths: 56,
      todayDeaths: 0,
      active: 5686
    },
    {
      state: "Washington",
      cases: 5250,
      todayCases: 0,
      deaths: 210,
      todayDeaths: 0,
      active: 4550
    },
    {
      state: "Illinois",
      cases: 5057,
      todayCases: 0,
      deaths: 73,
      todayDeaths: 0,
      active: 4982
    },
    {
      state: "Pennsylvania",
      cases: 4843,
      todayCases: 689,
      deaths: 63,
      todayDeaths: 12,
      active: 4780
    },
    {
      state: "Louisiana",
      cases: 4025,
      todayCases: 0,
      deaths: 185,
      todayDeaths: 0,
      active: 3840
    },
    {
      state: "Georgia",
      cases: 3817,
      todayCases: 785,
      deaths: 108,
      todayDeaths: 6,
      active: 3709
    },
    {
      state: "Texas",
      cases: 3186,
      todayCases: 280,
      deaths: 47,
      todayDeaths: 6,
      active: 3032
    },
    {
      state: "Colorado",
      cases: 2627,
      todayCases: 0,
      deaths: 51,
      todayDeaths: 0,
      active: 2576
    },
    {
      state: "Connecticut",
      cases: 2571,
      todayCases: 0,
      deaths: 36,
      todayDeaths: 0,
      active: 2535
    },
    {
      state: "Indiana",
      cases: 2159,
      todayCases: 373,
      deaths: 49,
      todayDeaths: 14,
      active: 2110
    },
    {
      state: "Tennessee",
      cases: 2026,
      todayCases: 98,
      deaths: 13,
      todayDeaths: 0,
      active: 1961
    },
    {
      state: "Ohio",
      cases: 1933,
      todayCases: 0,
      deaths: 39,
      todayDeaths: 0,
      active: 1894
    },
    {
      state: "Maryland",
      cases: 1660,
      todayCases: 247,
      deaths: 18,
      todayDeaths: 3,
      active: 1589
    },
    {
      state: "North Carolina",
      cases: 1498,
      todayCases: 125,
      deaths: 8,
      todayDeaths: 1,
      active: 1485
    },
    {
      state: "Arizona",
      cases: 1289,
      todayCases: 132,
      deaths: 24,
      todayDeaths: 4,
      active: 1262
    },
    {
      state: "Wisconsin",
      cases: 1285,
      todayCases: 0,
      deaths: 23,
      todayDeaths: 0,
      active: 1260
    },
    {
      state: "Virginia",
      cases: 1250,
      todayCases: 230,
      deaths: 27,
      todayDeaths: 2,
      active: 1221
    },
    {
      state: "Nevada",
      cases: 1044,
      todayCases: 36,
      deaths: 17,
      todayDeaths: 2,
      active: 1027
    },
    {
      state: "Missouri",
      cases: 1031,
      todayCases: 0,
      deaths: 13,
      todayDeaths: 0,
      active: 1016
    },
    {
      state: "Alabama",
      cases: 947,
      todayCases: 12,
      deaths: 11,
      todayDeaths: 0,
      active: 936
    },
    {
      state: "Mississippi",
      cases: 937,
      todayCases: 90,
      deaths: 20,
      todayDeaths: 4,
      active: 917
    },
    {
      state: "South Carolina",
      cases: 925,
      todayCases: 0,
      deaths: 18,
      todayDeaths: 0,
      active: 907
    },
    {
      state: "Utah",
      cases: 806,
      todayCases: 0,
      deaths: 4,
      todayDeaths: 0,
      active: 802
    },
    {
      state: "Minnesota",
      cases: 629,
      todayCases: 53,
      deaths: 12,
      todayDeaths: 2,
      active: 483
    },
    {
      state: "Oregon",
      cases: 606,
      todayCases: 0,
      deaths: 16,
      todayDeaths: 0,
      active: 590
    },
    {
      state: "Oklahoma",
      cases: 565,
      todayCases: 84,
      deaths: 23,
      todayDeaths: 6,
      active: 541
    },
    {
      state: "Arkansas",
      cases: 508,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      active: 469
    },
    {
      state: "District Of Columbia",
      cases: 495,
      todayCases: 0,
      deaths: 9,
      todayDeaths: 0,
      active: 435
    },
    {
      state: "Kentucky",
      cases: 480,
      todayCases: 0,
      deaths: 11,
      todayDeaths: 0,
      active: 405
    },
    {
      state: "Iowa",
      cases: 424,
      todayCases: 0,
      deaths: 6,
      todayDeaths: 0,
      active: 400
    },
    {
      state: "Idaho",
      cases: 415,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      active: 408
    },
    {
      state: "Rhode Island",
      cases: 408,
      todayCases: 0,
      deaths: 4,
      todayDeaths: 0,
      active: 404
    },
    {
      state: "Kansas",
      cases: 368,
      todayCases: 0,
      deaths: 8,
      todayDeaths: 0,
      active: 360
    },
    {
      state: "New Hampshire",
      cases: 314,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 0,
      active: 311
    },
    {
      state: "Maine",
      cases: 303,
      todayCases: 28,
      deaths: 5,
      todayDeaths: 2,
      active: 230
    },
    {
      state: "Vermont",
      cases: 293,
      todayCases: 37,
      deaths: 13,
      todayDeaths: 1,
      active: 280
    },
    {
      state: "New Mexico",
      cases: 281,
      todayCases: 0,
      deaths: 4,
      todayDeaths: 0,
      active: 277
    },
    {
      state: "Delaware",
      cases: 264,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 1,
      active: 248
    },
    {
      state: "Hawaii",
      cases: 204,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 204
    },
    {
      state: "Montana",
      cases: 185,
      todayCases: 14,
      deaths: 4,
      todayDeaths: 0,
      active: 181
    },
    {
      state: "Nebraska",
      cases: 153,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 1,
      active: 150
    },
    {
      state: "West Virginia",
      cases: 145,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 144
    },
    {
      state: "North Dakota",
      cases: 122,
      todayCases: 13,
      deaths: 3,
      todayDeaths: 1,
      active: 94
    },
    {
      state: "Alaska",
      cases: 119,
      todayCases: 5,
      deaths: 3,
      todayDeaths: 1,
      active: 116
    },
    {
      state: "Wyoming",
      cases: 109,
      todayCases: 14,
      deaths: 0,
      todayDeaths: 0,
      active: 83
    },
    {
      state: "South Dakota",
      cases: 101,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 66
    },
    {
      state: "Guam",
      cases: 69,
      todayCases: 11,
      deaths: 2,
      todayDeaths: 1,
      active: 60
    },
    {
      state: "Northern Mariana Islands",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 2
    },
    {
      state: "Puerto Rico",
      cases: 239,
      todayCases: 65,
      deaths: 8,
      todayDeaths: 2,
      active: 227
    },
    {
      state: "United States Virgin Islands",
      cases: 30,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 30
    },
    {
      state: "Wuhan Repatriated",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 3
    },
    {
      state: "Diamond Princess Cruise",
      cases: 46,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 46
    }
  ],
  [
    {
      dateInfo: { month: "March", day: 29, year: 2020 },
      date: "March 29, 2020",
      state: "New York",
      cases: 59513,
      todayCases: 6120,
      deaths: 965,
      todayDeaths: 82,
      active: 54976
    },
    {
      state: "New Jersey",
      cases: 13386,
      todayCases: 2262,
      deaths: 161,
      todayDeaths: 21,
      active: 13225
    },
    {
      state: "California",
      cases: 5718,
      todayCases: 169,
      deaths: 123,
      todayDeaths: 4,
      active: 5574
    },
    {
      state: "Michigan",
      cases: 4658,
      todayCases: 8,
      deaths: 111,
      todayDeaths: 0,
      active: 4542
    },
    {
      state: "Washington",
      cases: 4310,
      todayCases: 0,
      deaths: 189,
      todayDeaths: 0,
      active: 3825
    },
    {
      state: "Massachusetts",
      cases: 4257,
      todayCases: 0,
      deaths: 44,
      todayDeaths: 0,
      active: 4212
    },
    {
      state: "Florida",
      cases: 4246,
      todayCases: 208,
      deaths: 56,
      todayDeaths: 0,
      active: 4190
    },
    {
      state: "Louisiana",
      cases: 3540,
      todayCases: 225,
      deaths: 151,
      todayDeaths: 14,
      active: 3389
    },
    {
      state: "Illinois",
      cases: 3491,
      todayCases: 0,
      deaths: 47,
      todayDeaths: 0,
      active: 3442
    },
    {
      state: "Pennsylvania",
      cases: 3419,
      todayCases: 668,
      deaths: 38,
      todayDeaths: 4,
      active: 3381
    },
    {
      state: "Georgia",
      cases: 2651,
      todayCases: 205,
      deaths: 80,
      todayDeaths: 1,
      active: 2571
    },
    {
      state: "Texas",
      cases: 2521,
      todayCases: 192,
      deaths: 34,
      todayDeaths: 4,
      active: 2418
    },
    {
      state: "Colorado",
      cases: 2061,
      todayCases: 0,
      deaths: 44,
      todayDeaths: 0,
      active: 2017
    },
    {
      state: "Connecticut",
      cases: 1524,
      todayCases: 0,
      deaths: 33,
      todayDeaths: 0,
      active: 1491
    },
    {
      state: "Indiana",
      cases: 1514,
      todayCases: 282,
      deaths: 32,
      todayDeaths: 1,
      active: 1482
    },
    {
      state: "Tennessee",
      cases: 1512,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      active: 1505
    },
    {
      state: "Ohio",
      cases: 1406,
      todayCases: 0,
      deaths: 25,
      todayDeaths: 0,
      active: 1381
    },
    {
      state: "Maryland",
      cases: 1239,
      todayCases: 247,
      deaths: 10,
      todayDeaths: 5,
      active: 1197
    },
    {
      state: "North Carolina",
      cases: 1124,
      todayCases: 102,
      deaths: 6,
      todayDeaths: 2,
      active: 1118
    },
    {
      state: "Wisconsin",
      cases: 1059,
      todayCases: 70,
      deaths: 15,
      todayDeaths: 0,
      active: 1042
    },
    {
      state: "Arizona",
      cases: 919,
      todayCases: 146,
      deaths: 17,
      todayDeaths: 2,
      active: 899
    },
    {
      state: "Nevada",
      cases: 890,
      todayCases: 269,
      deaths: 22,
      todayDeaths: 8,
      active: 868
    },
    {
      state: "Virginia",
      cases: 890,
      todayCases: 151,
      deaths: 22,
      todayDeaths: 5,
      active: 866
    },
    {
      state: "Missouri",
      cases: 838,
      todayCases: 0,
      deaths: 10,
      todayDeaths: 0,
      active: 826
    },
    {
      state: "Alabama",
      cases: 767,
      todayCases: 65,
      deaths: 4,
      todayDeaths: 0,
      active: 763
    },
    {
      state: "Mississippi",
      cases: 758,
      todayCases: 95,
      deaths: 14,
      todayDeaths: 1,
      active: 744
    },
    {
      state: "South Carolina",
      cases: 660,
      todayCases: 0,
      deaths: 15,
      todayDeaths: 0,
      active: 645
    },
    {
      state: "Utah",
      cases: 602,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 600
    },
    {
      state: "Oregon",
      cases: 548,
      todayCases: 69,
      deaths: 13,
      todayDeaths: 0,
      active: 535
    },
    {
      state: "Minnesota",
      cases: 503,
      todayCases: 62,
      deaths: 9,
      todayDeaths: 4,
      active: 360
    },
    {
      state: "Oklahoma",
      cases: 429,
      todayCases: 52,
      deaths: 16,
      todayDeaths: 1,
      active: 412
    },
    {
      state: "Arkansas",
      cases: 409,
      todayCases: 0,
      deaths: 5,
      todayDeaths: 0,
      active: 378
    },
    {
      state: "Kentucky",
      cases: 394,
      todayCases: 0,
      deaths: 8,
      todayDeaths: 0,
      active: 322
    },
    {
      state: "District Of Columbia",
      cases: 342,
      todayCases: 0,
      deaths: 5,
      todayDeaths: 1,
      active: 286
    },
    {
      state: "Iowa",
      cases: 336,
      todayCases: 38,
      deaths: 3,
      todayDeaths: 0,
      active: 315
    },
    {
      state: "Rhode Island",
      cases: 294,
      todayCases: 55,
      deaths: 3,
      todayDeaths: 1,
      active: 291
    },
    {
      state: "Kansas",
      cases: 261,
      todayCases: 0,
      deaths: 5,
      todayDeaths: 0,
      active: 256
    },
    {
      state: "Idaho",
      cases: 261,
      todayCases: 0,
      deaths: 4,
      todayDeaths: 0,
      active: 257
    },
    {
      state: "Maine",
      cases: 253,
      todayCases: 42,
      deaths: 1,
      todayDeaths: 0,
      active: 236
    },
    {
      state: "Vermont",
      cases: 235,
      todayCases: 24,
      deaths: 12,
      todayDeaths: 0,
      active: 223
    },
    {
      state: "Delaware",
      cases: 232,
      todayCases: 18,
      deaths: 6,
      todayDeaths: 1,
      active: 217
    },
    {
      state: "New Hampshire",
      cases: 214,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 212
    },
    {
      state: "New Mexico",
      cases: 208,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 206
    },
    {
      state: "Montana",
      cases: 154,
      todayCases: 25,
      deaths: 1,
      todayDeaths: 0,
      active: 153
    },
    {
      state: "Hawaii",
      cases: 151,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 151
    },
    {
      state: "West Virginia",
      cases: 113,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 113
    },
    {
      state: "Nebraska",
      cases: 108,
      todayCases: 12,
      deaths: 2,
      todayDeaths: 0,
      active: 106
    },
    {
      state: "North Dakota",
      cases: 98,
      todayCases: 15,
      deaths: 1,
      todayDeaths: 0,
      active: 79
    },
    {
      state: "Wyoming",
      cases: 86,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      active: 86
    },
    {
      state: "Alaska",
      cases: 85,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 83
    },
    {
      state: "South Dakota",
      cases: 68,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 41
    },
    {
      state: "Guam",
      cases: 56,
      todayCases: 5,
      deaths: 1,
      todayDeaths: 0,
      active: 48
    },
    {
      state: "Northern Mariana Islands",
      cases: 2,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      active: 2
    },
    {
      state: "Puerto Rico",
      cases: 127,
      todayCases: 27,
      deaths: 5,
      todayDeaths: 2,
      active: 121
    },
    {
      state: "United States Virgin Islands",
      cases: 21,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 21
    },
    {
      state: "Wuhan Repatriated",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 3
    },
    {
      state: "Diamond Princess Cruise",
      cases: 46,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 46
    }
  ],
  [
    {
      dateInfo: { month: "March", day: 28, year: 2020 },
      date: "March 28, 2020",
      state: "New York",
      cases: 53455,
      todayCases: 62,
      deaths: 883,
      todayDeaths: 0,
      active: 49846
    },
    {
      state: "New Jersey",
      cases: 11124,
      todayCases: 0,
      deaths: 140,
      todayDeaths: 0,
      active: 10984
    },
    {
      state: "California",
      cases: 5683,
      todayCases: 134,
      deaths: 121,
      todayDeaths: 2,
      active: 5541
    },
    {
      state: "Michigan",
      cases: 4650,
      todayCases: 0,
      deaths: 111,
      todayDeaths: 0,
      active: 4534
    },
    {
      state: "Washington",
      cases: 4310,
      todayCases: 0,
      deaths: 189,
      todayDeaths: 0,
      active: 3997
    },
    {
      state: "Massachusetts",
      cases: 4257,
      todayCases: 0,
      deaths: 44,
      todayDeaths: 0,
      active: 4212
    },
    {
      state: "Florida",
      cases: 4038,
      todayCases: 0,
      deaths: 56,
      todayDeaths: 0,
      active: 3982
    },
    {
      state: "Illinois",
      cases: 3491,
      todayCases: 0,
      deaths: 47,
      todayDeaths: 0,
      active: 3442
    },
    {
      state: "Louisiana",
      cases: 3315,
      todayCases: 0,
      deaths: 137,
      todayDeaths: 0,
      active: 3178
    },
    {
      state: "Pennsylvania",
      cases: 2751,
      todayCases: 0,
      deaths: 34,
      todayDeaths: 0,
      active: 2717
    },
    {
      state: "Georgia",
      cases: 2446,
      todayCases: 0,
      deaths: 79,
      todayDeaths: 0,
      active: 2367
    },
    {
      state: "Texas",
      cases: 2329,
      todayCases: 0,
      deaths: 30,
      todayDeaths: 0,
      active: 2288
    },
    {
      state: "Colorado",
      cases: 2061,
      todayCases: 0,
      deaths: 44,
      todayDeaths: 0,
      active: 2017
    },
    {
      state: "Connecticut",
      cases: 1524,
      todayCases: 0,
      deaths: 33,
      todayDeaths: 0,
      active: 1491
    },
    {
      state: "Tennessee",
      cases: 1512,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      active: 1505
    },
    {
      state: "Ohio",
      cases: 1406,
      todayCases: 0,
      deaths: 25,
      todayDeaths: 0,
      active: 1381
    },
    {
      state: "Indiana",
      cases: 1232,
      todayCases: 0,
      deaths: 31,
      todayDeaths: 0,
      active: 1201
    },
    {
      state: "North Carolina",
      cases: 1022,
      todayCases: 0,
      deaths: 4,
      todayDeaths: 0,
      active: 1018
    },
    {
      state: "Maryland",
      cases: 992,
      todayCases: 0,
      deaths: 10,
      todayDeaths: 5,
      active: 950
    },
    {
      state: "Wisconsin",
      cases: 989,
      todayCases: 0,
      deaths: 15,
      todayDeaths: 0,
      active: 972
    },
    {
      state: "Missouri",
      cases: 838,
      todayCases: 0,
      deaths: 10,
      todayDeaths: 0,
      active: 826
    },
    {
      state: "Arizona",
      cases: 773,
      todayCases: 0,
      deaths: 15,
      todayDeaths: 0,
      active: 755
    },
    {
      state: "Virginia",
      cases: 739,
      todayCases: 0,
      deaths: 17,
      todayDeaths: 0,
      active: 720
    },
    {
      state: "Alabama",
      cases: 702,
      todayCases: 0,
      deaths: 4,
      todayDeaths: 0,
      active: 698
    },
    {
      state: "Mississippi",
      cases: 663,
      todayCases: 0,
      deaths: 13,
      todayDeaths: 0,
      active: 650
    },
    {
      state: "South Carolina",
      cases: 660,
      todayCases: 0,
      deaths: 15,
      todayDeaths: 0,
      active: 645
    },
    {
      state: "Nevada",
      cases: 621,
      todayCases: 0,
      deaths: 14,
      todayDeaths: 0,
      active: 607
    },
    {
      state: "Utah",
      cases: 602,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 600
    },
    {
      state: "Oregon",
      cases: 479,
      todayCases: 0,
      deaths: 13,
      todayDeaths: 0,
      active: 466
    },
    {
      state: "Minnesota",
      cases: 441,
      todayCases: 0,
      deaths: 5,
      todayDeaths: 0,
      active: 302
    },
    {
      state: "Arkansas",
      cases: 409,
      todayCases: 0,
      deaths: 5,
      todayDeaths: 0,
      active: 378
    },
    {
      state: "Kentucky",
      cases: 394,
      todayCases: 0,
      deaths: 8,
      todayDeaths: 0,
      active: 384
    },
    {
      state: "Oklahoma",
      cases: 377,
      todayCases: 0,
      deaths: 15,
      todayDeaths: 0,
      active: 361
    },
    {
      state: "District Of Columbia",
      cases: 342,
      todayCases: 0,
      deaths: 5,
      todayDeaths: 1,
      active: 286
    },
    {
      state: "Iowa",
      cases: 298,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 0,
      active: 277
    },
    {
      state: "Kansas",
      cases: 261,
      todayCases: 0,
      deaths: 5,
      todayDeaths: 0,
      active: 256
    },
    {
      state: "Idaho",
      cases: 261,
      todayCases: 0,
      deaths: 4,
      todayDeaths: 0,
      active: 257
    },
    {
      state: "Rhode Island",
      cases: 239,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 237
    },
    {
      state: "Delaware",
      cases: 214,
      todayCases: 0,
      deaths: 5,
      todayDeaths: 0,
      active: 200
    },
    {
      state: "New Hampshire",
      cases: 214,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 212
    },
    {
      state: "Vermont",
      cases: 211,
      todayCases: 0,
      deaths: 12,
      todayDeaths: 0,
      active: 199
    },
    {
      state: "Maine",
      cases: 211,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 194
    },
    {
      state: "New Mexico",
      cases: 208,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 206
    },
    {
      state: "Hawaii",
      cases: 151,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 151
    },
    {
      state: "Montana",
      cases: 129,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 128
    },
    {
      state: "West Virginia",
      cases: 113,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 112
    },
    {
      state: "Nebraska",
      cases: 96,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 94
    },
    {
      state: "Alaska",
      cases: 85,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      active: 83
    },
    {
      state: "Wyoming",
      cases: 84,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 84
    },
    {
      state: "North Dakota",
      cases: 83,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 66
    },
    {
      state: "South Dakota",
      cases: 68,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 41
    },
    {
      state: "Guam",
      cases: 51,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      active: 50
    },
    {
      state: "Northern Mariana Islands",
      cases: 2,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      active: 2
    },
    {
      state: "Puerto Rico",
      cases: 100,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 0,
      active: 96
    },
    {
      state: "United States Virgin Islands",
      cases: 21,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 21
    },
    {
      state: "Wuhan Repatriated",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 3
    },
    {
      state: "Diamond Princess Cruise",
      cases: 46,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      active: 46
    }
  ]
]

// Check if data is up to date
if (
  month === data[0][0].dateInfo.month &&
  day === data[0][0].dateInfo.day &&
  year === data[0][0].dateInfo.year
) {
  console.log("Data is up to date")
}

let currentDataSet = data[0]

let totalCases = 0
let totalRecoveries = 0
let totalDeaths = 0

currentDataSet.forEach(x => {
  totalCases += x.cases
  totalRecoveries += x.cases - x.active
  totalDeaths += x.deaths
})

let displayCases = JSON.parse(JSON.stringify(totalCases))
let displayRecoveries = JSON.parse(JSON.stringify(totalRecoveries))
let displayDeaths = JSON.parse(JSON.stringify(totalDeaths))

displayCases = displayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
displayRecoveries = displayRecoveries
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
displayDeaths = displayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const viewDate = document.createElement("p")
viewDate.innerText = `${month} ${date.getDate()}, ${date.getFullYear()}`
document.getElementById("date").appendChild(viewDate)

const worldwidecases = document.createElement("span")
worldwidecases.innerText = displayCases
document.getElementById("totalCases").appendChild(worldwidecases)

const worldwideRecoveries = document.createElement("span")
worldwideRecoveries.innerText = displayRecoveries
document.getElementById("totalRecoveries").appendChild(worldwideRecoveries)

const worldwideDeaths = document.createElement("span")
worldwideDeaths.innerText = displayDeaths
document.getElementById("totalDeaths").appendChild(worldwideDeaths)

let zoomSlider = document.getElementById("zoomSlider")
let dateSlider = document.getElementById("dateSlider")
let actuator = Math.floor((1 / (zoomSlider.value * 5)) * totalCases)
let svgHeight = (1 / actuator) * 260000

drawVisualization()

// Zoom Slider

zoomSlider.oninput = function() {
  // if (this.value % 2 === 0) {
  //   console.log(
  //     `A ${actuator} | H ${svgHeight} | D ${dateSlider.value} | Z ${zoomSlider.value}`
  //   )
  // }

  actuator =
    2500 - Math.floor(zoomSlider.value * 8 - dateSlider.value * 3.3) + 0.01

  d3.select("svg").remove()

  svgHeight = Math.floor((1 / actuator) * totalCases * 2)

  drawVisualization()
}

// Date Slider
dateSlider.oninput = function() {
  // if (this.value % 2 === 0) {
  //   console.log(
  //     `A ${actuator} | H ${svgHeight} | D ${dateSlider.value} | Z ${zoomSlider.value}`
  //   )
  // }

  let maxRangeValue = 150 // (from line 83 in index.html)
  let baseDivisor = (maxRangeValue + 1) / data.length
  let slidingScale = 15
  divisor = (maxRangeValue - this.value) / slidingScale
  if (divisor < baseDivisor) divisor = baseDivisor
  let actuatedIndex = Math.floor(this.value / divisor)

  currentDataSet = data[actuatedIndex]

  viewDate.innerText = data[actuatedIndex][0].date
  document.getElementById("date").appendChild(viewDate)

  totalCases = 0
  totalRecoveries = 0
  totalDeaths = 0

  currentDataSet.forEach(x => {
    totalCases += x.cases
    totalRecoveries += x.cases - x.active
    totalDeaths += x.deaths
  })

  let displayCases = JSON.parse(JSON.stringify(totalCases))
  let displayRecoveries = JSON.parse(JSON.stringify(totalRecoveries))
  let displayDeaths = JSON.parse(JSON.stringify(totalDeaths))

  displayCases = displayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  displayRecoveries = displayRecoveries
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  displayDeaths = displayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  worldwidecases.innerText = displayCases
  document.getElementById("totalCases").appendChild(worldwidecases)

  worldwideRecoveries.innerText = displayRecoveries
  document.getElementById("totalRecoveries").appendChild(worldwideRecoveries)

  worldwideDeaths.innerText = displayDeaths
  document.getElementById("totalDeaths").appendChild(worldwideDeaths)

  document.getElementById("date").appendChild(viewDate)

  d3.select("svg").remove()

  svgHeight = Math.floor((1 / actuator) * totalCases * 2.1)

  // if (this.value % 10 === 0) {
  //   console.log(
  //     `A ${actuator} | H ${svgHeight} | D ${dateSlider.value} | Z ${zoomSlider.value}`
  //   )
  // }

  drawVisualization()
}

function drawVisualization() {
  if (svgHeight < 800) {
    svgHeight = 800
  }
  let svg = d3
    .select("#chart-area")
    .append("svg")
    .attr("width", vw)
    .attr("height", svgHeight)

  let deathData = currentDataSet.map(x => x.deaths / actuator)
  let casesData = currentDataSet.map(x => x.cases / actuator)
  let recoveredData = currentDataSet.map(x => (x.cases - x.active) / actuator)
  let nameData = currentDataSet.map(x => x.state)

  let deathCircles = svg.selectAll("circle").data(deathData)
  let casesCircles = svg.selectAll("circle").data(casesData)
  let recoveredCircles = svg.selectAll("circle").data(recoveredData)
  let nameLabels = svg.selectAll("text").data(nameData)

  let cum = 0
  let casesCumData = []
  let radData = []
  casesCircles
    .enter()
    .append("circle")
    .attr("cx", 0)
    .attr("cy", (d, i) => {
      cum += d + d
      casesCumData.push(cum - d)
      radData.push(d)
      return (cum - d).toFixed(3)
    })
    .attr("r", function(d) {
      return d.toFixed(3)
    })
    .attr("fill", "steelblue")

  recoveredCircles
    .enter()
    .append("circle")
    .attr("cx", 0)
    .attr("cy", (d, i) => {
      return casesCumData[i].toFixed(3)
    })
    .attr("r", function(d) {
      return d.toFixed(3)
    })
    .attr("fill", "rgb(255, 196, 0)")

  deathCircles
    .enter()
    .append("circle")
    .attr("cx", 0)
    .attr("cy", (d, i) => {
      return casesCumData[i].toFixed(3)
    })
    .attr("r", function(d) {
      return d.toFixed(3)
    })
    .attr("fill", "tomato")

  // state labels
  nameLabels
    .enter()
    // .append("a")
    // .attr("xlink:href", d => {
    //   return `/countries/${d}`
    // })
    .append("text")
    .attr("x", (d, i) => {
      return (radData[i] + 2).toFixed(1)
    })
    .attr("y", (d, i) => {
      if (i < 8) {
        return (casesCumData[i] + radData[i] / (16 - i - 6)).toFixed(1)
      } else {
        return (casesCumData[i] + radData[i] / 2).toFixed(1)
      }
    })
    .text(function(d, i) {
      return d
    })
    .attr("font-family", stateNameFont)
    .attr("font-size", (d, i) => {
      if (i === 0) {
        return (radData[i] / 2.5).toFixed(1)
      } else if (i < 5) {
        return (radData[i] / 1.5).toFixed(1)
      } else if (i < 7) {
        return (radData[i] / 1.2).toFixed(1)
      } else {
        return radData[i].toFixed(1)
      }
    })
    .attr("dominant-baseline", "ideographic")
    .attr("dy", (d, i) => {
      if (isSafari) {
        if (i === 0) {
          return (radData[i] * -0.15).toFixed(1)
        } else if (i < 7) {
          return (radData[i] * -0.35).toFixed(1)
        } else {
          return (radData[i] * -0.6).toFixed(1)
        }
      }
    })
    .attr("id", function(d, i) {
      return "state_" + i
    })
    .attr("class", function(d, i) {
      return "stateLink"
    })

  // Cases, recoveries and deaths
  nameLabels
    .enter()
    .append("text")
    .text(function(d, i) {
      let displayCases = currentDataSet[i].cases
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      let displayRecovered = (
        currentDataSet[i].cases - currentDataSet[i].active
      )
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      let displayDeaths = currentDataSet[i].deaths
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return (
        displayCases +
        " cases" +
        "\xa0\xa0" +
        displayRecovered +
        " recoveries" +
        "\xa0\xa0" +
        displayDeaths +
        " deaths"
      )
    })
    .attr("font-family", stateDataFont)
    .attr("font-size", (d, i) => {
      if (i == 0) {
        return (radData[i] / 6).toFixed(1)
      } else if (i < 3) {
        return (radData[i] / 3.5).toFixed(1)
      } else if (i < 4) {
        return (radData[i] / 2.5).toFixed(1)
      } else if (i < 5) {
        return (radData[i] / 2.5).toFixed(1)
      } else if (i < 7) {
        return (radData[i] / 2).toFixed(1)
      } else if (i < 9) {
        return (radData[i] / 1.4).toFixed(1)
      } else {
        return (radData[i] / 1.2).toFixed(1)
      }
    })
    .attr("x", (d, i) => {
      return radData[i] + 2
    })
    .attr("y", (d, i) => {
      if (i === 0) {
        return casesCumData[i]
      } else if (i < 8) {
        return casesCumData[i] + 1
      } else {
        return casesCumData[i] + radData[i] / 4
      }
    })
    .attr("dominant-baseline", "hanging")
    .attr("dy", (d, i) => {
      if (isSafari && i === 0) {
        return radData[i] * 0.1
      } else if (i < 8) {
        return radData[i] * 0.1
      } else {
        return radData[i] * 0.05
      }
    })
}
