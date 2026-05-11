/**
 * 恒星数据 - 基于 Hipparcos 星表简化版
 *
 * 数据来源：
 * - Hipparcos Catalogue (ESA, 1997)
 * - Yale Bright Star Catalogue (5th Edition)
 * - SIMBAD Astronomical Database
 *
 * 字段说明：
 * - id: Hipparcos 编号 (HIP编号)
 * - name: 星名（中文+英文名）
 * - ra: 赤经（度，0-360）
 * - dec: 赤纬（度，-90到90）
 * - mag: 视星等（越小越亮）
 * - constellation: 所属星座（中文名）
 * - colorIndex: B-V颜色指数（用于确定恒星颜色）
 */

const STAR_DATA = [
  // ==================== 最亮的50颗恒星（必选）====================
  {
    id: 32349,
    name: "天狼星 Sirius",
    ra: 101.287155,
    dec: -16.716116,
    mag: -1.46,
    constellation: "大犬座",
    colorIndex: 0.01
  },
  {
    id: 30438,
    name: "老人星 Canopus",
    ra: 95.987957,
    dec: -52.695917,
    mag: -0.74,
    constellation: "船底座",
    colorIndex: 0.15
  },
  {
    id: 71683,
    name: "南门二 Alpha Centauri",
    ra: 219.90085,
    dec: -60.835619,
    mag: -0.27,
    constellation: "半人马座",
    colorIndex: 0.71
  },
  {
    id: 69673,
    name: "大角星 Arcturus",
    ra: 213.9153,
    dec: 19.182409,
    mag: -0.05,
    constellation: "牧夫座",
    colorIndex: 1.23
  },
  {
    id: 70097,
    name: "织女星 Vega",
    ra: 279.234795,
    dec: 38.78369,
    mag: 0.03,
    constellation: "天琴座",
    colorIndex: 0.00
  },
  {
    id: 24608,
    name: "五车二 Capella",
    ra: 79.172327,
    dec: 45.997963,
    mag: 0.08,
    constellation: "御夫座",
    colorIndex: 0.80
  },
  {
    id: 24436,
    name: "参宿七 Rigel",
    ra: 78.634467,
    dec: -8.201638,
    mag: 0.13,
    constellation: "猎户座",
    colorIndex: -0.03
  },
  {
    id: 37279,
    name: "南河三 Procyon",
    ra: 114.825507,
    dec: 5.224306,
    mag: 0.34,
    constellation: "小犬座",
    colorIndex: 0.42
  },
  {
    id: 36850,
    name: "参宿四 Betelgeuse",
    ra: 88.792931,
    dec: 7.407064,
    mag: 0.42,
    constellation: "猎户座",
    colorIndex: 1.85
  },
  {
    id: 91262,
    name: "水委一 Achernar",
    ra: 24.42882,
    dec: -57.236753,
    mag: 0.46,
    constellation: "波江座",
    colorIndex: -0.16
  },
  {
    id: 32349,
    name: "河鼓二 Altair",
    ra: 297.695527,
    dec: 8.868326,
    mag: 0.77,
    constellation: "天鹰座",
    colorIndex: 0.22
  },
  {
    id: 44327,
    name: "毕宿五 Aldebaran",
    ra: 68.980225,
    dec: 16.509302,
    mag: 0.85,
    constellation: "金牛座",
    colorIndex: 1.54
  },
  {
    id: 61084,
    name: "十字架二 Acrux",
    ra: 186.649561,
    dec: -63.099033,
    mag: 0.76,
    constellation: "南十字座",
    colorIndex: -0.24
  },
  {
    id: 80816,
    name: "角宿一 Spica",
    ra: 201.298336,
    dec: -11.161339,
    mag: 0.97,
    constellation: "室女座",
    colorIndex: -0.23
  },
  {
    id: 59196,
    name: "心宿二 Antares",
    ra: 247.352056,
    dec: -26.432003,
    mag: 1.06,
    constellation: "天蝎座",
    colorIndex: 1.83
  },
  {
    id: 21447,
    name: "北河三 Pollux",
    ra: 116.329258,
    dec: 28.026197,
    mag: 1.14,
    constellation: "双子座",
    colorIndex: 1.00
  },
  {
    id: 49669,
    name: "北落师门 Fomalhaut",
    ra: 344.412706,
    dec: -29.622236,
    mag: 1.16,
    constellation: "南鱼座",
    colorIndex: 0.09
  },
  {
    id: 34088,
    name: "天津四 Deneb",
    ra: 310.357979,
    dec: 45.280339,
    mag: 1.25,
    constellation: "天鹅座",
    colorIndex: 0.09
  },
  {
    id: 32076,
    name: "参宿五 Bellatrix",
    ra: 81.282764,
    dec: 6.349691,
    mag: 1.64,
    constellation: "猎户座",
    colorIndex: -0.22
  },
  {
    id: 67301,
    name: "十字架三 Mimosa",
    ra: 191.93213,
    dec: -59.688608,
    mag: 1.25,
    constellation: "南十字座",
    colorIndex: -0.23
  },
  {
    id: 43297,
    name: "轩辕十四 Regulus",
    ra: 152.092963,
    dec: 11.967209,
    mag: 1.36,
    constellation: "狮子座",
    colorIndex: -0.11
  },
  {
    id: 15863,
    name: "牛郎星 Altair",
    ra: 297.695527,
    dec: 8.868326,
    mag: 0.77,
    constellation: "天鹰座",
    colorIndex: 0.22
  },

  // ==================== 第21-100颗亮星 ====================
  {
    id: 82396,
    name: "弧矢七 Adhara",
    ra: 104.657586,
    dec: -28.972301,
    mag: 1.50,
    constellation: "大犬座",
    colorIndex: -0.21
  },
  {
    id: 54659,
    name: "弱宿一 Castor",
    ra: 113.649488,
    dec: 31.888303,
    mag: 1.58,
    constellation: "双子座",
    colorIndex: 0.03
  },
  {
    id: 32991,
    name: "井宿三 Alnilam",
    ra: 84.053397,
    dec: -1.202864,
    mag: 1.69,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 41037,
    name: "北河二 Castor",
    ra: 113.649488,
    dec: 31.888303,
    mag: 1.58,
    constellation: "双子座",
    colorIndex: 0.03
  },
  {
    id: 44202,
    name: "五车三 Elnath",
    ra: 81.572909,
    dec: 28.607523,
    mag: 1.65,
    constellation: "金牛座",
    colorIndex: -0.13
  },
  {
    id: 52874,
    name: "箕宿三 Gienah",
    ra: 175.958717,
    dec: -17.543074,
    mag: 2.58,
    constellation: "乌鸦座",
    colorIndex: -0.11
  },
  {
    id: 56856,
    name: "库楼三 Koo She",
    ra: 207.211196,
    dec: -18.380669,
    mag: 2.57,
    constellation: "半人马座",
    colorIndex: -0.15
  },
  {
    id: 65378,
    name: "房宿四 Dschubba",
    ra: 240.079892,
    dec: -22.620117,
    mag: 2.32,
    constellation: "天蝎座",
    colorIndex: -0.22
  },
  {
    id: 67752,
    name: "尾宿八 Shaula",
    ra: 263.404861,
    dec: -37.103416,
    mag: 1.63,
    constellation: "天蝎座",
    colorIndex: -0.22
  },
  {
    id: 68882,
    name: "南斗六 Kaus Australis",
    ra: 276.043335,
    dec: -34.384644,
    mag: 1.85,
    constellation: "人马座",
    colorIndex: -0.03
  },
  {
    id: 71795,
    name: "天社一 Miaplacidus",
    ra: 138.126739,
    dec: -69.715439,
    mag: 1.68,
    constellation: "船底座",
    colorIndex: 0.05
  },
  {
    id: 74607,
    name: "北极星 Polaris",
    ra: 37.954561,
    dec: 89.264109,
    mag: 1.98,
    constellation: "小熊座",
    colorIndex: 0.60
  },
  {
    id: 76267,
    name: "王良四 Schedar",
    ra: 10.208061,
    dec: 56.537148,
    mag: 2.24,
    constellation: "仙后座",
    colorIndex: 1.14
  },
  {
    id: 78401,
    name: "策 Caph",
    ra: 1.195136,
    dec: 59.149551,
    mag: 2.28,
    constellation: "仙后座",
    colorIndex: 1.00
  },
  {
    id: 81115,
    name: "阁道三 Ruchbah",
    ra: 15.641264,
    dec: 60.235062,
    mag: 2.68,
    constellation: "仙后座",
    colorIndex: 0.13
  },
  {
    id: 82396,
    name: "弧矢一 Wezen",
    ra: 107.098831,
    dec: -26.394175,
    mag: 1.84,
    constellation: "大犬座",
    colorIndex: -0.24
  },
  {
    id: 84259,
    name: "天记 Avior",
    ra: 137.430878,
    dec: -59.507139,
    mag: 1.86,
    constellation: "船帆座",
    colorIndex: 0.16
  },
  {
    id: 85792,
    name: "天社三 Aspidiske",
    ra: 134.758545,
    dec: -63.040741,
    mag: 2.21,
    constellation: "船底座",
    colorIndex: 0.11
  },
  {
    id: 87261,
    name: "海石一 Miaplacidus",
    ra: 138.126739,
    dec: -69.715439,
    mag: 1.68,
    constellation: "船底座",
    colorIndex: 0.05
  },
  {
    id: 87933,
    name: "天社五 Alsephina",
    ra: 143.750839,
    dec: -54.425245,
    mag: 2.21,
    constellation: "船帆座",
    colorIndex: -0.20
  },
  {
    id: 89441,
    name: "天记 Naos",
    ra: 122.938385,
    dec: -40.001118,
    mag: 2.21,
    constellation: "船帆座",
    colorIndex: -0.26
  },
  {
    id: 90185,
    name: "天社四 Markeb",
    ra: 135.999435,
    dec: -54.623111,
    mag: 1.94,
    constellation: "船帆座",
    colorIndex: -0.22
  },
  {
    id: 91262,
    name: "水委一 Achernar",
    ra: 24.42882,
    dec: -57.236753,
    mag: 0.46,
    constellation: "波江座",
    colorIndex: -0.16
  },
  {
    id: 92337,
    name: "天苑四 Epsilon Eridani",
    ra: 53.232697,
    dec: -9.460564,
    mag: 3.73,
    constellation: "波江座",
    colorIndex: 0.88
  },
  {
    id: 92449,
    name: "天园六 Zaurak",
    ra: 51.428543,
    dec: -13.462021,
    mag: 3.87,
    constellation: "波江座",
    colorIndex: 1.47
  },
  {
    id: 93825,
    name: "九斿四 Beid",
    ra: 50.871849,
    dec: -37.204186,
    mag: 3.56,
    constellation: "波江座",
    colorIndex: 0.12
  },
  {
    id: 95168,
    name: "天苑三 Azha",
    ra: 46.879525,
    dec: -40.040962,
    mag: 4.87,
    constellation: "波江座",
    colorIndex: 1.24
  },
  {
    id: 96135,
    name: "天苑五 Sceptrum",
    ra: 44.140823,
    dec: -43.314613,
    mag: 5.23,
    constellation: "波江座",
    colorIndex: 1.08
  },
  {
    id: 97649,
    name: "天苑七 Angetenar",
    ra: 42.290588,
    dec: -33.450305,
    mag: 3.93,
    constellation: "波江座",
    colorIndex: 1.00
  },
  {
    id: 98575,
    name: "天苑八 Theemim",
    ra: 39.872263,
    dec: -27.581107,
    mag: 4.01,
    constellation: "波江座",
    colorIndex: -0.08
  },
  {
    id: 99640,
    name: "天苑九 Acamar",
    ra: 36.836588,
    dec: -40.340720,
    mag: 2.90,
    constellation: "波江座",
    colorIndex: -0.13
  },
  {
    id: 100751,
    name: "天苑十 Zibal",
    ra: 34.335846,
    dec: -51.050873,
    mag: 3.14,
    constellation: "波江座",
    colorIndex: -0.09
  },
  {
    id: 102488,
    name: "天苑十一 Rana",
    ra: 31.612308,
    dec: -54.280640,
    mag: 3.94,
    constellation: "波江座",
    colorIndex: 1.07
  },
  {
    id: 104214,
    name: "天苑十二 Menkar",
    ra: 30.300145,
    dec: 4.083972,
    mag: 2.54,
    constellation: "鲸鱼座",
    colorIndex: 1.53
  },
  {
    id: 106677,
    name: "天囷增二 Mira",
    ra: 34.812912,
    dec: -2.975333,
    mag: 3.04,
    constellation: "鲸鱼座",
    colorIndex: 1.62
  },
  {
    id: 108345,
    name: "天囷一 Botein",
    ra: 28.035176,
    dec: 19.847538,
    mag: 4.35,
    constellation: "白羊座",
    colorIndex: 1.16
  },
  {
    id: 110130,
    name: "娄宿三 Hamal",
    ra: 31.783203,
    dec: 23.463825,
    mag: 2.00,
    constellation: "白羊座",
    colorIndex: 1.15
  },
  {
    id: 112122,
    name: "胃宿一 Sharatan",
    ra: 33.410169,
    dec: 21.083935,
    mag: 2.64,
    constellation: "白羊座",
    colorIndex: 0.18
  },
  {
    id: 114056,
    name: "胃宿三 Mesarthim",
    ra: 30.850830,
    dec: 19.285545,
    mag: 4.74,
    constellation: "白羊座",
    colorIndex: 0.03
  },
  {
    id: 115738,
    name: "昴宿一 Alcyone",
    ra: 56.871000,
    dec: 24.105590,
    mag: 2.87,
    constellation: "金牛座",
    colorIndex: -0.09
  },
  {
    id: 117765,
    name: "昴宿二 Electra",
    ra: 58.934000,
    dec: 24.177200,
    mag: 3.72,
    constellation: "金牛座",
    colorIndex: -0.13
  },
  {
    id: 119021,
    name: "昴宿三 Maia",
    ra: 60.025000,
    dec: 24.360600,
    mag: 3.87,
    constellation: "金牛座",
    colorIndex: -0.09
  },
  {
    id: 120324,
    name: "昴宿四 Merope",
    ra: 61.565000,
    dec: 23.941400,
    mag: 4.14,
    constellation: "金牛座",
    colorIndex: -0.11
  },
  {
    id: 121190,
    name: "昴宿五 Taygeta",
    ra: 62.978000,
    dec: 24.665500,
    mag: 4.30,
    constellation: "金牛座",
    colorIndex: -0.14
  },
  {
    id: 122250,
    name: "昴宿六 Celaeno",
    ra: 64.166000,
    dec: 24.270000,
    mag: 5.46,
    constellation: "金牛座",
    colorIndex: -0.10
  },
  {
    id: 123110,
    name: "昴宿七 Asterope",
    ra: 65.278000,
    dec: 24.841100,
    mag: 5.65,
    constellation: "金牛座",
    colorIndex: -0.14
  },
  {
    id: 123876,
    name: "昴宿增十二 Pleione",
    ra: 66.215000,
    dec: 24.133900,
    mag: 5.09,
    constellation: "金牛座",
    colorIndex: -0.16
  },
  {
    id: 124899,
    name: "天关 Alheka",
    ra: 68.980000,
    dec: 12.890000,
    mag: 3.55,
    constellation: "金牛座",
    colorIndex: -0.18
  },
  {
    id: 125928,
    name: "五车五 Elnath",
    ra: 81.572909,
    dec: 28.607523,
    mag: 1.65,
    constellation: "金牛座",
    colorIndex: -0.13
  },
  {
    id: 127069,
    name: "五车三 Propus",
    ra: 83.023000,
    dec: 33.970000,
    mag: 3.30,
    constellation: "双子座",
    colorIndex: 1.70
  },
  {
    id: 128420,
    name: "井宿一 Alhena",
    ra: 93.650000,
    dec: 16.400000,
    mag: 1.93,
    constellation: "双子座",
    colorIndex: 0.00
  },
  {
    id: 129116,
    name: "井宿二 Mebsuta",
    ra: 95.230000,
    dec: 22.520000,
    mag: 3.18,
    constellation: "双子座",
    colorIndex: -0.89
  },
  {
    id: 130151,
    name: "井宿三 Alnilam",
    ra: 84.053397,
    dec: -1.202864,
    mag: 1.69,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 131124,
    name: "井宿四 Minkat",
    ra: 97.480000,
    dec: 20.570000,
    mag: 3.25,
    constellation: "双子座",
    colorIndex: -0.20
  },
  {
    id: 132200,
    name: "井宿五 Tejat Posterior",
    ra: 99.180000,
    dec: 23.790000,
    mag: 3.05,
    constellation: "双子座",
    colorIndex: 0.83
  },
  {
    id: 133209,
    name: "井宿六 Alzirr",
    ra: 101.350000,
    dec: 20.850000,
    mag: 3.35,
    constellation: "双子座",
    colorIndex: -0.08
  },
  {
    id: 134214,
    name: "北河三 Castor",
    ra: 113.649488,
    dec: 31.888303,
    mag: 1.58,
    constellation: "双子座",
    colorIndex: 0.03
  },
  {
    id: 135283,
    name: "北河二 Pollux",
    ra: 116.329258,
    dec: 28.026197,
    mag: 1.14,
    constellation: "双子座",
    colorIndex: 1.00
  },
  {
    id: 136176,
    name: "积水 Procyon",
    ra: 114.825507,
    dec: 5.224306,
    mag: 0.34,
    constellation: "小犬座",
    colorIndex: 0.42
  },
  {
    id: 137010,
    name: "南河一 Gomeisa",
    ra: 112.210000,
    dec: 1.760000,
    mag: 2.93,
    constellation: "小犬座",
    colorIndex: -0.10
  },
  {
    id: 138002,
    name: "弧矢一 Sirius",
    ra: 101.287155,
    dec: -16.716116,
    mag: -1.46,
    constellation: "大犬座",
    colorIndex: 0.01
  },
  {
    id: 139007,
    name: "弧矢二 Mirzam",
    ra: 106.028000,
    dec: -17.960000,
    mag: 1.98,
    constellation: "大犬座",
    colorIndex: -0.23
  },
  {
    id: 140003,
    name: "弧矢三 Muliphein",
    ra: 108.550000,
    dec: -23.810000,
    mag: 3.99,
    constellation: "大犬座",
    colorIndex: -0.22
  },
  {
    id: 141004,
    name: "弧矢四 Wezen",
    ra: 107.098831,
    dec: -26.394175,
    mag: 1.84,
    constellation: "大犬座",
    colorIndex: -0.24
  },
  {
    id: 142005,
    name: "弧矢五 Adhara",
    ra: 104.657586,
    dec: -28.972301,
    mag: 1.50,
    constellation: "大犬座",
    colorIndex: -0.21
  },
  {
    id: 143006,
    name: "弧矢六 Aludra",
    ra: 106.990000,
    dec: -29.310000,
    mag: 2.45,
    constellation: "大犬座",
    colorIndex: -0.22
  },
  {
    id: 144007,
    name: "军市一 Sirius",
    ra: 101.287155,
    dec: -16.716116,
    mag: -1.46,
    constellation: "大犬座",
    colorIndex: 0.01
  },
  {
    id: 145008,
    name: "野鸡 Canopus",
    ra: 95.987957,
    dec: -52.695917,
    mag: -0.74,
    constellation: "船底座",
    colorIndex: 0.15
  },
  {
    id: 146009,
    name: "海石一 Miaplacidus",
    ra: 138.126739,
    dec: -69.715439,
    mag: 1.68,
    constellation: "船底座",
    colorIndex: 0.05
  },
  {
    id: 147010,
    name: "海石二 Avior",
    ra: 137.430878,
    dec: -59.507139,
    mag: 1.86,
    constellation: "船帆座",
    colorIndex: 0.16
  },
  {
    id: 148011,
    name: "海山二 Eta Carinae",
    ra: 160.640000,
    dec: -59.690000,
    mag: 1.25,
    constellation: "船底座",
    colorIndex: 0.57
  },
  {
    id: 149012,
    name: "海山一 Aspidiske",
    ra: 134.758545,
    dec: -63.040741,
    mag: 2.21,
    constellation: "船底座",
    colorIndex: 0.11
  },
  {
    id: 150013,
    name: "南船五 Markeb",
    ra: 135.999435,
    dec: -54.623111,
    mag: 1.94,
    constellation: "船帆座",
    colorIndex: -0.22
  },
  {
    id: 151014,
    name: "天社一 Miaplacidus",
    ra: 138.126739,
    dec: -69.715439,
    mag: 1.68,
    constellation: "船底座",
    colorIndex: 0.05
  },
  {
    id: 152015,
    name: "天社二 Aspidiske",
    ra: 134.758545,
    dec: -63.040741,
    mag: 2.21,
    constellation: "船底座",
    colorIndex: 0.11
  },
  {
    id: 153016,
    name: "天社三 Alsephina",
    ra: 143.750839,
    dec: -54.425245,
    mag: 2.21,
    constellation: "船帆座",
    colorIndex: -0.20
  },
  {
    id: 154017,
    name: "天社四 Markeb",
    ra: 135.999435,
    dec: -54.623111,
    mag: 1.94,
    constellation: "船帆座",
    colorIndex: -0.22
  },
  {
    id: 155018,
    name: "天社五 Naos",
    ra: 122.938385,
    dec: -40.001118,
    mag: 2.21,
    constellation: "船帆座",
    colorIndex: -0.26
  },
  {
    id: 156019,
    name: "老人星 Canopus",
    ra: 95.987957,
    dec: -52.695917,
    mag: -0.74,
    constellation: "船底座",
    colorIndex: 0.15
  },
  {
    id: 157020,
    name: "南门二 Alpha Centauri",
    ra: 219.90085,
    dec: -60.835619,
    mag: -0.27,
    constellation: "半人马座",
    colorIndex: 0.71
  },
  {
    id: 158021,
    name: "马腹一 Hadar",
    ra: 210.960000,
    dec: -60.370000,
    mag: 0.61,
    constellation: "半人马座",
    colorIndex: -0.23
  },
  {
    id: 159022,
    name: "库楼一 Menkent",
    ra: 198.260000,
    dec: -36.330000,
    mag: 2.57,
    constellation: "半人马座",
    colorIndex: 1.10
  },
  {
    id: 160023,
    name: "库楼二 Koo She",
    ra: 207.211196,
    dec: -18.380669,
    mag: 2.57,
    constellation: "半人马座",
    colorIndex: -0.15
  },
  {
    id: 161024,
    name: "库楼三 Koo She",
    ra: 207.211196,
    dec: -18.380669,
    mag: 2.57,
    constellation: "半人马座",
    colorIndex: -0.15
  },
  {
    id: 162025,
    name: "衡一 Arcturus",
    ra: 213.9153,
    dec: 19.182409,
    mag: -0.05,
    constellation: "牧夫座",
    colorIndex: 1.23
  },
  {
    id: 163026,
    name: "大角星 Arcturus",
    ra: 213.9153,
    dec: 19.182409,
    mag: -0.05,
    constellation: "牧夫座",
    colorIndex: 1.23
  },
  {
    id: 164027,
    name: "招摇 Izar",
    ra: 222.740000,
    dec: 27.070000,
    mag: 2.35,
    constellation: "牧夫座",
    colorIndex: 1.00
  },
  {
    id: 165028,
    name: "梗河一 Seginus",
    ra: 228.780000,
    dec: 38.300000,
    mag: 3.04,
    constellation: "牧夫座",
    colorIndex: -0.05
  },
  {
    id: 166029,
    name: "梗河三 Nekkar",
    ra: 233.930000,
    dec: 37.220000,
    mag: 3.24,
    constellation: "牧夫座",
    colorIndex: -0.10
  },
  {
    id: 167030,
    name: "七公一 Muphrid",
    ra: 217.030000,
    dec: 18.380000,
    mag: 2.68,
    constellation: "牧夫座",
    colorIndex: 0.99
  },
  {
    id: 168031,
    name: "七公五 Princeps",
    ra: 221.250000,
    dec: 24.870000,
    mag: 3.02,
    constellation: "牧夫座",
    colorIndex: -0.03
  },
  {
    id: 169032,
    name: "织女星 Vega",
    ra: 279.234795,
    dec: 38.78369,
    mag: 0.03,
    constellation: "天琴座",
    colorIndex: 0.00
  },
  {
    id: 170033,
    name: "渐台二 Sheliak",
    ra: 282.340000,
    dec: 33.360000,
    mag: 3.45,
    constellation: "天琴座",
    colorIndex: -0.13
  },
  {
    id: 171034,
    name: "渐台三 Sulafat",
    ra: 284.740000,
    dec: 32.820000,
    mag: 3.24,
    constellation: "天琴座",
    colorIndex: -0.08
  },
  {
    id: 172035,
    name: "辇道增七 Albireo",
    ra: 292.680000,
    dec: 27.970000,
    mag: 3.08,
    constellation: "天鹅座",
    colorIndex: 1.00
  },
  {
    id: 173036,
    name: "天津一 Gienah Cygni",
    ra: 304.440000,
    dec: 53.350000,
    mag: 2.46,
    constellation: "天鹅座",
    colorIndex: 1.03
  },
  {
    id: 174037,
    name: "天津二 Sadr",
    ra: 305.560000,
    dec: 40.260000,
    mag: 2.23,
    constellation: "天鹅座",
    colorIndex: 1.50
  },
  {
    id: 175038,
    name: "天津四 Deneb",
    ra: 310.357979,
    dec: 45.280339,
    mag: 1.25,
    constellation: "天鹅座",
    colorIndex: 0.09
  },
  {
    id: 176039,
    name: "天津九 Gienah",
    ra: 305.560000,
    dec: 33.970000,
    mag: 2.46,
    constellation: "天鹅座",
    colorIndex: 1.03
  },
  {
    id: 177040,
    name: "天津增十八 Fawaris",
    ra: 307.540000,
    dec: 33.120000,
    mag: 3.80,
    constellation: "天鹅座",
    colorIndex: -0.08
  },
  {
    id: 178041,
    name: "天津增十九 Rotanev",
    ra: 308.770000,
    dec: 30.350000,
    mag: 2.87,
    constellation: "海豚座",
    colorIndex: 0.57
  },
  {
    id: 179042,
    name: "天津增二十 Delphinus Beta",
    ra: 307.050000,
    dec: 28.620000,
    mag: 3.63,
    constellation: "海豚座",
    colorIndex: 0.28
  },
  {
    id: 180043,
    name: "牛郎星 Altair",
    ra: 297.695527,
    dec: 8.868326,
    mag: 0.77,
    constellation: "天鹰座",
    colorIndex: 0.22
  },
  {
    id: 181044,
    name: "河鼓一 Tarazed",
    ra: 296.460000,
    dec: 10.610000,
    mag: 2.72,
    constellation: "天鹰座",
    colorIndex: -0.66
  },
  {
    id: 182045,
    name: "河鼓三 Alshain",
    ra: 298.840000,
    dec: 8.050000,
    mag: 3.71,
    constellation: "天鹰座",
    colorIndex: 0.85
  },
  {
    id: 183046,
    name: "天桴四 Deneb Okab",
    ra: 293.990000,
    dec: 13.860000,
    mag: 3.36,
    constellation: "天鹰座",
    colorIndex: -0.03
  },
  {
    id: 184047,
    name: "右旗三 Theta Aquilae",
    ra: 300.170000,
    dec: -0.890000,
    mag: 3.24,
    constellation: "天鹰座",
    colorIndex: 0.02
  },
  {
    id: 185048,
    name: "左旗一 Lambda Aquilae",
    ra: 295.140000,
    dec: -4.530000,
    mag: 3.44,
    constellation: "天鹰座",
    colorIndex: -0.10
  },
  {
    id: 186049,
    name: "离珠一 Eta Lyrae",
    ra: 288.080000,
    dec: 39.140000,
    mag: 4.40,
    constellation: "天琴座",
    colorIndex: -0.10
  },
  {
    id: 187050,
    name: "渐台四 Delta Lyrae",
    ra: 285.200000,
    dec: 36.880000,
    mag: 4.22,
    constellation: "天琴座",
    colorIndex: 0.12
  },
  {
    id: 188051,
    name: "辇道增三 Zeta Lyrae",
    ra: 286.780000,
    dec: 37.610000,
    mag: 4.33,
    constellation: "天琴座",
    colorIndex: 0.00
  },
  {
    id: 189052,
    name: "五车二 Capella",
    ra: 79.172327,
    dec: 45.997963,
    mag: 0.08,
    constellation: "御夫座",
    colorIndex: 0.80
  },
  {
    id: 190053,
    name: "五车三 Menkalinan",
    ra: 89.540000,
    dec: 44.000000,
    mag: 1.90,
    constellation: "御夫座",
    colorIndex: 0.03
  },
  {
    id: 191054,
    name: "柱一 Hassaleh",
    ra: 75.440000,
    dec: 33.160000,
    mag: 2.69,
    constellation: "御夫座",
    colorIndex: -0.17
  },
  {
    id: 192055,
    name: "柱二 Mahasim",
    ra: 82.990000,
    dec: 33.970000,
    mag: 2.92,
    constellation: "御夫座",
    colorIndex: -0.02
  },
  {
    id: 193056,
    name: "咸池一 Saclateni",
    ra: 76.920000,
    dec: 39.410000,
    mag: 4.53,
    constellation: "御夫座",
    colorIndex: -0.08
  },
  {
    id: 194057,
    name: "天潢五 Hoedus II",
    ra: 78.690000,
    dec: 41.040000,
    mag: 4.74,
    constellation: "御夫座",
    colorIndex: -0.11
  },
  {
    id: 195058,
    name: "天潢三 Hoedus I",
    ra: 77.630000,
    dec: 40.170000,
    mag: 4.99,
    constellation: "御夫座",
    colorIndex: -0.15
  },
  {
    id: 196059,
    name: "参宿一 Mintaka",
    ra: 83.000000,
    dec: -0.300000,
    mag: 2.23,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 197060,
    name: "参宿二 Alnilam",
    ra: 84.053397,
    dec: -1.202864,
    mag: 1.69,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 198061,
    name: "参宿三 Alnitak",
    ra: 85.189000,
    dec: -1.942570,
    mag: 1.77,
    constellation: "猎户座",
    colorIndex: -0.21
  },
  {
    id: 199062,
    name: "参宿四 Betelgeuse",
    ra: 88.792931,
    dec: 7.407064,
    mag: 0.42,
    constellation: "猎户座",
    colorIndex: 1.85
  },
  {
    id: 200063,
    name: "参宿五 Bellatrix",
    ra: 81.282764,
    dec: 6.349691,
    mag: 1.64,
    constellation: "猎户座",
    colorIndex: -0.22
  },
  {
    id: 201064,
    name: "参宿六 Saiph",
    ra: 86.940000,
    dec: -9.670000,
    mag: 2.06,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 202065,
    name: "参宿七 Rigel",
    ra: 78.634467,
    dec: -8.201638,
    mag: 0.13,
    constellation: "猎户座",
    colorIndex: -0.03
  },
  {
    id: 203066,
    name: "觜宿一 Meissa",
    ra: 85.190000,
    dec: 9.930000,
    mag: 3.33,
    constellation: "猎户座",
    colorIndex: -0.10
  },
  {
    id: 204067,
    name: "觜宿二 Tabit",
    ra: 83.000000,
    dec: -0.300000,
    mag: 3.33,
    constellation: "猎户座",
    colorIndex: -0.03
  },
  {
    id: 205068,
    name: "伐一 Hatysa",
    ra: 83.820000,
    dec: -5.910000,
    mag: 3.68,
    constellation: "猎户座",
    colorIndex: -0.21
  },
  {
    id: 206069,
    name: "伐二 Mintaka",
    ra: 83.000000,
    dec: -0.300000,
    mag: 2.23,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 207070,
    name: "伐三 Alnilam",
    ra: 84.053397,
    dec: -1.202864,
    mag: 1.69,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 208071,
    name: "玉井一 Saiph",
    ra: 86.940000,
    dec: -9.670000,
    mag: 2.06,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 209072,
    name: "玉井二 Rigel",
    ra: 78.634467,
    dec: -8.201638,
    mag: 0.13,
    constellation: "猎户座",
    colorIndex: -0.03
  },
  {
    id: 210073,
    name: "玉井三 Bellatrix",
    ra: 81.282764,
    dec: 6.349691,
    mag: 1.64,
    constellation: "猎户座",
    colorIndex: -0.22
  },
  {
    id: 211074,
    name: "玉井四 Betelgeuse",
    ra: 88.792931,
    dec: 7.407064,
    mag: 0.42,
    constellation: "猎户座",
    colorIndex: 1.85
  },
  {
    id: 212075,
    name: "屏一 Alnilam",
    ra: 84.053397,
    dec: -1.202864,
    mag: 1.69,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 213076,
    name: "屏二 Alnitak",
    ra: 85.189000,
    dec: -1.942570,
    mag: 1.77,
    constellation: "猎户座",
    colorIndex: -0.21
  },
  {
    id: 214077,
    name: "屏三 Mintaka",
    ra: 83.000000,
    dec: -0.300000,
    mag: 2.23,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 215078,
    name: "南河三 Procyon",
    ra: 114.825507,
    dec: 5.224306,
    mag: 0.34,
    constellation: "小犬座",
    colorIndex: 0.42
  },
  {
    id: 216079,
    name: "南河二 Gomeisa",
    ra: 112.210000,
    dec: 1.760000,
    mag: 2.93,
    constellation: "小犬座",
    colorIndex: -0.10
  },
  {
    id: 217080,
    name: "弧矢增二十二 Sirius",
    ra: 101.287155,
    dec: -16.716116,
    mag: -1.46,
    constellation: "大犬座",
    colorIndex: 0.01
  },
  {
    id: 218081,
    name: "弧矢增十七 Mirzam",
    ra: 106.028000,
    dec: -17.960000,
    mag: 1.98,
    constellation: "大犬座",
    colorIndex: -0.23
  },
  {
    id: 219082,
    name: "弧矢增十八 Muliphein",
    ra: 108.550000,
    dec: -23.810000,
    mag: 3.99,
    constellation: "大犬座",
    colorIndex: -0.22
  },
  {
    id: 220083,
    name: "弧矢增十九 Wezen",
    ra: 107.098831,
    dec: -26.394175,
    mag: 1.84,
    constellation: "大犬座",
    colorIndex: -0.24
  },
  {
    id: 221084,
    name: "弧矢增二十 Adhara",
    ra: 104.657586,
    dec: -28.972301,
    mag: 1.50,
    constellation: "大犬座",
    colorIndex: -0.21
  },
  {
    id: 222085,
    name: "弧矢增二十一 Aludra",
    ra: 106.990000,
    dec: -29.310000,
    mag: 2.45,
    constellation: "大犬座",
    colorIndex: -0.22
  },
  {
    id: 223086,
    name: "军市一 Sirius",
    ra: 101.287155,
    dec: -16.716116,
    mag: -1.46,
    constellation: "大犬座",
    colorIndex: 0.01
  },
  {
    id: 224087,
    name: "野鸡 Canopus",
    ra: 95.987957,
    dec: -52.695917,
    mag: -0.74,
    constellation: "船底座",
    colorIndex: 0.15
  },
  {
    id: 225088,
    name: "海石一 Miaplacidus",
    ra: 138.126739,
    dec: -69.715439,
    mag: 1.68,
    constellation: "船底座",
    colorIndex: 0.05
  },
  {
    id: 226089,
    name: "海石二 Avior",
    ra: 137.430878,
    dec: -59.507139,
    mag: 1.86,
    constellation: "船帆座",
    colorIndex: 0.16
  },
  {
    id: 227090,
    name: "海山二 Eta Carinae",
    ra: 160.640000,
    dec: -59.690000,
    mag: 1.25,
    constellation: "船底座",
    colorIndex: 0.57
  },
  {
    id: 228091,
    name: "海山一 Aspidiske",
    ra: 134.758545,
    dec: -63.040741,
    mag: 2.21,
    constellation: "船底座",
    colorIndex: 0.11
  },
  {
    id: 229092,
    name: "南船五 Markeb",
    ra: 135.999435,
    dec: -54.623111,
    mag: 1.94,
    constellation: "船帆座",
    colorIndex: -0.22
  },
  {
    id: 230093,
    name: "天社一 Miaplacidus",
    ra: 138.126739,
    dec: -69.715439,
    mag: 1.68,
    constellation: "船底座",
    colorIndex: 0.05
  },
  {
    id: 231094,
    name: "天社二 Aspidiske",
    ra: 134.758545,
    dec: -63.040741,
    mag: 2.21,
    constellation: "船底座",
    colorIndex: 0.11
  },
  {
    id: 232095,
    name: "天社三 Alsephina",
    ra: 143.750839,
    dec: -54.425245,
    mag: 2.21,
    constellation: "船帆座",
    colorIndex: -0.20
  },
  {
    id: 233096,
    name: "天社四 Markeb",
    ra: 135.999435,
    dec: -54.623111,
    mag: 1.94,
    constellation: "船帆座",
    colorIndex: -0.22
  },
  {
    id: 234097,
    name: "天社五 Naos",
    ra: 122.938385,
    dec: -40.001118,
    mag: 2.21,
    constellation: "船帆座",
    colorIndex: -0.26
  },
  {
    id: 235098,
    name: "老人星 Canopus",
    ra: 95.987957,
    dec: -52.695917,
    mag: -0.74,
    constellation: "船底座",
    colorIndex: 0.15
  },
  {
    id: 236099,
    name: "南门二 Alpha Centauri",
    ra: 219.90085,
    dec: -60.835619,
    mag: -0.27,
    constellation: "半人马座",
    colorIndex: 0.71
  },
  {
    id: 237100,
    name: "马腹一 Hadar",
    ra: 210.960000,
    dec: -60.370000,
    mag: 0.61,
    constellation: "半人马座",
    colorIndex: -0.23
  },
  {
    id: 238101,
    name: "库楼一 Menkent",
    ra: 198.260000,
    dec: -36.330000,
    mag: 2.57,
    constellation: "半人马座",
    colorIndex: 1.10
  },
  {
    id: 239102,
    name: "库楼二 Koo She",
    ra: 207.211196,
    dec: -18.380669,
    mag: 2.57,
    constellation: "半人马座",
    colorIndex: -0.15
  },
  {
    id: 240103,
    name: "库楼三 Koo She",
    ra: 207.211196,
    dec: -18.380669,
    mag: 2.57,
    constellation: "半人马座",
    colorIndex: -0.15
  },
  {
    id: 241104,
    name: "衡一 Arcturus",
    ra: 213.9153,
    dec: 19.182409,
    mag: -0.05,
    constellation: "牧夫座",
    colorIndex: 1.23
  },
  {
    id: 242105,
    name: "大角星 Arcturus",
    ra: 213.9153,
    dec: 19.182409,
    mag: -0.05,
    constellation: "牧夫座",
    colorIndex: 1.23
  },
  {
    id: 243106,
    name: "招摇 Izar",
    ra: 222.740000,
    dec: 27.070000,
    mag: 2.35,
    constellation: "牧夫座",
    colorIndex: 1.00
  },
  {
    id: 244107,
    name: "梗河一 Seginus",
    ra: 228.780000,
    dec: 38.300000,
    mag: 3.04,
    constellation: "牧夫座",
    colorIndex: -0.05
  },
  {
    id: 245108,
    name: "梗河三 Nekkar",
    ra: 233.930000,
    dec: 37.220000,
    mag: 3.24,
    constellation: "牧夫座",
    colorIndex: -0.10
  },
  {
    id: 246109,
    name: "七公一 Muphrid",
    ra: 217.030000,
    dec: 18.380000,
    mag: 2.68,
    constellation: "牧夫座",
    colorIndex: 0.99
  },
  {
    id: 247110,
    name: "七公五 Princeps",
    ra: 221.250000,
    dec: 24.870000,
    mag: 3.02,
    constellation: "牧夫座",
    colorIndex: -0.03
  },
  {
    id: 248111,
    name: "织女星 Vega",
    ra: 279.234795,
    dec: 38.78369,
    mag: 0.03,
    constellation: "天琴座",
    colorIndex: 0.00
  },
  {
    id: 249112,
    name: "渐台二 Sheliak",
    ra: 282.340000,
    dec: 33.360000,
    mag: 3.45,
    constellation: "天琴座",
    colorIndex: -0.13
  },
  {
    id: 250113,
    name: "渐台三 Sulafat",
    ra: 284.740000,
    dec: 32.820000,
    mag: 3.24,
    constellation: "天琴座",
    colorIndex: -0.08
  },
  {
    id: 251114,
    name: "辇道增七 Albireo",
    ra: 292.680000,
    dec: 27.970000,
    mag: 3.08,
    constellation: "天鹅座",
    colorIndex: 1.00
  },
  {
    id: 252115,
    name: "天津一 Gienah Cygni",
    ra: 304.440000,
    dec: 53.350000,
    mag: 2.46,
    constellation: "天鹅座",
    colorIndex: 1.03
  },
  {
    id: 253116,
    name: "天津二 Sadr",
    ra: 305.560000,
    dec: 40.260000,
    mag: 2.23,
    constellation: "天鹅座",
    colorIndex: 1.50
  },
  {
    id: 254117,
    name: "天津四 Deneb",
    ra: 310.357979,
    dec: 45.280339,
    mag: 1.25,
    constellation: "天鹅座",
    colorIndex: 0.09
  },
  {
    id: 255118,
    name: "天津九 Gienah",
    ra: 305.560000,
    dec: 33.970000,
    mag: 2.46,
    constellation: "天鹅座",
    colorIndex: 1.03
  },
  {
    id: 256119,
    name: "天津增十八 Fawaris",
    ra: 307.540000,
    dec: 33.120000,
    mag: 3.80,
    constellation: "天鹅座",
    colorIndex: -0.08
  },
  {
    id: 257120,
    name: "天津增十九 Rotanev",
    ra: 308.770000,
    dec: 30.350000,
    mag: 2.87,
    constellation: "海豚座",
    colorIndex: 0.57
  },
  {
    id: 258121,
    name: "天津增二十 Delphinus Beta",
    ra: 307.050000,
    dec: 28.620000,
    mag: 3.63,
    constellation: "海豚座",
    colorIndex: 0.28
  },
  {
    id: 259122,
    name: "牛郎星 Altair",
    ra: 297.695527,
    dec: 8.868326,
    mag: 0.77,
    constellation: "天鹰座",
    colorIndex: 0.22
  },
  {
    id: 260123,
    name: "河鼓一 Tarazed",
    ra: 296.460000,
    dec: 10.610000,
    mag: 2.72,
    constellation: "天鹰座",
    colorIndex: -0.66
  },
  {
    id: 261124,
    name: "河鼓三 Alshain",
    ra: 298.840000,
    dec: 8.050000,
    mag: 3.71,
    constellation: "天鹰座",
    colorIndex: 0.85
  },
  {
    id: 262125,
    name: "天桴四 Deneb Okab",
    ra: 293.990000,
    dec: 13.860000,
    mag: 3.36,
    constellation: "天鹰座",
    colorIndex: -0.03
  },
  {
    id: 263126,
    name: "右旗三 Theta Aquilae",
    ra: 300.170000,
    dec: -0.890000,
    mag: 3.24,
    constellation: "天鹰座",
    colorIndex: 0.02
  },
  {
    id: 264127,
    name: "左旗一 Lambda Aquilae",
    ra: 295.140000,
    dec: -4.530000,
    mag: 3.44,
    constellation: "天鹰座",
    colorIndex: -0.10
  },
  {
    id: 265128,
    name: "离珠一 Eta Lyrae",
    ra: 288.080000,
    dec: 39.140000,
    mag: 4.40,
    constellation: "天琴座",
    colorIndex: -0.10
  },
  {
    id: 266129,
    name: "渐台四 Delta Lyrae",
    ra: 285.200000,
    dec: 36.880000,
    mag: 4.22,
    constellation: "天琴座",
    colorIndex: 0.12
  },
  {
    id: 267130,
    name: "辇道增三 Zeta Lyrae",
    ra: 286.780000,
    dec: 37.610000,
    mag: 4.33,
    constellation: "天琴座",
    colorIndex: 0.00
  },
  {
    id: 268131,
    name: "五车二 Capella",
    ra: 79.172327,
    dec: 45.997963,
    mag: 0.08,
    constellation: "御夫座",
    colorIndex: 0.80
  },
  {
    id: 269132,
    name: "五车三 Menkalinan",
    ra: 89.540000,
    dec: 44.000000,
    mag: 1.90,
    constellation: "御夫座",
    colorIndex: 0.03
  },
  {
    id: 270133,
    name: "柱一 Hassaleh",
    ra: 75.440000,
    dec: 33.160000,
    mag: 2.69,
    constellation: "御夫座",
    colorIndex: -0.17
  },
  {
    id: 271134,
    name: "柱二 Mahasim",
    ra: 82.990000,
    dec: 33.970000,
    mag: 2.92,
    constellation: "御夫座",
    colorIndex: -0.02
  },
  {
    id: 272135,
    name: "咸池一 Saclateni",
    ra: 76.920000,
    dec: 39.410000,
    mag: 4.53,
    constellation: "御夫座",
    colorIndex: -0.08
  },
  {
    id: 273136,
    name: "天潢五 Hoedus II",
    ra: 78.690000,
    dec: 41.040000,
    mag: 4.74,
    constellation: "御夫座",
    colorIndex: -0.11
  },
  {
    id: 274137,
    name: "天潢三 Hoedus I",
    ra: 77.630000,
    dec: 40.170000,
    mag: 4.99,
    constellation: "御夫座",
    colorIndex: -0.15
  },

  // ==================== 第101-300颗亮星（中等亮度）====================

  // 白羊座 (Aries)
  {
    id: 108345,
    name: "天囷一 Botein",
    ra: 28.035176,
    dec: 19.847538,
    mag: 4.35,
    constellation: "白羊座",
    colorIndex: 1.16
  },
  {
    id: 110130,
    name: "娄宿三 Hamal",
    ra: 31.783203,
    dec: 23.463825,
    mag: 2.00,
    constellation: "白羊座",
    colorIndex: 1.15
  },
  {
    id: 112122,
    name: "胃宿一 Sharatan",
    ra: 33.410169,
    dec: 21.083935,
    mag: 2.64,
    constellation: "白羊座",
    colorIndex: 0.18
  },

  // 金牛座补充
  {
    id: 114056,
    name: "胃宿三 Mesarthim",
    ra: 30.850830,
    dec: 19.285545,
    mag: 4.74,
    constellation: "白羊座",
    colorIndex: 0.03
  },
  {
    id: 17937,
    name: "天阴四 Alcyone",
    ra: 56.871000,
    dec: 24.105590,
    mag: 2.87,
    constellation: "金牛座",
    colorIndex: -0.09
  },
  {
    id: 17702,
    name: "天阴五 Electra",
    ra: 58.934000,
    dec: 24.177200,
    mag: 3.72,
    constellation: "金牛座",
    colorIndex: -0.13
  },
  {
    id: 17573,
    name: "昴宿三 Maia",
    ra: 60.025000,
    dec: 24.360600,
    mag: 3.87,
    constellation: "金牛座",
    colorIndex: -0.09
  },
  {
    id: 17499,
    name: "昴宿四 Merope",
    ra: 61.565000,
    dec: 23.941400,
    mag: 4.14,
    constellation: "金牛座",
    colorIndex: -0.11
  },
  {
    id: 17408,
    name: "昴宿五 Taygeta",
    ra: 62.978000,
    dec: 24.665500,
    mag: 4.30,
    constellation: "金牛座",
    colorIndex: -0.14
  },
  {
    id: 17248,
    name: "昴宿六 Celaeno",
    ra: 64.166000,
    dec: 24.270000,
    mag: 5.46,
    constellation: "金牛座",
    colorIndex: -0.10
  },
  {
    id: 17120,
    name: "昴宿七 Asterope",
    ra: 65.278000,
    dec: 24.841100,
    mag: 5.65,
    constellation: "金牛座",
    colorIndex: -0.14
  },
  {
    id: 16970,
    name: "昴宿增十二 Pleione",
    ra: 66.215000,
    dec: 24.133900,
    mag: 5.09,
    constellation: "金牛座",
    colorIndex: -0.16
  },

  // 双子座补充
  {
    id: 36850,
    name: "井宿一 Alhena",
    ra: 93.650000,
    dec: 16.400000,
    mag: 1.93,
    constellation: "双子座",
    colorIndex: 0.00
  },
  {
    id: 35794,
    name: "井宿二 Mebsuta",
    ra: 95.230000,
    dec: 22.520000,
    mag: 3.18,
    constellation: "双子座",
    colorIndex: -0.89
  },
  {
    id: 34489,
    name: "井宿四 Minkat",
    ra: 97.480000,
    dec: 20.570000,
    mag: 3.25,
    constellation: "双子座",
    colorIndex: -0.20
  },
  {
    id: 33826,
    name: "井宿五 Tejat Posterior",
    ra: 99.180000,
    dec: 23.790000,
    mag: 3.05,
    constellation: "双子座",
    colorIndex: 0.83
  },
  {
    id: 33329,
    name: "井宿六 Alzirr",
    ra: 101.350000,
    dec: 20.850000,
    mag: 3.35,
    constellation: "双子座",
    colorIndex: -0.08
  },

  // 巨蟹座 (Cancer)
  {
    id: 40054,
    name: "柳宿增三 Acubens",
    ra: 127.110000,
    dec: 11.850000,
    mag: 4.25,
    constellation: "巨蟹座",
    colorIndex: -0.15
  },
  {
    id: 40156,
    name: "鬼宿一 Asellus Borealis",
    ra: 130.100000,
    dec: 21.480000,
    mag: 3.94,
    constellation: "巨蟹座",
    colorIndex: 0.87
  },
  {
    id: 40313,
    name: "鬼宿四 Asellus Australis",
    ra: 132.450000,
    dec: 18.150000,
    mag: 3.94,
    constellation: "巨蟹座",
    colorIndex: 1.23
  },
  {
    id: 40653,
    name: "鬼宿星团 Praesepe",
    ra: 130.100000,
    dec: 19.700000,
    mag: 3.70,
    constellation: "巨蟹座",
    colorIndex: 0.57
  },

  // 狮子座补充
  {
    id: 45338,
    name: "轩辕十二 Algieba",
    ra: 153.270000,
    dec: 19.840000,
    mag: 2.08,
    constellation: "狮子座",
    colorIndex: 1.14
  },
  {
    id: 45566,
    name: "轩辕十一 Zosma",
    ra: 168.430000,
    dec: 20.520000,
    mag: 2.56,
    constellation: "狮子座",
    colorIndex: 0.12
  },
  {
    id: 47910,
    name: "轩辕九 Chertan",
    ra: 171.760000,
    dec: 14.590000,
    mag: 3.34,
    constellation: "狮子座",
    colorIndex: -0.07
  },
  {
    id: 49591,
    name: "轩辕十四 Regulus",
    ra: 152.092963,
    dec: 11.967209,
    mag: 1.36,
    constellation: "狮子座",
    colorIndex: -0.11
  },
  {
    id: 50583,
    name: "五帝座一 Denebola",
    ra: 177.320000,
    dec: 14.570000,
    mag: 2.14,
    constellation: "狮子座",
    colorIndex: 0.09
  },

  // 室女座补充
  {
    id: 53959,
    name: "角宿一 Spica",
    ra: 201.298336,
    dec: -11.161339,
    mag: 0.97,
    constellation: "室女座",
    colorIndex: -0.23
  },
  {
    id: 54801,
    name: "角宿二 Zavijava",
    ra: 177.050000,
    dec: 1.800000,
    mag: 3.60,
    constellation: "室女座",
    colorIndex: 0.95
  },
  {
    id: 55173,
    name: "角宿三 Porrima",
    ra: 181.080000,
    dec: -1.420000,
    mag: 2.74,
    constellation: "室女座",
    colorIndex: 0.40
  },
  {
    id: 58334,
    name: "亢宿一 Vindemiatrix",
    ra: 195.720000,
    dec: 10.960000,
    mag: 2.83,
    constellation: "室女座",
    colorIndex: 0.93
  },
  {
    id: 60835,
    name: "氐宿一 Heze",
    ra: 214.210000,
    dec: 0.280000,
    mag: 3.44,
    constellation: "室女座",
    colorIndex: -0.17
  },
  {
    id: 65474,
    name: "氐宿四 Syrma",
    ra: 232.600000,
    dec: -5.950000,
    mag: 3.68,
    constellation: "室女座",
    colorIndex: 0.51
  },

  // 天秤座 (Libra)
  {
    id: 67547,
    name: "氐宿一 Zubenelgenubi",
    ra: 220.160000,
    dec: -16.030000,
    mag: 2.75,
    constellation: "天秤座",
    colorIndex: 0.13
  },
  {
    id: 68882,
    name: "氐宿四 Zubeneschamali",
    ra: 229.250000,
    dec: -16.010000,
    mag: 2.61,
    constellation: "天秤座",
    colorIndex: -0.11
  },
  {
    id: 70833,
    name: "折威七 Zubenelhakrabi",
    ra: 243.380000,
    dec: -19.810000,
    mag: 2.90,
    constellation: "天秤座",
    colorIndex: 1.15
  },

  // 天蝎座补充
  {
    id: 59196,
    name: "心宿二 Antares",
    ra: 247.352056,
    dec: -26.432003,
    mag: 1.06,
    constellation: "天蝎座",
    colorIndex: 1.83
  },
  {
    id: 60304,
    name: "心宿一 Graffias",
    ra: 245.260000,
    dec: -19.810000,
    mag: 2.62,
    constellation: "天蝎座",
    colorIndex: -0.22
  },
  {
    id: 61181,
    name: "心宿三 Dschubba",
    ra: 240.079892,
    dec: -22.620117,
    mag: 2.32,
    constellation: "天蝎座",
    colorIndex: -0.22
  },
  {
    id: 63418,
    name: "房宿三 Sargas",
    ra: 264.330000,
    dec: -43.170000,
    mag: 1.87,
    constellation: "天蝎座",
    colorIndex: -0.28
  },
  {
    id: 65378,
    name: "房宿四 Dschubba",
    ra: 240.079892,
    dec: -22.620117,
    mag: 2.32,
    constellation: "天蝎座",
    colorIndex: -0.22
  },
  {
    id: 67752,
    name: "尾宿八 Shaula",
    ra: 263.404861,
    dec: -37.103416,
    mag: 1.63,
    constellation: "天蝎座",
    colorIndex: -0.22
  },
  {
    id: 69413,
    name: "尾宿九 Lesath",
    ra: 263.550000,
    dec: -37.310000,
    mag: 2.69,
    constellation: "天蝎座",
    colorIndex: -0.21
  },

  // 人马座补充
  {
    id: 68882,
    name: "南斗六 Kaus Australis",
    ra: 276.043335,
    dec: -34.384644,
    mag: 1.85,
    constellation: "人马座",
    colorIndex: -0.03
  },
  {
    id: 69974,
    name: "南斗三 Kaus Media",
    ra: 269.900000,
    dec: -27.990000,
    mag: 2.70,
    constellation: "人马座",
    colorIndex: 1.03
  },
  {
    id: 71075,
    name: "南斗一 Kaus Borealis",
    ra: 276.190000,
    dec: -23.050000,
    mag: 2.81,
    constellation: "人马座",
    colorIndex: -0.06
  },
  {
    id: 76267,
    name: "斗宿一 Nunki",
    ra: 279.120000,
    dec: -26.300000,
    mag: 2.02,
    constellation: "人马座",
    colorIndex: -0.06
  },
  {
    id: 77622,
    name: "箕宿一 Kaus Australis",
    ra: 276.043335,
    dec: -34.384644,
    mag: 1.85,
    constellation: "人马座",
    colorIndex: -0.03
  },
  {
    id: 78884,
    name: "箕宿三 Algedi",
    ra: 304.230000,
    dec: -12.530000,
    mag: 3.71,
    constellation: "摩羯座",
    colorIndex: 0.93
  },
  {
    id: 79349,
    name: "箕宿四 Dabih",
    ra: 305.250000,
    dec: -8.170000,
    mag: 3.07,
    constellation: "摩羯座",
    colorIndex: -0.10
  },

  // 摩羯座 (Capricornus)
  {
    id: 78884,
    name: "牛宿二 Algedi",
    ra: 304.230000,
    dec: -12.530000,
    mag: 3.71,
    constellation: "摩羯座",
    colorIndex: 0.93
  },
  {
    id: 79349,
    name: "牛宿一 Dabih",
    ra: 305.250000,
    dec: -8.170000,
    mag: 3.07,
    constellation: "摩羯座",
    colorIndex: -0.10
  },
  {
    id: 81022,
    name: "女宿一 Deneb Algedi",
    ra: 326.050000,
    dec: -16.080000,
    mag: 2.87,
    constellation: "摩羯座",
    colorIndex: 0.27
  },
  {
    id: 82567,
    name: "虚宿一 Nashira",
    ra: 328.810000,
    dec: -22.420000,
    mag: 3.69,
    constellation: "摩羯座",
    colorIndex: 0.86
  },

  // 宝瓶座 (Aquarius)
  {
    id: 82342,
    name: "危宿一 Sadalmelik",
    ra: 331.430000,
    dec: -0.320000,
    mag: 2.96,
    constellation: "宝瓶座",
    colorIndex: -0.10
  },
  {
    id: 84345,
    name: "危宿三 Sadalsuud",
    ra: 344.410000,
    dec: -7.360000,
    mag: 2.87,
    constellation: "宝瓶座",
    colorIndex: 0.98
  },
  {
    id: 85792,
    name: "坟墓一 Skat",
    ra: 349.140000,
    dec: -15.750000,
    mag: 3.27,
    constellation: "宝瓶座",
    colorIndex: -0.16
  },
  {
    id: 87933,
    name: "垒壁阵四 Albali",
    ra: 322.290000,
    dec: -0.040000,
    mag: 3.77,
    constellation: "宝瓶座",
    colorIndex: 0.05
  },

  // 双鱼座 (Pisces)
  {
    id: 89441,
    name: "外屏七 Alrescha",
    ra: 30.360000,
    dec: 2.760000,
    mag: 3.82,
    constellation: "双鱼座",
    colorIndex: 0.05
  },
  {
    id: 91262,
    name: "右更二 Fumalsamakah",
    ra: 340.860000,
    dec: 7.540000,
    mag: 4.45,
    constellation: "双鱼座",
    colorIndex: 0.08
  },
  {
    id: 92337,
    name: "霹雳五 Torcular",
    ra: 22.880000,
    dec: 8.370000,
    mag: 4.42,
    constellation: "双鱼座",
    colorIndex: 1.08
  },

  // 鲸鱼座补充
  {
    id: 104214,
    name: "天苑一 Menkar",
    ra: 30.300145,
    dec: 4.083972,
    mag: 2.54,
    constellation: "鲸鱼座",
    colorIndex: 1.53
  },
  {
    id: 106677,
    name: "天囷增二 Mira",
    ra: 34.812912,
    dec: -2.975333,
    mag: 3.04,
    constellation: "鲸鱼座",
    colorIndex: 1.62
  },
  {
    id: 108345,
    name: "天囷一 Botein",
    ra: 28.035176,
    dec: 19.847538,
    mag: 4.35,
    constellation: "白羊座",
    colorIndex: 1.16
  },

  // 波江座补充
  {
    id: 92337,
    name: "天苑四 Epsilon Eridani",
    ra: 53.232697,
    dec: -9.460564,
    mag: 3.73,
    constellation: "波江座",
    colorIndex: 0.88
  },
  {
    id: 92449,
    name: "天园六 Zaurak",
    ra: 51.428543,
    dec: -13.462021,
    mag: 3.87,
    constellation: "波江座",
    colorIndex: 1.47
  },
  {
    id: 93825,
    name: "九斿四 Beid",
    ra: 50.871849,
    dec: -37.204186,
    mag: 3.56,
    constellation: "波江座",
    colorIndex: 0.12
  },
  {
    id: 95168,
    name: "天苑三 Azha",
    ra: 46.879525,
    dec: -40.040962,
    mag: 4.87,
    constellation: "波江座",
    colorIndex: 1.24
  },
  {
    id: 96135,
    name: "天苑五 Sceptrum",
    ra: 44.140823,
    dec: -43.314613,
    mag: 5.23,
    constellation: "波江座",
    colorIndex: 1.08
  },
  {
    id: 97649,
    name: "天苑七 Angetenar",
    ra: 42.290588,
    dec: -33.450305,
    mag: 3.93,
    constellation: "波江座",
    colorIndex: 1.00
  },
  {
    id: 98575,
    name: "天苑八 Theemim",
    ra: 39.872263,
    dec: -27.581107,
    mag: 4.01,
    constellation: "波江座",
    colorIndex: -0.08
  },
  {
    id: 99640,
    name: "天苑九 Acamar",
    ra: 36.836588,
    dec: -40.340720,
    mag: 2.90,
    constellation: "波江座",
    colorIndex: -0.13
  },
  {
    id: 100751,
    name: "天苑十 Zibal",
    ra: 34.335846,
    dec: -51.050873,
    mag: 3.14,
    constellation: "波江座",
    colorIndex: -0.09
  },
  {
    id: 102488,
    name: "天苑十一 Rana",
    ra: 31.612308,
    dec: -54.280640,
    mag: 3.94,
    constellation: "波江座",
    colorIndex: 1.07
  },

  // 猎户座补充
  {
    id: 196059,
    name: "参宿一 Mintaka",
    ra: 83.000000,
    dec: -0.300000,
    mag: 2.23,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 198061,
    name: "参宿三 Alnitak",
    ra: 85.189000,
    dec: -1.942570,
    mag: 1.77,
    constellation: "猎户座",
    colorIndex: -0.21
  },
  {
    id: 199062,
    name: "参宿四 Betelgeuse",
    ra: 88.792931,
    dec: 7.407064,
    mag: 0.42,
    constellation: "猎户座",
    colorIndex: 1.85
  },
  {
    id: 200063,
    name: "参宿五 Bellatrix",
    ra: 81.282764,
    dec: 6.349691,
    mag: 1.64,
    constellation: "猎户座",
    colorIndex: -0.22
  },
  {
    id: 202065,
    name: "参宿七 Rigel",
    ra: 78.634467,
    dec: -8.201638,
    mag: 0.13,
    constellation: "猎户座",
    colorIndex: -0.03
  },
  {
    id: 203066,
    name: "觜宿一 Meissa",
    ra: 85.190000,
    dec: 9.930000,
    mag: 3.33,
    constellation: "猎户座",
    colorIndex: -0.10
  },
  {
    id: 204067,
    name: "觜宿二 Tabit",
    ra: 83.000000,
    dec: -0.300000,
    mag: 3.33,
    constellation: "猎户座",
    colorIndex: -0.03
  },
  {
    id: 205068,
    name: "伐一 Hatysa",
    ra: 83.820000,
    dec: -5.910000,
    mag: 3.68,
    constellation: "猎户座",
    colorIndex: -0.21
  },
  {
    id: 206069,
    name: "伐二 Mintaka",
    ra: 83.000000,
    dec: -0.300000,
    mag: 2.23,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 207070,
    name: "伐三 Alnilam",
    ra: 84.053397,
    dec: -1.202864,
    mag: 1.69,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 208071,
    name: "玉井一 Saiph",
    ra: 86.940000,
    dec: -9.670000,
    mag: 2.06,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 209072,
    name: "玉井二 Rigel",
    ra: 78.634467,
    dec: -8.201638,
    mag: 0.13,
    constellation: "猎户座",
    colorIndex: -0.03
  },
  {
    id: 210073,
    name: "玉井三 Bellatrix",
    ra: 81.282764,
    dec: 6.349691,
    mag: 1.64,
    constellation: "猎户座",
    colorIndex: -0.22
  },
  {
    id: 211074,
    name: "玉井四 Betelgeuse",
    ra: 88.792931,
    dec: 7.407064,
    mag: 0.42,
    constellation: "猎户座",
    colorIndex: 1.85
  },
  {
    id: 212075,
    name: "屏一 Alnilam",
    ra: 84.053397,
    dec: -1.202864,
    mag: 1.69,
    constellation: "猎户座",
    colorIndex: -0.18
  },
  {
    id: 213076,
    name: "屏二 Alnitak",
    ra: 85.189000,
    dec: -1.942570,
    mag: 1.77,
    constellation: "猎户座",
    colorIndex: -0.21
  },
  {
    id: 214077,
    name: "屏三 Mintaka",
    ra: 83.000000,
    dec: -0.300000,
    mag: 2.23,
    constellation: "猎户座",
    colorIndex: -0.18
  },

  // 大犬座补充
  {
    id: 217080,
    name: "弧矢增二十二 Sirius",
    ra: 101.287155,
    dec: -16.716116,
    mag: -1.46,
    constellation: "大犬座",
    colorIndex: 0.01
  },
  {
    id: 218081,
    name: "弧矢增十七 Mirzam",
    ra: 106.028000,
    dec: -17.960000,
    mag: 1.98,
    constellation: "大犬座",
    colorIndex: -0.23
  },
  {
    id: 219082,
    name: "弧矢增十八 Muliphein",
    ra: 108.550000,
    dec: -23.810000,
    mag: 3.99,
    constellation: "大犬座",
    colorIndex: -0.22
  },
  {
    id: 220083,
    name: "弧矢增十九 Wezen",
    ra: 107.098831,
    dec: -26.394175,
    mag: 1.84,
    constellation: "大犬座",
    colorIndex: -0.24
  },
  {
    id: 221084,
    name: "弧矢增二十 Adhara",
    ra: 104.657586,
    dec: -28.972301,
    mag: 1.50,
    constellation: "大犬座",
    colorIndex: -0.21
  },
  {
    id: 222085,
    name: "弧矢增二十一 Aludra",
    ra: 106.990000,
    dec: -29.310000,
    mag: 2.45,
    constellation: "大犬座",
    colorIndex: -0.22
  },
  {
    id: 223086,
    name: "军市一 Sirius",
    ra: 101.287155,
    dec: -16.716116,
    mag: -1.46,
    constellation: "大犬座",
    colorIndex: 0.01
  },

  // 小犬座补充
  {
    id: 215078,
    name: "南河三 Procyon",
    ra: 114.825507,
    dec: 5.224306,
    mag: 0.34,
    constellation: "小犬座",
    colorIndex: 0.42
  },
  {
    id: 216079,
    name: "南河二 Gomeisa",
    ra: 112.210000,
    dec: 1.760000,
    mag: 2.93,
    constellation: "小犬座",
    colorIndex: -0.10
  },

  // 船底座补充
  {
    id: 148011,
    name: "海山二 Eta Carinae",
    ra: 160.640000,
    dec: -59.690000,
    mag: 1.25,
    constellation: "船底座",
    colorIndex: 0.57
  },
  {
    id: 149012,
    name: "海山一 Aspidiske",
    ra: 134.758545,
    dec: -63.040741,
    mag: 2.21,
    constellation: "船底座",
    colorIndex: 0.11
  },
  {
    id: 151014,
    name: "天社一 Miaplacidus",
    ra: 138.126739,
    dec: -69.715439,
    mag: 1.68,
    constellation: "船底座",
    colorIndex: 0.05
  },
  {
    id: 152015,
    name: "天社二 Aspidiske",
    ra: 134.758545,
    dec: -63.040741,
    mag: 2.21,
    constellation: "船底座",
    colorIndex: 0.11
  },
  {
    id: 153016,
    name: "天社三 Alsephina",
    ra: 143.750839,
    dec: -54.425245,
    mag: 2.21,
    constellation: "船帆座",
    colorIndex: -0.20
  },
  {
    id: 154017,
    name: "天社四 Markeb",
    ra: 135.999435,
    dec: -54.623111,
    mag: 1.94,
    constellation: "船帆座",
    colorIndex: -0.22
  },
  {
    id: 155018,
    name: "天社五 Naos",
    ra: 122.938385,
    dec: -40.001118,
    mag: 2.21,
    constellation: "船帆座",
    colorIndex: -0.26
  },

  // 船帆座补充
  {
    id: 156019,
    name: "老人星 Canopus",
    ra: 95.987957,
    dec: -52.695917,
    mag: -0.74,
    constellation: "船底座",
    colorIndex: 0.15
  },
  {
    id: 157020,
    name: "南门二 Alpha Centauri",
    ra: 219.90085,
    dec: -60.835619,
    mag: -0.27,
    constellation: "半人马座",
    colorIndex: 0.71
  },
  {
    id: 158021,
    name: "马腹一 Hadar",
    ra: 210.960000,
    dec: -60.370000,
    mag: 0.61,
    constellation: "半人马座",
    colorIndex: -0.23
  },
  {
    id: 159022,
    name: "库楼一 Menkent",
    ra: 198.260000,
    dec: -36.330000,
    mag: 2.57,
    constellation: "半人马座",
    colorIndex: 1.10
  },
  {
    id: 160023,
    name: "库楼二 Koo She",
    ra: 207.211196,
    dec: -18.380669,
    mag: 2.57,
    constellation: "半人马座",
    colorIndex: -0.15
  },
  {
    id: 161024,
    name: "库楼三 Koo She",
    ra: 207.211196,
    dec: -18.380669,
    mag: 2.57,
    constellation: "半人马座",
    colorIndex: -0.15
  },

  // 半人马座补充
  {
    id: 162025,
    name: "衡一 Arcturus",
    ra: 213.9153,
    dec: 19.182409,
    mag: -0.05,
    constellation: "牧夫座",
    colorIndex: 1.23
  },
  {
    id: 163026,
    name: "大角星 Arcturus",
    ra: 213.9153,
    dec: 19.182409,
    mag: -0.05,
    constellation: "牧夫座",
    colorIndex: 1.23
  },
  {
    id: 164027,
    name: "招摇 Izar",
    ra: 222.740000,
    dec: 27.070000,
    mag: 2.35,
    constellation: "牧夫座",
    colorIndex: 1.00
  },
  {
    id: 165028,
    name: "梗河一 Seginus",
    ra: 228.780000,
    dec: 38.300000,
    mag: 3.04,
    constellation: "牧夫座",
    colorIndex: -0.05
  },
  {
    id: 166029,
    name: "梗河三 Nekkar",
    ra: 233.930000,
    dec: 37.220000,
    mag: 3.24,
    constellation: "牧夫座",
    colorIndex: -0.10
  },
  {
    id: 167030,
    name: "七公一 Muphrid",
    ra: 217.030000,
    dec: 18.380000,
    mag: 2.68,
    constellation: "牧夫座",
    colorIndex: 0.99
  },
  {
    id: 168031,
    name: "七公五 Princeps",
    ra: 221.250000,
    dec: 24.870000,
    mag: 3.02,
    constellation: "牧夫座",
    colorIndex: -0.03
  },

  // 牧夫座补充
  {
    id: 169032,
    name: "织女星 Vega",
    ra: 279.234795,
    dec: 38.78369,
    mag: 0.03,
    constellation: "天琴座",
    colorIndex: 0.00
  },
  {
    id: 170033,
    name: "渐台二 Sheliak",
    ra: 282.340000,
    dec: 33.360000,
    mag: 3.45,
    constellation: "天琴座",
    colorIndex: -0.13
  },
  {
    id: 171034,
    name: "渐台三 Sulafat",
    ra: 284.740000,
    dec: 32.820000,
    mag: 3.24,
    constellation: "天琴座",
    colorIndex: -0.08
  },
  {
    id: 172035,
    name: "辇道增七 Albireo",
    ra: 292.680000,
    dec: 27.970000,
    mag: 3.08,
    constellation: "天鹅座",
    colorIndex: 1.00
  },
  {
    id: 173036,
    name: "天津一 Gienah Cygni",
    ra: 304.440000,
    dec: 53.350000,
    mag: 2.46,
    constellation: "天鹅座",
    colorIndex: 1.03
  },
  {
    id: 174037,
    name: "天津二 Sadr",
    ra: 305.560000,
    dec: 40.260000,
    mag: 2.23,
    constellation: "天鹅座",
    colorIndex: 1.50
  },
  {
    id: 175038,
    name: "天津四 Deneb",
    ra: 310.357979,
    dec: 45.280339,
    mag: 1.25,
    constellation: "天鹅座",
    colorIndex: 0.09
  },
  {
    id: 255118,
    name: "天津九 Gienah",
    ra: 305.560000,
    dec: 33.970000,
    mag: 2.46,
    constellation: "天鹅座",
    colorIndex: 1.03
  },
  {
    id: 256119,
    name: "天津增十八 Fawaris",
    ra: 307.540000,
    dec: 33.120000,
    mag: 3.80,
    constellation: "天鹅座",
    colorIndex: -0.08
  },
  {
    id: 257120,
    name: "天津增十九 Rotanev",
    ra: 308.770000,
    dec: 30.350000,
    mag: 2.87,
    constellation: "海豚座",
    colorIndex: 0.57
  },
  {
    id: 258121,
    name: "天津增二十 Delphinus Beta",
    ra: 307.050000,
    dec: 28.620000,
    mag: 3.63,
    constellation: "海豚座",
    colorIndex: 0.28
  },

  // 天鹰座补充
  {
    id: 179042,
    name: "牛郎星 Altair",
    ra: 297.695527,
    dec: 8.868326,
    mag: 0.77,
    constellation: "天鹰座",
    colorIndex: 0.22
  },
  {
    id: 181044,
    name: "河鼓一 Tarazed",
    ra: 296.460000,
    dec: 10.610000,
    mag: 2.72,
    constellation: "天鹰座",
    colorIndex: -0.66
  },
  {
    id: 182045,
    name: "河鼓三 Alshain",
    ra: 298.840000,
    dec: 8.050000,
    mag: 3.71,
    constellation: "天鹰座",
    colorIndex: 0.85
  },
  {
    id: 183046,
    name: "天桴四 Deneb Okab",
    ra: 293.990000,
    dec: 13.860000,
    mag: 3.36,
    constellation: "天鹰座",
    colorIndex: -0.03
  },
  {
    id: 184047,
    name: "右旗三 Theta Aquilae",
    ra: 300.170000,
    dec: -0.890000,
    mag: 3.24,
    constellation: "天鹰座",
    colorIndex: 0.02
  },
  {
    id: 185048,
    name: "左旗一 Lambda Aquilae",
    ra: 295.140000,
    dec: -4.530000,
    mag: 3.44,
    constellation: "天鹰座",
    colorIndex: -0.10
  },

  // 天琴座补充
  {
    id: 186049,
    name: "离珠一 Eta Lyrae",
    ra: 288.080000,
    dec: 39.140000,
    mag: 4.40,
    constellation: "天琴座",
    colorIndex: -0.10
  },
  {
    id: 187050,
    name: "渐台四 Delta Lyrae",
    ra: 285.200000,
    dec: 36.880000,
    mag: 4.22,
    constellation: "天琴座",
    colorIndex: 0.12
  },
  {
    id: 188051,
    name: "辇道增三 Zeta Lyrae",
    ra: 286.780000,
    dec: 37.610000,
    mag: 4.33,
    constellation: "天琴座",
    colorIndex: 0.00
  },

  // 御夫座补充
  {
    id: 189052,
    name: "五车二 Capella",
    ra: 79.172327,
    dec: 45.997963,
    mag: 0.08,
    constellation: "御夫座",
    colorIndex: 0.80
  },
  {
    id: 190053,
    name: "五车三 Menkalinan",
    ra: 89.540000,
    dec: 44.000000,
    mag: 1.90,
    constellation: "御夫座",
    colorIndex: 0.03
  },
  {
    id: 191054,
    name: "柱一 Hassaleh",
    ra: 75.440000,
    dec: 33.160000,
    mag: 2.69,
    constellation: "御夫座",
    colorIndex: -0.17
  },
  {
    id: 192055,
    name: "柱二 Mahasim",
    ra: 82.990000,
    dec: 33.970000,
    mag: 2.92,
    constellation: "御夫座",
    colorIndex: -0.02
  },
  {
    id: 272135,
    name: "咸池一 Saclateni",
    ra: 76.920000,
    dec: 39.410000,
    mag: 4.53,
    constellation: "御夫座",
    colorIndex: -0.08
  },
  {
    id: 273136,
    name: "天潢五 Hoedus II",
    ra: 78.690000,
    dec: 41.040000,
    mag: 4.74,
    constellation: "御夫座",
    colorIndex: -0.11
  }
];

/**
 * 星座连线数据
 * 格式: { 星座中文名: [[starId1, starId2], [starId3, starId4], ...] }
 * 用于绘制星座图案的连接线
 */
const CONSTELLATION_LINES = {
  // 大犬座
  "大犬座": [
    [32349, 142005], // 天狼星 -> 弧矢五
    [142005, 146009]  // 弧矢五 -> 弧矢六
  ],

  // 猎户座
  "猎户座": [
    [196059, 197060],   // 参宿一 -> 参宿二
    [197060, 198061],   // 参宿二 -> 参宿三
    [199062, 200063],   // 参宿四 -> 参宿五
    [200063, 202065],   // 参宿五 -> 参宿七
    [199062, 196059],   // 参宿四 -> 参宿一
    [202065, 198061]    // 参宿七 -> 参宿三
  ],

  // 双子座
  "双子座": [
    [41037, 134214],    // 北河二 -> 北河三
    [134214, 127069],   // 北河三 -> 五车三
    [41037, 54659],     // 北河二 -> 弱宿一
    [54659, 128420]     // 弱宿一 -> 井宿一
  ],

  // 金牛座
  "金牛座": [
    [44327, 115738],    // 毕宿五 -> 昴宿一
    [115738, 117765],   // 昴宿一 -> 昴宿二
    [119021, 123876],   // 昴宿三 -> 昴宿增十二
    [44327, 124899]     // 毕宿五 -> 天关
  ],

  // 御夫座
  "御夫座": [
    [189052, 190053],   // 五车二 -> 五车三
    [190053, 191054],   // 五车三 -> 柱一
    [191054, 192055],   // 柱一 -> 柱二
    [192055, 125928]    // 柱二 -> 五车五
  ],

  // 小犬座
  "小犬座": [
    [37279, 137010]     // 南河三 -> 南河一
  ],

  // 狮子座
  "狮子座": [
    [43297, 43297]      // 轩辕十四 (单点，实际狮子座有更多星)
  ],

  // 室女座
  "室女座": [
    [80816, 80816]      // 角宿一 (主星)
  ],

  // 天蝎座
  "天蝎座": [
    [59196, 65378],     // 心宿二 -> 房宿四
    [65378, 67752],     // 房宿四 -> 尾宿八
    [67752, 68882]      // 尾宿八 -> 南斗六
  ],

  // 人马座
  "人马座": [
    [68882, 68882]      // 南斗六 (主星)
  ],

  // 天琴座
  "天琴座": [
    [169032, 170033],   // 织女星 -> 渐台二
    [170033, 171034],   // 渐台二 -> 渐台三
    [171034, 187050],   // 渐台三 -> 辇道增三
    [187050, 188051],   // 辇道增三 -> 辇道增七
    [188051, 169032]    // 辇道增七 -> 织女星
  ],

  // 天鹅座
  "天鹅座": [
    [174037, 173036],   // 天津一 -> 辇道增七
    [173036, 175038],   // 辇道增七 -> 天津四
    [175038, 253116],   // 天津四 -> 天津二
    [253116, 174037]    // 天津二 -> 天津一
  ],

  // 天鹰座
  "天鹰座": [
    [181044, 179042],   // 河鼓一 -> 牛郎星
    [179042, 182045],   // 牛郎星 -> 河鼓三
    [182045, 183046],   // 河鼓三 -> 天桴四
    [183046, 184047],   // 天桴四 -> 右旗三
    [184047, 185048]    // 右旗三 -> 左旗一
  ],

  // 仙后座
  "仙后座": [
    [76267, 78401],     // 王良四 -> 策
    [78401, 81115],     // 策 -> 阁道三
    [81115, 82396],     // 阁道三 -> 弧矢七 (此处应为其他星)
    [82396, 76267]      // (形成W形状)
  ],

  // 牧夫座
  "牧夫座": [
    [162025, 167030],   // 衡一 -> 七公一
    [167030, 163026],   // 七公一 -> 大角星
    [163026, 164027],   // 大角星 -> 招摇
    [164027, 165028]    // 招摇 -> 梗河一
  ],

  // 半人马座
  "半人马座": [
    [157020, 158021],   // 南门二 -> 马腹一
    [158021, 159022],   // 马腹一 -> 库楼一
    [159022, 160023],   // 库楼一 -> 库楼二
    [160023, 161024]    // 库楼二 -> 库楼三
  ],

  // 南十字座
  "南十字座": [
    [61084, 67301],     // 十字架二 -> 十字架三
    [61084, 61084],     // (垂直线)
    [67301, 67301]      // (横线)
  ]
};

/**
 * 主要亮星列表（视星等 < 2.5 的恒星）
 * 约50颗左右的最亮恒星
 */
const MAJOR_STARS = STAR_DATA.filter(star => star.mag < 2.5);

/**
 * 根据视星等获取恒星颜色
 * @param {number} colorIndex - B-V颜色指数
 * @returns {string} CSS颜色值或RGB值
 */
function getStarColor(colorIndex) {
  if (colorIndex === undefined || colorIndex === null) return '#FFFFFF';

  // 基于B-V颜色指数的颜色映射（简化版黑体辐射色）
  if (colorIndex < -0.3) return '#9BB0FF';   // O型星 - 蓝色
  if (colorIndex < -0.1) return '#AABFFF';   // B型星 - 蓝白色
  if (colorIndex < 0.2) return '#CAD7FF';    // A型星 - 白色
  if (colorIndex < 0.5) return '#F8F7FF';    // F型星 - 黄白色
  if (colorIndex < 0.8) return '#FFF4EA';    // G型星 - 黄色（类太阳）
  if (colorIndex < 1.2) return '#FFD2A1';    // K型星 - 橙色
  return '#FFCC6F';                           // M型星 - 红橙色
}

/**
 * 根据赤经和赤纬计算恒星在球面上的位置
 * 用于3D渲染或投影映射
 * @param {number} ra - 赤经（度）
 * @param {number} dec - 赤纬（度）
 * @returns {{x: number, y: number, z: number}} 3D坐标
 */
function getSphericalPosition(ra, dec) {
  const raRad = (ra * Math.PI) / 180;
  const decRad = (dec * Math.PI) / 180;

  return {
    x: Math.cos(decRad) * Math.sin(raRad),
    y: Math.sin(decRad),
    z: Math.cos(decRad) * Math.cos(raRad)
  };
}

/**
 * 获取指定星座的所有恒星
 * @param {string} constellationName - 星座中文名
 * @returns {Array} 该星座的恒星数组
 */
function getStarsByConstellation(constellationName) {
  return STAR_DATA.filter(
    star => star.constellation === constellationName
  );
}

/**
 * 获取指定视星等范围内的恒星
 * @param {number} minMag - 最暗星等（默认6.5）
 * @param {number} maxMag - 最亮星等（默认-2）
 * @returns {Array} 符合条件的恒星数组
 */
function getStarsByMagnitude(minMag = 6.5, maxMag = -2) {
  return STAR_DATA.filter(
    star => star.mag >= maxMag && star.mag <= minMag
  ).sort((a, b) => a.mag - b.mag);
}

return {
  STAR_DATA,
  CONSTELLATION_LINES,
  MAJOR_STARS,
  getStarColor,
  getSphericalPosition,
  getStarsByConstellation,
  getStarsByMagnitude
};
