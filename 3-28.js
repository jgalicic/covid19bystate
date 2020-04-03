let data = [
  {
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
